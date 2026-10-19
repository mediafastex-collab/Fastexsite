/**
 * Every brand and founder we have worked with, from the "All clients – Fastex
 * Media" sheet. This is the only list of client names on the site: the logo
 * marquee on the homepage and the client grid on /work both read from it, so
 * a client added or removed here changes everywhere at once.
 *
 * Do not add a name that is not in the sheet.
 *
 * Logos live in public/assets/clients/. Each one has been trimmed of empty
 * margin, and white or black plates have been knocked out where the plate was
 * not part of the mark, so every logo can be sized by the same rule.
 *
 * `kind` decides how a logo is framed:
 *   mark    a logo on a transparent ground
 *   tile    a logo that IS a coloured square (The Creative Co, Drishyam)
 *   founder a portrait, for personal branding clients
 *
 * `ink` is the share of the logo's box that is actually drawn, weighted by
 * how dark it is (measured from the files). It lets a bold, solid wordmark
 * and a fine, airy one come out looking the same size.
 *
 * `channels` lists the service pages (src/data/services.js slugs) a client
 * appears on. It is filled in only where our published copy says which
 * channel the work ran on; a lead generation client without it is shown on
 * /work but not claimed for any one channel.
 *
 * Summaries for clients already on /work keep their published copy; the rest
 * are written from the sheet's industry, service and outcome columns, with no
 * figures the sheet does not give.
 */

/** Service filters, in the order the /work filter shows them. */
export const clientServices = {
  "lead-generation": "Lead Generation",
  "personal-branding": "Founder Personal Branding",
  social: "Social & LinkedIn",
  gtm: "Go-to-Market",
};

