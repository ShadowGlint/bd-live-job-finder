/**
 * BD LIVE JOB FINDER — DEPARTMENT, QUALIFICATION & FILTER CONFIGURATION
 * Easily customizable without touching core bot or scraper logic.
 */

require('dotenv').config();

module.exports = {
  // Server & Concurrency Settings
  port: parseInt(process.env.PORT || '3000', 10),
  scrapeConcurrency: parseInt(process.env.SCRAPE_CONCURRENCY || '5', 10),
  requestTimeoutMs: parseInt(process.env.REQUEST_TIMEOUT_MS || '20000', 10),
  playwrightTimeoutMs: parseInt(process.env.PLAYWRIGHT_TIMEOUT_MS || '30000', 10),
  enablePlaywright: process.env.ENABLE_PLAYWRIGHT !== 'false',
  userAgent:
    process.env.USER_AGENT ||
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',

  // Admin Access Control (Comma-separated Telegram numeric IDs in .env)
  adminTelegramIds: (process.env.ADMIN_TELEGRAM_ID || '')
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean),

  // Section 8: Direct Apply Filter Configuration
  directApplyFilter: {
    // When true, jobs that ONLY have "Apply Online / Apply Now" button without Email/Circular instructions are excluded by default
    excludeOnlinePortalOnly: process.env.EXCLUDE_ONLINE_PORTAL_ONLY !== 'false',
    // Block third-party job portals from being presented as official circulars
    blockedThirdPartyDomains: [
      'bdjobs.com',
      'hotjobs.bdjobs.com',
      'mybdjobs.bdjobs.com',
      'careerjet.com.bd',
      'indeed.com',
      'linkedin.com',
      'glassdoor.com',
      'chakri.com',
      'skill.jobs',
      'nextjobz.com.bd',
      'bdjobslive.com',
      'shomvob.com',
      'bikroy.com'
    ]
  },

  // Section 3: Candidate Profile
  candidateProfile: {
    qualifications: [
      'Diploma in Electrical Engineering',
      'BSc in Electrical / EEE — Running'
    ],
    targetDepartment: 'Electrical / Maintenance / Utility / Automation'
  },

  // Section 3: Department & Role Keywords
  roleKeywords: [
    'Electrical',
    'EEE',
    'Electrical Engineer',
    'Electrical Technician',
    'Maintenance Engineer',
    'Electrical Maintenance',
    'Junior Engineer',
    'Assistant Engineer',
    'Sub Assistant Engineer',
    'Sub-Assistant Engineer',
    'SAE',
    'Utility Engineer',
    'Utility Officer',
    'Plant Engineer',
    'Shift Engineer',
    'Facility Engineer',
    'Service Engineer',
    'PLC Technician',
    'Automation Technician',
    'Electrical Supervisor',
    'Maintenance Technician',
    'ElectricalMaintenanceTechnician',
    'Utility Technician',
    'Maintenance Officer',
    'Electrical Officer',
    'Generator Operator',
    'Substation Operator',
    'ইলেকট্রিক্যাল',
    'উপ-সহকারী প্রকৌশলী',
    'সহকারী প্রকৌশলী',
    'জুনিয়র ইঞ্জিনিয়ার',
    'ইলেকট্রিশিয়ান',
    'সাব-অ্যাসিস্ট্যান্ট ইঞ্জিনিয়ার'
  ],

  // Section 3: Technical Keywords
  technicalKeywords: [
    'PLC',
    'VFD',
    'HMI',
    'SCADA',
    'ATS',
    'LT Panel',
    'HT Panel',
    'MCC Panel',
    'PFI Panel',
    'PFI',
    'Substation',
    'Sub-station',
    'Transformer',
    'Generator',
    'Motor',
    'HVAC',
    'Boiler',
    'Chiller',
    'Compressor',
    'Fire Detection',
    'Fire Hydrant',
    'Solar',
    'Power Distribution',
    'ETP',
    'WTP',
    'Switchgear',
    'AutoCAD Electrical',
    'Inverter',
    'AVR'
  ],

  // Section 3: Target Job Categories
  jobCategories: [
    'Electrical Technician',
    'Electrical Maintenance Technician',
    'Electrical Engineer',
    'Junior Engineer',
    'Assistant Engineer',
    'Sub Assistant Engineer',
    'Utility Technician',
    'Utility Engineer',
    'Maintenance Officer',
    'Electrical Officer',
    'Shift Engineer',
    'Plant Engineer',
    'Facility Engineer',
    'Service Engineer',
    'PLC Technician',
    'Automation Technician',
    'Generator Operator',
    'Substation Operator',
    'Electrical Supervisor'
  ],

  // Section 9: Qualification Classification Patterns
  qualificationPatterns: {
    // ✅ Suitable: Diploma in Electrical or BSc Running explicitly accepted
    suitable: [
      /diploma\s*(in)?\s*(engineering|electrical|eee|power|electronics|electro)/i,
      /ডিপ্লোমা\s*(ইন)?\s*(ইঞ্জিনিয়ারিং|ইলেকট্রিক্যাল|পাওয়ার)/i,
      /sub[\s-]*assistant\s*engineer/i,
      /উপ[\s-]*সহকারী\s*প্রকৌশলী/i,
      /junior\s*engineer/i,
      /bsc\s*(in\s*eee|in\s*electrical)?\s*(running|appearing|student|final\s*year|evening)/i,
      /diploma\s*or\s*b\.?sc/i,
      /b\.?sc\s*or\s*diploma/i,
      /trade\s*course|vocational|hsc\s*\(voc\)|diploma/i,
      /electrical\s*(technician|supervisor|operator|foreman)/i
    ],
    // ❌ Not Eligible: Mandatory Completed BSc / MSc without Diploma option, or unrelated discipline only
    notEligible: [
      /must\s*have\s*b\.?sc\s*in\s*(eee|electrical)/i,
      /b\.?sc\s*in\s*(eee|electrical|engineering)\s*(from\s*any\s*reputed|is\s*mandatory|required|only)/i,
      /minimum\s*b\.?sc\s*in\s*engineering/i,
      /m\.?sc\s*in\s*(eee|electrical|engineering)/i,
      /b\.?pharm|m\.?pharm|mbbs|fcps|ca\s*\(cc\)|llb|llm/i
    ]
  }
};
