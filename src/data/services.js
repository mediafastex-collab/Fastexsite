/**
 * Single source of truth for the service line-up.
 *
 * Services are grouped into three systems. The page order below is the order
 * shown everywhere on the site.
 *
 *   pipeline, creates demand and books meetings
 *   authority, makes the buyer recognise you before the enquiry
 *   performance, converts intent efficiently
 *
 * Copy rules: no pricing, no currency, no geography, no em dashes.
 */

export const systems = [
  {
    key: "pipeline",
    name: "Pipeline",
    tagline: "Creating demand and booking meetings with named buyers.",
    copy: "The system that produces conversations. Researched lists, outreach that earns a reply, and follow-up that stops enquiries going cold.",
    /** Line items without a dedicated page yet are listed without a link. */
    extras: ["Lead Generation"],
  },
  {
    key: "authority",
    name: "Authority",
    tagline: "Being the obvious shortlist choice before the enquiry arrives.",
    copy: "The system that shortens the sale. Category expertise, founder credibility and customer proof, published where the buying committee is already looking.",
    extras: ["LinkedIn Branding"],
  },
  {
    key: "performance",
    name: "Performance",
    tagline: "Converting intent into pipeline without wasting spend.",
    copy: "The system that compounds the other two. Paid acquisition, landing pages and conversion work measured against booked meetings rather than clicks.",
    extras: ["Video Ads", "Conversion Optimisation"],
  },
];

