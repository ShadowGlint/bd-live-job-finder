/**
 * BD LIVE JOB FINDER v2.0 — EXPRESS HEALTH SERVER & BOT BOOTSTRAP
 * Exposes:
 * - GET /health -> Returns Server Status, Uptime, Telegram Bot Status, Private (312) & Govt (35) Counts,
 *                  JSON Log Stats, Last Job Search, and Current Active Scraping Tasks.
 */

require('dotenv').config();
const express = require('express');
const settings = require('./config/settings');
const companies = require('./config/companies');
const govtCompanies = require('./config/govtCompanies');
const { JsonJobStore } = require('./utils/jsonStore');
const { createTelegramBot } = require('./bot/telegramBot');

const app = express();
const jsonStore = new JsonJobStore();

const runtimeState = {
  serverStatus: 'OK',
  startedAt: new Date().toISOString(),
  telegramBotStatus: 'INITIALIZING',
  lastJobSearch: null,
  currentActiveScrapingTasks: 0
};

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

app.get('/health', (req, res) => {
  const uptimeSeconds = process.uptime();
  const jsonStats = jsonStore.getSummaryStats();

  res.status(200).json({
    serverStatus: runtimeState.serverStatus,
    uptimeSeconds: Math.floor(uptimeSeconds),
    uptimeFormatted: formatUptime(uptimeSeconds),
    telegramBotStatus: runtimeState.telegramBotStatus,
    websites: {
      privateSectorTotal: companies.length,
      privateSectorActive: companies.filter((c) => c.websiteStatus === 'active').length,
      governmentTotal: govtCompanies.length,
      governmentActive: govtCompanies.filter((c) => c.websiteStatus === 'active').length
    },
    jsonLogStats: {
      totalSearchesRun: jsonStats.totalSearchesRun,
      totalUniqueJobsSent: jsonStats.totalUniqueJobsSent,
      totalDuplicateJobsPrevented: jsonStats.totalDuplicateJobsPrevented,
      currentlyTrackedUniqueJobs: jsonStats.currentlyTrackedUniqueJobs
    },
    lastJobSearch: runtimeState.lastJobSearch || 'No search executed yet in current session',
    currentActiveScrapingTasks: runtimeState.currentActiveScrapingTasks
  });
});

app.get('/', (req, res) => {
  res.status(200).json({
    project: 'BD Live Job Finder v2.0',
    privateWebsites: companies.length,
    govtWebsites: govtCompanies.length,
    commands: ['/start', '/jobs', '/govt', '/logs', '/reset_seen'],
    healthEndpoint: '/health'
  });
});

let server = null;
if (require.main === module) {
  server = app.listen(settings.port, '0.0.0.0', () => {
    console.log(`[Server] BD Live Job Finder v2.0 listening on port ${settings.port}`);
    console.log(
      `[Config] Private Websites: ${companies.length} | Govt Websites: ${govtCompanies.length}`
    );
  });

  const bot = createTelegramBot(runtimeState, jsonStore);

  if (bot) {
    bot
      .launch()
      .then(() => {
        runtimeState.telegramBotStatus = 'ONLINE (POLLING)';
        console.log('[TelegramBot] Online! Listening for /start, /jobs, /govt, /logs, /reset_seen');
      })
      .catch((err) => {
        runtimeState.telegramBotStatus = `ERROR: ${err.message}`;
        console.error('[TelegramBot] Failed to launch:', err.message);
      });
  } else {
    runtimeState.telegramBotStatus = 'UNCONFIGURED (Missing BOT_TOKEN)';
  }

  function shutdown(signal) {
    console.log(`[Shutdown] Received ${signal}. Closing bot and HTTP server...`);
    if (bot) {
      try {
        bot.stop(signal);
      } catch {}
    }
    if (server) {
      server.close(() => process.exit(0));
    }
  }

  process.once('SIGINT', () => shutdown('SIGINT'));
  process.once('SIGTERM', () => shutdown('SIGTERM'));
}

module.exports = { app, runtimeState, jsonStore };
