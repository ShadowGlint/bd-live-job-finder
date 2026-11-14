# ⚡ BD Live Job Finder v2.0 (312+ Private Websites + Separate `/govt` Command + JSON Deduplication & Logs)

**BD Live Job Finder v2.0** একটি প্রোডাকশন-রেডি **Live Telegram Job Finder Bot**, যা আপনার নির্দেশনা অনুযায়ী সম্পূর্ণ আপগ্রেড করা হয়েছে:

1. **৩১২+ বেসরকারি কোম্পানি (`src/config/companies.js` — `/jobs`)**:
   - মূল তালিকা থেকে **সব সরকারি ওয়েবসাইট বাদ দিয়ে** শুধুমাত্র বাংলাদেশের ১৯টি শিল্পখাতের **৩১২টি বেসরকারি (Private Sector)** কোম্পানির অফিশিয়াল ক্যারিয়ার পেজ যুক্ত করা হয়েছে।
2. **সরকারি ওয়েবসাইটের জন্য আলাদা কমান্ড (`src/config/govtCompanies.js` — `/govt`)**:
   - BPDB, PGCB, DPDC, DESCO, NESCO, WZPDCL, BREB, EGCB, APSCL, NWPGCL, RPCL, BCPCL, CPGCBL, NPCBL (Rooppur), BIFPCL (Rampal), BCIC, Petrobangla, Titas Gas, GTCL, BPC, BTCL, Teletalk, PWD, BWDB, LGED, BAEC, DMTCL (Metro Rail)-সহ মোট **৩৫টি সরকারি ও স্বায়ত্তশাসিত** প্রতিষ্ঠানের জন্য আলাদা `/govt` কমান্ড তৈরি করা হয়েছে।
3. **আকর্ষণীয় Telegram HTML Job Card + Inline Action Buttons (`src/bot/formatter.js`)**:
   - প্রতিটি জব মেসেজ সুন্দর বর্ডার, স্ট্যাটাস ব্যাজ (`🟢 Suitable` / `🟡 Review Required`), **Smart Match Score (`🎯 Match: 95%`)**, **PDF Circular Badge (`📄 [PDF Circular]`)**, হ্যাশট্যাগ এবং নিচে ক্লিকেবল বাটন (**`🔗 View Official Job Circular`** ও **`🏢 Official Company Website`**) সহ পাঠানো হয়।
4. **JSON File Logging & Permanent Seen-Job Deduplication (`data/job_logs.json`)**:
   - `src/utils/jsonStore.js` মডিউলটি প্রতিটি সার্চের সম্পূর্ণ লগ এবং দেখানো চাকরির ইউনিক সিগনেচার `data/job_logs.json` ফাইলে সেভ করে রাখে।
   - **একবার যে চাকরি টেলিগ্রামে পাঠানো হয়েছে, সেটি ২য় বার আর কখনোই দেখাবে না!**
   - আপনি চাইলে টেলিগ্রামে `/logs` কমান্ড দিয়ে সরাসরি `job_logs.json` ফাইল ডাউনলোড করতে পারবেন এবং `/reset_seen` কমান্ড দিয়ে মেমোরি রিসেট করতে পারবেন।
5. **আরও অ্যাডভান্সড ফিচারসমূহ**:
   - **Live Progress Bar Editing**: স্ক্র্যাপিং চলাকালীন টেলিগ্রামে বারবার নতুন মেসেজ না পাঠিয়ে একটি স্ট্যাটাস মেসেজই লাইভ এডিট হয়ে প্রগ্রেস (`50/312 Websites Checked...`) দেখায়।
   - **Smart Match Scoring & Sorting**: যে চাকরিগুলোতে `Diploma in Electrical` বা `Sub-Assistant Engineer` এবং আপনার টেকনিক্যাল কিওয়ার্ড (`PLC`, `VFD`, `Substation`, `LT/HT Panel`, `Generator`, `HVAC`) বেশি ম্যাচ করে, সেগুলো সবার আগে দেখায়।
   - **Auto-Retry Mechanism**: কোনো ওয়েবসাইটে সাময়িক নেটওয়ার্ক টাইমআউট হলে স্বয়ংক্রিয়ভাবে রিট্রাই করে।

---

## 📌 টেলিগ্রাম বট কমান্ডসমূহ

| Command | কাজ (Description) |
| :--- | :--- |
| `/start` | বটের ড্যাশবোর্ড, ওয়েবসাইট সংখ্যা এবং JSON মেমোরি স্ট্যাটাস দেখায় |
| `/jobs` | **৩১২টি বেসরকারি (Private Sector)** কোম্পানির ওয়েবসাইট লাইভ চেক করে নতুন চাকরি পাঠায় |
| `/govt` | **৩৫টি সরকারি (Government & Autonomous)** প্রতিষ্ঠানের ওয়েবসাইট লাইভ চেক করে নতুন সার্কুলার পাঠায় |
| `/logs` | JSON ফাইলের সকল সার্চ লগ দেখায় এবং `data/job_logs.json` ফাইল টেলিগ্রামে ডাউনলোড করে দেয় |
| `/reset_seen` | পূর্বে দেখানো চাকরির JSON রেকর্ড ক্লিয়ার করে (পুনরায় সব চাকরি দেখতে চাইলে) |

---

## 🚀 লোকাল এবং Render.com ডিপ্লয়মেন্ট গাইড

```bash
npm install
npx playwright install chromium
cp .env.example .env
# .env ফাইলে আপনার BOT_TOKEN এবং ADMIN_TELEGRAM_ID বসান
npm start
```
