/**
 * BD LIVE JOB FINDER v2.0 — PREMIUM TELEGRAM HTML CARD FORMATTER & INLINE KEYBOARDS
 * Makes every job notification visually appealing, clean, and easy to scan in Telegram.
 */

const TELEGRAM_MAX_LENGTH = 4000;

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Formats a single job as a rich, visually styled Telegram HTML card
 * and generates inline action buttons for 1-tap navigation.
 */
function formatSingleJobCard(job, index = 1, total = 1) {
  const isGovt = job.searchType === 'GOVT';
  const headerBanner = isGovt
    ? '🏛️ <b>GOVERNMENT ELECTRICAL JOB FOUND</b>'
    : '⚡ <b>ELECTRICAL &amp; MAINTENANCE JOB FOUND</b>';

  const statusPill =
    job.eligibilityStatus === 'SUITABLE'
      ? '🟢 <b>Status:</b> ✅ Suitable (Diploma Electrical / BSc Running)'
      : '🟡 <b>Status:</b> ⚠️ Review Required (সার্কুলারে বিস্তারিত দেখুন)';

  const pdfBadge = job.isPdfCircular ? ' 📄 <code>[PDF Circular]</code>' : '';
  const scoreBadge = job.matchScore ? ` 🎯 <code>Match: ${job.matchScore}%</code>` : '';

  const kwTags =
    job.matchedKeywords && job.matchedKeywords.length > 0
      ? job.matchedKeywords.map((k) => `#${k.replace(/[^a-zA-Z0-9\u0980-\u09FF]/g, '')}`).join(' ')
      : '#Electrical #Maintenance';

  const htmlText = [
    `┏━━━━━━━━━━━━━━━━━━━━━━━┓`,
    `  ${headerBanner}`,
    `┗━━━━━━━━━━━━━━━━━━━━━━━┛`,
    `📌 <b>Job #${index} of ${total}</b>${scoreBadge}${pdfBadge}`,
    `${statusPill}`,
    ``,
    `🏢 <b>Company:</b> ${escapeHtml(job.company)}`,
    `🏷️ <b>Sector:</b> <i>${escapeHtml(job.industry || 'Engineering')}</i>`,
    `💼 <b>Position:</b> <b>${escapeHtml(job.position)}</b>`,
    `🏭 <b>Department:</b> ${escapeHtml(job.department)}`,
    `📍 <b>Location:</b> ${escapeHtml(job.location)}`,
    ``,
    `🎓 <b>Qualification:</b> ${escapeHtml(job.qualification)}`,
    `🧰 <b>Experience:</b> ${escapeHtml(job.experience)}`,
    `💰 <b>Salary:</b> ${escapeHtml(job.salary)}`,
    ``,
    `📅 <b>Published:</b> ${escapeHtml(job.published)}`,
    `⏳ <b>Deadline:</b> <b>${escapeHtml(job.deadline)}</b>`,
    `📩 <b>Application:</b> <code>${escapeHtml(job.application)}</code>`,
    `🔗 <b>Job Circular:</b> <a href="${escapeHtml(job.url)}">Click Here to View Official Circular</a>`,
    ``,
    `🏷️ <i>${escapeHtml(kwTags)}</i>`
  ].join('\n');

  // Build Inline Keyboard Buttons for Telegram
  const buttons = [];
  if (job.url && /^https?:\/\//i.test(job.url)) {
    buttons.push([
      {
        text: job.isPdfCircular ? '📄 Download Official PDF Circular' : '🔗 View Official Job Circular',
        url: job.url
      }
    ]);
  }
  if (job.officialWebsite && /^https?:\/\//i.test(job.officialWebsite)) {
    buttons.push([
      {
        text: '🏢 Official Company Website',
        url: job.officialWebsite
      }
    ]);
  }

  return {
    text: htmlText,
    reply_markup: buttons.length > 0 ? { inline_keyboard: buttons } : undefined
  };
}

/**
 * Formats the final Summary Card in rich HTML
 */
