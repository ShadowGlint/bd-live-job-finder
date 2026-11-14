/**
 * BD LIVE JOB FINDER — OFFICIAL COMPANY CAREER REGISTRY (115 Verified Websites)
 * Covers all 20 target industrial sectors in Bangladesh.
 *
 * Fields per company:
 * - id: Unique identifier
 * - name: Company Name
 * - industry: Target Industry (1 of 20 categories)
 * - officialWebsite: Official Root Website
 * - careerPageUrl: Official Career / Recruitment / Notice Board Page URL
 * - scrapingMethod: 'cheerio' | 'playwright' | 'rss'
 * - websiteStatus: 'active' | 'inactive'
 */

const companies = [
  // ==========================================================================
  // 1. PHARMACEUTICAL (15 Companies)
  // ==========================================================================
  {
    id: 'pharma-01',
    name: 'Square Pharmaceuticals PLC',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.squarepharma.com.bd',
    careerPageUrl: 'https://squarepharma.com.bd/career_4.php',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-02',
    name: 'Incepta Pharmaceuticals Ltd.',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.inceptapharma.com',
    careerPageUrl: 'https://www.inceptapharma.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-03',
    name: 'Renata PLC',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://renata-ltd.com',
    careerPageUrl: 'https://renata-ltd.com/career',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-04',
    name: 'Beximco Pharmaceuticals PLC',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.beximcopharma.com',
    careerPageUrl: 'https://beximcopharma.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-05',
    name: 'Eskayef Pharmaceuticals Ltd. (SK+F)',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://skfbd.com',
    careerPageUrl: 'https://skfbd.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-06',
    name: 'Aristopharma Ltd.',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://aristopharma.com',
    careerPageUrl: 'https://aristopharma.com/page/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-07',
    name: 'Opsonin Pharma Limited',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.opsonin-pharma.com',
    careerPageUrl: 'https://www.opsonin-pharma.com/job-announcement.php',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-08',
    name: 'The ACME Laboratories Ltd.',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.acmeglobal.com',
    careerPageUrl: 'https://www.acmeglobal.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-09',
    name: 'Beacon Pharmaceuticals PLC',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://beaconpharma.com.bd',
    careerPageUrl: 'https://beaconpharma.com.bd/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-10',
    name: 'The IBN SINA Pharmaceutical Industry PLC',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.ibnsinapharma.com',
    careerPageUrl: 'https://ibnsinapharma.com/carrier/available-jobs',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-11',
    name: 'Radiant Pharmaceuticals Limited',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.radiantpharmabd.com',
    careerPageUrl: 'https://www.radiantpharmabd.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-12',
    name: 'Popular Pharmaceuticals PLC',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.popular-pharma.com',
    careerPageUrl: 'https://www.popular-pharma.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-13',
    name: 'UniMed UniHealth Pharmaceuticals Ltd.',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://unimedunihealth.com',
    careerPageUrl: 'https://unimedunihealth.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-14',
    name: 'Labaid Pharmaceuticals Ltd.',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://labaidpharma.com.bd',
    careerPageUrl: 'https://labaidpharma.com.bd/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'pharma-15',
    name: 'Orion Pharma Ltd.',
    industry: 'Pharmaceutical',
    officialWebsite: 'https://www.orionpharmabd.com',
    careerPageUrl: 'https://www.orionpharmabd.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 2. POWER GENERATION (10 Companies)
  // ==========================================================================
  {
    id: 'powergen-01',
    name: 'Electricity Generation Company of Bangladesh (EGCB)',
    industry: 'Power Generation',
    officialWebsite: 'https://egcb.gov.bd',
    careerPageUrl: 'https://egcb.gov.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-02',
    name: 'Ashuganj Power Station Company Ltd. (APSCL)',
    industry: 'Power Generation',
    officialWebsite: 'https://apscl.gov.bd',
    careerPageUrl: 'https://apscl.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-03',
    name: 'North-West Power Generation Company Ltd. (NWPGCL)',
    industry: 'Power Generation',
    officialWebsite: 'https://nwpgcl.gov.bd',
    careerPageUrl: 'https://nwpgcl.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-04',
    name: 'Rural Power Company Ltd. (RPCL)',
    industry: 'Power Generation',
    officialWebsite: 'https://rpcl.gov.bd',
    careerPageUrl: 'https://rpcl.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-05',
    name: 'Bangladesh-China Power Company Ltd. (BCPCL)',
    industry: 'Power Generation',
    officialWebsite: 'https://www.bcpcl.org.bd',
    careerPageUrl: 'https://career.bcpcl.org.bd/notice-board',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-06',
    name: 'Coal Power Generation Company Bangladesh Ltd. (CPGCBL)',
    industry: 'Power Generation',
    officialWebsite: 'https://cpgcbl.gov.bd',
    careerPageUrl: 'https://cpgcbl.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-07',
    name: 'Summit Power International',
    industry: 'Power Generation',
    officialWebsite: 'https://summitpowerinternational.com',
    careerPageUrl: 'https://summitpowerinternational.com/career-opportunities',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-08',
    name: 'United Power Generation & Distribution Co. Ltd. (United Group)',
    industry: 'Power Generation',
    officialWebsite: 'https://www.united.com.bd',
    careerPageUrl: 'https://www.united.com.bd/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-09',
    name: 'Baraka Power Limited',
    industry: 'Power Generation',
    officialWebsite: 'https://barakapower.com',
    careerPageUrl: 'https://barakapower.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powergen-10',
    name: 'Nutan Bidyut (Bangladesh) Ltd. (NBBL)',
    industry: 'Power Generation',
    officialWebsite: 'https://www.nutanbidyut.com',
    careerPageUrl: 'https://www.nutanbidyut.com/jobs',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 3. POWER DISTRIBUTION (7 Companies)
  // ==========================================================================
  {
    id: 'powerdist-01',
    name: 'Bangladesh Power Development Board (BPDB)',
    industry: 'Power Distribution',
    officialWebsite: 'https://bpdb.gov.bd',
    careerPageUrl: 'https://bpdb.gov.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powerdist-02',
    name: 'Power Grid Bangladesh PLC (PGCB)',
    industry: 'Power Distribution',
    officialWebsite: 'https://pgcb.gov.bd',
    careerPageUrl: 'https://pgcb.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powerdist-03',
    name: 'Dhaka Power Distribution Company Ltd. (DPDC)',
    industry: 'Power Distribution',
    officialWebsite: 'https://dpdc.gov.bd',
    careerPageUrl: 'https://dpdc.org.bd/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powerdist-04',
    name: 'Dhaka Electric Supply Company Ltd. (DESCO)',
    industry: 'Power Distribution',
    officialWebsite: 'https://desco.gov.bd',
    careerPageUrl: 'https://desco.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powerdist-05',
    name: 'Northern Electricity Supply PLC (NESCO)',
    industry: 'Power Distribution',
    officialWebsite: 'https://nesco.gov.bd',
    careerPageUrl: 'https://career.nesco.gov.bd/Account/Notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powerdist-06',
    name: 'West Zone Power Distribution Company Ltd. (WZPDCL)',
    industry: 'Power Distribution',
    officialWebsite: 'https://wzpdcl.gov.bd',
    careerPageUrl: 'https://jobs.wzpdcl.gov.bd:6780/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'powerdist-07',
    name: 'Bangladesh Rural Electrification Board (BREB)',
    industry: 'Power Distribution',
    officialWebsite: 'https://reb.gov.bd',
    careerPageUrl: 'https://reb.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 4. TEXTILE & GARMENTS (8 Companies)
  // ==========================================================================
  {
    id: 'textile-01',
    name: 'DBL Group',
    industry: 'Textile & Garments',
    officialWebsite: 'https://www.dbl-group.com',
    careerPageUrl: 'https://dbl-group.com/careers/openings',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'textile-02',
    name: 'Epyllion Group',
    industry: 'Textile & Garments',
    officialWebsite: 'https://www.epylliongroup.com',
    careerPageUrl: 'https://www.epylliongroup.com/epyllion_job/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'textile-03',
    name: 'Fakir Knitwears Ltd. (Fakir Group)',
    industry: 'Textile & Garments',
    officialWebsite: 'https://fakirgroup.com',
    careerPageUrl: 'https://career.fakirgroup.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'textile-04',
    name: 'Envoy Textiles Limited',
    industry: 'Textile & Garments',
    officialWebsite: 'https://envoytextiles.com',
    careerPageUrl: 'https://envoytextiles.com/envoy/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'textile-05',
    name: 'Pacific Jeans Group',
    industry: 'Textile & Garments',
    officialWebsite: 'https://pacificjeans.com',
    careerPageUrl: 'https://pacificjeans.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'textile-06',
    name: 'Urmi Group',
    industry: 'Textile & Garments',
    officialWebsite: 'https://urmigroup.com',
    careerPageUrl: 'https://urmigroup.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'textile-07',
    name: 'Snowtex Group',
    industry: 'Textile & Garments',
    officialWebsite: 'https://snowtex.com.bd',
    careerPageUrl: 'https://snowtex.com.bd/',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'textile-08',
    name: 'Ha-Meem Group',
    industry: 'Textile & Garments',
    officialWebsite: 'https://www.hameemgroup.com',
    careerPageUrl: 'https://www.hameemgroup.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 5. STEEL & CEMENT (9 Companies)
  // ==========================================================================
  {
    id: 'steel-01',
    name: 'BSRM (Bangladesh Steel Re-Rolling Mills)',
    industry: 'Steel & Cement',
    officialWebsite: 'https://bsrm.com',
    careerPageUrl: 'https://careers.bsrm.com/viewalljobs/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-02',
    name: 'KSRM Steel Plant Ltd.',
    industry: 'Steel & Cement',
    officialWebsite: 'https://ksrm.com.bd',
    careerPageUrl: 'https://ksrm.com.bd/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-03',
    name: 'Rahim Steel Mills Co. (Pvt.) Ltd.',
    industry: 'Steel & Cement',
    officialWebsite: 'https://rahimsteel.com.bd',
    careerPageUrl: 'https://rahimsteel.com.bd/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-04',
    name: 'GPH Ispat Limited',
    industry: 'Steel & Cement',
    officialWebsite: 'https://gphispat.com.bd',
    careerPageUrl: 'https://gphispat.com.bd/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-05',
    name: 'LafargeHolcim Bangladesh PLC',
    industry: 'Steel & Cement',
    officialWebsite: 'https://www.lafargeholcim.com.bd',
    careerPageUrl: 'https://www.lafargeholcim.com.bd/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-06',
    name: 'Crown Cement PLC',
    industry: 'Steel & Cement',
    officialWebsite: 'https://crowncement.com',
    careerPageUrl: 'https://crowncement.com/available-jobs/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-07',
    name: 'Shah Cement Industries Ltd.',
    industry: 'Steel & Cement',
    officialWebsite: 'https://shahcement.com',
    careerPageUrl: 'https://shahcement.com/career',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'steel-08',
    name: 'Premier Cement Mills PLC',
    industry: 'Steel & Cement',
    officialWebsite: 'https://www.premiercement.com',
    careerPageUrl: 'https://www.premiercement.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'steel-09',
    name: 'Seven Rings Cement (Shun Shing Group)',
    industry: 'Steel & Cement',
    officialWebsite: 'https://sevenringscement.com',
    careerPageUrl: 'https://sevenringscement.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 6. FOOD & BEVERAGE (6 Companies)
  // ==========================================================================
  {
    id: 'food-01',
    name: 'PRAN Foods Ltd. (PRAN-RFL Group)',
    industry: 'Food & Beverage',
    officialWebsite: 'https://www.pranfoods.net',
    careerPageUrl: 'https://www.pranfoods.net/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'food-02',
    name: 'City Group (Teer)',
    industry: 'Food & Beverage',
    officialWebsite: 'https://www.citygroup.com.bd',
    careerPageUrl: 'https://www.citygroup.com.bd/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'food-03',
    name: 'Meghna Group of Industries (MGI - Fresh)',
    industry: 'Food & Beverage',
    officialWebsite: 'https://www.mgi.org',
    careerPageUrl: 'https://www.mgi.org/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'food-04',
    name: 'M. M. Ispahani Limited',
    industry: 'Food & Beverage',
    officialWebsite: 'https://ispahanibd.com',
    careerPageUrl: 'https://ispahanibd.com/current-jobs/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'food-05',
    name: 'T.K. Group of Industries (Pusti)',
    industry: 'Food & Beverage',
    officialWebsite: 'https://tkgroupbd.com',
    careerPageUrl: 'https://tkgroupbd.com/careers/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'food-06',
    name: 'Akij Food & Beverage Ltd. (Akij Group)',
    industry: 'Food & Beverage',
    officialWebsite: 'https://career.akijgroup.co',
    careerPageUrl: 'https://career.akijgroup.co/all-jobs',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 7. FMCG (5 Companies)
  // ==========================================================================
  {
    id: 'fmcg-01',
    name: 'Nestlé Bangladesh PLC',
    industry: 'FMCG',
    officialWebsite: 'https://www.nestle.com.bd',
    careerPageUrl: 'https://www.nestle.com.bd/jobs',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'fmcg-02',
    name: 'Marico Bangladesh Limited',
    industry: 'FMCG',
    officialWebsite: 'https://marico.com/bangladesh',
    careerPageUrl: 'https://marico.com/bangladesh/careers/life-at-marico',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'fmcg-03',
    name: 'British American Tobacco Bangladesh (BATB)',
    industry: 'FMCG',
    officialWebsite: 'https://www.batbangladesh.com',
    careerPageUrl: 'https://www.batbangladesh.com/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'fmcg-04',
    name: 'ACI PLC (Advanced Chemical Industries)',
    industry: 'FMCG',
    officialWebsite: 'https://www.aci-bd.com',
    careerPageUrl: 'https://www.aci-bd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'fmcg-05',
    name: 'Reckitt Benckiser Bangladesh PLC',
    industry: 'FMCG',
    officialWebsite: 'https://careers.reckitt.com',
    careerPageUrl: 'https://careers.reckitt.com/',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 8. MANUFACTURING (7 Companies)
  // ==========================================================================
  {
    id: 'mfg-01',
    name: 'RFL Group (Rangpur Foundry Limited)',
    industry: 'Manufacturing',
    officialWebsite: 'https://rflbd.com',
    careerPageUrl: 'https://rflbd.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'mfg-02',
    name: 'Confidence Group',
    industry: 'Manufacturing',
    officialWebsite: 'https://www.confidencegroup.com.bd',
    careerPageUrl: 'https://www.confidencegroup.com.bd/career.php',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'mfg-03',
    name: 'Anwar Group of Industries',
    industry: 'Manufacturing',
    officialWebsite: 'https://www.anwargroup.com',
    careerPageUrl: 'https://www.anwargroup.com/career.html',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'mfg-04',
    name: 'Jamuna Group',
    industry: 'Manufacturing',
    officialWebsite: 'https://jamunagroup.com.bd',
    careerPageUrl: 'https://jamunagroup.com.bd/career-details/2',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'mfg-05',
    name: 'AKIJ Resource',
    industry: 'Manufacturing',
    officialWebsite: 'https://akijresource.com',
    careerPageUrl: 'https://akijresource.com/akij-career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'mfg-06',
    name: 'Kiam Metal Industries Limited',
    industry: 'Manufacturing',
    officialWebsite: 'https://www.edelkitchens.com',
    careerPageUrl: 'https://www.edelkitchens.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'mfg-07',
    name: 'Mir Group of Companies',
    industry: 'Manufacturing',
    officialWebsite: 'https://www.mirgroupbd.com',
    careerPageUrl: 'https://www.mirgroupbd.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 9. ELECTRONICS (6 Companies)
  // ==========================================================================
  {
    id: 'elec-01',
    name: 'Walton Hi-Tech Industries PLC',
    industry: 'Electronics',
    officialWebsite: 'https://waltonbd.com',
    careerPageUrl: 'https://jobs.waltonbd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'elec-02',
    name: 'Transcom Group (Transcom Electronics)',
    industry: 'Electronics',
    officialWebsite: 'https://www.transcombd.com',
    careerPageUrl: 'https://www.transcombd.com/career/join-us/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'elec-03',
    name: 'Singer Bangladesh Limited',
    industry: 'Electronics',
    officialWebsite: 'https://www.singerbd.com',
    careerPageUrl: 'https://www.singerbd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'elec-04',
    name: 'Minister Hi-Tech Park Limited',
    industry: 'Electronics',
    officialWebsite: 'https://ministerbd.com',
    careerPageUrl: 'https://ministerbd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'elec-05',
    name: 'Butterfly Marketing Limited (LG Butterfly)',
    industry: 'Electronics',
    officialWebsite: 'https://www.butterflygroupbd.com',
    careerPageUrl: 'https://www.butterflygroupbd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'elec-06',
    name: 'Rangs Electronics Ltd. (Sony-Rangs)',
    industry: 'Electronics',
    officialWebsite: 'https://shop.rangs.com.bd',
    careerPageUrl: 'https://shop.rangs.com.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 10. INDUSTRIAL AUTOMATION (5 Companies)
  // ==========================================================================
  {
    id: 'auto-01',
    name: 'SINCOS Automation Technologies Ltd.',
    industry: 'Industrial Automation',
    officialWebsite: 'https://www.sincosbd.com',
    careerPageUrl: 'https://www.sincosbd.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'auto-02',
    name: 'CrossLink Automation & Controls',
    industry: 'Industrial Automation',
    officialWebsite: 'http://www.crosslinkbd.com',
    careerPageUrl: 'http://www.crosslinkbd.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'auto-03',
    name: 'Siemens Energy Bangladesh',
    industry: 'Industrial Automation',
    officialWebsite: 'https://www.siemens-energy.com',
    careerPageUrl: 'https://www.siemens-energy.com/global/en/home/careers/working-with-us.html',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'auto-04',
    name: 'Schneider Electric Bangladesh',
    industry: 'Industrial Automation',
    officialWebsite: 'https://www.se.com',
    careerPageUrl: 'https://www.se.com/ww/en/about-us/careers/overview/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'auto-05',
    name: 'ABB Electrification & Automation',
    industry: 'Industrial Automation',
    officialWebsite: 'https://careers.abb',
    careerPageUrl: 'https://careers.abb/global/en/home',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 11. ENGINEERING (6 Companies)
  // ==========================================================================
  {
    id: 'eng-01',
    name: 'Energypac Engineering Limited',
    industry: 'Engineering',
    officialWebsite: 'https://energypac.com.bd',
    careerPageUrl: 'https://energypac.com.bd/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'eng-02',
    name: 'Energypac Power Generation PLC',
    industry: 'Engineering',
    officialWebsite: 'https://www.energypac.com',
    careerPageUrl: 'https://www.energypac.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'eng-03',
    name: 'BBS Cables PLC',
    industry: 'Engineering',
    officialWebsite: 'https://www.bbscables.com.bd',
    careerPageUrl: 'https://www.bbscables.com.bd/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'eng-04',
    name: 'RR-Imperial Electricals Limited (RR Kabel)',
    industry: 'Engineering',
    officialWebsite: 'https://www.rr-imperial.com',
    careerPageUrl: 'https://www.rr-imperial.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'eng-05',
    name: 'Adex Group (Transformer & Switchgear)',
    industry: 'Engineering',
    officialWebsite: 'https://www.adexbd.com',
    careerPageUrl: 'https://www.adexbd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'eng-06',
    name: 'Poly Cable Industries Ltd.',
    industry: 'Engineering',
    officialWebsite: 'https://polycables.com.bd',
    careerPageUrl: 'https://polycables.com.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 12. CHEMICAL (4 Companies)
  // ==========================================================================
  {
    id: 'chem-01',
    name: 'Bangladesh Chemical Industries Corporation (BCIC)',
    industry: 'Chemical',
    officialWebsite: 'https://bcic.gov.bd',
    careerPageUrl: 'https://bcic.gov.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'chem-02',
    name: 'Berger Paints Bangladesh Limited',
    industry: 'Chemical',
    officialWebsite: 'https://www.bergerbd.com',
    careerPageUrl: 'https://www.bergerbd.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'chem-03',
    name: 'Linde Bangladesh Limited',
    industry: 'Chemical',
    officialWebsite: 'https://www.linde.com.bd',
    careerPageUrl: 'https://www.linde.com.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'chem-04',
    name: 'Asian Paints Bangladesh Ltd.',
    industry: 'Chemical',
    officialWebsite: 'https://www.asianpaints.com',
    careerPageUrl: 'https://careers.asianpaints.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 13. HOSPITAL & HEALTHCARE (7 Companies)
  // ==========================================================================
  {
    id: 'hosp-01',
    name: 'Evercare Hospital Dhaka',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://www.evercarebd.com',
    careerPageUrl: 'https://www.evercarebd.com/en/dhaka/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'hosp-02',
    name: 'Evercare Hospital Chattogram',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://www.evercarebd.com',
    careerPageUrl: 'https://www.evercarebd.com/en/chattogram/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'hosp-03',
    name: 'The Ibn Sina Trust',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://www.ibnsinatrust.com',
    careerPageUrl: 'https://career.ibnsinatrust.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'hosp-04',
    name: 'Labaid Diagnostics & Hospital',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://labaid.com.bd',
    careerPageUrl: 'https://labaiddiagnostics.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'hosp-05',
    name: 'Bangladesh Specialized Hospital PLC',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://www.bdspecializedhospital.com',
    careerPageUrl: 'https://www.bdspecializedhospital.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'hosp-06',
    name: 'Asgar Ali Hospital',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://www.asgaralihospital.com',
    careerPageUrl: 'https://www.asgaralihospital.com/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'hosp-07',
    name: 'Praava Health Bangladesh',
    industry: 'Hospital & Healthcare',
    officialWebsite: 'https://www.praavahealth.com',
    careerPageUrl: 'https://web.praavahealth.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 14. COLD STORAGE (5 Companies)
  // ==========================================================================
  {
    id: 'cold-01',
    name: 'Golden Harvest Cold Storage & Agro Industries Ltd.',
    industry: 'Cold Storage',
    officialWebsite: 'https://www.goldenharvestbd.com',
    careerPageUrl: 'https://www.goldenharvestbd.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'cold-02',
    name: 'Igloo Ice Cream & Cold Chain (Abdul Monem Ltd.)',
    industry: 'Cold Storage',
    officialWebsite: 'https://igloobd.com',
    careerPageUrl: 'https://igloobd.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'cold-03',
    name: 'Ejab Group of Industries (Cold Storage Division)',
    industry: 'Cold Storage',
    officialWebsite: 'https://www.ejabgroup.com',
    careerPageUrl: 'https://www.ejabgroup.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'cold-04',
    name: 'Kazi Farms Group (Frozen Food & Cold Chain)',
    industry: 'Cold Storage',
    officialWebsite: 'https://www.kazifarms.com',
    careerPageUrl: 'https://www.kazifarms.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'cold-05',
    name: 'Paragon Group (Agro & Cold Storage)',
    industry: 'Cold Storage',
    officialWebsite: 'https://www.paragongroup-bd.com',
    careerPageUrl: 'https://www.paragongroup-bd.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 15. TELECOM (8 Companies)
  // ==========================================================================
  {
    id: 'telecom-01',
    name: 'Grameenphone PLC',
    industry: 'Telecom',
    officialWebsite: 'https://www.grameenphone.com',
    careerPageUrl: 'https://www.grameenphone.com/about/career',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-02',
    name: 'Banglalink Digital Communications Limited',
    industry: 'Telecom',
    officialWebsite: 'https://www.banglalink.net',
    careerPageUrl: 'https://www.banglalink.net/careers',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-03',
    name: 'Teletalk Bangladesh Limited',
    industry: 'Telecom',
    officialWebsite: 'https://www.teletalk.com.bd',
    careerPageUrl: 'https://www.teletalk.com.bd/about/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-04',
    name: 'Bangladesh Telecommunications Company Ltd. (BTCL)',
    industry: 'Telecom',
    officialWebsite: 'https://btcl.gov.bd',
    careerPageUrl: 'https://btcl.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-05',
    name: 'Fiber@Home Limited',
    industry: 'Telecom',
    officialWebsite: 'https://www.fiberathome.net',
    careerPageUrl: 'https://www.fiberathome.net/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-06',
    name: 'Summit Communications Limited',
    industry: 'Telecom',
    officialWebsite: 'https://www.summitcommunications.net',
    careerPageUrl: 'https://www.summitcommunications.net/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-07',
    name: 'Link3 Technologies Limited',
    industry: 'Telecom',
    officialWebsite: 'https://link3.net',
    careerPageUrl: 'https://link3.net/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'telecom-08',
    name: 'Amber IT Limited',
    industry: 'Telecom',
    officialWebsite: 'https://www.amberit.com.bd',
    careerPageUrl: 'https://www.amberit.com.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 16. CONSTRUCTION (4 Companies)
  // ==========================================================================
  {
    id: 'const-01',
    name: 'MAX Group (Max Infrastructure Limited)',
    industry: 'Construction',
    officialWebsite: 'https://www.maxgroup-bd.com',
    careerPageUrl: 'https://www.maxgroup-bd.com/job-opening',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'const-02',
    name: 'Mir Akhter Hossain Limited',
    industry: 'Construction',
    officialWebsite: 'https://mirakhter.com',
    careerPageUrl: 'https://mirakhter.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'const-03',
    name: 'National Development Engineers Ltd. (NDE)',
    industry: 'Construction',
    officialWebsite: 'https://nde.com.bd',
    careerPageUrl: 'https://nde.com.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'const-04',
    name: 'Navana Engineering Limited',
    industry: 'Construction',
    officialWebsite: 'https://www.navanaengineering.com',
    careerPageUrl: 'https://www.navanaengineering.com/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 17. ENERGY & RENEWABLE ENERGY (5 Companies)
  // ==========================================================================
  {
    id: 'energy-01',
    name: 'Infrastructure Development Company Limited (IDCOL)',
    industry: 'Energy & Renewable Energy',
    officialWebsite: 'https://idcol.org',
    careerPageUrl: 'https://idcol.org/home/career',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'energy-02',
    name: 'Rahimafrooz Bangladesh Ltd. (Renewable Energy & Storage)',
    industry: 'Energy & Renewable Energy',
    officialWebsite: 'https://www.rahimafrooz.com',
    careerPageUrl: 'https://www.rahimafrooz.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'energy-03',
    name: 'ME SOLshare Ltd.',
    industry: 'Energy & Renewable Energy',
    officialWebsite: 'https://solshare.com',
    careerPageUrl: 'https://solshare.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'energy-04',
    name: 'Petrobangla (Bangladesh Oil, Gas & Mineral Corporation)',
    industry: 'Energy & Renewable Energy',
    officialWebsite: 'https://petrobangla.org.bd',
    careerPageUrl: 'https://petrobangla.org.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'energy-05',
    name: 'Bangladesh Petroleum Corporation (BPC)',
    industry: 'Energy & Renewable Energy',
    officialWebsite: 'https://bpc.gov.bd',
    careerPageUrl: 'https://bpc.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 18. GOVERNMENT ORGANIZATIONS (7 Organizations)
  // ==========================================================================
  {
    id: 'govt-01',
    name: 'Public Works Department (PWD)',
    industry: 'Government Organizations',
    officialWebsite: 'https://pwd.gov.bd',
    careerPageUrl: 'https://pwd.gov.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'govt-02',
    name: 'Bangladesh Water Development Board (BWDB)',
    industry: 'Government Organizations',
    officialWebsite: 'https://www.bwdb.gov.bd',
    careerPageUrl: 'https://www.bwdb.gov.bd/notice',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'govt-03',
    name: 'Local Government Division (LGD)',
    industry: 'Government Organizations',
    officialWebsite: 'https://lgd.gov.bd',
    careerPageUrl: 'https://lgd.gov.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'govt-04',
    name: 'Roads and Highways Department (RHD)',
    industry: 'Government Organizations',
    officialWebsite: 'https://rhd.portal.gov.bd',
    careerPageUrl: 'https://rhd.portal.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'govt-05',
    name: 'Bangladesh Atomic Energy Commission (BAEC)',
    industry: 'Government Organizations',
    officialWebsite: 'https://baec.gov.bd',
    careerPageUrl: 'https://baec.gov.bd/pages/notices',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'govt-06',
    name: 'Bangladesh Council of Scientific and Industrial Research (BCSIR)',
    industry: 'Government Organizations',
    officialWebsite: 'https://bcsir.gov.bd',
    careerPageUrl: 'https://bcsir.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'govt-07',
    name: 'Bangladesh Bridge Authority (BBA)',
    industry: 'Government Organizations',
    officialWebsite: 'https://bba.gov.bd',
    careerPageUrl: 'https://bba.gov.bd/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 19. REAL ESTATE (5 Companies)
  // ==========================================================================
  {
    id: 'realestate-01',
    name: 'Shanta Holdings Limited',
    industry: 'Real Estate',
    officialWebsite: 'https://shantaholdings.com',
    careerPageUrl: 'https://shantaholdings.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'realestate-02',
    name: 'Sheltech (Pvt.) Limited',
    industry: 'Real Estate',
    officialWebsite: 'https://sheltech-bd.com',
    careerPageUrl: 'https://sheltech-bd.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'realestate-03',
    name: 'Concord Group of Companies',
    industry: 'Real Estate',
    officialWebsite: 'https://concordgroupbd.com',
    careerPageUrl: 'https://concordgroupbd.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'realestate-04',
    name: 'Assure Group',
    industry: 'Real Estate',
    officialWebsite: 'https://www.assuregroupbd.com',
    careerPageUrl: 'https://www.assuregroupbd.com/about-us/career-opportunities',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'realestate-05',
    name: 'Navana Group',
    industry: 'Real Estate',
    officialWebsite: 'https://navana.com',
    careerPageUrl: 'https://navana.com/career/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },

  // ==========================================================================
  // 20. ENGINEERING SERVICE COMPANIES (5 Companies)
  // ==========================================================================
  {
    id: 'engsrv-01',
    name: 'Intertek Bangladesh',
    industry: 'Engineering Service Companies',
    officialWebsite: 'https://www.intertek.com',
    careerPageUrl: 'https://www.intertek.com/bangladesh/careers/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'engsrv-02',
    name: 'Hitachi Energy (Bangladesh Operations)',
    industry: 'Engineering Service Companies',
    officialWebsite: 'https://www.hitachienergy.com',
    careerPageUrl: 'https://www.hitachienergy.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'engsrv-03',
    name: 'GE Vernova (Power & Engineering Services)',
    industry: 'Engineering Service Companies',
    officialWebsite: 'https://careers.gevernova.com',
    careerPageUrl: 'https://careers.gevernova.com/',
    scrapingMethod: 'playwright',
    websiteStatus: 'active'
  },
  {
    id: 'engsrv-04',
    name: 'Tetra Pak South Asia / Bangladesh',
    industry: 'Engineering Service Companies',
    officialWebsite: 'https://www.tetrapak.com',
    careerPageUrl: 'https://www.tetrapak.com/about-tetra-pak/careers',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  },
  {
    id: 'engsrv-05',
    name: 'Bangladesh Honda Private Limited (Engineering & Plant Services)',
    industry: 'Engineering Service Companies',
    officialWebsite: 'https://www.bdhonda.com',
    careerPageUrl: 'https://www.bdhonda.com/',
    scrapingMethod: 'cheerio',
    websiteStatus: 'active'
  }
];

module.exports = companies;
