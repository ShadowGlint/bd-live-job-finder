/**
 * BD LIVE JOB FINDER v2.0 — ADVANCED ELECTRICAL FILTER, SCORING & ELIGIBILITY ENGINE
 * Features:
 * - Electrical & Maintenance Department Keyword Matching (Bengali + English)
 * - Smart Match Score (0–100%) based on Diploma/SAE priority + Technical Keyword density
 * - 3-Tier Qualification Eligibility (✅ Suitable, ⚠️ Review Required, ❌ Not Eligible)
 * - Direct Apply Filter & Third-Party Portal Blocker
 * - Automatic PDF Circular & Direct Email Detector
 */

const settings = require('../config/settings');

function isThirdPartyPortal(url = '') {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return settings.directApplyFilter.blockedThirdPartyDomains.some(
      (domain) => host === domain || host.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

function matchElectricalDepartment(title = '', description = '') {
  const combined = `${title} ${description}`.toLowerCase();

  const matchedRoles = settings.roleKeywords.filter((kw) =>
    combined.includes(kw.toLowerCase())
  );

  const matchedTech = settings.technicalKeywords.filter((kw) => {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    return regex.test(combined);
  });

  const titleLower = title.toLowerCase();
  const strongTitleIndicators = [
    'electrical',
    'eee',
    'maintenance',
    'engineer',
    'technician',
    'sub assistant',
    'sub-assistant',
    'sae',
    'utility',
    'plant',
    'shift',
    'facility',
    'service',
    'plc',
    'automation',
    'supervisor',
    'generator',
    'substation',
    'boiler',
    'hvac',
    'chiller',
    'power',
    'energy',
    'electro',
    'operator',
    'ইলেকট্রিক্যাল',
    'প্রকৌশলী',
    'ইঞ্জিনিয়ার',
    'ইলেকট্রিশিয়ান',
    'নিয়োগ বিজ্ঞপ্তি',
    'job circular',
    'recruitment notice',
    'career opportunity'
  ];

  const hasTitleRelevance = strongTitleIndicators.some((ind) =>
    titleLower.includes(ind)
  );

  const unrelatedTitleTerms = [
    'software engineer',
    'frontend',
    'backend',
    'full stack',
    'devops',
    'civil engineer',
    'textile engineer',
    'garments technician',
    'medical promotion officer',
    'mpo',
    'sales representative',
    'brand manager',
    'company secretary',
    'chartered accountant',
    'staff nurse',
    'resident medical officer',
    'stitching',
    'cutting manager',
    'merchandising'
  ];

  const isUnrelatedRole = unrelatedTitleTerms.some(
    (term) => titleLower.includes(term) && !titleLower.includes('electrical')
  );

  if (isUnrelatedRole) {
    return { isRelevant: false, matchedKeywords: [], matchScore: 0 };
  }

  const allMatches = [...new Set([...matchedRoles, ...matchedTech])];
  const isRelevant = hasTitleRelevance && allMatches.length > 0;

  // Compute Smart Match Score (65% to 99%)
  let score = 65;
  if (/electrical|eee|ইলেকট্রিক্যাল|sub[\s-]*assistant|উপ[\s-]*সহকারী/i.test(title)) {
    score += 18;
  }
  score += Math.min(16, allMatches.length * 4);

  return {
    isRelevant,
    matchedKeywords: allMatches.slice(0, 8),
    matchScore: Math.min(99, score)
  };
}

function evaluateQualification(title = '', rawText = '') {
  const combined = `${title} ${rawText}`;

  const hasDiplomaMatch = settings.qualificationPatterns.suitable.some((rx) =>
    rx.test(combined)
  );

  const hasMandatoryBscOnly = settings.qualificationPatterns.notEligible.some(
    (rx) => rx.test(combined)
  );

  if (hasDiplomaMatch) {
    const extractedQual =
      extractQualificationSnippet(combined) ||
      'Diploma in Electrical Engineering / BSc (EEE) Running';
    return {
      status: 'SUITABLE',
      badge: '✅ Suitable — Diploma Electrical গ্রহণযোগ্য',
      qualificationText: extractedQual
    };
  }

  if (hasMandatoryBscOnly && !/diploma|ডিপ্লোমা/i.test(combined)) {
    const extractedQual =
      extractQualificationSnippet(combined) ||
      'BSc in Engineering (Completed Mandatory)';
    return {
      status: 'NOT_ELIGIBLE',
      badge: '❌ Not Eligible — BSc Completed বাধ্যতামূলক',
      qualificationText: extractedQual
    };
  }

  if (
    /b\.?sc\s*(in)?\s*(eee|electrical|engineering)/i.test(combined) &&
    !/diploma|ডিপ্লোমা|running|appearing/i.test(combined)
  ) {
    return {
      status: 'NOT_ELIGIBLE',
      badge: '❌ Not Eligible — BSc Completed বাধ্যতামূলক',
      qualificationText:
        extractQualificationSnippet(combined) ||
        'BSc in EEE / Electrical Engineering (Completed)'
    };
  }

  return {
    status: 'REVIEW_REQUIRED',
    badge: '⚠️ Review Required — সার্কুলারে বিস্তারিত দেখুন',
    qualificationText:
      extractQualificationSnippet(combined) ||
      'Diploma / BSc Running (মূল বিজ্ঞপ্তি চেক করুন)'
  };
}

function extractQualificationSnippet(text = '') {
  const lines = text
    .split(/[\n\r.|•]+/)
    .map((l) => l.trim())
    .filter(Boolean);
  for (const line of lines) {
    if (
      /(diploma|b\.?sc|degree|qualification|education|academic|শিক্ষাগত যোগ্যতা|ডিপ্লোমা|স্নাতক)/i.test(
        line
      ) &&
      line.length >= 8 &&
      line.length <= 150
    ) {
      return line
        .replace(/^(qualification|education|educational qualification)[:\s-]*/i, '')
        .trim();
    }
  }
  return null;
}

function evaluateApplicationMethod(rawText = '', linkHref = '', hasApplyOnlineButtonOnly = false) {
  const emailMatch = rawText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  const isPdfCircular = /\.pdf($|\?)/i.test(linkHref);
  const hasHardCopyOrWalkIn =
    /(walk-in|hard copy|কুরিয়ার|ডাকযোগে|সরাসরি সাক্ষাৎকার|সাক্ষাৎকার|send your cv|drop your cv|ইমেইল)/i.test(
      rawText
    );

  let applicationInstruction = 'Official Career Circular / Instructions on Page';
  let applyEmail = null;

  if (emailMatch) {
    applyEmail = emailMatch[0];
    applicationInstruction = `Email CV to: ${applyEmail}`;
  } else if (isPdfCircular) {
    applicationInstruction = 'Official PDF Job Circular (Download & Follow Instructions)';
  } else if (hasHardCopyOrWalkIn) {
    applicationInstruction = 'Direct CV Submission / Walk-in / Official Instructions';
  } else if (hasApplyOnlineButtonOnly) {
    applicationInstruction = 'Online Application Form Only (Direct Apply Button)';
  }

  const shouldExcludeByDirectApplyFilter =
    settings.directApplyFilter.excludeOnlinePortalOnly &&
    hasApplyOnlineButtonOnly &&
    !emailMatch &&
    !isPdfCircular &&
    !hasHardCopyOrWalkIn;

  return {
    allowed: !shouldExcludeByDirectApplyFilter,
    applicationInstruction,
    applyEmail,
    isPdfCircular
  };
}

function extractMetadataFields(title = '', rawText = '') {
  const combined = `${title} \n ${rawText}`;

  let experience = 'Not specified in circular';
  const expMatch = combined.match(
    /(\d+\s*(?:to|-|–)\s*\d+\s*years?|at least \d+\s*years?|minimum \d+\s*years?|fresher|n\/a|\d+\s*বছর)/i
  );
  if (expMatch) {
    experience = expMatch[0].trim();
  }

  let salary = 'Negotiable / As per Company Policy';
  const salaryMatch = combined.match(
    /(?:tk\.?|bdt|টাকা|salary|বেতন)[:\s]*([\d,]+\s*(?:to|-|–)\s*[\d,]+\s*(?:bdt|tk|টাকা)?|[\d,]+\s*(?:bdt|tk|টাকা)|negotiable)/i
  );
  if (salaryMatch) {
    salary = salaryMatch[0].replace(/^(salary|বেতন)[:\s]*/i, '').trim();
  }

  let deadline = 'Check Official Circular';
  const deadlineMatch =
    combined.match(
      /(?:deadline|last date|closing date|apply before|আবেদনের শেষ তারিখ|শেষ তারিখ)[:\s-]*([0-9]{1,2}[\s/.-][a-zA-Z0-9]{2,10}[\s/.-][0-9]{2,4}|[a-zA-Z]{3,10}\s+\d{1,2},?\s+\d{4})/i
    ) || combined.match(/(\d{1,2}[/-]\d{1,2}[/-]\d{4})/);
  if (deadlineMatch) {
    deadline = deadlineMatch[1].trim();
  }

  let published = 'Current / Active Circular';
  const pubMatch = combined.match(
    /(?:published|post date|issue date|upload date|প্রকাশের তারিখ)[:\s-]*([0-9]{1,2}[\s/.-][a-zA-Z0-9]{2,10}[\s/.-][0-9]{2,4}|[a-zA-Z]{3,10}\s+\d{1,2},?\s+\d{4})/i
  );
  if (pubMatch) {
    published = pubMatch[1].trim();
  }

  let location = 'Bangladesh (See Circular)';
  const locMatch =
    combined.match(
      /(?:location|workplace|job location|station|কর্মস্থল)[:\s-]*([A-Za-z,\s-]{3,35})/i
    ) ||
    combined.match(
      /\b(Dhaka|Chattogram|Chittagong|Gazipur|Narayanganj|Savar|Mymensingh|Cumilla|Noakhali|Sylhet|Khulna|Rajshahi|Bogura|Barishal|Rangpur|Ashuganj|Payra|Rampal|Bheramara|Sirajganj|Habiganj|Pabna)\b/i
    );
  if (locMatch) {
    location = locMatch[1].trim();
  }

  let department = 'Electrical / Engineering & Maintenance';
  if (/utility|boiler|hvac|chiller|compressor|etp|wtp/i.test(combined)) {
    department = 'Engineering / Utility & Plant Maintenance';
  } else if (/plc|scada|automation|vfd|hmi/i.test(combined)) {
    department = 'Electrical & Industrial Automation';
  } else if (/substation|transformer|switchgear|grid|power plant|generation|distribution/i.test(combined)) {
    department = 'Power Generation / Substation & Distribution';
  }

  return {
    experience,
    salary,
    published,
    deadline,
    location,
    department
  };
}

module.exports = {
  isThirdPartyPortal,
  matchElectricalDepartment,
  evaluateQualification,
  evaluateApplicationMethod,
  extractMetadataFields
};