function formatSearchSummaryCard(summary) {
  const isGovt = summary.searchType === 'GOVT';
  const title = isGovt
    ? '🏛️ <b>GOVT JOB SEARCH COMPLETED</b>'
    : '✅ <b>PRIVATE SECTOR JOB SEARCH COMPLETED (300+ SITES)</b>';

  const lines = [
    `┏━━━━━━━━━━━━━━━━━━━━━━━┓`,
    `  ${title}`,
    `┗━━━━━━━━━━━━━━━━━━━━━━━┛`,
    `⏱️ <b>Duration:</b> ${summary.durationSeconds || 1}s`,
    `🌐 <b>Total Websites Checked:</b> <code>${summary.totalWebsitesChecked}</code>`,
    `🟢 <b>Successful Websites:</b> <code>${summary.successfulWebsites}</code>`,
    `🔴 <b>Failed / Restricted Sites:</b> <code>${summary.failedWebsites}</code>`,
    `⚡ <b>New Relevant Jobs Sent:</b> <code>${summary.relevantJobsFound}</code>`,
    `🔁 <b>Already Shown (Skipped via JSON Log):</b> <code>${summary.alreadySeenSkipped || 0}</code>`,
    `🚫 <b>Not Eligible (BSc Mandatory Skipped):</b> <code>${summary.notEligibleJobs}</code>`
  ];

  if (summary.relevantJobsFound === 0) {
    if ((summary.alreadySeenSkipped || 0) > 0) {
      lines.push(
        ``,
        `ℹ️ <b>নোট:</b> এই সার্চে পাওয়া <b>${summary.alreadySeenSkipped}টি</b> চাকরি আপনাকে পূর্বেই দেখানো হয়েছে (JSON ফাইলে সংরক্ষিত আছে), তাই দ্বিতীয়বার পাঠানো হয়নি। পুরাতন চাকরি আবার দেখতে চাইলে /reset_seen কমান্ড দিন।`
      );
    } else {
      lines.push(
        ``,
        `ℹ️ <b>নোট:</b> বর্তমানে চেক করা ওয়েবসাইটগুলোতে আপনার <b>Diploma in Electrical Engineering / BSc Running</b> যোগ্যতার সাথে সরাসরি মিলে এমন নতুন কোনো সক্রিয় সার্কুলার পাওয়া যায়নি।`
      );
    }
  }

  if (summary.failedDetails && summary.failedDetails.length > 0) {
    const sampleFailed = summary.failedDetails
      .slice(0, 6)
      .map((f) => `  • <i>${escapeHtml(f.company)}</i>: <code>${escapeHtml(f.reason)}</code>`)
      .join('\n');
    lines.push(
      ``,
      `⚠️ <b>Unsupported / Timeout Websites (${summary.failedDetails.length}):</b>`,
      sampleFailed
    );
    if (summary.failedDetails.length > 6) {
      lines.push(`  • <i>...and ${summary.failedDetails.length - 6} more site(s) timed out or restricted.</i>`);
    }
  }

  lines.push(
    ``,
    `📁 <i>All search logs &amp; seen job hashes saved to <code>data/job_logs.json</code></i>`
  );

  return lines.join('\n');
}

/**
 * Formats JSON Log & Seen History Status for `/logs`
 */
function formatJsonLogsReport(stats) {
  const lines = [
    `📊 <b>JSON LOGS &amp; DEDUPLICATION STATUS</b>`,
    `━━━━━━━━━━━━━━━━━━━━━━━`,
    `📁 <b>JSON File:</b> <code>data/job_logs.json</code>`,
    `🔍 <b>Total Searches Run:</b> <code>${stats.totalSearchesRun}</code> (Private: ${stats.totalPrivateSearches} | Govt: ${stats.totalGovtSearches})`,
    `⚡ <b>Total Unique Jobs Sent:</b> <code>${stats.totalUniqueJobsSent}</code>`,
    `🛡️ <b>Duplicate Jobs Blocked (2nd Time Prevented):</b> <code>${stats.totalDuplicateJobsPrevented}</code>`,
    `🗂️ <b>Currently Remembered Jobs in JSON:</b> <code>${stats.currentlyTrackedUniqueJobs}</code>`
  ];

  if (stats.recentLogs && stats.recentLogs.length > 0) {
    lines.push(``, `🕒 <b>Recent Search History:</b>`);
    for (const log of stats.recentLogs) {
      lines.push(
        `• <b>[${escapeHtml(log.searchType)}]</b> ${escapeHtml(log.timestamp.slice(0, 19).replace('T', ' '))} — Checked: <code>${log.totalWebsitesChecked}</code> | Sent: <code>${log.newJobsSentCount}</code> | Skipped Seen: <code>${log.alreadySeenSkippedCount}</code>`
      );
    }
  } else {
    lines.push(``, `<i>No search logs recorded yet. Run /jobs or /govt first!</i>`);
  }

  return lines.join('\n');
}

function splitTelegramMessage(text, maxLength = TELEGRAM_MAX_LENGTH) {
  if (text.length <= maxLength) return [text];
  const chunks = [];
  let current = '';

  for (const line of text.split('\n')) {
    if ((current + '\n' + line).length > maxLength) {
      if (current) chunks.push(current);
      current = line.slice(0, maxLength);
    } else {
      current = current ? `${current}\n${line}` : line;
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

module.exports = {
  formatSingleJobCard,
  formatSearchSummaryCard,
  formatJsonLogsReport,
  splitTelegramMessage,
  escapeHtml
};