export const clients = [
  {
    name: "Heaven Green Energy",
    logo: "heaven-green-energy.webp",
    ink: 0.16,
    w: 480,
    h: 132,
    kind: "mark",
    industry: "Renewable Energy",
    services: ["lead-generation"],
    summary:
      "A quality lead generation pipeline for a renewable energy brand, built to bring the cost per lead down.",
  },
  {
    name: "QuickEst",
    channels: ["linkedin-marketing", "email-marketing", "whatsapp-marketing"],
    logo: "quickest.webp",
    ink: 0.12,
    w: 416,
    h: 146,
    kind: "mark",
    industry: "IT & SaaS",
    services: ["lead-generation"],
    summary:
      "LinkedIn outreach engine with refined ICP messaging and follow-up sequences, plus webinar automations, Email & WhatsApp setup and daily campaigns.",
    tags: ["↑ Reply Rates", "Meetings Booked", "Automated Webinars"],
  },
  {
    name: "Krupa",
    channels: ["personal-branding"],
    logo: "krupa.webp",
    w: 320,
    h: 320,
    kind: "founder",
    industry: "Founder Brands",
    services: ["personal-branding"],
    summary:
      "A personal brand on LinkedIn that connects the founder with the right audience and sharpens their positioning.",
  },
  {
    name: "Tatvamasi Labs",
    channels: ["email-marketing", "whatsapp-marketing"],
    logo: "tatvamasi-labs.webp",
    ink: 0.12,
    w: 480,
    h: 168,
    kind: "mark",
    industry: "IT & SaaS",
    services: ["lead-generation"],
    summary:
      "Email + WhatsApp marketing automation, daily campaigns, content & copywriting.",
    tags: ["Qualified Leads", "Demo Meetings", "Sales Revenue"],
  },
  {
    name: "Qbits Energy",
    channels: ["email-marketing", "whatsapp-marketing"],
    logo: "qbits.webp",
    ink: 0.31,
    w: 410,
    h: 143,
    kind: "mark",
    industry: "Renewable Energy",
    services: ["lead-generation"],
    summary:
      "B2B targeting Solar EPC for inverters. Email & WhatsApp automation with daily campaigns + creative engine.",
    tags: ["High-Quality Leads", "Solar EPC Pipeline"],
  },
  {
    name: "SurgePV",
    logo: "surgepv.svg",
    ink: 0.2,
    w: 160,
    h: 32,
    kind: "mark",
    industry: "IT & SaaS",
    services: ["lead-generation"],
    summary:
      "A quality lead generation pipeline for a SaaS company, built to keep the cost per lead low.",
  },
  {
    name: "Jashom Technologies",
    logo: "jashom.svg",
    ink: 0.45,
    w: 465,
    h: 450,
    kind: "mark",
    industry: "IT & SaaS",
    services: ["gtm"],
    summary: "Go-to-market planning and strategy for a technology company.",
  },
  {
    name: "Kriya Doshi",
    channels: ["personal-branding"],
    detail: "Thinkyoung",
    logo: "kriya-doshi.webp",
    w: 320,
    h: 320,
    kind: "founder",
    industry: "Founder Brands",
    services: ["personal-branding"],
    summary:
      "A personal brand on LinkedIn for the founder of Thinkyoung, connecting them with the right audience.",
  },
  {
    name: "Carsbeat",
    channels: ["social-media-marketing"],
    logo: "carsbeat.webp",
    ink: 0.22,
    w: 315,
    h: 176,
    kind: "mark",
    industry: "Automotive",
    services: ["social"],
    summary:
      "A social presence for an automotive brand, with engagement driven through paid social.",
  },
  {
    name: "Macwin Solar",
    logo: "macwin.webp",
    ink: 0.16,
    w: 369,
    h: 125,
    kind: "mark",
    industry: "Renewable Energy",
    services: ["lead-generation"],
    summary:
      "A quality lead generation pipeline for a solar energy brand at a lower cost per lead.",
  },
  {
    name: "Astronuts",
    channels: ["linkedin-marketing"],
    logo: "astronuts.webp",
    ink: 0.14,
    w: 391,
    h: 176,
    kind: "mark",
    industry: "Agencies & Services",
    services: ["lead-generation"],
    summary:
      "LinkedIn lead generation, target-audience outreach, meeting bookings, content & copywriting.",
    tags: ["Meetings Booked", "Targeted Outreach"],
  },
  {
    name: "Reformiqo",
    channels: ["social-media-marketing"],
    logo: "reformiqo.webp",
    ink: 0.49,
    w: 175,
    h: 176,
    kind: "mark",
    industry: "IT & SaaS",
    services: ["lead-generation", "social"],
    summary:
      "Lead generation at a lower cost per lead, alongside a social media presence built from the ground up.",
  },
  {
    name: "Institute of Design & Technology",
    channels: ["whatsapp-marketing"],
    logo: "idt.webp",
    ink: 0.17,
    w: 288,
    h: 122,
    kind: "mark",
    industry: "Education",
    services: ["lead-generation"],
    summary:
      "Official WhatsApp marketing automation — sequences, personalised reply flows, structured nurturing for admissions.",
    tags: ["Instant Response", "↑ Engagement", "↑ Admissions"],
  },
  {
    name: "Keyur Rakholiya",
    channels: ["personal-branding"],
    logo: "keyur-rakholiya.webp",
    w: 320,
    h: 320,
    kind: "founder",
    industry: "Founder Brands",
    services: ["personal-branding"],
    summary:
      "A founder's personal brand on LinkedIn, positioned to reach and connect with the right audience.",
  },
  {
    name: "Urgent Cad",
    logo: "urgent-cad.webp",
    ink: 0.51,
    w: 78,
    h: 96,
    kind: "mark",
    industry: "Agencies & Services",
    services: ["lead-generation"],
    summary:
      "A steady lead generation pipeline for a services business, built for quality at a lower cost.",
  },
  {
    name: "The Creative Co",
    channels: ["linkedin-marketing"],
    logo: "the-creative-co.webp",
    ink: 0.55,
    w: 176,
    h: 176,
    kind: "tile",
    industry: "Agencies & Services",
    services: ["lead-generation"],
    summary:
      "LinkedIn outreach engine, ICP targeting, meetings booked through high-quality conversations.",
    tags: ["Meetings Booked", "ICP Outreach"],
  },
  {
    name: "VijayHo",
    logo: "vijayho.webp",
    ink: 0.44,
    w: 349,
    h: 92,
    kind: "mark",
    industry: "Agencies & Services",
    services: ["lead-generation"],
    summary:
      "Lead generation for an IT and multimedia agency, focused on lead quality at a lower cost.",
  },
  {
    name: "Lifeplus Laboratory",
    logo: "lifeplus.webp",
    ink: 0.26,
    w: 480,
    h: 123,
    kind: "mark",
    industry: "Healthcare",
    services: ["lead-generation"],
    summary:
      "A quality lead generation pipeline for a pathology laboratory at a lower cost per lead.",
  },
  {
    name: "Fastwhistle",
    logo: "fastwhistle.webp",
    ink: 0.17,
    w: 374,
    h: 100,
    kind: "mark",
    industry: "Logistics",
    services: ["lead-generation"],
    summary:
      "Lead generation for a logistics company, built for a steady flow of quality leads at a lower cost.",
  },
  {
    name: "Macj",
    channels: ["performance-marketing"],
    logo: "macj.webp",
    ink: 0.15,
    w: 459,
    h: 106,
    kind: "mark",
    industry: "Real Estate",
    services: ["lead-generation"],
    summary:
      "Meta Ads lead generation — targeted campaigns, refined messaging, and streamlined lead-flow for faster homebuyer follow-ups.",
    tags: ["↓ 60% CPL", "↑ 3x Volume", "Daily Pipeline"],
  },
  {
    name: "The Bio Cutlery",
    channels: ["performance-marketing"],
    logo: "the-bio-cutlery.webp",
    ink: 0.35,
    w: 176,
    h: 176,
    kind: "mark",
    industry: "Sustainable Packaging",
    services: ["lead-generation"],
    summary:
      "Performance marketing engine — high-quality lead generation for eco-cutlery distribution.",
    tags: ["High-Quality Leads", "ROAS Optimised"],
  },
  {
    name: "Drishyam Realty",
    logo: "drishyam-realty.webp",
    ink: 0.89,
    w: 174,
    h: 176,
    kind: "tile",
    industry: "Real Estate",
    services: ["lead-generation"],
    summary:
      "A quality lead generation pipeline for a real estate brand at a lower cost per lead.",
  },
  {
    name: "Heaven Designs",
    channels: ["email-marketing", "whatsapp-marketing"],
    logo: "heaven-designs.webp",
    ink: 0.14,
    w: 305,
    h: 91,
    kind: "mark",
    industry: "Renewable Energy",
    services: ["lead-generation"],
    summary:
      "Daily Email & WhatsApp campaigns with full content stack — high-quality solar lead generation.",
    tags: ["High-Quality Leads", "Daily Campaigns"],
  },
  {
    name: "Skandrix",
    channels: ["social-media-marketing"],
    logo: "skandrix.webp",
    ink: 0.33,
    w: 220,
    h: 47,
    kind: "mark",
    industry: "IT & SaaS",
    services: ["lead-generation", "social"],
    summary:
      "Lead generation at a lower cost per lead, plus LinkedIn company page management that builds their presence.",
  },
];