export const services = [
  /* ─────────────────────────── PIPELINE ─────────────────────────── */
  {
    num: "01",
    slug: "linkedin-outreach",
    system: "pipeline",
    navLabel: "LinkedIn Outreach",
    title: "LinkedIn Outreach",
    h1: "LinkedIn Outreach that fills your pipeline.",
    outcome: "30+ qualified conversations a month with named decision makers.",
    metaTitle: "LinkedIn Outreach Service for B2B Companies — Fastex Media",
    metaDescription:
      "We build and run your LinkedIn outreach system. ICP targeting, messaging, connection strategy and follow-up. 30+ qualified conversations per month.",
    keywords: [
      "linkedin outreach service",
      "b2b linkedin lead generation",
      "linkedin pipeline agency",
      "managed linkedin outreach",
      "sales navigator lead generation",
    ],
    summary:
      "Outbound to named decision makers. Researched, sequenced and booked straight into your sales calendar.",
    detail:
      "We treat LinkedIn as a database, not a feed. Accounts are defined, contacts are verified, and conversations are opened by a human sounding sequence built on a relevant reason to reach out. Replies are handled by us and land in your calendar as booked meetings, not raw leads.",
    problem: {
      heading: "Connection Requests Are Not a Pipeline.",
      body: "The default LinkedIn playbook is to connect with everyone, pitch on acceptance and measure success in connection count. Senior buyers have seen that message several hundred times. It gets ignored, and it costs you the account for the next twelve months.",
      points: [
        "Automated pitches sent within seconds of a connection being accepted",
        "Lists built on job title alone, with no trigger or reason to reach out now",
        "Replies arriving with nobody assigned to answer them the same day",
        "Volume treated as the goal, which burns the profile and the market with it",
      ],
    },
    deliverables: [
      "Account and contact list building from your ICP",
      "Sales Navigator research and trigger based segmentation",
      "Connection, conversation and follow-up sequences",
      "Objection handling and qualification framework",
      "Appointment setting and CRM handover",
      "Weekly reporting on conversations and meetings booked",
    ],
    faqs: [
      {
        q: "Is this automation?",
        a: "Not in the way the word is usually meant. We work within human rate limits from warmed profiles rather than blasting from tools that trip detection, because aggressive automation risks restriction on the profile you depend on. Sequencing and reminders are systematised. The messages themselves are researched and written.",
      },
      {
        q: "How long does it take?",
        a: "Two weeks to define the ICP, build the list and prepare the profile and messaging. Sequences go live in week three and the first qualified replies usually arrive that same week. Steady meeting flow settles around week five, once messaging has been through a round of refinement on real reply data.",
      },
      {
        q: "What is the connection limit?",
        a: "LinkedIn allows roughly 100 to 200 connection requests a week depending on account standing, and we stay well inside that. Capping volume is deliberate. A smaller, well researched list at a high reply rate produces more meetings than a large list that trains your market to ignore you.",
      },
      {
        q: "What reply rate should we expect?",
        a: "On a well researched list with a genuine trigger, healthy is 15 to 25 percent reply, with roughly a third of those converting to a conversation. Anyone quoting far above that is either counting auto replies or working a very small, very warm list.",
      },
      {
        q: "Whose profile does the outreach come from?",
        a: "Yours, or a named member of your team. Buyers check who is messaging them, and a real operator with a credible profile gets a materially better response than an unfamiliar account. We prepare the profile before any sequence starts.",
      },
    ],
  },

  {
    num: "02",
    slug: "whatsapp-marketing",
    system: "pipeline",
    navLabel: "WhatsApp Marketing",
    title: "WhatsApp Marketing",
    outcome: "Enquiries answered in minutes instead of days.",
    h1: "WhatsApp marketing where B2B deals actually move.",
    metaTitle: "WhatsApp Marketing & Business API for B2B — Fastex Media",
    metaDescription:
      "Official WhatsApp Business API marketing for B2B. Instant enquiry response, distributor broadcasts and follow-up journeys that stop leads going cold.",
    keywords: [
      "whatsapp marketing",
      "whatsapp business api",
      "b2b whatsapp marketing",
      "whatsapp lead follow up",
      "distributor broadcast whatsapp",
    ],
    summary:
      "Official WhatsApp Business API journeys for B2B enquiry response, distributor networks and pipeline follow-up.",
    detail:
      "In most B2B markets, manufacturing, industrial, logistics, real estate and professional services, WhatsApp is where the deal actually moves. We set it up properly. Verified business account, approved templates, and automated follow-up that never lets an enquiry go cold.",
    problem: {
      heading: "The Enquiry Came In and Nobody Followed Up.",
      body: "Most B2B teams already run WhatsApp from personal numbers, with no templates, no routing and no record. Deals sit unanswered over a weekend, follow-up depends on whether a salesperson remembers, and when someone leaves, the conversation history leaves with them.",
      points: [
        "Enquiries landing on personal numbers with no visibility for the team",
        "Response times measured in days, when the buyer expected minutes",
        "No structured follow-up after a catalogue or quotation is sent",
        "Conversation history walking out of the door with a salesperson",
      ],
    },
    deliverables: [
      "Business verification and API onboarding",
      "Approved message templates for B2B use cases",
      "Instant enquiry response and lead capture flows",
      "Dealer, distributor and partner broadcast systems",
      "CRM sync and reply routing to your sales team",
      "Opt-in management and compliance controls",
    ],
    faqs: [
      {
        q: "Is this compliant, or is it spam?",
        a: "It runs on the official WhatsApp Business API with opt-in contacts, approved templates and clear opt-outs. We do not scrape numbers or buy lists. Sending unsolicited bulk messages gets the number banned, which is a good reason not to do it beyond the obvious one.",
      },
      {
        q: "What does WhatsApp itself charge?",
        a: "Meta bills per conversation, and rates vary by market and message category. It is billed directly to your account at cost and we do not mark it up. For most B2B clients it is a small line next to the value of one recovered deal.",
      },
      {
        q: "Can it connect to our CRM?",
        a: "Yes. Conversations sync so your team sees history against the contact record, and replies route to the right owner. If you have no CRM we will say so plainly. This works far better with one, and we can help you pick something simple.",
      },
      {
        q: "Will this replace our sales calls?",
        a: "No. It gets you answering in minutes instead of days, keeps quotations and samples moving, and stops enquiries dying between calls. The call still closes the deal.",
      },
    ],
  },

  {
    num: "03",
    slug: "email-marketing",
    system: "pipeline",
    navLabel: "Email Marketing",
    title: "Cold Email Marketing",
    outcome: "Sequences that reach the inbox and earn replies from senior buyers.",
    h1: "Cold email marketing that reaches the inbox and earns replies.",
    metaTitle: "B2B Cold Email Marketing — Fastex Media",
    metaDescription:
      "B2B cold email built on deliverability. Dedicated domains, verified data and research led sequences that reach senior buyers and get replies.",
    keywords: [
      "cold email",
      "b2b email marketing",
      "email deliverability",
      "cold outreach lead generation",
      "b2b lead generation email",
    ],
    summary:
      "Cold outbound infrastructure and lifecycle email that reaches the inbox and earns replies from senior buyers.",
    detail:
      "Deliverability is the whole game. We build the sending infrastructure first, covering domains, authentication, warm-up and volume discipline, then layer in research led copy that reads like it was written for one company, because it was.",
    problem: {
      heading: "Your Email Is Not Being Ignored. It Is Not Being Delivered.",
      body: "Most failed cold email is a deliverability problem wearing a copywriting costume. Teams send high volume from the primary domain, skip authentication, buy an unverified list, and conclude that email is dead. The messages went to spam, and the domain reputation went with them.",
      points: [
        "Volume sent from the company's main domain, putting normal mail at risk",
        "SPF, DKIM and DMARC missing or misconfigured",
        "Unverified lists producing bounce rates that trigger filtering",
        "The same message to a finance lead and a plant head, personalised with a first name",
      ],
    },
    deliverables: [
      "Domain, SPF, DKIM and DMARC setup with inbox warm-up",
      "Verified data sourcing and list hygiene",
      "Segmented sequences with account level personalisation",
      "Nurture tracks for long B2B evaluation cycles",
      "Reply, meeting and deliverability reporting",
      "Ongoing inbox placement monitoring",
    ],
    faqs: [
      {
        q: "Will this put our main domain at risk?",
        a: "Not if it is done properly. We never send volume from your primary domain. We buy and configure separate sending domains, authenticate them, warm them gradually and cap daily volume per mailbox. Your corporate domain keeps its reputation for the mail your team actually sends.",
      },
      {
        q: "How soon can sending start?",
        a: "Infrastructure and warm-up take two to three weeks before meaningful volume. That wait is the thing that makes the channel work. Sending hard from a cold domain lands you in spam permanently, and no copy recovers from that.",
      },
      {
        q: "Where does the data come from?",
        a: "Licensed data providers, verified and cleaned before sending, then re-verified on a rolling basis. We do not scrape. Bounce rate is the fastest way to destroy deliverability, so list hygiene is a continuous job rather than a one off purchase.",
      },
      {
        q: "Is cold email legal?",
        a: "B2B cold email to a business address is permitted in most markets, with conditions. GDPR, CAN-SPAM, CASL and the Australian Spam Act all require clear sender identification, a real physical address and a working opt-out. We include all three and segment sending by jurisdiction. CASL in particular needs consent for most Canadian recipients, so we scope that separately. Tell us which markets you sell into and we will confirm what applies.",
      },
    ],
  },

  /* ─────────────────────────── AUTHORITY ─────────────────────────── */
  {
    num: "04",
    slug: "personal-branding",
    system: "authority",
    navLabel: "Personal Branding",
    title: "Personal Branding",
    outcome: "Inbound conversations from accounts you never contacted.",
    h1: "Your expertise is your best marketing asset. We make it visible.",
    metaTitle: "Personal Branding for Founders & CEOs — Fastex Media",
    metaDescription:
      "We turn founders and executives into the most credible voice in their market. Strategy, content and LinkedIn presence. Your expertise, made visible.",
    keywords: [
      "personal branding for founders",
      "ceo personal branding",
      "executive personal branding",
      "founder linkedin strategy",
      "thought leadership content",
    ],
    summary:
      "Founder and executive authority, because in B2B people buy from the person before they buy from the company.",
    detail:
      "A founder profile with a clear point of view out-performs a company page every time. We turn what your leadership already knows into a publishing rhythm. Positioning, narrative, and posts written in the founder's own voice that bring the right accounts into the conversation.",
    problem: {
      heading: "Why Founder Personal Brand Drives Inbound.",
      body: "Buyers check the person before they check the company. A profile that reads like a CV, with no stated point of view, makes every outbound message colder than it needed to be. The goal is not reach for its own sake. It is being the name a buyer already trusts when the requirement finally appears.",
      points: [
        "A profile that lists roles held instead of problems solved",
        "Posting that stops the moment delivery gets busy",
        "Content written to impress peers rather than to help buyers",
        "Follower count treated as the result, with no line to pipeline",
      ],
    },
    deliverables: [
      "Profile positioning, headline and proof rebuild",
      "Narrative and point of view development",
      "Ghostwritten posts in the founder's own voice",
      "Publishing cadence held through busy delivery periods",
      "Comment and direct message strategy on target accounts",
      "Reporting on inbound conversations, not follower count",
    ],
    faqs: [
      {
        q: "Do you write the content or do I?",
        a: "We write it, from structured interviews with you, and it stays in your voice. Nothing publishes without your approval. The raw material is what you already know. The posts that work are the opinions you have on a Tuesday, written down properly.",
      },
      {
        q: "How long before results?",
        a: "Profile and positioning work lands immediately and improves every outbound touch from week one. Content compounds more slowly. Expect meaningful inbound conversation volume from month three, growing from there. Anyone promising inbound pipeline in week two is selling follower growth.",
      },
      {
        q: "How much of my time does this take?",
        a: "About an hour a month in structured interviews, plus approvals. If you have more time we will use it, but the system is designed to work without depending on a busy founder writing posts at midnight.",
      },
      {
        q: "What do you measure?",
        a: "Inbound conversations, profile visits from target accounts, and meetings that cite your content as the reason for reaching out. We also ask a source question on discovery calls. Follower count gets reported because you will ask, not because it is the point.",
      },
    ],
  },

  {
    num: "05",
    slug: "ugc-videos",
    system: "authority",
    navLabel: "UGC Videos",
    title: "UGC Videos",
    outcome: "Buyer hesitation removed by people who already bought.",
    h1: "UGC videos that remove buying hesitation.",
    metaTitle: "UGC Video Production for B2B Brands — Fastex Media",
    metaDescription:
      "We produce UGC videos that convert. Real customers, real operators, real outcomes. Social proof at scale for B2B companies with long sales cycles.",
    keywords: [
      "ugc video production",
      "user generated content videos",
      "b2b video testimonials",
      "social proof videos",
      "customer testimonial video",
    ],
    summary:
      "Customer voices, operator walkthroughs and outcome stories, produced at volume and cut for every channel you run.",
    detail:
      "A buying committee discounts anything you say about yourself and believes what your customers say about you. We produce that proof at volume: customer testimonial video, founder and operator led explanation, and case study film that shows the work rather than describing it.",
    problem: {
      heading: "Why UGC Beats Polished Ads.",
      body: "Polished brand film signals budget. It does not signal truth. A buying committee weighing a considered purchase is looking for evidence that someone like them already made this decision and it worked. Unpolished footage of a real customer saying a specific thing outperforms a produced spot, because it is harder to fake and easier to believe.",
      points: [
        "Brand video that describes the product and proves nothing",
        "Testimonials so generic they could be about any vendor",
        "Case studies that live as PDFs nobody opens",
        "One long film per year instead of proof published continuously",
      ],
    },
    deliverables: [
      "Customer and operator sourcing, with release and approval handling",
      "Interview briefs written to surface specifics rather than praise",
      "Remote and on-site capture, directed for usable answers",
      "Editing into channel cuts for LinkedIn, ads, site and sales decks",
      "Caption, hook and thumbnail variants for testing",
      "Performance reporting against view-through and conversion",
    ],
    faqs: [
      {
        q: "Who appears in the videos?",
        a: "Your customers, your operators and your founders. For B2B, credibility comes from the person who actually used the thing or built it, not from a hired creator reading a script. Where we do use external creators it is for explanation formats, and we say so on screen.",
      },
      {
        q: "How many videos do we get?",
        a: "It depends on how many customers will speak on record and how much capture time we get. A typical engagement turns a small number of interview sessions into a large number of cuts, because one good twenty minute conversation yields many usable pieces.",
      },
      {
        q: "Which platforms are these built for?",
        a: "LinkedIn first for most B2B clients, then paid social, your website and your sales team's follow-up material. We cut each interview for every destination rather than producing one film and hoping it travels.",
      },
      {
        q: "Our customers will not go on camera. Now what?",
        a: "That is common in enterprise and regulated sectors, and it is workable. We use anonymised outcome stories, operator led walkthroughs, and internal subject matter experts explaining the problem space. Less powerful than a named customer, considerably better than nothing.",
      },
    ],
  },

  {
    num: "06",
    slug: "social-media-marketing",
    system: "authority",
    navLabel: "Social Media Marketing",
    title: "Social Media Marketing",
    outcome: "Recognition before the enquiry, and a shorter shortlist.",
    h1: "B2B social media that gets you shortlisted before the enquiry.",
    metaTitle: "B2B Social Media Marketing — Fastex Media",
    metaDescription:
      "B2B social media that builds category authority. Content pillars, weekly publishing and proof led formats that make you the obvious shortlist choice.",
    keywords: [
      "b2b social media marketing",
      "b2b content marketing",
      "linkedin content",
      "b2b brand awareness",
      "category authority content",
    ],
    summary:
      "Organic presence that makes your company the obvious choice when a business buyer finally starts shortlisting vendors.",
    detail:
      "Before a B2B deal starts, the buying committee has already read your company page, checked your last twelve posts and formed an opinion. We build the content engine that shapes that opinion, with proof, point of view and category education published consistently.",
    problem: {
      heading: "Your Buyer Checks You Out Long Before They Contact You.",
      body: "By the time an enquiry arrives, the committee has already looked you up. If the last post is four months old and the feed is festival greetings, you have answered a question they were quietly asking. Most B2B social accounts publish often and say nothing.",
      points: [
        "Festival posts and office photos where category expertise should be",
        "No proof published: no case studies, no numbers, no client outcomes",
        "A feed that goes quiet for months whenever delivery gets busy",
        "Content written for peers and competitors rather than for buyers",
      ],
    },
    deliverables: [
      "Company page positioning and content pillars",
      "Weekly content calendar across LinkedIn, X and YouTube",
      "Case study, proof and product education formats",
      "Design system for carousels, clips and static posts",
      "Engagement routines that reach target accounts",
      "Monthly reporting on reach, profile visits and inbound conversations",
    ],
    faqs: [
      {
        q: "How long before organic content produces enquiries?",
        a: "Three to six months before it contributes meaningfully, and it compounds after that. Organic is the slowest system we run and the cheapest one over time. If you need meetings this quarter, pair it with outbound rather than waiting on it.",
      },
      {
        q: "How do you measure something this indirect?",
        a: "Imperfectly, and we say so. We track reach, profile visits, follower quality and inbound conversations that cite content, plus a source question on your discovery calls. Anyone claiming precise revenue attribution for organic social is guessing with more confidence than the data supports.",
      },
      {
        q: "Do we need to be on every platform?",
        a: "No, and trying is how most B2B teams end up posting nothing well. For almost every B2B client, LinkedIn carries the weight. We add a second channel only when your buyers demonstrably spend time there.",
      },
      {
        q: "Who supplies the subject matter expertise?",
        a: "You do, in about an hour a month. We run structured sessions with your technical or delivery people and turn that into a content bank. Without that input the output reads generic, and generic is what your buyer is already scrolling past.",
      },
    ],
  },

  /* ────────────────────────── PERFORMANCE ────────────────────────── */
  {
    num: "07",
    slug: "performance-marketing",
    system: "performance",
    navLabel: "Performance Marketing",
    title: "Performance Marketing",
    outcome: "Spend measured against booked meetings, not clicks.",
    h1: "Performance marketing measured in pipeline, not impressions.",
    metaTitle: "B2B Performance Marketing — Fastex Media",
    metaDescription:
      "B2B performance marketing on LinkedIn, Google and Meta. Campaigns built around qualified pipeline and cost per booked meeting, not clicks or vanity leads.",
    keywords: [
      "b2b performance marketing",
      "linkedin ads",
      "b2b paid media",
      "cost per qualified meeting",
      "b2b ppc",
    ],
    summary:
      "Paid acquisition on LinkedIn, Google and Meta built around qualified B2B pipeline, not clicks, impressions or vanity leads.",
    detail:
      "B2B buying cycles are long, committee driven and rarely close on first touch. We structure paid media around that reality. Demand capture for in-market accounts, demand generation for the majority who are not ready yet, and retargeting that stays present across the whole evaluation window.",
    problem: {
      heading: "Most B2B Ad Budgets Are Optimised for the Wrong Number.",
      body: "Platforms optimise for what they can see: clicks, form fills, cost per lead. None of those pay salaries. When the reporting stops at lead volume, spend drifts towards the cheapest audiences, which are almost never the accounts worth winning.",
      points: [
        "Cost per lead falling while cost per closed deal quietly rises",
        "Budget spent on job titles that cannot approve a purchase",
        "Landing pages written for consumers, sent to a buying committee",
        "No feedback loop from CRM, so the algorithm never learns what a good lead looks like",
      ],
    },
    deliverables: [
      "ICP, firmographic and job title targeting maps",
      "LinkedIn Ads, Google Search and Meta campaign builds",
      "Offer and landing page architecture for B2B intent",
      "Lead quality scoring fed back into ad optimisation",
      "Conversion rate work on the pages the spend lands on",
      "Pipeline and cost per qualified meeting reporting",
    ],
    faqs: [
      {
        q: "What budget do we need to start?",
        a: "Enough to gather signal inside a reasonable window. Below a certain monthly spend the data comes in too slowly to optimise against, and you are better served putting that money into outbound first. We will tell you which of the two we would spend it on, on the strategy session.",
      },
      {
        q: "Why report on meetings instead of leads?",
        a: "Because lead count is the number easiest to make look good. Doubling form fills while halving meeting quality is a straightforward thing to do accidentally. We wire your CRM back into campaign reporting so the optimisation target is a booked, qualified meeting.",
      },
      {
        q: "Do you run the ads on our accounts or yours?",
        a: "Yours. You own the ad accounts, the pixel data and the audience lists. If the engagement ends, none of it leaves with us. We hold that policy because the opposite is common enough to be worth stating.",
      },
      {
        q: "How long before performance stabilises?",
        a: "Expect four to six weeks of learning before cost per meeting settles, and longer in categories with small addressable audiences. Anyone quoting a stable cost per acquisition in week one is describing a spreadsheet, not a campaign.",
      },
    ],
  },

  {
    num: "08",
    slug: "gtm-strategy",
    system: "pipeline",
    navLabel: "GTM for Startups",
    title: "GTM Strategy for Startups",
    outcome: "A first repeatable route to market, before you scale spend.",
    h1: "Go-to-market strategy for startups finding their first customers.",
    metaTitle: "GTM Strategy for Startups — Fastex Media",
    metaDescription:
      "Go-to-market strategy for early stage startups. ICP definition, positioning and the first acquisition channel, built so it repeats rather than relying on the founder's network.",
    keywords: [
      "gtm strategy for startups",
      "go to market strategy",
      "startup gtm consulting",
      "icp definition",
      "early stage b2b marketing",
    ],
    summary:
      "ICP, positioning and the first channel. The decisions that have to be right before any spend is worth making.",
    detail:
      "Before a startup scales anything it needs one route to market that works twice. We define who you sell to precisely enough to build a list from, test the message against real replies, and stand up a single channel until it produces conversations predictably.",
    problem: {
      heading: "Revenue So Far Came From Your Network.",
      body: "Early revenue usually arrives through founder relationships, introductions and luck. None of that is a channel you can turn up. The gap shows the moment you try to grow past the people you already know.",
      points: [
        "An ICP broad enough that nobody could build a list from it",
        "Messaging that describes the product where it should describe the problem",
        "Several channels started at once, none run long enough to read",
        "Spend committed before anyone knows which message converts",
      ],
    },
    deliverables: [
      "ICP definition sharp enough to build a target list from",
      "Positioning and message tested against real replies",
      "Channel recommendation matched to deal size and sales cycle",
      "First outbound sequences built and launched",
      "Qualification criteria and a booked-meeting handover",
      "A written GTM plan you keep either way",
    ],
    faqs: [
      {
        q: "Is this for pre-revenue startups?",
        a: "Sometimes, with a caveat. If you have a product and can articulate the problem it solves, we can help you find the first buyers. If you are still deciding what to build, a go-to-market system is premature and we will say so rather than take the engagement.",
      },
      {
        q: "How is this different from hiring a growth marketer?",
        a: "A growth hire executes against a direction. What most startups need first is the direction itself, which is the part nobody is assigned. We make those decisions, prove one channel works, and then it is straightforward for an in-house hire to run it.",
      },
      {
        q: "How long before it produces meetings?",
        a: "Two weeks on ICP, positioning and list. Sequences go live in week three and first qualified replies usually land that same week. Predictable weekly flow takes closer to eight weeks, once messaging has been refined on real reply data.",
      },
      {
        q: "Do we need a budget for ads?",
        a: "Not at this stage, and usually you should not. Before you know which message converts, paid spend buys expensive learning. We start with outbound because it teaches you the same things for less, then add paid once the message is proven.",
      },
    ],
  },
];

export const serviceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const servicesBySystem = (key) =>
  services.filter((service) => service.system === key);