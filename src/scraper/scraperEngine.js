/**
 * BD LIVE JOB FINDER v2.0 — ADVANCED LIVE SCRAPER ENGINE WITH JSON DEDUPLICATION & RETRY
 * Features:
 * - Supports Private 300+ search (`/jobs`) and Government search (`/govt`)
 * - Smart Retry with exponential backoff on transient network errors
 * - Checks both In-Memory Deduplicator AND Persistent `data/job_logs.json` (`JsonJobStore`)
 *   so any job already sent once is NEVER shown a second time
 * - Logs complete search statistics & sent jobs into `data/job_logs.json`
 */

const axios = require('axios');
const cheerio = require('cheerio');
const Parser = require('rss-parser');
const pLimit = require('p-limit');
const settings = require('../config/settings');
const {
  isThirdPartyPortal,
  matchElectricalDepartment,
  evaluateQualification,
  evaluateApplicationMethod,
  extractMetadataFields
} = require('../filter/jobFilter');
const JobDeduplicator = require('../utils/deduplicator');

const rssParser = new Parser({
  timeout: settings.requestTimeoutMs,
  headers: { 'User-Agent': settings.userAgent }
});

function resolveUrl(baseUrl, relativeHref) {
  if (!relativeHref) return baseUrl;
  const trimmed = relativeHref.trim();
  if (/^(javascript:|mailto:|tel:|#)/i.test(trimmed)) return baseUrl;
  try {
    return new URL(trimmed, baseUrl).toString();
  } catch {
    return baseUrl;
  }
}

function isAccessRestricted(html = '', statusCode = 200) {
  if (statusCode === 401 || statusCode === 403) return true;
  const lower = html.toLowerCase();
  if (
    lower.includes('cf-browser-verification') ||
    lower.includes('challenge-platform') ||
    (lower.includes('g-recaptcha') && lower.length < 2500)
  ) {
    return true;
  }
  return false;
}

function parseHtmlForJobCandidates(html, company) {
  const $ = cheerio.load(html);
  $('script, style, noscript, nav, footer, header, svg').remove();

  const rawCandidates = [];
  const selectors = [
    'table tbody tr',
    '.job-item, .job-card, .career-item, .vacancy-item, .opening-item, .circular-item, .notice-item',
    'article, .card, .post, .list-group-item, .single-job, .job-listing, .career-box',
    'ul li, ol li',
    'a[href]'
  ];

  const processedContainers = new Set();

  for (const selector of selectors) {
    $(selector).each((_, el) => {
      const node = $(el);
      const rawText = node.text().replace(/\s+/g, ' ').trim();
      if (!rawText || rawText.length < 10 || rawText.length > 1800) return;

      const snippetSig = rawText.slice(0, 120).toLowerCase();
      if (processedContainers.has(snippetSig)) return;

      let title = '';
      let href = '';

      if (el.tagName === 'a') {
        title = rawText;
        href = node.attr('href') || '';
      } else {
        const heading = node
          .find('h1, h2, h3, h4, h5, strong, b, .title, .job-title, td:first-child, td:nth-child(2)')
          .first();
        const primaryAnchor = node
          .find(
            'a[href*=".pdf"], a[href*="job"], a[href*="career"], a[href*="circular"], a[href*="notice"], a[href*="apply"], a[href]'
          )
          .first();

        title =
          heading.text().replace(/\s+/g, ' ').trim() ||
          primaryAnchor.text().replace(/\s+/g, ' ').trim() ||
          rawText.slice(0, 110);
        href = primaryAnchor.attr('href') || '';
      }

      if (!title || title.length < 4 || title.length > 220) return;

      if (
        /^(home|about us|contact us|privacy policy|login|sign in|register|read more|click here|download|view)$/i.test(
          title.trim()
        )
      ) {
        if (el.tagName === 'tr') {
          const cells = node
            .find('td')
            .map((__, td) => $(td).text().replace(/\s+/g, ' ').trim())
            .get()
            .filter((t) => t.length > 6 && !/^(download|view|apply|\d+)$/i.test(t));
          if (cells.length > 0) {
            title = cells[0];
          } else {
            return;
          }
        } else {
          return;
        }
      }

      const fullUrl = resolveUrl(company.careerPageUrl, href);
      if (isThirdPartyPortal(fullUrl)) return;

      const htmlSnippet = node.html() || '';
      const hasApplyButton = /(apply\s*online|apply\s*now)/i.test(rawText);
      const hasPdfLink = /\.pdf($|\?)/i.test(fullUrl) || /\.pdf/i.test(htmlSnippet);
      const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(rawText);
      const hasApplyOnlineButtonOnly = hasApplyButton && !hasPdfLink && !hasEmail;

      processedContainers.add(snippetSig);
      rawCandidates.push({
        title,
        rawText,
        url: fullUrl,
        hasApplyOnlineButtonOnly
      });
    });
  }

  return rawCandidates;
}

/**
 * Fetches HTML with Axios + 1 automatic retry for transient network hiccups
 */
async function scrapeWithAxios(company, retries = 1) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await axios.get(company.careerPageUrl, {
        timeout: settings.requestTimeoutMs,
        maxRedirects: 5,
        headers: {
          'User-Agent': settings.userAgent,
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9,bn;q=0.8'
        },
        validateStatus: (status) => status >= 200 && status < 500
      });

      if (isAccessRestricted(String(response.data || ''), response.status)) {
        throw new Error(`Access restricted / HTTP ${response.status}`);
      }
      if (response.status >= 400) {
        throw new Error(`HTTP ${response.status}`);
      }

      const html =
        typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
      return parseHtmlForJobCandidates(html, company);
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise((r) => setTimeout(r, 800));
    }
  }
  return [];
}

