/**
 * BD LIVE JOB FINDER v2.0 — TELEGRAM BOT CONTROLLER
 * Commands:
 * 1. /start      — Styled Bot Dashboard & Usage Guide
 * 2. /jobs       — Live Search across 312+ Private Sector Bangladesh Company Websites (0 Govt sites)
 * 3. /govt       — Separate Live Search across 35 Official Government Power/Utility/Engineering Websites
 * 4. /logs       — View JSON Search Logs & Download `data/job_logs.json` directly in Telegram
 * 5. /reset_seen — Reset Seen-Job cache in JSON if you want previously shown jobs to appear again
 */

const fs = require('fs');
const { Telegraf } = require('telegraf');
const companies = require('../config/companies');
const govtCompanies = require('../config/govtCompanies');
const settings = require('../config/settings');
const { runLiveJobSearch } = require('../scraper/scraperEngine');
const {
  formatSingleJobCard,
  formatSearchSummaryCard,
  formatJsonLogsReport,
  splitTelegramMessage
} = require('./formatter');

function createTelegramBot(runtimeState, jsonStore) {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.warn('[TelegramBot] BOT_TOKEN is not set. Bot will remain inactive until configured.');
    return null;
  }

  const bot = new Telegraf(token);
  let isSearchRunning = false;

  function isAuthorizedAdmin(ctx) {
    if (!settings.adminTelegramIds || settings.adminTelegramIds.length === 0) {
      return false;
    }
    const userId = String(ctx.from?.id || '');
    return settings.adminTelegramIds.includes(userId);
  }

  /**
   * Shared runner for `/jobs` (Private 300+) and `/govt` (Government)
   */
  async function executeSearchCommand(ctx, targetList, searchType) {
    if (!isAuthorizedAdmin(ctx)) {
      await ctx.replyWithHTML(
        `⛔ <b>Unauthorized Access!</b>
শুধুমাত্র নির্ধারিত Admin এই কমান্ড ব্যবহার করতে পারবেন।
🆔 Your Telegram ID: <code>${ctx.from?.id}</code>`
      );
      return;
    }

    if (isSearchRunning) {
      await ctx.replyWithHTML(
        `⏳ <b>একটি Live Job Search বর্তমানে চলমান রয়েছে!</b>
অনুগ্রহ করে বর্তমান সার্চ শেষ হওয়া পর্যন্ত অপেক্ষা করুন।`
      );
      return;
    }

    isSearchRunning = true;
    const activeCount = targetList.filter((c) => c.websiteStatus === 'active').length;
    const label =
      searchType === 'GOVT'
        ? '🏛️ সরকারি ও স্বায়ত্তশাসিত প্রতিষ্ঠান (Govt Sites)'
        : '🏢 বেসরকারি কোম্পানি (Private Sector 300+ Sites)';

    let statusMsg = null;

    try {
      statusMsg = await ctx.replyWithHTML(
        [
          `🚀 <b>LIVE JOB SEARCH STARTED</b>`,
          `━━━━━━━━━━━━━━━━━━━━━━━`,
          `📂 <b>Category:</b> ${label}`,
          `🌐 <b>Total Websites to Check:</b> <code>${activeCount}</code>`,
          `⚙️ <b>Concurrency Queue:</b> <code>${settings.scrapeConcurrency} parallel workers</code>`,
          `🛡️ <b>JSON Duplicate Guard:</b> <code>Active (2nd time jobs hidden)</code>`,
          ``,
          `⏳ <i>সবগুলো অফিশিয়াল ক্যারিয়ার পেজ স্ক্যান করা হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</i>`
        ].join('\n')
      );

      const summary = await runLiveJobSearch(
        targetList,
        async (progress) => {
          const progressText = [
            `🔄 <b>LIVE SCANNING IN PROGRESS...</b>`,
            `━━━━━━━━━━━━━━━━━━━━━━━`,
            `📂 <b>Mode:</b> ${label}`,
            `📊 <b>Progress:</b> <code>${progress.completedCount} / ${progress.total}</code> Websites Checked`,
            `⚡ <b>New Electrical Jobs Found:</b> <code>${progress.foundSoFar}</code>`,
            `🔁 <b>Already Shown (Skipped):</b> <code>${progress.alreadySeenSkipped}</code>`
          ].join('\n');

          if (statusMsg && statusMsg.message_id) {
            await ctx.telegram
              .editMessageText(ctx.chat.id, statusMsg.message_id, undefined, progressText, {
                parse_mode: 'HTML'
              })
              .catch(() => {});
          }
        },
        runtimeState,
        jsonStore,
        searchType
      );

      runtimeState.lastJobSearch = {
        timestamp: new Date().toISOString(),
        searchType,
        totalWebsitesChecked: summary.totalWebsitesChecked,
        successfulWebsites: summary.successfulWebsites,
        failedWebsites: summary.failedWebsites,
        relevantJobsFound: summary.relevantJobsFound,
        alreadySeenSkipped: summary.alreadySeenSkipped,
        notEligibleJobs: summary.notEligibleJobs
      };

      // Send each unique new job as a styled HTML card with inline buttons
      for (let i = 0; i < summary.jobs.length; i++) {
        const job = summary.jobs[i];
        const card = formatSingleJobCard(job, i + 1, summary.jobs.length);
        const chunks = splitTelegramMessage(card.text);

        for (let cIdx = 0; cIdx < chunks.length; cIdx++) {
          const isLastChunk = cIdx === chunks.length - 1;
          await ctx.replyWithHTML(chunks[cIdx], {
            disable_web_page_preview: true,
            reply_markup: isLastChunk ? card.reply_markup : undefined
          });
          await new Promise((r) => setTimeout(r, 220));
        }
      }

      // Send Final Summary Card
      const summaryHtml = formatSearchSummaryCard(summary);
      const summaryChunks = splitTelegramMessage(summaryHtml);
      for (const chunk of summaryChunks) {
        await ctx.replyWithHTML(chunk, { disable_web_page_preview: true });
      }
    } catch (err) {
      console.error(`[/${searchType.toLowerCase()} Error]:`, err);
      await ctx.replyWithHTML(`❌ <b>Job Search চলাকালীন ত্রুটি ঘটেছে:</b> <code>${err.message}</code>`);
    } finally {
      isSearchRunning = false;
    }
  }

  // ==========================================================================
  // 1. /start — Welcome Dashboard
  // ==========================================================================
  bot.start(async (ctx) => {
    const privateCount = companies.filter((c) => c.websiteStatus === 'active').length;
    const govtCount = govtCompanies.filter((c) => c.websiteStatus === 'active').length;
    const stats = jsonStore.getSummaryStats();

    const welcomeHtml = [
      `┏━━━━━━━━━━━━━━━━━━━━━━━┓`,
      `  ⚡ <b>BD LIVE JOB FINDER v2.0</b>`,
      `┗━━━━━━━━━━━━━━━━━━━━━━━┛`,
      `আসসালামু আলাইকুম! এটি আপনার কাস্টমাইজড <b>Electrical &amp; Maintenance Live Job Search Bot</b>।`,
      ``,
      `🎓 <b>Target Profile:</b>`,
      `• Diploma in Electrical Engineering`,
      `• BSc in Electrical / EEE — Running`,
      `• Roles: SAE, Junior/Assistant Engineer, Electrical/PLC/Automation Technician, Utility/Plant/Shift Engineer, Substation &amp; Generator Operator`,
      ``,
      `🌐 <b>Website Database:</b>`,
      `• 🏢 <b>Private Sector Websites:</b> <code>${privateCount}</code> টি (সরকারি সাইট সম্পূর্ণ বাদ দেওয়া হয়েছে)`,
      `• 🏛️ <b>Government Websites:</b> <code>${govtCount}</code> টি (আলাদা কমান্ডের জন্য)`,
      `• 🛡️ <b>JSON Seen Jobs Memory:</b> <code>${stats.currentlyTrackedUniqueJobs}</code> টি চাকরি ট্র্যাক করা আছে (একবার দেখানো চাকরি ২য় বার দেখাবে না)`,
      ``,
      `📌 <b>Available Commands:</b>`,
      `🔹 /jobs — <b>${privateCount}+ বেসরকারি কোম্পানির</b> অফিশিয়াল ওয়েবসাইট থেকে নতুন চাকরি খুঁজুন`,
      `🔹 /govt — <b>${govtCount}টি সরকারি ও স্বায়ত্তশাসিত</b> পাওয়ার/ইঞ্জিনিয়ারিং প্রতিষ্ঠানের সার্কুলার খুঁজুন`,
      `🔹 /logs — JSON ফাইলের সকল সার্চ লগ ও ডুপ্লিকেট ব্লকের রিপোর্ট দেখুন এবং JSON ফাইল ডাউনলোড করুন`,
      `🔹 /reset_seen — পূর্বে দেখানো চাকরির JSON মেমোরি ক্লিয়ার করুন (পুনরায় সব চাকরি দেখতে চাইলে)`
    ].join('\n');

    await ctx.replyWithHTML(welcomeHtml);
  });

  // ==========================================================================
  // 2. /jobs — 300+ Private Sector Websites Only
  // ==========================================================================
  bot.command('jobs', async (ctx) => {
    await executeSearchCommand(ctx, companies, 'PRIVATE');
  });

  // ==========================================================================
  // 3. /govt — Separate Government Websites Command
  // ==========================================================================
  bot.command('govt', async (ctx) => {
    await executeSearchCommand(ctx, govtCompanies, 'GOVT');
  });

  // ==========================================================================
  // 4. /logs — View JSON Logs & Send `data/job_logs.json` File
  // ==========================================================================
  bot.command('logs', async (ctx) => {
    if (!isAuthorizedAdmin(ctx)) {
      await ctx.replyWithHTML(`⛔ <b>Unauthorized Access!</b>`);
      return;
    }

    const stats = jsonStore.getSummaryStats();
    const reportHtml = formatJsonLogsReport(stats);
    await ctx.replyWithHTML(reportHtml);

    if (fs.existsSync(stats.logFilePath)) {
      await ctx.replyWithDocument(
        { source: stats.logFilePath, filename: 'job_logs.json' },
        { caption: '📁 সম্পূর্ণ সার্চ লগ এবং Seen Jobs তালিকা (data/job_logs.json)' }
      );
    }
  });

  // ==========================================================================
  // 5. /reset_seen — Clear Seen Jobs from JSON so old jobs can be shown again
  // ==========================================================================
  bot.command('reset_seen', async (ctx) => {
    if (!isAuthorizedAdmin(ctx)) {
      await ctx.replyWithHTML(`⛔ <b>Unauthorized Access!</b>`);
      return;
    }

    const clearedCount = jsonStore.resetSeenJobs();
    await ctx.replyWithHTML(
      `♻️ <b>Seen Jobs Memory Reset Successful!</b>
মোট <code>${clearedCount}</code> টি পূর্বের দেখানো চাকরির রেকর্ড ক্লিয়ার করা হয়েছে। এখন /jobs বা /govt দিলে সকল চলমান সার্কুলার আবার নতুন করে দেখাবে।`
    );
  });

  return bot;
}

module.exports = { createTelegramBot };
