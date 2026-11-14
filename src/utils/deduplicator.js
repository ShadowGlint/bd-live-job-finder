/**
 * BD LIVE JOB FINDER — TEMPORARY IN-MEMORY DEDUPLICATOR
 * No persistent storage or database. Instantiated fresh on every /jobs command.
 * Deduplicates by:
 * 1. Normalized (Company Name + Job Title)
 * 2. Normalized Original URL
 */

class JobDeduplicator {
  constructor() {
    this.seenKeys = new Set();
    this.seenUrls = new Set();
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
      // Remove tracking parameters
      ['utm_source', 'utm_medium', 'utm_campaign', 'fbclid'].forEach((param) =>
        parsed.searchParams.delete(param)
      );
      return parsed.toString().replace(/\/+$/, '').toLowerCase();
    } catch {
      return String(rawUrl).trim().toLowerCase();
    }
  }

  /**
   * Returns true if job is unique and adds it to current search memory.
   * Returns false if job was already seen in this /jobs search.
   */
  isUnique(job) {
    const companyNorm = this.normalizeText(job.company);
    const titleNorm = this.normalizeText(job.position);
    const urlNorm = this.normalizeUrl(job.url);

    const compositeKey = `${companyNorm}::${titleNorm}`;

    if (this.seenKeys.has(compositeKey)) {
      return false;
    }
    if (urlNorm && this.seenUrls.has(urlNorm) && titleNorm.length > 5) {
      // Allow same career page URL only if job titles are distinct listings on that page
      const urlTitleKey = `${urlNorm}::${titleNorm}`;
      if (this.seenUrls.has(urlTitleKey)) {
        return false;
      }
      this.seenUrls.add(urlTitleKey);
    }

    this.seenKeys.add(compositeKey);
    return true;
  }

  clear() {
    this.seenKeys.clear();
    this.seenUrls.clear();
  }
}

module.exports = JobDeduplicator;