async function scrapeWithPlaywright(company, browserInstance) {
  if (!settings.enablePlaywright || !browserInstance) {
    return scrapeWithAxios(company);
  }

  let context = null;
  try {
    context = await browserInstance.newContext({
      userAgent: settings.userAgent,
      viewport: { width: 1280, height: 800 },
      ignoreHTTPSErrors: false
    });
    const page = await context.newPage();

    await page.route('**/*.{png,jpg,jpeg,gif,webp,svg,mp4,woff,woff2,ttf}', (route) =>
      route.abort()
    );

    const response = await page.goto(company.careerPageUrl, {
      waitUntil: 'domcontentloaded',
      timeout: settings.playwrightTimeoutMs
    });

    await page.waitForTimeout(1200);

    const status = response ? response.status() : 200;
    const html = await page.content();

    if (isAccessRestricted(html, status)) {
      throw new Error(`Access restricted / HTTP ${status}`);
    }

    return parseHtmlForJobCandidates(html, company);
  } finally {
    if (context) {
      await context.close().catch(() => {});
    }
  }
}

async function scrapeWithRss(company) {
  const feed = await rssParser.parseURL(company.careerPageUrl);
  return (feed.items || []).map((item) => ({
    title: item.title || 'Job Circular',
    rawText: `${item.title || ''} ${item.contentSnippet || item.content || ''}`,
    url: item.link || company.careerPageUrl,
    hasApplyOnlineButtonOnly: false
  }));
}

async function scrapeSingleCompany(company, browserInstance, deduplicator, jsonStore, searchType = 'PRIVATE') {
  const result = {
    companyId: company.id,
    companyName: company.name,
    careerPageUrl: company.careerPageUrl,
    success: false,
    error: null,
    relevantJobs: [],
    notEligibleCount: 0,
    alreadySeenCount: 0
  };

  try {
    let rawCandidates = [];

    if (company.scrapingMethod === 'rss') {
      rawCandidates = await scrapeWithRss(company);
    } else if (company.scrapingMethod === 'playwright') {
      try {
        rawCandidates = await scrapeWithPlaywright(company, browserInstance);
      } catch {
        rawCandidates = await scrapeWithAxios(company);
      }
    } else {
      rawCandidates = await scrapeWithAxios(company);
      if (rawCandidates.length === 0 && settings.enablePlaywright && browserInstance) {
        try {
          rawCandidates = await scrapeWithPlaywright(company, browserInstance);
        } catch {
          // Keep Axios result
        }
      }
    }

    result.success = true;

    for (const candidate of rawCandidates) {
      const deptMatch = matchElectricalDepartment(candidate.title, candidate.rawText);
      if (!deptMatch.isRelevant) continue;

      const qualEval = evaluateQualification(candidate.title, candidate.rawText);
      if (qualEval.status === 'NOT_ELIGIBLE') {
        result.notEligibleCount += 1;
        continue;
      }

      const appEval = evaluateApplicationMethod(
        candidate.rawText,
        candidate.url,
        candidate.hasApplyOnlineButtonOnly
      );
      if (!appEval.allowed) continue;

      const meta = extractMetadataFields(candidate.title, candidate.rawText);

      const jobObj = {
        company: company.name,
        industry: company.industry,
        officialWebsite: company.officialWebsite,
        position: candidate.title,
        department: meta.department,
        location: meta.location,
        qualification: qualEval.qualificationText,
        qualificationBadge: qualEval.badge,
        eligibilityStatus: qualEval.status,
        experience: meta.experience,
        salary: meta.salary,
        published: meta.published,
        deadline: meta.deadline,
        application: appEval.applicationInstruction,
        applyEmail: appEval.applyEmail,
        isPdfCircular: appEval.isPdfCircular,
        matchedKeywords: deptMatch.matchedKeywords,
        matchScore: deptMatch.matchScore,
        searchType,
        url: candidate.url || company.careerPageUrl
      };

      // 1. Check In-Memory Deduplicator for current run
      if (!deduplicator.isUnique(jobObj)) {
        continue;
      }

      // 2. Check Persistent JSON Store (`data/job_logs.json`) so a job shown once is NEVER shown a 2nd time!
      if (jsonStore && jsonStore.hasSeenJob(jobObj)) {
        result.alreadySeenCount += 1;
        jsonStore.incrementDuplicatePrevented();
        continue;
      }

      if (jsonStore) {
        jsonStore.markJobAsSeen(jobObj, searchType);
      }

      result.relevantJobs.push(jobObj);
    }
  } catch (err) {
    result.success = false;
    result.error = err.message || 'Scraping failed';
  }

  return result;
}

