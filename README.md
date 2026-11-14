# ⚡ BD Live Job Finder (115+ Official Bangladesh Websites + Telegram Bot)

**BD Live Job Finder** একটি সম্পূর্ণ **Database-Free, Command-Based Live Job Search Telegram Bot**, যা বাংলাদেশের ২০টি শিল্পখাতের **১১৫টি যাচাইকৃত কোম্পানির অফিশিয়াল ক্যারিয়ার ওয়েবসাইট** সরাসরি স্ক্র্যাপ করে **Diploma in Electrical Engineering** এবং **BSc in Electrical / EEE (Running)** প্রার্থীদের জন্য উপযুক্ত চাকরি খুঁজে বের করে।

---

## ✨ মূল বৈশিষ্ট্যসমূহ (Core Features)

1. **Zero Database Architecture**:
   - কোনো MongoDB, MySQL, বা SQLite ব্যবহৃত হয়নি।
   - কোনো Job History বা User Data স্থায়ীভাবে সংরক্ষণ করা হয় না।
   - প্রতিবার `/jobs` কমান্ড দিলে নতুন করে Live Scraping শুরু হয় এবং কাজ শেষে মেমোরি ক্লিয়ার হয়ে যায়।
2. **115+ Verified Official Websites Across 20 Industries**:
   - `src/config/companies.js` ফাইলে ২০টি ক্যাটাগরির ১১৫টি বাস্তব বাংলাদেশি কোম্পানির অফিশিয়াল ওয়েবসাইট ও ক্যারিয়ার পেজ যুক্ত করা হয়েছে।
3. **Electrical & Maintenance Department Filter**:
   - Electrical Engineer, Sub-Assistant Engineer (SAE), Junior Engineer, Electrical Technician, PLC/Automation Technician, Utility/Plant/Shift Engineer, Substation/Generator Operator এবং সব টেকনিক্যাল কিওয়ার্ড (`PLC`, `VFD`, `HMI`, `SCADA`, `ATS`, `LT/HT/MCC/PFI Panel`, `Substation`, `Transformer`, `Generator`, `Boiler`, `HVAC`, `Chiller`, `ETP`, `WTP`, `Solar`) অনুযায়ী স্বয়ংক্রিয় ফিল্টার।
4. **3-Tier Qualification Eligibility Engine**:
   - `✅ Suitable — Diploma Electrical গ্রহণযোগ্য`
   - `⚠️ Review Required — Qualification পরিষ্কার নয়`
   - `❌ Not Eligible — BSc Completed বাধ্যতামূলক` (মূল তালিকায় দেখানো হয় না, শুধুমাত্র Summary-তে সংখ্যা দেখানো হয়)
5. **Direct Apply & Official Circular Filter**:
   - অফিশিয়াল সার্কুলার (PDF/Notice), ইমেইলে CV পাঠানোর নির্দেশনা এবং ওয়াক-ইন ইন্টারভিউ প্রাধান্য পায়।
   - থার্ড-পার্টি জব পোর্টাল (`bdjobs.com`, `linkedin.com`, `indeed.com` ইত্যাদি) সম্পূর্ণ বাদ দেওয়া হয়।
6. **Express `/health` Endpoint & Render Production Config**:
   - `GET /health` এন্ডপয়েন্টে Server Status, Uptime, Telegram Bot Status, Last Job Search এবং Current Active Scraping Tasks দেখা যায়।

---

## 📁 প্রজেক্ট ফাইল স্ট্রাকচার (Project Structure)

```text
bd-live-job-finder/
├── package.json
├── render.yaml
├── Dockerfile
├── .env.example
├── .gitignore
├── README.md
└── src/
    ├── server.js                 # Express Server (/health) + Telegram Bot Bootstrap
    ├── config/
    │   ├── companies.js          # 115 Verified BD Official Company Career URLs (20 Industries)
    │   └── settings.js           # Electrical Keywords, Qualification Rules & Direct Apply Config
    ├── scraper/
    │   └── scraperEngine.js      # Axios + Cheerio + Playwright + RSS Live Scraper with p-limit Queue
    ├── filter/
    │   └── jobFilter.js          # Department Matcher, Eligibility Classifier & Metadata Extractor
    ├── utils/
    │   └── deduplicator.js       # Temporary In-Memory Deduplication per /jobs Command
    └── bot/
        ├── telegramBot.js        # Telegraf Bot (/start and /jobs only + Admin ID Guard)
        └── formatter.js          # Exact Telegram Output Format & 4096-Char Pagination
```

---

## 🚀 লোকাল এবং Render.com ডিপ্লয়মেন্ট গাইড

### ১. Environment Variables (`.env`)
Render Dashboard বা লোকাল `.env` ফাইলে নিচের ভেরিয়েবলগুলো সেট করুন:

```env
BOT_TOKEN=your_telegram_bot_token_from_botfather
ADMIN_TELEGRAM_ID=your_numeric_telegram_user_id
PORT=3000
SCRAPE_CONCURRENCY=5
REQUEST_TIMEOUT_MS=20000
PLAYWRIGHT_TIMEOUT_MS=30000
ENABLE_PLAYWRIGHT=true
EXCLUDE_ONLINE_PORTAL_ONLY=true
```

### ২. লোকাল রান করার নিয়ম
```bash
npm install
npx playwright install chromium
cp .env.example .env
# .env ফাইলে আপনার BOT_TOKEN এবং ADMIN_TELEGRAM_ID বসান
npm start
```

### ৩. Render.com-এ ডিপ্লয়মেন্ট (২৪/৭ চালু রাখার নির্দেশনা)
- প্রজেক্টটি আপনার GitHub Repository-তে Push করুন।
- Render.com-এ **New Blueprint Instance** (`render.yaml` সহ) অথবা **New Web Service / Background Worker** তৈরি করুন।
- **Build Command**: `npm install && npx playwright install --with-deps chromium`
- **Start Command**: `npm start`
- **Health Check Path**: `/health`
- **নোট**: Render-এর Free Web Service ১৫ মিনিট ইনঅ্যাক্টিভ থাকলে Sleep করতে পারে। বট ২৪/৭ নির্বিঘ্নে চালু রাখতে Render-এর **Background Worker** অথবা **Always-on Starter Instance** ব্যবহার করুন।
