/**
 * Pricing data, transcribed from the Fastex Media Plans deck (16pp).
 *
 * Structure: seven services, each priced from a Starter tier and scaling
 * across four tiers. Tier names and order are fixed site-wide, so the tables
 * below only carry the four cell values per row, in tier order.
 *
 * Every figure here is commercial copy. Change it in this file only — the
 * pricing page renders it and holds no numbers of its own.
 */

/** Fixed tier order. Every `values` array in this file follows it. */
export const tiers = [
  {
    name: "Starter",
    blurb: "A focused starting point to establish what works.",
  },
  {
    name: "Growth",
    blurb: "More volume and a closer review rhythm.",
    recommended: true,
  },
  {
    name: "Scale",
    blurb: "Broader execution with weekly attention.",
  },
  {
    name: "Enterprise",
    blurb: "Custom volumes and a dedicated account manager.",
  },
];

/** The three pillars services are grouped under. */
export const pillars = [
  {
    name: "Pipeline",
    copy: "Start conversations with the right buyers through targeted outreach and owned channels.",
  },
  {
    name: "Authority",
    copy: "Build recognition and credibility with the people you want to reach.",
  },
  {
    name: "Performance",
    copy: "Scale paid acquisition with a focus on cost per qualified lead.",
  },
];

/**
 * The seven services, in deck order.
 *
 * `from` is the Starter monthly fee in USD. `groups` splits the deliverables
 * table where the deck did (only the Growth System needs two).
 */
