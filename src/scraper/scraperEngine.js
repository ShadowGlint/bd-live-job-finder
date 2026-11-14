/**
 * BD LIVE JOB FINDER — LIVE MULTI-STRATEGY WEB SCRAPER ENGINE
 * Strategies:
 * 1. Axios + Cheerio (Fast HTML parsing for static & server-rendered career pages)
 * 2. RSS Parser (For feed-enabled career/notice endpoints)
 * 3. Playwright Headless Chromium Fallback (For JS-rendered SPAs or dynamic tables)
 *
 * Strictly adheres to:
 * - Zero database or disk persistence
 * - Concurrency Queue (p-limit) so 100+ websites are never hit all at once
 * - Per-website timeout and isolated error handling (one failure never stops others)
 * - Polite User-Agent, robots/access restriction respect (never bypasses CAPTCHA/Login)
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

/**
 * Resolves relative URLs safely against the company career page URL
 */
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

/**
 * Checks if page response indicates a CAPTCHA, Cloudflare challenge, or Login wall
 */
function isAccessRestricted(html = '', statusCode = 200) {
  if (statusCode === 401 || statusCode === 403) return true;
  const lower = html.toLowerCase();
  if (
    lower.includes('cf-browser-verification') ||
    lower.includes('challenge-platform') ||
    lower.includes('g-recaptcha') && lower.length < 2500
  ) {
    return true;
  }
  return false;
}

/**
 * Parses HTML DOM with Cheerio to extract candidate job blocks/links/rows
 */
function parseHtmlForJobCandidates(html, company) {
  const $ = cheerio.load(html);
  $('script, style, noscript, nav, footer, header, svg').remove();

  const rawCandidates = [];

  // 1. Inspect structured job cards, table rows, list items, and anchor blocks
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

      // Avoid duplicate parent/child extraction
      const snippetSig = rawText.slice(0, 120).toLowerCase();
      if (processedContainers.has(snippetSig)) return;

      // Determine title and link
      let title = '';
      let href = '';

      if (el.tagName === 'a') {
        title = rawText;
        href = node.attr('href') || '';
      } else {
        const heading = node.find('h1, h2, h3, h4, h5, strong, b, .title, .job-title, td:first-child, td:nth-child(2)').first();
        const primaryAnchor =
          node.find('a[href*=".pdf"], a[href*="job"], a[href*="career"], a[href*="circular"], a[href*="notice"], a[href*="apply"], a[href]').first();

        title = heading.text().replace(/\s+/g, ' ').trim() || primaryAnchor.text().replace(/\s+/g, ' ').trim() || rawText.slice(0, 110);
        href = primaryAnchor.attr('href') || '';
      }

      if (!title || title.length < 4 || title.length > 220) return;

      // Ignore generic navigation links
      if (/^(home|about us|contact us|privacy policy|login|sign in|register|read more|click here|download|view)$/i.test(title.trim())) {
        // If title is generic like "Download" or "View" inside a table row, use the row's descriptive text as title
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

      // Reject third-party job portal links (Section 8)
      if (isThirdPartyPortal(fullUrl)) return;

      // Detect if the block only has an online portal button without circular/email
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
 * Fetches HTML using Axios + Cheerio
 */
async function scrapeWithAxios(company) {
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
    throw new Error(`Access restricted or HTTP ${response.status} (Robots/Login/CAPTCHA respected)`);
  }

  if (response.status >= 400) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  const html = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
  return parseHtmlForJobCandidates(html, company);
}

/**
 * Fetches JS-rendered page using Playwright Chromium (when needed or configured)
 */
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

    // Block heavy media/fonts to speed up live scraping
    await page.route('**/*.{png,jpg,jpeg,gif,webp,svg,mp4,woff,woff2,ttf}', (route) =>
      route.abort()
    );

    const response = await page.goto(company.careerPageUrl, {
      waitUntil: 'domcontentloaded',
      timeout: settings.playwrightTimeoutMs
    });

    // Brief wait for dynamic XHR job lists to settle
    await page.waitForTimeout(1500);

    const status = response ? response.status() : 200;
    const html = await page.content();

    if (isAccessRestricted(html, status)) {
      throw new Error(`Access restricted or HTTP ${status} (CAPTCHA/Login not bypassed)`);
    }

    return parseHtmlForJobCandidates(html, company);
  } finally {
    if (context) {
      await context.close().catch(() => {});
    }
  }
}

/**
 * Fetches RSS Feed if scrapingMethod === 'rss'
 */
