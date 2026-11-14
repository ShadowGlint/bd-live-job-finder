/**
 * BD LIVE JOB FINDER — TELEGRAM BOT CONTROLLER
 * Commands (Strictly ONLY 2 commands as required by Section 4 & Section 14):
 * 1. /start — Bot introduction and usage guide
 * 2. /jobs  — Live checks 100+ Official Bangladesh Company Career Websites
 *
 * Security:
 * - Only authorized ADMIN_TELEGRAM_ID can execute /jobs
 * - Zero database or persistent job history
 */

const { Telegraf } = require('telegraf');
const companies = require('../config/companies');
const settings = require('../config/settings');
const { runLiveJobSearch } = require('../scraper/scraperEngine');
const {
  formatSingleJobMessage,
  formatSearchSummary,
  splitTelegramMessage
} = require('./formatter');

function createTelegramBot(runtimeState) {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.warn('[TelegramBot] BOT_TOKEN is not set. Bot will remain inactive until configured.');
    return null;
  }

  const bot = new Telegraf(token);
  let isSearchRunning = false;

  /**
   * Checks whether the Telegram user is authorized to run /jobs
   */
  function isAuthorizedAdmin(ctx) {
    if (!settings.adminTelegramIds || settings.adminTelegramIds.length === 0) {
      return false;
    }
    const userId = String(ctx.from?.id || '');
    return settings.adminTelegramIds.includes(userId);
  }

  // ==========================================================================
  // COMMAND 1: /start
  // ==========================================================================
  bot.start(async (ctx) => {
    const activeCount = companies.filter((c) => c.websiteStatus === 'active').length;
    const welcomeText = [
      '⚡ Welcome to BD Live Job Finder',
      '',
      'এটি একটি Live Command-Based Electrical Job Search Bot (No Database / No History Storage)।',
      '',
      '🎓 Target Profile:',
      '• Diploma in Electrical Engineering',
      '• BSc in Electrical / EEE — Running',
      '• Department: Electrical, Maintenance, Utility, PLC/Automation, Substation & Power',
      '',
      `🏢 Registered Official Career Portals: ${activeCount} Companies across 20 Industries in Bangladesh`,
      '',
      '📌 Available Commands:',
      '/start — বটের পরিচিতি এবং ব্যবহার বিধি',
      '/jobs — ১০০+ কোম্পানির অফিশিয়াল ক্যারিয়ার ওয়েবসাইট Live Check করে প্রাসঙ্গিক চাকরি খুঁজুন'
    ].join('\n');

    await ctx.reply(welcomeText);
  });

  // ==========================================================================
  // COMMAND 2: /jobs
  // ==========================================================================
  bot.command('jobs', async (ctx) => {
    if (!isAuthorizedAdmin(ctx)) {
      await ctx.reply(
        `⛔ Unauthorized Access. শুধুমাত্র নির্ধারিত Admin এই কমান্ড ব্যবহার করতে পারবেন। (Your Telegram ID: ${ctx.from?.id})`
      );
      return;
    }

    if (isSearchRunning) {
      await ctx.reply(
        '⏳ একটি Live Job Search বর্তমানে চলমান রয়েছে। অনুগ্রহ করে বর্তমান সার্চ শেষ হওয়া পর্যন্ত অপেক্ষা করুন।'
      );
      return;
    }

    isSearchRunning = true;
    const activeCount = companies.filter((c) => c.websiteStatus === 'active').length;

    try {
      await ctx.reply(
        `🔍 Live Job Search শুরু হয়েছে...
🏢 মোট ${activeCount}টি অফিশিয়াল কোম্পানি ওয়েবসাইট চেক করা হচ্ছে (Concurrency: ${settings.scrapeConcurrency})।
অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন...`
      );

      const summary = await runLiveJobSearch(
        companies,
        async (progress) => {
          await ctx.reply(
            `⏳ Progress: ${progress.completedCount}/${progress.total} Websites Checked | Relevant Electrical Jobs Found So Far: ${progress.foundSoFar}`
          );
        },
        runtimeState
      );

      // Update in-memory health metadata (stores only timestamp & counts, never job records)
      runtimeState.lastJobSearch = {
        timestamp: new Date().toISOString(),
        totalWebsitesChecked: summary.totalWebsitesChecked,
        successfulWebsites: summary.successfulWebsites,
        failedWebsites: summary.failedWebsites,
        relevantJobsFound: summary.relevantJobsFound,
        notEligibleJobs: summary.notEligibleJobs
      };

      // Send each relevant job as an individual message (respecting Telegram rate & length limits)
      for (const job of summary.jobs) {
        const formattedJob = formatSingleJobMessage(job);
        const chunks = splitTelegramMessage(formattedJob);
        for (const chunk of chunks) {
          await ctx.reply(chunk, { disable_web_page_preview: true });
          // Small 200ms delay between messages to respect Telegram flood limits
          await new Promise((r) => setTimeout(r, 200));
        }
      }

      // Send final summary report
      const summaryText = formatSearchSummary(summary);
      const summaryChunks = splitTelegramMessage(summaryText);
      for (const chunk of summaryChunks) {
        await ctx.reply(chunk, { disable_web_page_preview: true });
      }
    } catch (err) {
      console.error('[/jobs Error]:', err);
      await ctx.reply(`❌ Job Search চলাকালীন ত্রুটি ঘটেছে: ${err.message}`);
    } finally {
      isSearchRunning = false;
    }
  });

  return bot;
}

module.exports = { createTelegramBot };