export const plans = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    pillar: "Authority",
    from: 600,
    summary:
      "A consistent, on-brand presence that builds recognition with the people you want to sell to.",
    groups: [
      {
        rows: [
          { label: "Posts / month", values: ["12", "20", "30", "Custom"] },
          { label: "Platforms covered", values: ["2", "3", "4", "Custom scope"] },
          { label: "Reels / video posts", values: ["4", "6", "8", "Custom"] },
          { label: "Static designs", values: ["4", "6", "14", "Custom"] },
          { label: "Carousels", values: ["4", "8", "8", "Custom"] },
          {
            label: "Community management",
            values: ["Comments only", "Comments + DMs", "Daily monitoring", "Full, custom hours"],
          },
          {
            label: "Additional platforms",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
          {
            label: "Extra creative batches",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes:
      "Photography, video shoots, influencer fees, paid promotion and scheduling subscriptions. Ad spend is billed separately.",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing",
    pillar: "Performance",
    from: 500,
    summary:
      "Paid campaigns built around qualified leads, with platform coverage and optimisation that grow with your business.",
    groups: [
      {
        rows: [
          {
            label: "Ad platforms",
            values: ["Meta", "Meta + Google", "Meta + Google + TikTok", "All platforms"],
          },
          {
            label: "Campaign scope",
            values: [
              "Awareness and traffic",
              "Full funnel + lead generation",
              "Scaling, audience expansion, creative testing + retargeting",
              "Custom architecture",
            ],
          },
          {
            label: "Managed ad spend ceiling",
            values: ["Up to $5,000", "Up to $20,000", "Up to $50,000", "Custom scope"],
          },
          { label: "Campaigns / month", values: ["2", "4", "6", "Custom"] },
          { label: "Ad creatives / month", values: ["3", "6", "10", "Custom"] },
          { label: "Optimisation", values: ["Weekly", "2x weekly", "3x weekly", "Daily"] },
          { label: "Landing pages built", values: ["0", "1", "2", "Custom"] },
          {
            label: "Above-ceiling management",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes:
      "Ad spend, additional landing pages, CRM licences and sales follow-up on generated leads. Ad spend is charged to your own ad account.",
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    pillar: "Pipeline",
    from: 350,
    summary:
      "Turn WhatsApp into a revenue channel through broadcasts, audience segmentation and conversational automation.",
    groups: [
      {
        rows: [
          { label: "Broadcasts / month", values: ["7", "15", "30", "Custom"] },
          {
            label: "Contact list size",
            values: ["Up to 15,000", "Up to 50,000", "Up to 100,000", "Custom scope"],
          },
          { label: "Chatbot flows built", values: ["1", "2", "4", "Custom"] },
          { label: "Creatives / campaign", values: ["1", "1", "2", "Custom"] },
          {
            label: "Audience segments",
            values: ["2", "4", "Custom scope", "Custom scope"],
          },
          {
            label: "Additional chatbot flows",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
          {
            label: "Expanded list tier",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes:
      "WhatsApp API conversation charges, messaging platform subscriptions, contact list purchasing and live human chat staffing.",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    pillar: "Pipeline",
    from: 500,
    summary:
      "An owned channel that nurtures your audience and converts interest through campaigns and automation.",
    groups: [
      {
        rows: [
          { label: "Campaign emails / month", values: ["7", "15", "30", "Custom"] },
          {
            label: "Contact list size",
            values: ["Up to 15,000", "Up to 50,000", "Up to 100,000", "Custom scope"],
          },
          { label: "Automation flows", values: ["1", "3", "5", "Custom"] },
          { label: "A/B tests", values: ["1", "2", "4", "Continuous"] },
          { label: "List segments", values: ["3", "5", "8", "Custom scope"] },
          {
            label: "Additional automation flows",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
          {
            label: "Expanded list tier",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes:
      "Email platform subscriptions, list purchasing, landing page development and CRM licences. Domain authentication is configured with your DNS access.",
  },
  {
    slug: "linkedin-lead-generation",
    name: "LinkedIn Lead Generation",
    pillar: "Pipeline",
    from: 400,
    summary:
      "Build an outbound pipeline through targeted prospecting, follow-up sequences and qualified conversations.",
    groups: [
      {
        rows: [
          { label: "Profiles managed", values: ["1", "2", "3", "Custom"] },
          { label: "Connection requests / day", values: ["10", "20", "30", "Custom"] },
          { label: "Connection requests / month", values: ["240", "480", "720", "Custom"] },
          { label: "Follow-ups / prospect", values: ["2", "3", "4", "Custom"] },
          {
            label: "Reply handling",
            values: ["Add-on", "Add-on", "Included", "Included"],
          },
          {
            label: "Additional profiles",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes:
      "Sales Navigator seats for each managed profile, LinkedIn Premium or InMail credits, and attending or closing booked meetings.",
  },
  {
    slug: "linkedin-personal-branding",
    name: "LinkedIn Personal Branding",
    pillar: "Authority",
    from: 500,
    summary:
      "Position the founder as a recognised voice in their category through consistent, distinctive content.",
    groups: [
      {
        rows: [
          { label: "Posts / month", values: ["8", "12", "20", "Custom"] },
          { label: "Document carousels", values: ["2", "4", "6", "Custom"] },
          {
            label: "Voice / interview session",
            values: ["30 min, one-time", "45 min, one-time", "Weekly, 30 min", "Weekly + on-demand"],
          },
          {
            label: "Profile optimisation",
            values: ["One-time", "One-time", "One-time + quarterly refresh", "Continuous"],
          },
          {
            label: "Engagement activity",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
          {
            label: "Additional profiles",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes:
      "Video production and editing, PR placements, podcast bookings, ghost-commenting and engagement pods. Comment replies remain with the founder.",
  },
  {
    slug: "linkedin-growth-system",
    name: "LinkedIn Growth System",
    pillar: "Pipeline + Authority",
    from: 800,
    summary:
      "Founder content and targeted outreach, aligned on the same profiles so prospects recognise you before the first conversation.",
    groups: [
      {
        title: "Content and profiles",
        rows: [
          { label: "Profiles managed", values: ["1", "2", "3", "Custom"] },
          { label: "Posts / month", values: ["8", "12", "20", "Custom"] },
          { label: "Document carousels", values: ["2", "4", "6", "Custom"] },
          {
            label: "Voice / interview session",
            values: ["30 min, one-time", "45 min, one-time", "Weekly, 30 min", "Weekly + on-demand"],
          },
          {
            label: "Profile optimisation",
            values: ["One-time", "One-time", "One-time + quarterly refresh", "Continuous"],
          },
        ],
      },
      {
        title: "Outreach and alignment",
        rows: [
          { label: "Connection requests / day", values: ["10", "20", "30", "Custom"] },
          { label: "Connection requests / month", values: ["240", "480", "720", "Custom"] },
          { label: "Follow-ups / prospect", values: ["2", "3", "4", "Custom"] },
          {
            label: "Reply handling",
            values: ["Add-on", "Included", "Included", "Included"],
          },
          {
            label: "Ideal customer + messaging alignment",
            values: ["Included", "Included", "Included", "Included"],
          },
          {
            label: "Content-to-outreach topic alignment",
            values: ["—", "Included", "Included", "Included"],
          },
          {
            label: "Engagement activity",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
          {
            label: "Additional profiles",
            values: ["Add-on", "Add-on", "Add-on", "By scope"],
          },
        ],
      },
    ],
    excludes: "Sales Navigator and prospecting subscriptions are billed separately.",
  },
];

/**
 * Applies to every service at every tier — the same strategic input, with
 * delivery volume and account support matched to the tier.
 */
export const engagement = [
  { label: "Revision rounds / deliverable", values: ["1", "2", "3", "Custom scope"] },
  {
    label: "Reporting",
    values: ["Monthly", "Monthly", "Bi-weekly + monthly", "Weekly + monthly"],
  },
  {
    label: "Review calls",
    values: ["Monthly, 30 min", "Bi-weekly, 30 min", "Weekly, 30 min", "Weekly + on-demand"],
  },
  {
    label: "Support",
    values: [
      "Email + WhatsApp",
      "Call, email + WhatsApp",
      "Call, email + WhatsApp",
      "Dedicated account manager",
    ],
  },
];

/** Add-ons. `applies` names the services and tiers each is available to. */
export const addOns = [
  {
    name: "Reply handling",
    applies: "LinkedIn Lead Generation: Starter / Growth; Growth System: Starter",
    copy: "Daily inbox monitoring, approved replies, qualification and calendar booking.",
    basis: "Monthly",
  },
  {
    name: "Engagement activity",
    applies: "Personal Branding + Growth System: Starter to Scale",
    copy: "20 considered comments per week on target prospect and industry posts.",
    basis: "Monthly",
  },
  {
    name: "Additional landing page",
    applies: "Performance Marketing",
    copy: "Copy, design, build, form integration, thank-you page and tracking. Two revisions.",
    basis: "One-time",
  },
  {
    name: "Above-ceiling ad management",
    applies: "Performance Marketing: Starter to Scale",
    copy: "Management of spend above your tier ceiling.",
    basis: "% of spend",
  },
  {
    name: "Additional platform",
    applies: "Social Media: Starter to Scale",
    copy: "One extra platform with native formatting. Total post count stays the same.",
    basis: "Monthly",
  },
  {
    name: "Additional chatbot flow",
    applies: "WhatsApp: Starter to Scale",
    copy: "One extra conversational flow: design, build, testing and deployment.",
    basis: "One-time",
  },
  {
    name: "Additional automation flow",
    applies: "Email: Starter to Scale",
    copy: "One extra email automation: sequence design, copy, build and testing.",
    basis: "One-time",
  },
  {
    name: "Additional LinkedIn profile",
    applies: "All LinkedIn services: Starter to Scale",
    copy: "One extra profile at the current tier's per-profile volumes.",
    basis: "Monthly",
  },
  {
    name: "Extra revision round",
    applies: "All services",
    copy: "One revision beyond the tier allowance.",
    basis: "Per use",
  },
  {
    name: "Extra creative batch",
    applies: "Social, Performance + WhatsApp",
    copy: "Five additional assets in the existing brand style.",
    basis: "Per batch",
  },
  {
    name: "Rush delivery",
    applies: "All services",
    copy: "A deliverable within 48 hours, outside the standard cycle.",
    basis: "Per use",
  },
  {
    name: "Expanded contact list",
    applies: "WhatsApp + Email",
    copy: "Move to the next list-size band without a full tier upgrade.",
    basis: "Monthly",
  },
  {
    name: "Additional review call",
    applies: "All services",
    copy: "One extra 30-minute review call.",
    basis: "Per use",
  },
  {
    name: "Dedicated account manager",
    applies: "All services",
    copy: "A named contact coordinating your services.",
    basis: "Monthly",
  },
];

/** How an engagement starts. */
export const process = [
  {
    num: "01",
    title: "Scoping call",
    copy: "Identify your priorities and the services that fit.",
  },
  {
    num: "02",
    title: "Scope of work",
    copy: "Confirm deliverables, fees and engagement terms.",
  },
  {
    num: "03",
    title: "Onboarding",
    copy: "Grant access, complete research and approve the first month.",
  },
  {
    num: "04",
    title: "Delivery",
    copy: "Launch the agreed work and review performance.",
  },
];

/** Commercial terms. */
export const terms = [
  {
    title: "Billing",
    copy: "Monthly retainer, billed in advance. Fees are quoted and settled in USD.",
  },
  {
    title: "Approvals & scope",
    copy: "Approval delays shift delivery timelines. Scope changes are agreed in writing before work begins.",
  },
  {
    title: "Tier changes",
    copy: "Upgrades take effect from the next billing cycle; downgrades at the end of the current term.",
  },
  {
    title: "Confidentiality",
    copy: "Business information is kept confidential. Case studies and marketing use require your written permission.",
  },
];

/** Costs that sit outside the retainer at every tier. */
export const directCosts =
  "Ad spend, WhatsApp conversation charges, messaging and email subscriptions, prospecting tools, Sales Navigator seats, domains, hosting and CRM licences are outside the retainer at every tier.";

/** Ownership promise. */
export const ownership =
  "Advertising accounts, contact data, content assets and platform access remain your property throughout and after the engagement.";