export const founders = clients.filter((c) => c.kind === "founder");
export const brands = clients.filter((c) => c.kind !== "founder");

/** Industries for the /work filter, most clients first. */
export const clientIndustries = [...new Set(clients.map((c) => c.industry))].sort(
  (a, b) =>
    clients.filter((c) => c.industry === b).length -
    clients.filter((c) => c.industry === a).length
);

/** Which client industry each /industries page shows. */
const industryPages = {
  "it-software": "IT & SaaS",
  "solar-renewable": "Renewable Energy",
  "real-estate": "Real Estate",
  education: "Education",
};

export const clientsForIndustry = (slug) =>
  clients.filter((c) => c.industry === industryPages[slug]);

export const clientsForService = (slug) =>
  clients.filter((c) => c.channels?.includes(slug));

/**
 * Client counts said the way we say them: "20+", never "21". Rounds down to
 * the nearest ten from ten upwards, so the claim stays true as the list grows.
 */
export const roughly = (n) => (n >= 10 ? `${Math.floor(n / 10) * 10}+` : `${n}+`);

/**
 * Sizes every logo to the same visual weight inside the same box.
 *
 * Equal heights make a square mark look heavy beside a long wordmark, and
 * equal widths make the wordmark a sliver, so the starting point is equal
 * AREA. Area alone still lets a dense, solid logo outweigh a fine one, so the
 * area is then nudged by the logo's measured ink: lighter logos get a little
 * more room, heavier ones a little less. Finally everything is clamped to
 * the box, so nothing can outgrow its neighbours.
 */
export const LOGO_BOX = { w: 160, h: 60 };
const LOGO_AREA = 4600; // px² at 1x, for a logo of typical ink
const TYPICAL_INK = 0.2;

export function logoSize({ w, h, kind, ink = TYPICAL_INK }) {
  // A tile is a solid plate by design; its ink says nothing about weight.
  if (kind === "tile") return { width: 48, height: 48 };
  const ratio = w / h;
  const area = LOGO_AREA * Math.pow(TYPICAL_INK / ink, 0.6);
  let height = Math.sqrt(area / ratio);
  height = Math.min(height, LOGO_BOX.h, LOGO_BOX.w / ratio);
  return { width: Math.round(height * ratio), height: Math.round(height) };
}