async function runLiveJobSearch(
  companiesList,
  onProgressCallback = null,
  runtimeState = null,
  jsonStore = null,
  searchType = 'PRIVATE'
) {
  const startTime = Date.now();
  const activeCompanies = companiesList.filter((c) => c.websiteStatus === 'active');
  const limit = pLimit(settings.scrapeConcurrency);
  const deduplicator = new JobDeduplicator();

  let browserInstance = null;
  if (settings.enablePlaywright) {
    try {
      const { chromium } = require('playwright');
      browserInstance = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      });
    } catch (err) {
      console.warn('[Playwright] Chromium launch skipped, using Axios+Cheerio fallback:', err.message);
    }
  }

  let completedCount = 0;
  let successfulWebsites = 0;
  let failedWebsites = 0;
  let notEligibleJobs = 0;
  let alreadySeenSkipped = 0;
  const allRelevantJobs = [];
  const failedDetails = [];

  const progressInterval = activeCompanies.length > 100 ? 50 : 10;

  try {
    const tasks = activeCompanies.map((company) =>
      limit(async () => {
        if (runtimeState) runtimeState.currentActiveScrapingTasks += 1;
        try {
          const res = await scrapeSingleCompany(
            company,
            browserInstance,
            deduplicator,
            jsonStore,
            searchType
          );
          completedCount += 1;

          if (res.success) {
            successfulWebsites += 1;
            notEligibleJobs += res.notEligibleCount;
            alreadySeenSkipped += res.alreadySeenCount;
            if (res.relevantJobs.length > 0) {
              allRelevantJobs.push(...res.relevantJobs);
            }
          } else {
            failedWebsites += 1;
            failedDetails.push({
              company: company.name,
              reason: res.error || 'Unsupported or Timeout'
            });
          }

          if (onProgressCallback && completedCount % progressInterval === 0) {
            await onProgressCallback({
              completedCount,
              total: activeCompanies.length,
              foundSoFar: allRelevantJobs.length,
              alreadySeenSkipped
            }).catch(() => {});
          }

          return res;
        } finally {
          if (runtimeState) runtimeState.currentActiveScrapingTasks -= 1;
        }
      })
    );

    await Promise.all(tasks);
  } finally {
    deduplicator.clear();
    if (browserInstance) {
      await browserInstance.close().catch(() => {});
    }
  }

  // Sort jobs so SUITABLE + highest matchScore appear first
  allRelevantJobs.sort((a, b) => {
    if (a.eligibilityStatus !== b.eligibilityStatus) {
      return a.eligibilityStatus === 'SUITABLE' ? -1 : 1;
    }
    return (b.matchScore || 0) - (a.matchScore || 0);
  });

  const durationSeconds = Math.max(1, Math.round((Date.now() - startTime) / 1000));

  const summary = {
    searchType,
    durationSeconds,
    totalWebsitesChecked: activeCompanies.length,
    successfulWebsites,
    failedWebsites,
    relevantJobsFound: allRelevantJobs.length,
    alreadySeenSkipped,
    notEligibleJobs,
    jobs: allRelevantJobs,
    failedDetails
  };

  if (jsonStore) {
    jsonStore.recordSearchLog(summary, searchType);
  }

  return summary;
}

module.exports = {
  runLiveJobSearch,
  scrapeSingleCompany
};