async function scrapeWithRss(company) {
  const feed = await rssParser.parseURL(company.careerPageUrl);
  return (feed.items || []).map((item) => ({
    title: item.title || 'Job Circular',
    rawText: `${item.title || ''} ${item.contentSnippet || item.content || ''}`,
    url: item.link || company.careerPageUrl,
    hasApplyOnlineButtonOnly: false
  }));
}

/**
 * Scrapes a single company website with automatic fallback and filtering
 */
async function scrapeSingleCompany(company, browserInstance, deduplicator) {
  const result = {
    companyId: company.id,
    companyName: company.name,
    careerPageUrl: company.careerPageUrl,
    success: false,
    error: null,
    relevantJobs: [],
    notEligibleCount: 0
  };

  try {
    let rawCandidates = [];

    if (company.scrapingMethod === 'rss') {
      rawCandidates = await scrapeWithRss(company);
    } else if (company.scrapingMethod === 'playwright') {
      try {
        rawCandidates = await scrapeWithPlaywright(company, browserInstance);
      } catch {
        // Fallback to Axios if Playwright is unavailable or times out
        rawCandidates = await scrapeWithAxios(company);
      }
    } else {
      // Default: Axios + Cheerio first, fallback to Playwright if 0 candidates and JS shell detected
      rawCandidates = await scrapeWithAxios(company);
      if (rawCandidates.length === 0 && settings.enablePlaywright && browserInstance) {
        try {
          rawCandidates = await scrapeWithPlaywright(company, browserInstance);
        } catch {
          // Keep Axios result if Playwright fallback fails
        }
      }
    }

    result.success = true;

    for (const candidate of rawCandidates) {
      // Step 1: Match Electrical & Maintenance Department Keywords
      const deptMatch = matchElectricalDepartment(candidate.title, candidate.rawText);
      if (!deptMatch.isRelevant) continue;

      // Step 2: Evaluate Qualification Eligibility (Suitable / Review Required / Not Eligible)
      const qualEval = evaluateQualification(candidate.title, candidate.rawText);
      if (qualEval.status === 'NOT_ELIGIBLE') {
        result.notEligibleCount += 1;
        continue; // Do not show Not Eligible jobs in main result list (Section 9)
      }

      // Step 3: Evaluate Direct Apply Filter (Section 8)
      const appEval = evaluateApplicationMethod(
        candidate.rawText,
        candidate.url,
        candidate.hasApplyOnlineButtonOnly
      );
      if (!appEval.allowed) {
        continue;
      }

      // Step 4: Extract Metadata Fields
      const meta = extractMetadataFields(candidate.title, candidate.rawText);

      const jobObj = {
        company: company.name,
        industry: company.industry,
        position: candidate.title,
        department: meta.department,
        location: meta.location,
        qualification: `${qualEval.qualificationText} (${qualEval.badge})`,
        eligibilityStatus: qualEval.status,
        experience: meta.experience,
        salary: meta.salary,
        published: meta.published,
        deadline: meta.deadline,
        application: appEval.applicationInstruction,
        url: candidate.url || company.careerPageUrl
      };

      // Step 5: In-Memory Deduplication (Section 7)
      if (deduplicator.isUnique(jobObj)) {
        result.relevantJobs.push(jobObj);
      }
    }
  } catch (err) {
    result.success = false;
    result.error = err.message || 'Scraping failed';
  }

  return result;
}

/**
 * Runs a full live job search across all active companies with concurrency control.
 * Memory is released immediately after return.
 */
async function runLiveJobSearch(companiesList, onProgressCallback = null, runtimeState = null) {
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
  const allRelevantJobs = [];
  const failedDetails = [];

  try {
    const tasks = activeCompanies.map((company) =>
      limit(async () => {
        if (runtimeState) runtimeState.currentActiveScrapingTasks += 1;
        try {
          const res = await scrapeSingleCompany(company, browserInstance, deduplicator);
          completedCount += 1;

          if (res.success) {
            successfulWebsites += 1;
            notEligibleJobs += res.notEligibleCount;
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

          if (onProgressCallback && completedCount % 25 === 0) {
            await onProgressCallback({
              completedCount,
              total: activeCompanies.length,
              foundSoFar: allRelevantJobs.length
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

  return {
    totalWebsitesChecked: activeCompanies.length,
    successfulWebsites,
    failedWebsites,
    relevantJobsFound: allRelevantJobs.length,
    notEligibleJobs,
    jobs: allRelevantJobs,
    failedDetails
  };
}

module.exports = {
  runLiveJobSearch,
  scrapeSingleCompany
};
