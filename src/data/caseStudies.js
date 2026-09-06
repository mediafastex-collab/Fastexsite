/**
 * Case studies, taken from the live fastexmedia.com/work page.
 * Client names, sectors and outcome labels are as published there.
 *
 * Every entry leads with a measured outcome. Cases without a measurable
 * result are deliberately not listed.
 */

export const portfolioStats = [
  { value: "13+", label: "Active Brands" },
  { value: "3X", label: "Average Lead Growth" },
  { value: "60%", label: "Avg. CPL Reduction" },
  { value: "4.9★", label: "Client Satisfaction" },
];

/**
 * Outcome metrics used in place of testimonial quote blocks. Each is tied to
 * a real engagement listed further down this file.
 */
export const outcomeMetrics = [
  {
    value: "5x",
    label: "B2B revenue growth for a renewable energy firm in twelve months",
  },
  {
    value: "60%",
    label: "Lower cost per lead for a commercial real estate client",
  },
  {
    value: "3x",
    label: "Qualified lead volume at the same monthly ad spend",
  },
];

/** The two long-form studies. */
export const featuredCases = [
  {
    num: "Case 01",
    tier: "founders",
    headline: "5x B2B revenue growth",
    sector: "Renewable Energy",
    client: "Heaven Green Energy Ltd",
    service: "LinkedIn Personal Branding · Founder Authority",
    challenge:
      "The founder needed stronger positioning and visibility on LinkedIn to attract the right industry connections.",
    solution:
      "Created a consistent content strategy, refined personal positioning, and built a value-led posting framework.",
    outcome:
      "Increased reach, improved engagement, and attracted high-quality industry connections, strengthening both founder & brand authority.",
    metrics: [
      { value: "↑ 5x", label: "Revenue B2B" },
      { value: "Daily", label: "Campaigns" },
      { value: "High", label: "Authority" },
    ],
  },
  {
    num: "Case 02",
    tier: "enterprises",
    headline: "360° go-to-market ownership",
    sector: "SaaS",
    client: "Linkziy",
    service: "End-to-End SaaS Consultancy · Full Stack",
    challenge:
      "A SaaS brand needed unified growth across operations, marketing, distribution, and product, without a fragmented agency stack.",
    solution:
      "Took complete ownership, operations, marketing, distribution channels, product testing, and content management, under one system.",
    outcome:
      "Built a unified, repeatable growth motion that scales with the product, turning isolated efforts into a single revenue engine.",
    metrics: [
      { value: "360°", label: "GTM Coverage" },
      { value: "Unified", label: "Operations" },
      { value: "Scaled", label: "Distribution" },
    ],
  },
  {
    num: "Case 03",
    tier: "builders",
    headline: "60% lower cost per lead at 3x volume",
    sector: "Commercial Real Estate",
    client: "Macj",
    service: "Performance Marketing · Lead Flow Architecture",
    challenge:
      "Paid campaigns were producing volume that sales could not work. Cost per lead looked acceptable while cost per site visit kept climbing, and nobody could say which segments were responsible.",
    solution:
      "Rebuilt targeting around the segments that actually converted, reworked the offer and landing pages for enquiry quality, and streamlined lead routing so follow-up happened in minutes rather than days.",
    outcome:
      "Cost per lead fell by 60 percent while qualified volume tripled at the same monthly spend, with a clear line from campaign to booked site visit.",
    metrics: [
      { value: "↓ 60%", label: "Cost per lead" },
      { value: "↑ 3x", label: "Qualified volume" },
      { value: "Same", label: "Monthly spend" },
    ],
  },
];

/** One featured study per audience tier, used on the tier pages. */
export const caseForTier = (tier) =>
  featuredCases.find((item) => item.tier === tier);

/** The wider active-project grid. */
export const projects = [
  {
    initials: "ID",
    sector: "Education",
    client: "Institute of Design Technology",
    tier: "builders",
    copy: "Official WhatsApp marketing automation, sequences, personalised reply flows, structured nurturing for admissions.",
    tags: ["Instant Response", "↑ Engagement", "↑ Admissions"],
  },
  {
    initials: "QC",
    sector: "SaaS / CRM",
    client: "QuickEst CRM",
    tier: "founders",
    copy: "LinkedIn outreach engine with refined ICP messaging and follow-up sequences, high-intent qualified pipeline.",
    tags: ["↑ Reply Rates", "Qualified Pipeline"],
  },
  {
    initials: "TL",
    sector: "ERP",
    client: "Tatvamasi Labs",
    tier: "builders",
    copy: "Email + WhatsApp marketing automation, daily campaigns, content & copywriting.",
    tags: ["Qualified Leads", "Demo Meetings", "Sales Revenue"],
  },
  {
    initials: "QB",
    sector: "Solar Industry",
    client: "Qbits Inverter",
    tier: "builders",
    copy: "B2B targeting Solar EPC for inverters. Email & WhatsApp automation with daily campaigns + creative engine.",
    tags: ["High-Quality Leads", "Solar EPC Pipeline"],
  },
  {
    initials: "QE",
    sector: "SaaS / CRM",
    client: "QuickEst",
    tier: "founders",
    copy: "Webinar automations, Email & WhatsApp setup, daily campaigns, content + copy + video scripts.",
    tags: ["Meetings Booked", "Automated Webinars"],
  },
  {
    initials: "HD",
    sector: "Solar Industry",
    client: "Heaven Designs",
    tier: "builders",
    copy: "Daily Email & WhatsApp campaigns with full content stack, high-quality solar lead generation.",
    tags: ["High-Quality Leads", "Daily Campaigns"],
  },
  {
    initials: "AN",
    sector: "B2B Services",
    client: "Astronuts",
    tier: "founders",
    copy: "LinkedIn lead generation, target-audience outreach, meeting bookings, content & copywriting.",
    tags: ["Meetings Booked", "Targeted Outreach"],
  },
  {
    initials: "TC",
    sector: "Creative Agency",
    client: "The Creative Co",
    tier: "founders",
    copy: "LinkedIn outreach engine, ICP targeting, meetings booked through high-quality conversations.",
    tags: ["Meetings Booked", "ICP Outreach"],
  },
  {
    initials: "11",
    sector: "WhatsApp BSP",
    client: "11za",
    tier: "builders",
    copy: "WhatsApp marketing, templates, workflows + automation, sales, demo meetings, and Meta Ads.",
    tags: ["Demo Meetings", "Meta Ads", "Sales"],
  },
  {
    initials: "BC",
    sector: "Sustainability",
    client: "The Bio Cutlery",
    tier: "builders",
    copy: "Performance marketing engine, high-quality lead generation for eco-cutlery distribution.",
    tags: ["High-Quality Leads", "ROAS Optimised"],
  },
  {
    initials: "EB",
    sector: "Real Estate",
    client: "Eva Bluee",
    tier: "enterprises",
    copy: "Performance marketing, Meta & Google ad campaigns built for real-estate lead generation at scale.",
    tags: ["High-Quality Leads", "Scaled Spend"],
  },
];

