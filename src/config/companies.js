/**
 * BD LIVE JOB FINDER — PRIVATE SECTOR OFFICIAL COMPANY REGISTRY (449 Verified Websites)
 * Strictly 100% Non-Government / Private Sector Companies across 19 Industrial Categories.
 * All Government / Autonomous websites have been moved to `src/config/govtCompanies.js` for `/govt`.
 */

const companies = [
  {
    "id": "priv-001",
    "name": "Square Pharmaceuticals PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.squarepharma.com.bd",
    "careerPageUrl": "https://squarepharma.com.bd/career_4.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-002",
    "name": "Incepta Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.inceptapharma.com",
    "careerPageUrl": "https://www.inceptapharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-003",
    "name": "Renata PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://renata-ltd.com",
    "careerPageUrl": "https://renata-ltd.com/career",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-004",
    "name": "Beximco Pharmaceuticals PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.beximcopharma.com",
    "careerPageUrl": "https://beximcopharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-005",
    "name": "Eskayef Pharmaceuticals Ltd. (SK+F)",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://skfbd.com",
    "careerPageUrl": "https://skfbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-006",
    "name": "Aristopharma Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://aristopharma.com",
    "careerPageUrl": "https://aristopharma.com/page/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-007",
    "name": "Opsonin Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.opsonin-pharma.com",
    "careerPageUrl": "https://www.opsonin-pharma.com/job-announcement.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-008",
    "name": "The ACME Laboratories Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.acmeglobal.com",
    "careerPageUrl": "https://www.acmeglobal.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-009",
    "name": "Beacon Pharmaceuticals PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://beaconpharma.com.bd",
    "careerPageUrl": "https://beaconpharma.com.bd/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-010",
    "name": "The IBN SINA Pharmaceutical Industry PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.ibnsinapharma.com",
    "careerPageUrl": "https://ibnsinapharma.com/carrier/available-jobs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-011",
    "name": "Radiant Pharmaceuticals Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.radiantpharmabd.com",
    "careerPageUrl": "https://www.radiantpharmabd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-012",
    "name": "Popular Pharmaceuticals PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.popular-pharma.com",
    "careerPageUrl": "https://www.popular-pharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-013",
    "name": "UniMed UniHealth Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://unimedunihealth.com",
    "careerPageUrl": "https://unimedunihealth.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-014",
    "name": "Labaid Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://labaidpharma.com.bd",
    "careerPageUrl": "https://labaidpharma.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-015",
    "name": "Orion Pharma Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.orionpharmabd.com",
    "careerPageUrl": "https://www.orionpharmabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-016",
    "name": "Healthcare Pharmaceuticals Limited (HPL)",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.hplbd.com",
    "careerPageUrl": "https://www.hplbd.com/Career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-017",
    "name": "General Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://generalpharma.com",
    "careerPageUrl": "https://generalpharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-018",
    "name": "Ziska Pharmaceuticals Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.ziskapharma.com",
    "careerPageUrl": "https://www.ziskapharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-019",
    "name": "Nuvista Pharma PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://nuvistapharma.com",
    "careerPageUrl": "https://nuvistapharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-020",
    "name": "Synovia Pharma PLC (Sanofi Bangladesh)",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://jobs.sanofi.com",
    "careerPageUrl": "https://jobs.sanofi.com/en/location/bangladesh-jobs/20874/1210997/2",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-021",
    "name": "Novo Nordisk Pharma (Private) Ltd. Bangladesh",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.novonordisk.com",
    "careerPageUrl": "https://www.novonordisk.com/careers/find-a-job.html",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-022",
    "name": "Novartis (Bangladesh) Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.novartis.com",
    "careerPageUrl": "https://www.novartis.com/careers/career-search",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-023",
    "name": "Roche Bangladesh Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.roche.com.bd",
    "careerPageUrl": "https://www.roche.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-024",
    "name": "Sun Pharmaceutical (Bangladesh) Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://sunpharma.com",
    "careerPageUrl": "https://sunpharma.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-025",
    "name": "Drug International Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.druginternational.com",
    "careerPageUrl": "https://www.druginternational.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-026",
    "name": "Navana Pharmaceuticals PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://navanapharma.com",
    "careerPageUrl": "https://navanapharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-027",
    "name": "Delta Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.deltapharmabd.com",
    "careerPageUrl": "https://www.deltapharmabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-028",
    "name": "Bio-Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.biopharmabd.com",
    "careerPageUrl": "https://www.biopharmabd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-029",
    "name": "Pacific Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.pacificpharmabd.com",
    "careerPageUrl": "https://www.pacificpharmabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-030",
    "name": "Globe Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.globepharmabd.com",
    "careerPageUrl": "https://www.globepharmabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-031",
    "name": "Nipro JMI Pharma Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.niprojmipharma.com",
    "careerPageUrl": "https://www.niprojmipharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-032",
    "name": "JMI Syringes & Medical Devices Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.jmigroup-bd.com",
    "careerPageUrl": "https://www.jmigroup-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-033",
    "name": "kemiko Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.kemikopharma.com",
    "careerPageUrl": "https://www.kemikopharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-034",
    "name": "Sharif Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.sharifpharma.com",
    "careerPageUrl": "https://www.sharifpharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-035",
    "name": "asiatic Laboratories Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.asiaticlab.com",
    "careerPageUrl": "https://www.asiaticlab.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-036",
    "name": "Monicopharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.monicopharma.com",
    "careerPageUrl": "https://www.monicopharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-037",
    "name": "Silva Pharmaceuticals Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://silvapharma.com",
    "careerPageUrl": "https://silvapharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-038",
    "name": "Indo-Bangla Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://indobanglapharma.com",
    "careerPageUrl": "https://indobanglapharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-039",
    "name": "Advent Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.adventpharmabd.com",
    "careerPageUrl": "https://www.adventpharmabd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-040",
    "name": "Ambee Pharmaceuticals PLC",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.ambeepharma.com",
    "careerPageUrl": "https://www.ambeepharma.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-041",
    "name": "Summit Power International",
    "industry": "Power Generation",
    "officialWebsite": "https://summitpowerinternational.com",
    "careerPageUrl": "https://summitpowerinternational.com/career-opportunities",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-042",
    "name": "United Power Generation & Distribution Co. Ltd.",
    "industry": "Power Generation",
    "officialWebsite": "https://www.united.com.bd",
    "careerPageUrl": "https://www.united.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-043",
    "name": "Baraka Power Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://barakapower.com",
    "careerPageUrl": "https://barakapower.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-044",
    "name": "Nutan Bidyut (Bangladesh) Ltd. (NBBL)",
    "industry": "Power Generation",
    "officialWebsite": "https://www.nutanbidyut.com",
    "careerPageUrl": "https://www.nutanbidyut.com/jobs",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-045",
    "name": "Doreen Power Generations and Systems Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://doreen.com",
    "careerPageUrl": "https://doreen.com/power-generation/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-046",
    "name": "Confidence Power Holdings Ltd.",
    "industry": "Power Generation",
    "officialWebsite": "https://www.confidencegroup.com.bd",
    "careerPageUrl": "https://www.confidencegroup.com.bd/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-047",
    "name": "Orion Power Meghnaghat Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.orion-group.net",
    "careerPageUrl": "https://www.orion-group.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-048",
    "name": "Shahjibazar Power Co. Ltd. (Youth Group)",
    "industry": "Power Generation",
    "officialWebsite": "https://www.youthbd.com",
    "careerPageUrl": "https://www.youthbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-049",
    "name": "Khulna Power Company Limited (KPCL)",
    "industry": "Power Generation",
    "officialWebsite": "https://www.kpcl-bd.com",
    "careerPageUrl": "https://www.kpcl-bd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-050",
    "name": "GBB Power Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.gbbpower.com",
    "careerPageUrl": "https://www.gbbpower.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-051",
    "name": "Energypac Power Generation PLC",
    "industry": "Power Generation",
    "officialWebsite": "https://www.energypac.com",
    "careerPageUrl": "https://www.energypac.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-052",
    "name": "Regent Power Limited (Habib Group)",
    "industry": "Power Generation",
    "officialWebsite": "https://www.habibgroupbd.com",
    "careerPageUrl": "https://www.habibgroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-053",
    "name": "Midland Power Co. Ltd. (Viyellatex Power)",
    "industry": "Power Generation",
    "officialWebsite": "https://www.midlandpowerbd.com",
    "careerPageUrl": "https://www.midlandpowerbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-054",
    "name": "Max Power Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.maxgroup-bd.com",
    "careerPageUrl": "https://www.maxgroup-bd.com/job-opening",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-055",
    "name": "Acorn Infrastructure Services Unit (Power Plant)",
    "industry": "Power Generation",
    "officialWebsite": "https://www.acornbd.com",
    "careerPageUrl": "https://www.acornbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-056",
    "name": "Sinha Power Generation Co. Ltd.",
    "industry": "Power Generation",
    "officialWebsite": "https://www.sinhabd.com",
    "careerPageUrl": "https://www.sinhabd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-057",
    "name": "Paramount BTrac Energy Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.paramountgroupbd.com",
    "careerPageUrl": "https://www.paramountgroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-058",
    "name": "Precision Energy Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.precisionenergybd.com",
    "careerPageUrl": "https://www.precisionenergybd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-059",
    "name": "Desh Energy Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.deshenergy.com",
    "careerPageUrl": "https://www.deshenergy.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-060",
    "name": "Lakdhanavi Bangla Power Limited",
    "industry": "Power Generation",
    "officialWebsite": "https://www.ltl.lk",
    "careerPageUrl": "https://www.ltl.lk/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-061",
    "name": "Energypac Engineering Limited (Substation & Switchgear)",
    "industry": "Power Distribution",
    "officialWebsite": "https://energypac.com.bd",
    "careerPageUrl": "https://energypac.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-062",
    "name": "Adex Corporation Ltd. (Substation & Distribution)",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.adexbd.com",
    "careerPageUrl": "https://www.adexbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-063",
    "name": "Reverie Power & Automation Engineering Ltd.",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.reverie.com.bd",
    "careerPageUrl": "https://www.reverie.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-064",
    "name": "CrossWorld Power Ltd. (Substation & Busbar)",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.crossworld-bd.com",
    "careerPageUrl": "https://www.crossworld-bd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-065",
    "name": "Energyprima Limited",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.energyprima.com",
    "careerPageUrl": "https://www.energyprima.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-066",
    "name": "Shasha Denims / EOS Power & Distribution Ltd.",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.shashadenims.com",
    "careerPageUrl": "https://www.shashadenims.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-067",
    "name": "TSS (Telephone Shilpa Sangstha / Smart Meter Plant)",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.tss.com.bd",
    "careerPageUrl": "https://www.tss.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-068",
    "name": "Hexing Electrical Bangladesh (Smart Prepaid Meter)",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.hxgroup.com",
    "careerPageUrl": "https://www.hxgroup.com/en/join-us/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-069",
    "name": "Shenzhen Star Instrument Bangladesh (Prepaid Meter)",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.starinstrument.com",
    "careerPageUrl": "https://www.starinstrument.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-070",
    "name": "Inhemeter Bangladesh (Smart Grid & Distribution)",
    "industry": "Power Distribution",
    "officialWebsite": "https://www.inhemeter.com",
    "careerPageUrl": "https://www.inhemeter.com/en/jobs.html",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-071",
    "name": "DBL Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.dbl-group.com",
    "careerPageUrl": "https://dbl-group.com/careers/openings",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-072",
    "name": "Epyllion Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.epylliongroup.com",
    "careerPageUrl": "https://www.epylliongroup.com/epyllion_job/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-073",
    "name": "Fakir Knitwears Ltd. (Fakir Group)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://fakirgroup.com",
    "careerPageUrl": "https://career.fakirgroup.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-074",
    "name": "Envoy Textiles Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://envoytextiles.com",
    "careerPageUrl": "https://envoytextiles.com/envoy/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-075",
    "name": "Pacific Jeans Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://pacificjeans.com",
    "careerPageUrl": "https://pacificjeans.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-076",
    "name": "Urmi Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://urmigroup.com",
    "careerPageUrl": "https://urmigroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-077",
    "name": "Snowtex Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://snowtex.com.bd",
    "careerPageUrl": "https://snowtex.com.bd/",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-078",
    "name": "Ha-Meem Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.hameemgroup.com",
    "careerPageUrl": "https://www.hameemgroup.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-079",
    "name": "Viyellatex Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.viyellatexgroup.com",
    "careerPageUrl": "https://www.viyellatexgroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-080",
    "name": "Bitopi Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.bitopibd.com",
    "careerPageUrl": "https://careers.bitopibd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-081",
    "name": "Standard Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.standard-group.com",
    "careerPageUrl": "https://www.standard-group.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-082",
    "name": "Ananta Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://ananta-bd.com",
    "careerPageUrl": "https://ananta-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-083",
    "name": "Square Textiles PLC",
    "industry": "Textile & Garments",
    "officialWebsite": "https://textile.squaregroup.com",
    "careerPageUrl": "https://textile.squaregroup.com/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-084",
    "name": "Beximco Textiles & Apparel (Beximco Group)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.beximco.com",
    "careerPageUrl": "https://www.beximco.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-085",
    "name": "SQ Group (SQ Station)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.sqgc.com",
    "careerPageUrl": "https://www.sqgc.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-086",
    "name": "Masco Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.mascogroup.com.bd",
    "careerPageUrl": "https://www.mascogroup.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-087",
    "name": "Palmal Group of Industries",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.palmalgarments.com",
    "careerPageUrl": "https://www.palmalgarments.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-088",
    "name": "Mondol Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.mondol.net",
    "careerPageUrl": "https://www.mondol.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-089",
    "name": "Noman Group (Zaber & Zubair Fabrics)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.nomangroup.com",
    "careerPageUrl": "https://www.nomangroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-090",
    "name": "Thermax Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.thermaxgroup.com",
    "careerPageUrl": "https://www.thermaxgroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-091",
    "name": "Mohammadi Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.mohammadigroup.com",
    "careerPageUrl": "https://www.mohammadigroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-092",
    "name": "Hoorain Hi-Tech Fabrics (Jamuna Spinning)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.hoorainhtf.com",
    "careerPageUrl": "https://www.hoorainhtf.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-093",
    "name": "Fakir Apparels Ltd.",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.fakirapparels.com",
    "careerPageUrl": "https://www.fakirapparels.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-094",
    "name": "Plummy Fashions Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.plummyfashions.com",
    "careerPageUrl": "https://www.plummyfashions.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-095",
    "name": "Vintage Denim Studio Ltd. (ABA Group)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.abagroupbd.com",
    "careerPageUrl": "https://www.abagroupbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-096",
    "name": "GMS Composite Knitting Ind. Ltd.",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.gmsbd.com",
    "careerPageUrl": "https://www.gmsbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-097",
    "name": "Robintex Group Bangladesh",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.robintexbd.com",
    "careerPageUrl": "https://www.robintexbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-098",
    "name": "Micro Fibre Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.microfibrebd.com",
    "careerPageUrl": "https://www.microfibrebd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-099",
    "name": "Debonair Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.debonairgroupbd.com",
    "careerPageUrl": "https://www.debonairgroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-100",
    "name": "Tusuka Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.tusuka.com",
    "careerPageUrl": "https://www.tusuka.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-101",
    "name": "Shin Shin Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.shinshingroup.com",
    "careerPageUrl": "https://www.shinshingroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-102",
    "name": "Evince Group (Evince Textiles)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.evincegroup.com",
    "careerPageUrl": "https://www.evincegroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-103",
    "name": "Argon Denims PLC",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.argondenims.com",
    "careerPageUrl": "https://www.argondenims.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-104",
    "name": "Matin Spinning Mills PLC",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.matinspinning.com",
    "careerPageUrl": "https://www.matinspinning.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-105",
    "name": "Paramount Textile PLC",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.paramountgroupbd.com",
    "careerPageUrl": "https://www.paramountgroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-106",
    "name": "Al-Muslim Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.al-muslimgroup.com",
    "careerPageUrl": "https://www.al-muslimgroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-107",
    "name": "sparrow Group of Industries",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.sparrowbd.com",
    "careerPageUrl": "https://www.sparrowbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-108",
    "name": "epic Group Bangladesh",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.epicgroup.global",
    "careerPageUrl": "https://www.epicgroup.global/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-109",
    "name": "Kenpark & Regency (Hirdaramani Bangladesh)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.hirdaramani.com",
    "careerPageUrl": "https://www.hirdaramani.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-110",
    "name": "Hop Lun Bangladesh Ltd.",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.hoplun.com",
    "careerPageUrl": "https://www.hoplun.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-111",
    "name": "Youngone Corporation Bangladesh (CEPZ/KEPZ)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.youngone.com",
    "careerPageUrl": "https://www.youngone.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-112",
    "name": "Clifton Group Bangladesh",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.cliftongroupbd.com",
    "careerPageUrl": "https://www.cliftongroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-113",
    "name": "Asian Apparels Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.asianapparels.com",
    "careerPageUrl": "https://www.asianapparels.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-114",
    "name": "Four H Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.fourhgroup.com",
    "careerPageUrl": "https://www.fourhgroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-115",
    "name": "KDS Group (KDS Garments & Accessories)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.kdsgroup.net",
    "careerPageUrl": "https://www.kdsgroup.net/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-116",
    "name": "BSRM (Bangladesh Steel Re-Rolling Mills)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://bsrm.com",
    "careerPageUrl": "https://careers.bsrm.com/viewalljobs/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-117",
    "name": "KSRM Steel Plant Ltd.",
    "industry": "Steel & Cement",
    "officialWebsite": "https://ksrm.com.bd",
    "careerPageUrl": "https://ksrm.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-118",
    "name": "Rahim Steel Mills Co. (Pvt.) Ltd.",
    "industry": "Steel & Cement",
    "officialWebsite": "https://rahimsteel.com.bd",
    "careerPageUrl": "https://rahimsteel.com.bd/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-119",
    "name": "GPH Ispat Limited",
    "industry": "Steel & Cement",
    "officialWebsite": "https://gphispat.com.bd",
    "careerPageUrl": "https://gphispat.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-120",
    "name": "LafargeHolcim Bangladesh PLC",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.lafargeholcim.com.bd",
    "careerPageUrl": "https://www.lafargeholcim.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-121",
    "name": "Crown Cement PLC",
    "industry": "Steel & Cement",
    "officialWebsite": "https://crowncement.com",
    "careerPageUrl": "https://crowncement.com/available-jobs/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-122",
    "name": "Shah Cement Industries Ltd. (Abul Khair Group)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://shahcement.com",
    "careerPageUrl": "https://shahcement.com/career",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-123",
    "name": "Premier Cement Mills PLC",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.premiercement.com",
    "careerPageUrl": "https://www.premiercement.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-124",
    "name": "Seven Rings Cement (Shun Shing Group)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://sevenringscement.com",
    "careerPageUrl": "https://sevenringscement.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-125",
    "name": "Anwar Ispat Ltd.",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.anwarispat.com",
    "careerPageUrl": "https://www.anwarispat.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-126",
    "name": "Mir Cement Limited",
    "industry": "Steel & Cement",
    "officialWebsite": "https://mircement.com",
    "careerPageUrl": "https://mircement.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-127",
    "name": "RRM Steel (Rani Re-Rolling Mills)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.rrmsteel.com.bd",
    "careerPageUrl": "https://www.rrmsteel.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-128",
    "name": "aks (Abul Khair Steel)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.abulkhairsteel.com",
    "careerPageUrl": "https://www.abulkhairsteel.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-129",
    "name": "SCRM (Salam Steel Concast Re-Rolling Mills)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.salamsteel.com",
    "careerPageUrl": "https://www.salamsteel.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-130",
    "name": "CSRM (Chittagong Steel Re-Rolling Mills)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.csrm.com.bd",
    "careerPageUrl": "https://www.csrm.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-131",
    "name": "SS Steel PLC",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.sssteel.biz",
    "careerPageUrl": "https://www.sssteel.biz/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-132",
    "name": "Ratanpur Steel Re-Rolling Mills Ltd. (RSRM)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.rsrmbd.com",
    "careerPageUrl": "https://www.rsrmbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-133",
    "name": "Metrocem Cement Limited",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.metrocem.com",
    "careerPageUrl": "https://www.metrocem.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-134",
    "name": "Aman Cement Mills Unit-2 PLC",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.amancement.com",
    "careerPageUrl": "https://www.amancement.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-135",
    "name": "Heidelberg Materials Bangladesh PLC (Ruby/ScanCement)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.heidelbergmaterials.com.bd",
    "careerPageUrl": "https://www.heidelbergmaterials.com.bd/en/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-136",
    "name": "Confidence Cement PLC",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.confidencecement.com.bd",
    "careerPageUrl": "https://www.confidencecement.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-137",
    "name": "Aramit Cement Limited",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.aramitcement.com",
    "careerPageUrl": "https://www.aramitcement.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-138",
    "name": "Royal Cement Limited",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.royalcementbd.com",
    "careerPageUrl": "https://www.royalcementbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-139",
    "name": "Diamond Cement Limited",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.diamondcementbd.com",
    "careerPageUrl": "https://www.diamondcementbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-140",
    "name": "Bashundhara Cement & Steel (Bashundhara Group)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.bashundharagroup.com",
    "careerPageUrl": "https://www.bashundharagroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-141",
    "name": "Bengal Cement & Steel (Bengal Group)",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.bengalgroup.com",
    "careerPageUrl": "https://www.bengalgroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-142",
    "name": "McDonald Steel Building Products Ltd.",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.mcdonaldsteelbd.com",
    "careerPageUrl": "https://www.mcdonaldsteelbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-143",
    "name": "PEB Steel Alliance Ltd.",
    "industry": "Steel & Cement",
    "officialWebsite": "https://www.pebsteel.com.bd",
    "careerPageUrl": "https://www.pebsteel.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-144",
    "name": "PRAN Foods Ltd. (PRAN-RFL Group)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.pranfoods.net",
    "careerPageUrl": "https://www.pranfoods.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-145",
    "name": "City Group (Teer)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.citygroup.com.bd",
    "careerPageUrl": "https://www.citygroup.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-146",
    "name": "Meghna Group of Industries (MGI - Fresh)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.mgi.org",
    "careerPageUrl": "https://www.mgi.org/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-147",
    "name": "M. M. Ispahani Limited",
    "industry": "Food & Beverage",
    "officialWebsite": "https://ispahanibd.com",
    "careerPageUrl": "https://ispahanibd.com/current-jobs/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-148",
    "name": "T.K. Group of Industries (Pusti)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://tkgroupbd.com",
    "careerPageUrl": "https://tkgroupbd.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-149",
    "name": "Akij Food & Beverage Ltd. (Akij Group)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://career.akijgroup.co",
    "careerPageUrl": "https://career.akijgroup.co/all-jobs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-150",
    "name": "Transcom Beverages Ltd. (PepsiCo Franchisee)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.transcombeverages.com",
    "careerPageUrl": "https://www.transcombd.com/career/join-us/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-151",
    "name": "Abdul Monem Ltd. (Coca-Cola & Igloo Division)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.abdulmonem.com",
    "careerPageUrl": "https://www.abdulmonem.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-152",
    "name": "Partex Beverage Ltd. (Partex Star Group)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.partexstargroup.com",
    "careerPageUrl": "https://www.partexstargroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-153",
    "name": "Globe Soft Drinks Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.globebevarage.com",
    "careerPageUrl": "https://www.globebevarage.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-154",
    "name": "olympic Industries PLC",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.olympicbd.com",
    "careerPageUrl": "https://www.olympicbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-155",
    "name": "Ifad Multi Products Limited (IFAD Group)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.ifadgroup.com",
    "careerPageUrl": "https://www.ifadgroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-156",
    "name": "Square Food & Beverage Ltd. (Radhuni / Chashi)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.sfbl.com.bd",
    "careerPageUrl": "https://www.sfbl.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-157",
    "name": "Bombay Sweets & Co. Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.bombaysweetsbd.com",
    "careerPageUrl": "https://www.bombaysweetsbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-158",
    "name": "Haque Group of Industries (A.T. Haque)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.haquegroup.com",
    "careerPageUrl": "https://www.haquegroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-159",
    "name": "Nabisco Biscuit and Bread Factory Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.nabiscobd.com",
    "careerPageUrl": "https://www.nabiscobd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-160",
    "name": "Danish Condensed Milk Bangladesh Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.danishbd.com",
    "careerPageUrl": "https://www.danishbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-161",
    "name": "Romania Food & Beverage Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.romaniabd.com",
    "careerPageUrl": "https://www.romaniabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-162",
    "name": "Sajeeb Group (Shezan / Hashem Foods)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.sajeebgroup.com.bd",
    "careerPageUrl": "https://www.sajeebgroup.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-163",
    "name": "BD Foods Limited",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.bdfoods.com",
    "careerPageUrl": "https://www.bdfoods.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-164",
    "name": "Kishwan Group",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.kishwan.com",
    "careerPageUrl": "https://www.kishwan.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-165",
    "name": "Well Food & Beverage (Well Group)",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.wellbd.com",
    "careerPageUrl": "https://www.wellbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-166",
    "name": "Banoful & Co. Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.banofulgroup.com",
    "careerPageUrl": "https://www.banofulgroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-167",
    "name": "Deshbandhu Sugar Mills & Food Ltd.",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.deshbandhugroup.com",
    "careerPageUrl": "https://www.deshbandhugroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-168",
    "name": "Sena Kalyan Edible Oil & Flour Mills",
    "industry": "Food & Beverage",
    "officialWebsite": "https://www.senakalyan.org",
    "careerPageUrl": "https://www.senakalyan.org/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-169",
    "name": "Nestlé Bangladesh PLC",
    "industry": "FMCG",
    "officialWebsite": "https://www.nestle.com.bd",
    "careerPageUrl": "https://www.nestle.com.bd/jobs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-170",
    "name": "Marico Bangladesh Limited",
    "industry": "FMCG",
    "officialWebsite": "https://marico.com/bangladesh",
    "careerPageUrl": "https://marico.com/bangladesh/careers/life-at-marico",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-171",
    "name": "British American Tobacco Bangladesh (BATB)",
    "industry": "FMCG",
    "officialWebsite": "https://www.batbangladesh.com",
    "careerPageUrl": "https://www.batbangladesh.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-172",
    "name": "ACI PLC (Advanced Chemical Industries)",
    "industry": "FMCG",
    "officialWebsite": "https://www.aci-bd.com",
    "careerPageUrl": "https://www.aci-bd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-173",
    "name": "Reckitt Benckiser Bangladesh PLC",
    "industry": "FMCG",
    "officialWebsite": "https://careers.reckitt.com",
    "careerPageUrl": "https://careers.reckitt.com/",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-174",
    "name": "Unilever Bangladesh Limited",
    "industry": "FMCG",
    "officialWebsite": "https://www.unilever.com.bd",
    "careerPageUrl": "https://careers.unilever.com/bangladesh",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-175",
    "name": "Kohinoor Chemical Company (Bangladesh) PLC",
    "industry": "FMCG",
    "officialWebsite": "https://www.kohinoor-bd.com",
    "careerPageUrl": "https://www.kohinoor-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-176",
    "name": "Square Toiletries Limited",
    "industry": "FMCG",
    "officialWebsite": "https://www.squaretoiletries.com",
    "careerPageUrl": "https://www.squaretoiletries.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-177",
    "name": "Keya Cosmetics Limited",
    "industry": "FMCG",
    "officialWebsite": "https://www.keyabd.com",
    "careerPageUrl": "https://www.keyabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-178",
    "name": "Mousumi Industries Ltd. (Cute)",
    "industry": "FMCG",
    "officialWebsite": "https://www.cute-bd.com",
    "careerPageUrl": "https://www.cute-bd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-179",
    "name": "Dabur Bangladesh Pvt. Ltd.",
    "industry": "FMCG",
    "officialWebsite": "https://www.dabur.com",
    "careerPageUrl": "https://www.dabur.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-180",
    "name": "Emami Bangladesh Limited",
    "industry": "FMCG",
    "officialWebsite": "https://www.emamiltd.in",
    "careerPageUrl": "https://www.emamiltd.in/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-181",
    "name": "Godrej Household Products Bangladesh Pvt. Ltd.",
    "industry": "FMCG",
    "officialWebsite": "https://www.godrejcp.com",
    "careerPageUrl": "https://www.godrejcp.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-182",
    "name": "Arla Foods Bangladesh Ltd. (Dano)",
    "industry": "FMCG",
    "officialWebsite": "https://www.arlafoods.com.bd",
    "careerPageUrl": "https://www.arla.com/company/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-183",
    "name": "Perfetti Van Melle Bangladesh Pvt. Ltd.",
    "industry": "FMCG",
    "officialWebsite": "https://www.perfettivanmelle.com",
    "careerPageUrl": "https://jobs.perfettivanmelle.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-184",
    "name": "RFL Group (Rangpur Foundry Limited)",
    "industry": "Manufacturing",
    "officialWebsite": "https://rflbd.com",
    "careerPageUrl": "https://rflbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-185",
    "name": "Confidence Group",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.confidencegroup.com.bd",
    "careerPageUrl": "https://www.confidencegroup.com.bd/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-186",
    "name": "Anwar Group of Industries",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.anwargroup.com",
    "careerPageUrl": "https://www.anwargroup.com/career.html",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-187",
    "name": "Jamuna Group",
    "industry": "Manufacturing",
    "officialWebsite": "https://jamunagroup.com.bd",
    "careerPageUrl": "https://jamunagroup.com.bd/career-details/2",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-188",
    "name": "AKIJ Resource",
    "industry": "Manufacturing",
    "officialWebsite": "https://akijresource.com",
    "careerPageUrl": "https://akijresource.com/akij-career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-189",
    "name": "Kiam Metal Industries Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.edelkitchens.com",
    "careerPageUrl": "https://www.edelkitchens.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-190",
    "name": "Mir Group of Companies",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.mirgroupbd.com",
    "careerPageUrl": "https://www.mirgroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-191",
    "name": "RAK Ceramics (Bangladesh) PLC",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.rakceramics.com/bangladesh/en-bd/",
    "careerPageUrl": "https://corporate.rakceramics.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-192",
    "name": "Star Ceramics Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.starceramicsbd.com",
    "careerPageUrl": "https://www.starceramicsbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-193",
    "name": "Great Wall Ceramic Industries Ltd.",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.greatwallceramic.com",
    "careerPageUrl": "https://www.greatwallceramic.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-194",
    "name": "Akij Ceramics Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.akijceramics.com",
    "careerPageUrl": "https://career.akijgroup.co/all-jobs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-195",
    "name": "Sheltech Ceramics Ltd.",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.sheltechceramics.com",
    "careerPageUrl": "https://www.sheltechceramics.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-196",
    "name": "Shinepukur Ceramics Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.shinepukur.com",
    "careerPageUrl": "https://www.shinepukur.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-197",
    "name": "Monno Ceramic Industries PLC",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.monno.com",
    "careerPageUrl": "https://www.monno.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-198",
    "name": "Farr Ceramics Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.farrceramics.com",
    "careerPageUrl": "https://www.farrceramics.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-199",
    "name": "X Ceramics Group (X Index Companies)",
    "industry": "Manufacturing",
    "officialWebsite": "https://xic.com.bd",
    "careerPageUrl": "https://xic.com.bd/job-posting",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-200",
    "name": "Nasir Group of Industries (Nasir Glass & Float Glass)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.nasirgroup.com.bd",
    "careerPageUrl": "https://www.nasirgroup.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-201",
    "name": "PHP Family (PHP Float Glass & Steel)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.phpfamily.com",
    "careerPageUrl": "https://www.phpfamily.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-202",
    "name": "Usmania Glass Sheet Factory PLC",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.ugsflbd.com",
    "careerPageUrl": "https://www.ugsflbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-203",
    "name": "Bengal Plastics Ltd. (Bengal Group)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.bengalplastics.com",
    "careerPageUrl": "https://www.bengalgroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-204",
    "name": "Gazi Group (Gazi Tanks, Pipes & Tyres)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.gazigroup.com",
    "careerPageUrl": "https://www.gazigroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-205",
    "name": "NPoly Group (National Polymer Industries PLC)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.nationalpolymer.net",
    "careerPageUrl": "https://www.nationalpolymer.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-206",
    "name": "Lira Group of Industries (Lira Pipes & Doors)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.liragroupbd.com",
    "careerPageUrl": "https://www.liragroupbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-207",
    "name": "Hatil Complex Ltd.",
    "industry": "Manufacturing",
    "officialWebsite": "https://hatil.com",
    "careerPageUrl": "https://hatil.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-208",
    "name": "Otobi Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.otobi.com",
    "careerPageUrl": "https://www.otobi.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-209",
    "name": "Brothers Furniture Ltd.",
    "industry": "Manufacturing",
    "officialWebsite": "https://brothersfurniture.com.bd",
    "careerPageUrl": "https://brothersfurniture.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-210",
    "name": "Nadia Furniture Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://nadiafurniture.com",
    "careerPageUrl": "https://nadiafurniture.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-211",
    "name": "Akhtar Group (Akhtar Furnishers)",
    "industry": "Manufacturing",
    "officialWebsite": "https://akhtargroup.com.bd",
    "careerPageUrl": "https://akhtargroup.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-212",
    "name": "Apex Footwear Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.apexfootwearltd.com",
    "careerPageUrl": "https://www.apexfootwearltd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-213",
    "name": "Bata Shoe Company (Bangladesh) PLC",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.batabd.com",
    "careerPageUrl": "https://www.batabd.com/pages/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-214",
    "name": "Bashundhara Paper Mills PLC",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.bashundharapapermills.com",
    "careerPageUrl": "https://www.bashundharapapermills.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-215",
    "name": "Sonali Paper & Board Mills PLC (Younus Group)",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.younusgroup.com",
    "careerPageUrl": "https://www.younusgroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-216",
    "name": "Hakkani Pulp & Paper Mills PLC",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.hakkanipulp.com",
    "careerPageUrl": "https://www.hakkanipulp.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-217",
    "name": "Matador Group",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.matadorgroup.com.bd",
    "careerPageUrl": "https://www.matadorgroup.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-218",
    "name": "Meghna Ballpen & Accessories Mfg. Ltd.",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.meghnagroup.com.bd",
    "careerPageUrl": "https://www.meghnagroup.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-219",
    "name": "Walton Hi-Tech Industries PLC",
    "industry": "Electronics",
    "officialWebsite": "https://waltonbd.com",
    "careerPageUrl": "https://jobs.waltonbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-220",
    "name": "Transcom Electronics Limited",
    "industry": "Electronics",
    "officialWebsite": "https://www.transcombd.com",
    "careerPageUrl": "https://www.transcombd.com/career/join-us/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-221",
    "name": "Singer Bangladesh Limited",
    "industry": "Electronics",
    "officialWebsite": "https://www.singerbd.com",
    "careerPageUrl": "https://www.singerbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-222",
    "name": "Minister Hi-Tech Park Limited",
    "industry": "Electronics",
    "officialWebsite": "https://ministerbd.com",
    "careerPageUrl": "https://ministerbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-223",
    "name": "Butterfly Marketing Limited (LG Butterfly)",
    "industry": "Electronics",
    "officialWebsite": "https://www.butterflygroupbd.com",
    "careerPageUrl": "https://www.butterflygroupbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-224",
    "name": "Rangs Electronics Ltd. (Sony-Rangs)",
    "industry": "Electronics",
    "officialWebsite": "https://shop.rangs.com.bd",
    "careerPageUrl": "https://shop.rangs.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-225",
    "name": "Vision Electronics (RFL Electronics Ltd.)",
    "industry": "Electronics",
    "officialWebsite": "https://vision.com.bd",
    "careerPageUrl": "https://rflbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-226",
    "name": "Jamuna Electronics and Automobiles Ltd.",
    "industry": "Electronics",
    "officialWebsite": "https://www.jamunaelectronics.com",
    "careerPageUrl": "https://jamunagroup.com.bd/career-details/2",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-227",
    "name": "Fair Electronics Limited (Samsung & Hyundai BD)",
    "industry": "Electronics",
    "officialWebsite": "https://www.fairelectronics.com.bd",
    "careerPageUrl": "https://www.fairgroupbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-228",
    "name": "Esquire Electronics Limited (Sharp & General BD)",
    "industry": "Electronics",
    "officialWebsite": "https://esquireelectronicsltd.com",
    "careerPageUrl": "https://esquire.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-229",
    "name": "Best Electronics Limited",
    "industry": "Electronics",
    "officialWebsite": "https://www.bestelectronicsltd.com",
    "careerPageUrl": "https://www.bestelectronicsltd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-230",
    "name": "Rangs Toshiba / Rangs Industries Ltd.",
    "industry": "Electronics",
    "officialWebsite": "https://www.rangs.com.bd",
    "careerPageUrl": "https://www.rangs.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-231",
    "name": "Electra International Limited",
    "industry": "Electronics",
    "officialWebsite": "https://www.electrabd.com",
    "careerPageUrl": "https://www.electrabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-232",
    "name": "Smart Technologies (BD) Ltd.",
    "industry": "Electronics",
    "officialWebsite": "https://smartbd.com",
    "careerPageUrl": "https://smartbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-233",
    "name": "Global Brand Pvt. Ltd.",
    "industry": "Electronics",
    "officialWebsite": "https://www.globalbrand.com.bd",
    "careerPageUrl": "https://www.globalbrand.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-234",
    "name": "Star Tech Ltd.",
    "industry": "Electronics",
    "officialWebsite": "https://www.startech.com.bd",
    "careerPageUrl": "https://www.startech.com.bd/information/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-235",
    "name": "Ryans Computers Ltd.",
    "industry": "Electronics",
    "officialWebsite": "https://www.ryans.com",
    "careerPageUrl": "https://www.ryans.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-236",
    "name": "Flora Limited",
    "industry": "Electronics",
    "officialWebsite": "https://www.floralimited.com",
    "careerPageUrl": "https://www.floralimited.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-237",
    "name": "SINCOS Automation Technologies Ltd.",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.sincosbd.com",
    "careerPageUrl": "https://www.sincosbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-238",
    "name": "CrossLink Automation & Controls",
    "industry": "Industrial Automation",
    "officialWebsite": "http://www.crosslinkbd.com",
    "careerPageUrl": "http://www.crosslinkbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-239",
    "name": "Siemens Bangladesh Ltd. / Siemens Energy",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.siemens-energy.com",
    "careerPageUrl": "https://www.siemens-energy.com/global/en/home/careers/working-with-us.html",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-240",
    "name": "Schneider Electric Bangladesh",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.se.com",
    "careerPageUrl": "https://www.se.com/ww/en/about-us/careers/overview/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-241",
    "name": "ABB Electrification & Automation Bangladesh",
    "industry": "Industrial Automation",
    "officialWebsite": "https://careers.abb",
    "careerPageUrl": "https://careers.abb/global/en/home",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-242",
    "name": "iconic Engineering Limited (Automation & Instrumentation)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.iconic.com.bd",
    "careerPageUrl": "https://www.iconic.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-243",
    "name": "Automation Engineering & Controls Ltd. (AECL)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.aecl-bd.com",
    "careerPageUrl": "https://www.aecl-bd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-244",
    "name": "PAC (Precise Automation & Controls)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.pacbd.com",
    "careerPageUrl": "https://www.pacbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-245",
    "name": "Sigma Engineers Ltd. (Industrial Automation & Elevators)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.sigmaengineers.com.bd",
    "careerPageUrl": "https://www.sigmaengineers.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-246",
    "name": "Industrial Automation & Engineering Ltd. (IAEL)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.iaelbd.com",
    "careerPageUrl": "https://www.iaelbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-247",
    "name": "Buhler Bangladesh (Industrial Process Automation)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.buhlergroup.com",
    "careerPageUrl": "https://www.buhlergroup.com/global/en/careers.html",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-248",
    "name": "Festo Bangladesh (Pneumatics & Industrial Automation)",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.festo.com",
    "careerPageUrl": "https://www.festo.com/us/en/e/about-festo/careers-id_1550/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-249",
    "name": "Energypac Engineering Limited",
    "industry": "Engineering",
    "officialWebsite": "https://energypac.com.bd",
    "careerPageUrl": "https://energypac.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-250",
    "name": "BBS Cables PLC",
    "industry": "Engineering",
    "officialWebsite": "https://www.bbscables.com.bd",
    "careerPageUrl": "https://www.bbscables.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-251",
    "name": "RR-Imperial Electricals Limited (RR Kabel)",
    "industry": "Engineering",
    "officialWebsite": "https://www.rr-imperial.com",
    "careerPageUrl": "https://www.rr-imperial.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-252",
    "name": "BRB Cable Industries Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.brbcable.com",
    "careerPageUrl": "https://www.brbcable.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-253",
    "name": "Super Star Group (SSG Electricals)",
    "industry": "Engineering",
    "officialWebsite": "https://www.ssgbd.com",
    "careerPageUrl": "https://www.ssgbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-254",
    "name": "MEP Group (Mohammadi Electric Wires & Cables)",
    "industry": "Engineering",
    "officialWebsite": "https://www.mepgroupbd.com",
    "careerPageUrl": "https://www.mepgroupbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-255",
    "name": "Poly Cable Industries Ltd.",
    "industry": "Engineering",
    "officialWebsite": "https://polycables.com.bd",
    "careerPageUrl": "https://polycables.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-256",
    "name": "Paradise Cables Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.paradisecables.com",
    "careerPageUrl": "https://www.paradisecables.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-257",
    "name": "Bizli Cables (RFL Electrical & Cables)",
    "industry": "Engineering",
    "officialWebsite": "https://www.bizlicables.com",
    "careerPageUrl": "https://rflbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-258",
    "name": "Partex Cables Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.partexcables.com",
    "careerPageUrl": "https://www.partexcables.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-259",
    "name": "SQ Wire & Cable Co. Ltd. (SQCables)",
    "industry": "Engineering",
    "officialWebsite": "https://www.sqcables.com",
    "careerPageUrl": "https://www.sqcables.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-260",
    "name": "Sunshine Cable & Rubber Works Ltd.",
    "industry": "Engineering",
    "officialWebsite": "https://www.sunshinecable.com",
    "careerPageUrl": "https://www.sunshinecable.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-261",
    "name": "Transtec Lighting & Electricals (Transcom)",
    "industry": "Engineering",
    "officialWebsite": "https://www.transtecbd.com",
    "careerPageUrl": "https://www.transcombd.com/career/join-us/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-262",
    "name": "Runner Automobiles PLC",
    "industry": "Engineering",
    "officialWebsite": "https://www.runnerbd.com",
    "careerPageUrl": "https://www.runnerbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-263",
    "name": "Uttara Motors Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.uttaramotorsltd.com",
    "careerPageUrl": "https://www.uttaramotorsltd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-264",
    "name": "Nitol Niloy Group (Nitol Motors)",
    "industry": "Engineering",
    "officialWebsite": "https://www.nitolniloy.com.bd",
    "careerPageUrl": "https://www.nitolniloy.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-265",
    "name": "ACI Motors Limited (Yamaha & Sonalika BD)",
    "industry": "Engineering",
    "officialWebsite": "https://www.acimotors-bd.com",
    "careerPageUrl": "https://www.acimotors-bd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-266",
    "name": "Aftab Automobiles Limited (Navana Group)",
    "industry": "Engineering",
    "officialWebsite": "https://www.aftabautomobiles.com",
    "careerPageUrl": "https://navana.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-267",
    "name": "Karnaphuli Group (Hino & Engineering Division)",
    "industry": "Engineering",
    "officialWebsite": "https://www.karnaphuli.com",
    "careerPageUrl": "https://www.karnaphuli.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-268",
    "name": "Western Marine Shipyard Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.wms.com.bd",
    "careerPageUrl": "https://www.wms.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-269",
    "name": "Ananda Shipyard & Slipways Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.anandashipyard.com",
    "careerPageUrl": "https://www.anandashipyard.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-270",
    "name": "Meghna Executive Holdings (Executive Motors)",
    "industry": "Engineering",
    "officialWebsite": "https://www.meghna-eh.com",
    "careerPageUrl": "https://www.meghna-eh.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-271",
    "name": "Berger Paints Bangladesh Limited",
    "industry": "Chemical",
    "officialWebsite": "https://www.bergerbd.com",
    "careerPageUrl": "https://www.bergerbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-272",
    "name": "Linde Bangladesh Limited",
    "industry": "Chemical",
    "officialWebsite": "https://www.linde.com.bd",
    "careerPageUrl": "https://www.linde.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-273",
    "name": "Asian Paints Bangladesh Ltd.",
    "industry": "Chemical",
    "officialWebsite": "https://www.asianpaints.com",
    "careerPageUrl": "https://careers.asianpaints.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-274",
    "name": "Kansai Nerolac Paints (Bangladesh) Ltd.",
    "industry": "Chemical",
    "officialWebsite": "https://www.nerolac.com.bd",
    "careerPageUrl": "https://www.nerolac.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-275",
    "name": "Roxy Paints Limited",
    "industry": "Chemical",
    "officialWebsite": "https://www.roxypaints.com",
    "careerPageUrl": "https://www.roxypaints.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-276",
    "name": "Elite Paint & Chemical Industries Ltd.",
    "industry": "Chemical",
    "officialWebsite": "https://www.elitepaint.com.bd",
    "careerPageUrl": "https://www.elitepaint.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-277",
    "name": "Rainbow Paints (RFL Chemical Division)",
    "industry": "Chemical",
    "officialWebsite": "https://www.rainbowpaintsbd.com",
    "careerPageUrl": "https://rflbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-278",
    "name": "Aqua Paints (Akij Chemical Division)",
    "industry": "Chemical",
    "officialWebsite": "https://www.aquapaints.com.bd",
    "careerPageUrl": "https://career.akijgroup.co/all-jobs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-279",
    "name": "Pailac Paints Ltd.",
    "industry": "Chemical",
    "officialWebsite": "https://www.pailacpaints.com",
    "careerPageUrl": "https://www.pailacpaints.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-280",
    "name": "Tasnim Chemical Complex Limited (TCCL - Meghna Group)",
    "industry": "Chemical",
    "officialWebsite": "https://www.tasnimchemical.com",
    "careerPageUrl": "https://www.mgi.org/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-281",
    "name": "Samuda Chemical Complex Limited (TK Group)",
    "industry": "Chemical",
    "officialWebsite": "https://www.samuda.com.bd",
    "careerPageUrl": "https://www.samuda.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-282",
    "name": "Global Heavy Chemicals Limited (Opsonin Group)",
    "industry": "Chemical",
    "officialWebsite": "https://www.ghclbd.com",
    "careerPageUrl": "https://www.ghclbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-283",
    "name": "Active Fine Chemicals Limited",
    "industry": "Chemical",
    "officialWebsite": "https://www.activefine.com",
    "careerPageUrl": "https://www.activefine.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-284",
    "name": "Spectra Oxygen Limited",
    "industry": "Chemical",
    "officialWebsite": "https://www.spectraoxygen.com",
    "careerPageUrl": "https://www.spectraoxygen.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-285",
    "name": "Islam Oxygen Limited",
    "industry": "Chemical",
    "officialWebsite": "https://www.islamoxygen.com",
    "careerPageUrl": "https://www.islamoxygen.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-286",
    "name": "Evercare Hospital Dhaka",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.evercarebd.com",
    "careerPageUrl": "https://www.evercarebd.com/en/dhaka/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-287",
    "name": "Evercare Hospital Chattogram",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.evercarebd.com",
    "careerPageUrl": "https://www.evercarebd.com/en/chattogram/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-288",
    "name": "The Ibn Sina Trust (Hospitals & Diagnostics)",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.ibnsinatrust.com",
    "careerPageUrl": "https://career.ibnsinatrust.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-289",
    "name": "Labaid Diagnostics & Specialized Hospital",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://labaid.com.bd",
    "careerPageUrl": "https://labaiddiagnostics.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-290",
    "name": "Bangladesh Specialized Hospital PLC (BSHL)",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.bdspecializedhospital.com",
    "careerPageUrl": "https://www.bdspecializedhospital.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-291",
    "name": "Asgar Ali Hospital",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.asgaralihospital.com",
    "careerPageUrl": "https://www.asgaralihospital.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-292",
    "name": "Praava Health Bangladesh",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.praavahealth.com",
    "careerPageUrl": "https://web.praavahealth.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-293",
    "name": "Square Hospitals Limited",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.squarehospital.com",
    "careerPageUrl": "https://www.squarehospital.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-294",
    "name": "United Hospital Limited",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.uhlbd.com",
    "careerPageUrl": "https://beta.uhlbd.com/pages/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-295",
    "name": "Popular Diagnostic Centre Ltd. & Hospital",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.populardiagnostic.com",
    "careerPageUrl": "https://www.populardiagnostic.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-296",
    "name": "AMZ Hospital Limited",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.amzhospitalbd.com",
    "careerPageUrl": "https://www.amzhospitalbd.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-297",
    "name": "Universal Medical College & Hospital Ltd.",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.umchltd.com",
    "careerPageUrl": "https://www.umchltd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-298",
    "name": "Impulse Hospital (Dhaka Imperial Hospital)",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.impulsehospitalbd.com",
    "careerPageUrl": "https://www.impulsehospitalbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-299",
    "name": "Chattogram Imperial Hospital Limited (IHL)",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.ihlbd.org",
    "careerPageUrl": "https://www.ihlbd.org/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-300",
    "name": "Anwer Khan Modern Medical College Hospital",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.akmmch.com",
    "careerPageUrl": "https://www.akmmch.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-301",
    "name": "Enam Medical College & Hospital",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.emch.com.bd",
    "careerPageUrl": "https://www.emch.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-302",
    "name": "Green Life Hospital Limited",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.greenlifehospital.com.bd",
    "careerPageUrl": "https://www.greenlifehospital.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-303",
    "name": "Central Hospital Limited",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.centralhospitalltdbd.com",
    "careerPageUrl": "https://www.centralhospitalltdbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-304",
    "name": "Delta Hospital Limited",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.deltahospitalbd.com",
    "careerPageUrl": "https://www.deltahospitalbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-305",
    "name": "Comfort Diagnostic Centre & Nursing Home",
    "industry": "Hospital & Healthcare",
    "officialWebsite": "https://www.comfortbd.com",
    "careerPageUrl": "https://www.comfortbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-306",
    "name": "Golden Harvest Cold Storage & Agro Industries Ltd.",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.goldenharvestbd.com",
    "careerPageUrl": "https://www.goldenharvestbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-307",
    "name": "Igloo Ice Cream & Cold Chain (Abdul Monem Ltd.)",
    "industry": "Cold Storage",
    "officialWebsite": "https://igloobd.com",
    "careerPageUrl": "https://igloobd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-308",
    "name": "Ejab Group of Industries (Cold Storage Division)",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.ejabgroup.com",
    "careerPageUrl": "https://www.ejabgroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-309",
    "name": "Kazi Farms Group (Frozen Food & Cold Chain)",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.kazifarms.com",
    "careerPageUrl": "https://www.kazifarms.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-310",
    "name": "Paragon Group (Agro & Cold Storage)",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.paragongroup-bd.com",
    "careerPageUrl": "https://www.paragongroup-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-311",
    "name": "CP Bangladesh Co., Ltd. (Cold Chain & Processing)",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.cpbangladesh.com",
    "careerPageUrl": "https://www.cpbangladesh.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-312",
    "name": "Aftab Bahumukhi Farms Ltd. (Cold Storage & Agro)",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.aftab.com.bd",
    "careerPageUrl": "https://www.aftab.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-313",
    "name": "Quality Feeds & Cold Storage Limited",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.qualityfeeds.com",
    "careerPageUrl": "https://www.qualityfeeds.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-314",
    "name": "Nourish Poultry & Cold Chain Ltd.",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.nourish-bd.com",
    "careerPageUrl": "https://www.nourish-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-315",
    "name": "AG Agro Foods Limited (Ahsan Group Cold Chain)",
    "industry": "Cold Storage",
    "officialWebsite": "https://www.agagrofoods.com",
    "careerPageUrl": "https://www.agagrofoods.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-316",
    "name": "Grameenphone PLC",
    "industry": "Telecom",
    "officialWebsite": "https://www.grameenphone.com",
    "careerPageUrl": "https://www.grameenphone.com/about/career",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-317",
    "name": "Banglalink Digital Communications Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.banglalink.net",
    "careerPageUrl": "https://www.banglalink.net/careers",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-318",
    "name": "Robi Axiata PLC",
    "industry": "Telecom",
    "officialWebsite": "https://www.robi.com.bd",
    "careerPageUrl": "https://www.robi.com.bd/en/corporate/career-at-robi",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-319",
    "name": "Fiber@Home Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.fiberathome.net",
    "careerPageUrl": "https://www.fiberathome.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-320",
    "name": "Summit Communications Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.summitcommunications.net",
    "careerPageUrl": "https://www.summitcommunications.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-321",
    "name": "Link3 Technologies Limited",
    "industry": "Telecom",
    "officialWebsite": "https://link3.net",
    "careerPageUrl": "https://link3.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-322",
    "name": "Amber IT Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.amberit.com.bd",
    "careerPageUrl": "https://www.amberit.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-323",
    "name": "Carnival Internet (SSD-Tech)",
    "industry": "Telecom",
    "officialWebsite": "https://www.carnival.com.bd",
    "careerPageUrl": "https://www.carnival.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-324",
    "name": "Dot Internet Bangladesh",
    "industry": "Telecom",
    "officialWebsite": "https://dotinternetbd.com",
    "careerPageUrl": "https://dotinternetbd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-325",
    "name": "Bahon Limited (NTTN Telecom Network)",
    "industry": "Telecom",
    "officialWebsite": "https://www.bahon.com.bd",
    "careerPageUrl": "https://www.bahon.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-326",
    "name": "edotco Bangladesh Co. Ltd. (Telecom Tower Infrastructure)",
    "industry": "Telecom",
    "officialWebsite": "https://www.edotcogroup.com",
    "careerPageUrl": "https://www.edotcogroup.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-327",
    "name": "Summit Towers Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.summittowers.net",
    "careerPageUrl": "https://www.summittowers.net/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-328",
    "name": "Kirtonkhola Tower Bangladesh Limited (KTBL)",
    "industry": "Telecom",
    "officialWebsite": "https://www.ktbl.com.bd",
    "careerPageUrl": "https://www.ktbl.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-329",
    "name": "ADN Telecom PLC",
    "industry": "Telecom",
    "officialWebsite": "https://www.adntel.com.bd",
    "careerPageUrl": "https://www.adntel.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-330",
    "name": "Agni Systems PLC",
    "industry": "Telecom",
    "officialWebsite": "https://www.agni.com",
    "careerPageUrl": "https://www.agni.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-331",
    "name": "Bangladesh Internet Exchange Ltd. (BOL / Beximco IT)",
    "industry": "Telecom",
    "officialWebsite": "https://www.bol-online.com",
    "careerPageUrl": "https://www.bol-online.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-332",
    "name": "Infozillion Teletech BD Ltd.",
    "industry": "Telecom",
    "officialWebsite": "https://www.infozillionbd.com",
    "careerPageUrl": "https://www.infozillionbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-333",
    "name": "Mir Telecom Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.mirtelecom-bd.com",
    "careerPageUrl": "https://www.mirtelecom-bd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-334",
    "name": "MAX Group (Max Infrastructure Limited)",
    "industry": "Construction",
    "officialWebsite": "https://www.maxgroup-bd.com",
    "careerPageUrl": "https://www.maxgroup-bd.com/job-opening",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-335",
    "name": "Mir Akhter Hossain Limited",
    "industry": "Construction",
    "officialWebsite": "https://mirakhter.com",
    "careerPageUrl": "https://mirakhter.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-336",
    "name": "National Development Engineers Ltd. (NDE)",
    "industry": "Construction",
    "officialWebsite": "https://nde.com.bd",
    "careerPageUrl": "https://nde.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-337",
    "name": "Navana Engineering Limited",
    "industry": "Construction",
    "officialWebsite": "https://www.navanaengineering.com",
    "careerPageUrl": "https://www.navanaengineering.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-338",
    "name": "Toma Construction & Co. Ltd.",
    "industry": "Construction",
    "officialWebsite": "https://www.tomagroup.com.bd",
    "careerPageUrl": "https://www.tomagroup.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-339",
    "name": "Spectra Engineers Limited",
    "industry": "Construction",
    "officialWebsite": "https://www.spectragroup.com.bd",
    "careerPageUrl": "https://www.spectragroup.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-340",
    "name": "Abdul Monem Limited (Construction Division)",
    "industry": "Construction",
    "officialWebsite": "https://www.abdulmonem.com",
    "careerPageUrl": "https://www.abdulmonem.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-341",
    "name": "Western Engineering Pvt. Ltd.",
    "industry": "Construction",
    "officialWebsite": "https://www.westernengineeringbd.com",
    "careerPageUrl": "https://www.westernengineeringbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-342",
    "name": "Confidence Infrastructure PLC",
    "industry": "Construction",
    "officialWebsite": "https://www.confidenceinfrastructure.com",
    "careerPageUrl": "https://www.confidencegroup.com.bd/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-343",
    "name": "Star Infrastructure & Construction Ltd.",
    "industry": "Construction",
    "officialWebsite": "https://www.starinfrastructurebd.com",
    "careerPageUrl": "https://www.starinfrastructurebd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-344",
    "name": "Project Builders Limited (PBL)",
    "industry": "Construction",
    "officialWebsite": "https://www.pbl-bd.com",
    "careerPageUrl": "https://www.pbl-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-345",
    "name": "Next Spaces Limited (Construction & EPC)",
    "industry": "Construction",
    "officialWebsite": "https://www.nextspaces.net",
    "careerPageUrl": "https://www.nextspaces.net/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-346",
    "name": "Rahimafrooz Renewable Energy & Storage Power",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.rahimafrooz.com",
    "careerPageUrl": "https://www.rahimafrooz.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-347",
    "name": "ME SOLshare Ltd.",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://solshare.com",
    "careerPageUrl": "https://solshare.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-348",
    "name": "Omera Petroleum Limited (Omera LPG)",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.omeralpg.com",
    "careerPageUrl": "https://www.omeralpg.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-349",
    "name": "BM Energy (BD) Limited (BM LP Gas)",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.bmlpgas.com",
    "careerPageUrl": "https://www.bmlpgas.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-350",
    "name": "Beximco LPG Unit-1 Ltd.",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.beximcolpg.com",
    "careerPageUrl": "https://www.beximcolpg.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-351",
    "name": "Bashundhara LP Gas Limited",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.bashundharalpgas.com",
    "careerPageUrl": "https://www.bashundharalpgas.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-352",
    "name": "JMI Industrial Gas & LPG Ltd.",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.jmigroup-bd.com",
    "careerPageUrl": "https://www.jmigroup-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-353",
    "name": "Totalgaz Bangladesh (Premier LP Gas)",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.totalgaz.com.bd",
    "careerPageUrl": "https://www.totalgaz.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-354",
    "name": "Laugfs Gas (Bangladesh) Limited",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.laugfsgas.com.bd",
    "careerPageUrl": "https://www.laugfsgas.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-355",
    "name": "Petromax LPG Limited",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.petromaxlpg.com",
    "careerPageUrl": "https://www.petromaxlpg.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-356",
    "name": "Joules Power Limited (Solar IPP)",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.joulespower.com",
    "careerPageUrl": "https://www.joulespower.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-357",
    "name": "Sympa Solar Power Limited",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.sympasolar.com",
    "careerPageUrl": "https://www.sympasolar.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-358",
    "name": "Solaric Bangladesh (Solar Electro International)",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.solaricglobal.com",
    "careerPageUrl": "https://www.solaricglobal.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-359",
    "name": "Bright Green Energy Foundation (BGEF)",
    "industry": "Energy & Renewable Energy",
    "officialWebsite": "https://www.bgef.org",
    "careerPageUrl": "https://www.bgef.org/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-360",
    "name": "Shanta Holdings Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://shantaholdings.com",
    "careerPageUrl": "https://shantaholdings.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-361",
    "name": "Sheltech (Pvt.) Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://sheltech-bd.com",
    "careerPageUrl": "https://sheltech-bd.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-362",
    "name": "Concord Group of Companies",
    "industry": "Real Estate",
    "officialWebsite": "https://concordgroupbd.com",
    "careerPageUrl": "https://concordgroupbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-363",
    "name": "Assure Group",
    "industry": "Real Estate",
    "officialWebsite": "https://www.assuregroupbd.com",
    "careerPageUrl": "https://www.assuregroupbd.com/about-us/career-opportunities",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-364",
    "name": "Navana Real Estate Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://navanarealestate.com",
    "careerPageUrl": "https://navana.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-365",
    "name": "bti (Building Technology & Ideas Ltd.)",
    "industry": "Real Estate",
    "officialWebsite": "https://www.btibd.com",
    "careerPageUrl": "https://www.btibd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-366",
    "name": "Rangs Properties Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.rangsproperties.com",
    "careerPageUrl": "https://www.rangsproperties.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-367",
    "name": "Sanmar Properties Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://mysanmar.com",
    "careerPageUrl": "https://mysanmar.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-368",
    "name": "Edison Real Estate Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.edisonrealestatebd.com",
    "careerPageUrl": "https://www.edisonrealestatebd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-369",
    "name": "Tropical Homes Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.tropicalhomesbd.com",
    "careerPageUrl": "https://www.tropicalhomesbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-370",
    "name": "Anwar Landmark Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.anwarlandmark.com",
    "careerPageUrl": "https://www.anwarlandmark.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-371",
    "name": "DOM-INNO Builders Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.dom-inno.com",
    "careerPageUrl": "https://www.dom-inno.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-372",
    "name": "Suvastu Properties Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.suvastu.com",
    "careerPageUrl": "https://www.suvastu.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-373",
    "name": "Credence Housing Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.credencehousing.com",
    "careerPageUrl": "https://www.credencehousing.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-374",
    "name": "South Breeze Housing Limited",
    "industry": "Real Estate",
    "officialWebsite": "https://www.southbreezehousing.com",
    "careerPageUrl": "https://www.southbreezehousing.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-375",
    "name": "Intertek Bangladesh",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.intertek.com",
    "careerPageUrl": "https://www.intertek.com/bangladesh/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-376",
    "name": "Hitachi Energy (Bangladesh Operations)",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.hitachienergy.com",
    "careerPageUrl": "https://www.hitachienergy.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-377",
    "name": "GE Vernova (Power & Engineering Services)",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://careers.gevernova.com",
    "careerPageUrl": "https://careers.gevernova.com/",
    "scrapingMethod": "playwright",
    "websiteStatus": "active"
  },
  {
    "id": "priv-378",
    "name": "Tetra Pak South Asia / Bangladesh",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.tetrapak.com",
    "careerPageUrl": "https://www.tetrapak.com/about-tetra-pak/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-379",
    "name": "Bangladesh Honda Private Limited",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.bdhonda.com",
    "careerPageUrl": "https://www.bdhonda.com/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-380",
    "name": "Bureau Veritas Bangladesh",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.bureauveritas.com.bd",
    "careerPageUrl": "https://www.bureauveritas.com.bd/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-381",
    "name": "SGS Bangladesh Limited",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.sgs.com/en-bd",
    "careerPageUrl": "https://www.sgs.com/en-bd/company/careers-at-sgs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-382",
    "name": "TUV SUD Bangladesh (Pvt.) Ltd.",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.tuvsud.com/en-bd",
    "careerPageUrl": "https://www.tuvsud.com/en-bd/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-383",
    "name": "Hohenstein Laboratories Bangladesh Ltd.",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.hohenstein.com",
    "careerPageUrl": "https://www.hohenstein.com/en/about-hohenstein/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-384",
    "name": "Orient Energy Systems Bangladesh Ltd.",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.orientenergy.com",
    "careerPageUrl": "https://www.orientenergy.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-385",
    "name": "Bangla Trac Limited (CAT Dealer Bangladesh)",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.banglatrac.com",
    "careerPageUrl": "https://www.banglatrac.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-386",
    "name": "Clarke Energy Bangladesh Limited (Jenbacher Gas Engines)",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.clarke-energy.com",
    "careerPageUrl": "https://www.clarke-energy.com/careers/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-387",
    "name": "Wartsila Bangladesh Limited",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.wartsila.com",
    "careerPageUrl": "https://www.wartsila.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-388",
    "name": "MAN Energy Solutions Bangladesh",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.man-es.com",
    "careerPageUrl": "https://www.man-es.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-389",
    "name": "Cummins Power Generation / Jakson Bangladesh",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.cummins.com",
    "careerPageUrl": "https://www.cummins.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-390",
    "name": "Aggreko Bangladesh Energy Ltd.",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.aggreko.com",
    "careerPageUrl": "https://www.aggreko.com/en-gb/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-391",
    "name": "Dana Engineers International Limited",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.danagroupbd.com",
    "careerPageUrl": "https://www.danagroupbd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-392",
    "name": "Property Lifts (PRAN-RFL Elevator & MEP Services)",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.propertylifts.com",
    "careerPageUrl": "https://rflbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-393",
    "name": "Manelith Engineering & MEP Services BD",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.manelith.com",
    "careerPageUrl": "https://www.manelith.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-394",
    "name": "Excel Engineering & Construction Ltd.",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.excelengbd.com",
    "careerPageUrl": "https://www.excelengbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-395",
    "name": "Incepta Vaccine Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.inceptavaccine.com",
    "careerPageUrl": "https://www.inceptapharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-396",
    "name": "Incepta Hygiene and Hospicare Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.inceptapharma.com",
    "careerPageUrl": "https://www.inceptapharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-397",
    "name": "Renata Oncology & Animal Health Division",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://renata-ltd.com",
    "careerPageUrl": "https://career.renata-ltd.com/Account/Register",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-398",
    "name": "Beacon Medicare Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://global.beaconpharma.com.bd",
    "careerPageUrl": "https://global.beaconpharma.com.bd/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-399",
    "name": "Healthcare Formulations Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.hplbd.com",
    "careerPageUrl": "https://www.hplbd.com/Career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-400",
    "name": "Square Cephalosporins Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.squarepharma.com.bd",
    "careerPageUrl": "http://career.squarepharma.com.bd/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-401",
    "name": "Square Lifesciences Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.squarepharma.com.bd",
    "careerPageUrl": "https://squarepharma.com.bd/career_4.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-402",
    "name": "Beximco Infusion Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.beximco-pharma.com",
    "careerPageUrl": "https://www.beximco-pharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-403",
    "name": "Opso Saline Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.opsonin-pharma.com",
    "careerPageUrl": "https://www.opsonin-pharma.com/job-announcement.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-404",
    "name": "Libra Infusions Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.librabd.com",
    "careerPageUrl": "https://www.librabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-405",
    "name": "Orion Infusion Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.orioninfusion.com",
    "careerPageUrl": "https://www.orionpharmabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-406",
    "name": "Amulet Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.amuletpharma.com",
    "careerPageUrl": "https://www.amuletpharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-407",
    "name": "Concord Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.concordpharma-bd.com",
    "careerPageUrl": "https://www.concordpharma-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-408",
    "name": "Al-Madina Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.almadinapharma.com",
    "careerPageUrl": "https://www.almadinapharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-409",
    "name": "Veritas Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.veritaspharma-bd.com",
    "careerPageUrl": "https://www.veritaspharma-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-410",
    "name": "white Horse Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.whitehorsepharma.com",
    "careerPageUrl": "https://www.whitehorsepharma.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-411",
    "name": "Zenith Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.zenithpharmabd.com",
    "careerPageUrl": "https://www.zenithpharmabd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-412",
    "name": "Biogen Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.biogenpharmabd.com",
    "careerPageUrl": "https://www.biogenpharmabd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-413",
    "name": "Doctor TIMS Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.doctortims.com",
    "careerPageUrl": "https://www.doctortims.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-414",
    "name": "One Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.onepharmaltd.com",
    "careerPageUrl": "https://www.onepharmaltd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-415",
    "name": "Kumudini Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.kumudinipharma.com.bd",
    "careerPageUrl": "https://www.kumudinipharma.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-416",
    "name": "Apex Pharma Limited",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.apexpharmabd.com",
    "careerPageUrl": "https://www.apexpharmabd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-417",
    "name": "Benham Pharmaceuticals Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.benhampharma.com",
    "careerPageUrl": "https://www.benhampharma.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-418",
    "name": "Mundipharma (Bangladesh) Pvt. Ltd.",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://www.mundipharma.com.bd",
    "careerPageUrl": "https://www.mundipharma.com.bd/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-419",
    "name": "AstraZeneca Bangladesh Partner Operations",
    "industry": "Pharmaceutical",
    "officialWebsite": "https://careers.astrazeneca.com",
    "careerPageUrl": "https://careers.astrazeneca.com/search-jobs",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-420",
    "name": "Square Fashions Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://fashions.squaregroup.com",
    "careerPageUrl": "https://fashions.squaregroup.com/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-421",
    "name": "Square Denims Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://denims.squaregroup.com",
    "careerPageUrl": "https://denims.squaregroup.com/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-422",
    "name": "Square Apparels Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://apparels.squaregroup.com",
    "careerPageUrl": "https://apparels.squaregroup.com/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-423",
    "name": "DBL Ceramics Limited",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.dblceramics.com",
    "careerPageUrl": "https://dbl-group.com/careers/openings",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-424",
    "name": "Jinnat Knitwears Limited (DBL)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.dbl-group.com",
    "careerPageUrl": "https://dbl-group.com/careers/openings",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-425",
    "name": "Matin Dyeing & Knitwears Ltd.",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.dbl-group.com",
    "careerPageUrl": "https://dbl-group.com/careers/openings",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-426",
    "name": "Hamza Textiles Limited (DBL)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.dbl-group.com",
    "careerPageUrl": "https://dbl-group.com/careers/openings",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-427",
    "name": "Parkway Packaging & Printing Ltd.",
    "industry": "Manufacturing",
    "officialWebsite": "https://www.dbl-group.com",
    "careerPageUrl": "https://dbl-group.com/careers/openings",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-428",
    "name": "Noman Terry Towel Mills Ltd.",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.nomangroup.com",
    "careerPageUrl": "https://www.nomangroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-429",
    "name": "Nice Denim Mills Ltd. (Noman Group)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.nicedenim.com",
    "careerPageUrl": "https://www.nomangroup.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-430",
    "name": "Israq Spinning Mills Ltd.",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.israqspinning.com",
    "careerPageUrl": "https://www.israqspinning.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-431",
    "name": "Padma Textiles Limited",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.padmatextiles.com",
    "careerPageUrl": "https://www.padmatextiles.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-432",
    "name": "Silver Line Group (Composite Textile)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.silverlinebd.com",
    "careerPageUrl": "https://www.silverlinebd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-433",
    "name": "Mahmud Group (Mahmud Denims & Spinning)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.mahmudgroup.com",
    "careerPageUrl": "https://www.mahmudgroup.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-434",
    "name": "Nassa Group (Nassa Apparels & Spinning)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.nassagroup.org",
    "careerPageUrl": "https://www.nassagroup.org/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-435",
    "name": "Babylon Group (Garments & Accessories)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.babylon-bd.com",
    "careerPageUrl": "https://www.babylon-bd.com/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-436",
    "name": "Dekko Isho Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.dekkoisho.com",
    "careerPageUrl": "https://www.dekkoisho.com/careers",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-437",
    "name": "Concorde Garments Group",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.concordegarments.com",
    "careerPageUrl": "https://www.concordegarments.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-438",
    "name": "Chorka Textile Limited (PRAN-RFL)",
    "industry": "Textile & Garments",
    "officialWebsite": "https://www.chorkatextile.com",
    "careerPageUrl": "https://rflbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-439",
    "name": "Getco Group Bangladesh (Engineering & Agro)",
    "industry": "Engineering",
    "officialWebsite": "https://www.getco.com.bd",
    "careerPageUrl": "https://www.getco.com.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-440",
    "name": "Trade Services International (TSI Substation & Solar)",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.tsibd.com",
    "careerPageUrl": "https://www.tsibd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-441",
    "name": "Electro-Mech Automation & Engineering Ltd.",
    "industry": "Industrial Automation",
    "officialWebsite": "https://www.electromechbd.com",
    "careerPageUrl": "https://www.electromechbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-442",
    "name": "Multi Product Engineering Limited",
    "industry": "Engineering",
    "officialWebsite": "https://www.mpelbd.com",
    "careerPageUrl": "https://www.mpelbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-443",
    "name": "Rankstel (Ranks Telecom Limited)",
    "industry": "Telecom",
    "officialWebsite": "https://www.rankstel.com",
    "careerPageUrl": "https://www.rankstel.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-444",
    "name": "MetroNet Bangladesh Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.metronet.com.bd",
    "careerPageUrl": "https://www.metronet.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-445",
    "name": "ICC Communication Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.icc.com.bd",
    "careerPageUrl": "https://www.icc.com.bd/career/",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-446",
    "name": "Exord Online Limited (ISP)",
    "industry": "Telecom",
    "officialWebsite": "https://www.exordonline.com",
    "careerPageUrl": "https://www.exordonline.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-447",
    "name": "Mime (Confidence Group ISP & Digital)",
    "industry": "Telecom",
    "officialWebsite": "https://www.mimebd.com",
    "careerPageUrl": "https://www.confidencegroup.com.bd/career.php",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-448",
    "name": "Bangla Phone Limited",
    "industry": "Telecom",
    "officialWebsite": "https://www.banglaphone.net.bd",
    "careerPageUrl": "https://www.banglaphone.net.bd/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  },
  {
    "id": "priv-449",
    "name": "Square InformatiX Limited",
    "industry": "Engineering Service Companies",
    "officialWebsite": "https://www.silbd.com",
    "careerPageUrl": "https://www.silbd.com/career",
    "scrapingMethod": "cheerio",
    "websiteStatus": "active"
  }
];

module.exports = companies;
