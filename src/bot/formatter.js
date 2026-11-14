/**
 * BD LIVE JOB FINDER — TELEGRAM MESSAGE FORMATTER & PAGINATOR
 * Strictly formats every job and final summary according to Section 5 & Section 14.
 */

const TELEGRAM_MAX_LENGTH = 4000;

/**
 * Formats a single job exactly as specified in Section 5:
 * ⚡ ELECTRICAL JOB FOUND
 * 🏢 Company: Company Name
 * 💼 Position: Electrical Maintenance Engineer
 * 🏭 Department: Engineering / Maintenance
 * 📍 Location: Dhaka, Bangladesh
 * 🎓 Qualification: Diploma in Electrical Engineering
 * 🧰 Experience: 1–2 Years
 * 💰 Salary: 25,000–35,000 BDT
 * 📅 Published: Date
 * ⏳ Deadline: Date
 * 📩 Application: Email / Official Instructions
 * 🔗 Job Circular: Original Official URL
 */
function formatSingleJobMessage(job) {
  return [
    '⚡ ELECTRICAL JOB FOUND',
    `🏢 Company: ${job.company}`,
    `💼 Position: ${job.position}`,
    `🏭 Department: ${job.department}`,
    `📍 Location: ${job.location}`,
    `🎓 Qualification: ${job.qualification}`,
    `🧰 Experience: ${job.experience}`,
    `💰 Salary: ${job.salary}`,
    `📅 Published: ${job.published}`,
    `⏳ Deadline: ${job.deadline}`,
    `📩 Application: ${job.application}`,
    `🔗 Job Circular: ${job.url}`
  ].join('\n');
}

/**
 * Formats the final Summary block exactly as specified in Section 5 & Section 14
 */
function formatSearchSummary(summary) {
  const lines = [
    'JOB SEARCH COMPLETED',
    `- Total Websites Checked: ${summary.totalWebsitesChecked}`,
    `- Successful Websites: ${summary.successfulWebsites}`,
    `- Failed Websites: ${summary.failedWebsites}`,
    `- Relevant Jobs Found: ${summary.relevantJobsFound}`,
    `- Not Eligible Jobs: ${summary.notEligibleJobs}`
  ];

  if (summary.relevantJobsFound === 0) {
    lines.push(
      '',
      'ℹ️ বর্তমানে ১০০+ অফিশিয়াল ওয়েবসাইটে আপনার Diploma in Electrical Engineering / BSc Running যোগ্যতার সাথে সরাসরি মিলে এমন নতুন কোনো সক্রিয় সার্কুলার পাওয়া যায়নি।'
    );
  }

  if (summary.failedDetails && summary.failedDetails.length > 0) {
    const sampleFailed = summary.failedDetails
      .slice(0, 8)
      .map((f) => `  • ${f.company}: ${f.reason}`)
      .join('\n');
    lines.push(
      '',
      `⚠️ Unsupported / Failed Websites (${summary.failedDetails.length}):`,
      sampleFailed
    );
    if (summary.failedDetails.length > 8) {
      lines.push(`  • ...and ${summary.failedDetails.length - 8} more website(s) timed out or restricted.`);
    }
  }

  return lines.join('\n');
}

/**
 * Safely splits any long message into chunks respecting Telegram's 4096-character limit
 */
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
  formatSingleJobMessage,
  formatSearchSummary,
  splitTelegramMessage
};
