/**
 * BD LIVE JOB FINDER — GOVERNMENT & PUBLIC UTILITY REGISTRY (35 Verified Websites)
 * Used EXCLUSIVELY when the user triggers `/govt` in Telegram.
 * Completely separated from the `/jobs` private-sector search.
 */

const govtCompanies = [
  {
    "id": "govt-01",
    "name": "Bangladesh Power Development Board (BPDB)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://bpdb.gov.bd",
    "careerPageUrl": "https://bpdb.gov.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-02",
    "name": "Power Grid Bangladesh PLC (PGCB)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://pgcb.gov.bd",
    "careerPageUrl": "https://pgcb.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-03",
    "name": "Dhaka Power Distribution Company Ltd. (DPDC)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://dpdc.gov.bd",
    "careerPageUrl": "https://dpdc.org.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-04",
    "name": "Dhaka Electric Supply Company Ltd. (DESCO)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://desco.gov.bd",
    "careerPageUrl": "https://desco.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-05",
    "name": "Northern Electricity Supply PLC (NESCO)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://nesco.gov.bd",
    "careerPageUrl": "https://career.nesco.gov.bd/Account/Notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-06",
    "name": "West Zone Power Distribution Company Ltd. (WZPDCL)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://wzpdcl.gov.bd",
    "careerPageUrl": "https://jobs.wzpdcl.gov.bd:6780/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-07",
    "name": "Bangladesh Rural Electrification Board (BREB)",
    "industry": "Power Distribution (Govt)",
    "officialWebsite": "https://reb.gov.bd",
    "careerPageUrl": "https://reb.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-08",
    "name": "Electricity Generation Company of Bangladesh (EGCB)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://egcb.gov.bd",
    "careerPageUrl": "https://egcb.gov.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-09",
    "name": "Ashuganj Power Station Company Ltd. (APSCL)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://apscl.gov.bd",
    "careerPageUrl": "https://apscl.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-10",
    "name": "North-West Power Generation Company Ltd. (NWPGCL)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://nwpgcl.gov.bd",
    "careerPageUrl": "https://nwpgcl.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-11",
    "name": "Rural Power Company Ltd. (RPCL)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://rpcl.gov.bd",
    "careerPageUrl": "https://rpcl.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-12",
    "name": "Bangladesh-China Power Company Ltd. (BCPCL)",
    "industry": "Power Generation (Govt JV)",
    "officialWebsite": "https://www.bcpcl.org.bd",
    "careerPageUrl": "https://career.bcpcl.org.bd/notice-board",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-13",
    "name": "Coal Power Generation Company Bangladesh Ltd. (CPGCBL)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://cpgcbl.gov.bd",
    "careerPageUrl": "https://cpgcbl.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-14",
    "name": "B-R Powergen Ltd. (BRPL)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://brpowergen.gov.bd",
    "careerPageUrl": "https://brpowergen.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-15",
    "name": "Nuclear Power Plant Company Bangladesh Ltd. (NPCBL - Rooppur)",
    "industry": "Power Generation (Govt)",
    "officialWebsite": "https://npcbl.gov.bd",
    "careerPageUrl": "https://npcbl.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-16",
    "name": "Bangladesh-India Friendship Power Company (BIFPCL - Rampal)",
    "industry": "Power Generation (Govt JV)",
    "officialWebsite": "https://bifpcl.com",
    "careerPageUrl": "https://bifpcl.com/career.aspx",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-17",
    "name": "Bangladesh Chemical Industries Corporation (BCIC)",
    "industry": "Chemical & Fertilizer (Govt)",
    "officialWebsite": "https://bcic.gov.bd",
    "careerPageUrl": "https://bcic.gov.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-18",
    "name": "Bangladesh Steel & Engineering Corporation (BSEC)",
    "industry": "Engineering (Govt)",
    "officialWebsite": "https://bsec.gov.bd",
    "careerPageUrl": "https://bsec.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-19",
    "name": "Bangladesh Sugar and Food Industries Corporation (BSFIC)",
    "industry": "Manufacturing (Govt)",
    "officialWebsite": "https://bsfic.gov.bd",
    "careerPageUrl": "https://bsfic.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-20",
    "name": "Petrobangla (Bangladesh Oil, Gas & Mineral Corporation)",
    "industry": "Energy & Gas (Govt)",
    "officialWebsite": "https://petrobangla.org.bd",
    "careerPageUrl": "https://petrobangla.org.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-21",
    "name": "Titas Gas Transmission & Distribution PLC (TGTDCL)",
    "industry": "Energy & Gas (Govt)",
    "officialWebsite": "https://titasgas.org.bd",
    "careerPageUrl": "https://titasgas.org.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-22",
    "name": "Gas Transmission Company Limited (GTCL)",
    "industry": "Energy & Gas (Govt)",
    "officialWebsite": "https://gtcl.org.bd",
    "careerPageUrl": "https://gtcl.org.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-23",
    "name": "Bangladesh Petroleum Corporation (BPC)",
    "industry": "Energy & Petroleum (Govt)",
    "officialWebsite": "https://bpc.gov.bd",
    "careerPageUrl": "https://bpc.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-24",
    "name": "Infrastructure Development Company Limited (IDCOL)",
    "industry": "Renewable Energy (Govt)",
    "officialWebsite": "https://idcol.org",
    "careerPageUrl": "https://idcol.org/home/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-25",
    "name": "Sustainable and Renewable Energy Development Authority (SREDA)",
    "industry": "Renewable Energy (Govt)",
    "officialWebsite": "https://sreda.gov.bd",
    "careerPageUrl": "https://sreda.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-26",
    "name": "Teletalk Bangladesh Limited",
    "industry": "Telecom (Govt)",
    "officialWebsite": "https://www.teletalk.com.bd",
    "careerPageUrl": "https://www.teletalk.com.bd/about/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-27",
    "name": "Bangladesh Telecommunications Company Ltd. (BTCL)",
    "industry": "Telecom (Govt)",
    "officialWebsite": "https://btcl.gov.bd",
    "careerPageUrl": "https://btcl.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-28",
    "name": "Public Works Department (PWD)",
    "industry": "Government Engineering",
    "officialWebsite": "https://pwd.gov.bd",
    "careerPageUrl": "https://pwd.gov.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-29",
    "name": "Bangladesh Water Development Board (BWDB)",
    "industry": "Government Engineering",
    "officialWebsite": "https://www.bwdb.gov.bd",
    "careerPageUrl": "https://www.bwdb.gov.bd/notice",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-30",
    "name": "Local Government Engineering Department (LGED / LGD)",
    "industry": "Government Engineering",
    "officialWebsite": "https://lgd.gov.bd",
    "careerPageUrl": "https://lgd.gov.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-31",
    "name": "Roads and Highways Department (RHD)",
    "industry": "Government Engineering",
    "officialWebsite": "https://rhd.portal.gov.bd",
    "careerPageUrl": "https://rhd.portal.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-32",
    "name": "Bangladesh Atomic Energy Commission (BAEC)",
    "industry": "Government Scientific",
    "officialWebsite": "https://baec.gov.bd",
    "careerPageUrl": "https://baec.gov.bd/pages/notices",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-33",
    "name": "Bangladesh Council of Scientific and Industrial Research (BCSIR)",
    "industry": "Government Scientific",
    "officialWebsite": "https://bcsir.gov.bd",
    "careerPageUrl": "https://bcsir.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-34",
    "name": "Bangladesh Bridge Authority (BBA)",
    "industry": "Government Engineering",
    "officialWebsite": "https://bba.gov.bd",
    "careerPageUrl": "https://bba.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "govt-35",
    "name": "Dhaka Mass Transit Company Limited (DMTCL - Metro Rail)",
    "industry": "Government Transport & Power",
    "officialWebsite": "https://dmtcl.portal.gov.bd",
    "careerPageUrl": "https://dmtcl.portal.gov.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  }
];

module.exports = govtCompanies;
