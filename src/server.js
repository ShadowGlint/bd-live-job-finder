/**
 * BD LIVE JOB FINDER — EXPRESS HEALTH SERVER & BOT BOOTSTRAP
 * Exposes:
 * - GET /health -> Returns Server Status, Uptime, Telegram Bot Status, Last Job Search, Current Active Scraping Tasks
 * No database connections or job history persistence.
 */

require('dotenv').config();
const express = require('express');
const settings = require('./config/settings');
const companies = require('./config/companies');
const { createTelegramBot } = require('./bot/telegramBot');

const app = express();

// Ephemeral runtime state for /health monitoring (no job history stored)
const runtimeState = {
  serverStatus: 'OK',
  startedAt: new Date().toISOString(),
  telegramBotStatus: 'INITIALIZING',
  lastJobSearch: null,
  currentActiveScrapingTasks: 0
};

/**
 * Format uptime in human-readable d/h/m/s
 */
function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${d}d ${h}h ${m}m ${s}s`;
}

// Section 10: GET /health Endpoint
app.get('/health', (req, res) => {
  const uptimeSeconds = process.uptime();
  res.status(200).json({
    serverStatus: runtimeState.serverStatus,
    uptimeSeconds: Math.floor(uptimeSeconds),
    uptimeFormatted: formatUptime(uptimeSeconds),
    telegramBotStatus: runtimeState.telegramBotStatus,
    registeredCompaniesCount: companies.length,
    activeCompaniesCount: companies.filter((c) => c.websiteStatus === 'active').length,
    lastJobSearch: runtimeState.lastJobSearch || 'No search executed yet in current session',
    currentActiveScrapingTasks: runtimeState.currentActiveScrapingTasks
  });
});

// Root status route
app.get('/', (req, res) => {
  res.status(200).json({
    project: 'BD Live Job Finder',
    mode: 'Command-Based Live Telegram Job Search Bot (Zero Database)',
    healthEndpoint: '/health'
  });
});

// Start Express Server & Telegram Bot
const server = app.listen(settings.port, '0.0.0.0', () => {
  console.log(`[Server] BD Live Job Finder listening on port ${settings.port}`);
  console.log(`[Config] Registered Official Company Websites: ${companies.length}`);
});

const bot = createTelegramBot(runtimeState);

if (bot) {
  bot
    .launch()
    .then(() => {
      runtimeState.telegramBotStatus = 'ONLINE (POLLING)';
      console.log('[TelegramBot] Successfully launched and polling for /start and /jobs');
    })
    .catch((err) => {
      runtimeState.telegramBotStatus = `ERROR: ${err.message}`;
      console.error('[TelegramBot] Failed to launch:', err.message);
    });
} else {
  runtimeState.telegramBotStatus = 'UNCONFIGURED (Missing BOT_TOKEN)';
}

// Graceful Shutdown for Render deployments
function shutdown(signal) {
  console.log(`[Shutdown] Received ${signal}. Closing bot and HTTP server...`);
  if (bot) {
    try {
      bot.stop(signal);
    } catch {}
  }
  server.close(() => {
    process.exit(0);
  });
}

process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));

module.exports = { app, runtimeState };
