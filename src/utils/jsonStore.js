/**
 * BD LIVE JOB FINDER — PERSISTENT JSON FILE LOGGER & SEEN-JOB TRACKER
 * Lightweight JSON file persistence (No SQL/NoSQL external DB required):
 * - File: `data/job_logs.json`
 * - Stores:
 *   1. `seenJobs`: Map of unique job signatures (company + position + url) -> metadata & timestamp
 *      Ensures a job shown once in Telegram is NEVER sent a second time across searches!
 *   2. `searchLogs`: Full chronological log of every `/jobs` and `/govt` execution,
 *      including timestamp, mode, checked count, newly sent jobs, skipped seen jobs, and errors.
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data');
const LOG_FILE_PATH = path.join(DATA_DIR, 'job_logs.json');

class JsonJobStore {
  constructor(customFilePath = null) {
    this.filePath = customFilePath || LOG_FILE_PATH;
    this.ensureFileExists();
    this.data = this.load();
  }

  ensureFileExists() {
    const dir = path.dirname(this.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (!fs.existsSync(this.filePath)) {
      const initialPayload = {
        meta: {
          project: 'BD Live Job Finder v2.0',
          createdAt: new Date().toISOString(),
          lastUpdatedAt: new Date().toISOString()
        },
        stats: {
          totalSearchesRun: 0,
          totalPrivateSearches: 0,
          totalGovtSearches: 0,
          totalUniqueJobsSent: 0,
          totalDuplicateJobsPrevented: 0
        },
        seenJobs: {},
        searchLogs: []
      };
      fs.writeFileSync(this.filePath, JSON.stringify(initialPayload, null, 2), 'utf-8');
    }
  }

  load() {
    try {
      const raw = fs.readFileSync(this.filePath, 'utf-8');
      const parsed = JSON.parse(raw);
      parsed.seenJobs = parsed.seenJobs || {};
      parsed.searchLogs = parsed.searchLogs || [];
      parsed.stats = parsed.stats || {
        totalSearchesRun: 0,
        totalPrivateSearches: 0,
        totalGovtSearches: 0,
        totalUniqueJobsSent: 0,
        totalDuplicateJobsPrevented: 0
      };
      return parsed;
    } catch (err) {
      console.error('[JsonJobStore] Error loading JSON file, resetting structure:', err.message);
      return {
        meta: { project: 'BD Live Job Finder v2.0', createdAt: new Date().toISOString(), lastUpdatedAt: new Date().toISOString() },
        stats: { totalSearchesRun: 0, totalPrivateSearches: 0, totalGovtSearches: 0, totalUniqueJobsSent: 0, totalDuplicateJobsPrevented: 0 },
        seenJobs: {},
        searchLogs: []
      };
    }
  }

  save() {
    try {
      this.data.meta.lastUpdatedAt = new Date().toISOString();
      // Keep last 200 search logs so JSON file stays fast and lightweight
      if (this.data.searchLogs.length > 200) {
        this.data.searchLogs = this.data.searchLogs.slice(-200);
      }
      fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('[JsonJobStore] Error writing JSON file:', err.message);
    }
  }

  normalizeText(str = '') {
    return String(str)
      .toLowerCase()
      .replace(/[\s\-_.,:/|()\[\]]+/g, ' ')
      .trim();
  }

  normalizeUrl(rawUrl = '') {
    try {
      const parsed = new URL(rawUrl);
      parsed.hash = '';
      ['utm_source', 'utm_medium', 'utm_campaign', 'fbclid'].forEach((p) =>
        parsed.searchParams.delete(p)
      );
      return parsed.toString().replace(/\/+$/, '').toLowerCase();
    } catch {
      return String(rawUrl).trim().toLowerCase();
    }
  }

  /**
   * Generates a deterministic unique key for a job
   */
  generateJobKey(job) {
    const comp = this.normalizeText(job.company);
    const pos = this.normalizeText(job.position);
    const url = this.normalizeUrl(job.url);
    return `${comp}::${pos}::${url}`;
  }

  /**
   * Checks if a job has ALREADY been sent in any previous or current search
   */
  hasSeenJob(job) {
    const exactKey = this.generateJobKey(job);
    const compPosKey = `${this.normalizeText(job.company)}::${this.normalizeText(job.position)}`;

    if (this.data.seenJobs[exactKey] || this.data.seenJobs[compPosKey]) {
      return true;
    }
    return false;
  }

  /**
   * Marks a job as seen and records it in `seenJobs` inside the JSON file
   */
  markJobAsSeen(job, searchType = 'PRIVATE') {
    const exactKey = this.generateJobKey(job);
    const compPosKey = `${this.normalizeText(job.company)}::${this.normalizeText(job.position)}`;
    const now = new Date().toISOString();

    const record = {
      company: job.company,
      industry: job.industry,
      position: job.position,
      qualification: job.qualification,
      deadline: job.deadline,
      url: job.url,
      searchType,
      firstSeenAt: now
    };

    this.data.seenJobs[exactKey] = record;
    this.data.seenJobs[compPosKey] = record;
    this.data.stats.totalUniqueJobsSent += 1;
  }

  incrementDuplicatePrevented() {
    this.data.stats.totalDuplicateJobsPrevented += 1;
  }

  /**
   * Appends a complete search execution log entry to `searchLogs` in JSON
   */
  recordSearchLog(summary, searchType = 'PRIVATE') {
    this.data.stats.totalSearchesRun += 1;
    if (searchType === 'GOVT') {
      this.data.stats.totalGovtSearches += 1;
    } else {
      this.data.stats.totalPrivateSearches += 1;
    }

    const logEntry = {
      logId: `LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      searchType,
      durationSeconds: summary.durationSeconds || 0,
      totalWebsitesChecked: summary.totalWebsitesChecked,
      successfulWebsites: summary.successfulWebsites,
      failedWebsites: summary.failedWebsites,
      newJobsSentCount: summary.relevantJobsFound,
      alreadySeenSkippedCount: summary.alreadySeenSkipped || 0,
      notEligibleSkippedCount: summary.notEligibleJobs || 0,
      jobsSent: (summary.jobs || []).map((j) => ({
        company: j.company,
        position: j.position,
        url: j.url,
        deadline: j.deadline,
        matchScore: j.matchScore || 100
      })),
      failedSample: (summary.failedDetails || []).slice(0, 15)
    };

    this.data.searchLogs.push(logEntry);
    this.save();
    return logEntry;
  }

  /**
   * Clears seen jobs history if admin runs /reset_seen
   */
  resetSeenJobs() {
    const count = Math.floor(Object.keys(this.data.seenJobs).length / 2);
    this.data.seenJobs = {};
    this.save();
    return count;
  }

  getSummaryStats() {
    return {
      ...this.data.stats,
      currentlyTrackedUniqueJobs: Math.floor(Object.keys(this.data.seenJobs).length / 2),
      recentLogs: this.data.searchLogs.slice(-5).reverse(),
      logFilePath: this.filePath
    };
  }
}

module.exports = {
  JsonJobStore,
  LOG_FILE_PATH
};
