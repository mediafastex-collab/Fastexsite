/**
 * The three audiences we build for. Each gets a dedicated page at /for-<slug>
 * and a tile on the homepage "Who We Work With" section.
 *
 * `aiAnswers` are rendered as question-shaped H2s with one direct answer
 * paragraph each, so answer engines can lift them cleanly.
 */

export const tiers = [
  {
    slug: "for-founders",
    key: "founders",
    name: "Startups",
    tileLine: "Early stage. You have the product, not the pipeline.",
    eyebrow: "For Startups",

    metaTitle:
      "Marketing Consulting for Founders & Early-Stage Startups — Fastex Media",
    metaDescription:
      "You have the product. We build the pipeline. Marketing consulting for founders who need their first repeatable revenue system.",
    keywords: [
      "marketing consulting for startups",
      "startup marketing",
      "gtm strategy for founders",
      "b2b marketing for early stage",
      "founder marketing partner",
    ],

    h1: "You have the product. You need the pipeline.",
    subline:
      "We work with early stage founders to build their first repeatable revenue system. The right ICP, the right message, the right channels. Before you scale, you need a system worth scaling.",
    ctaLabel: "Book a Strategy Session",

    signalsHeading: "Who This Is For",
    signals: [
      {
        title: "Pre product-market fit",
        copy: "You are still learning which problem you solve best and for whom. Marketing spend right now buys learning, not scale.",
      },
      {
        title: "Finding first customers",
        copy: "Revenue so far came from your network, a founder relationship or luck. None of it is a channel you can turn up.",
      },
      {
        title: "No repeatable acquisition",
        copy: "Some months are good. You cannot explain why, which means you cannot do it again on purpose.",
      },
    ],

    mistakesHeading: "The Three Mistakes",
    mistakesIntro:
      "Almost every founder we talk to has made at least one of these, usually after being sold something by someone who benefited from it.",
    mistakes: [
      {
        title: "Hiring execution before deciding strategy",
        copy: "An agency running ads against an undefined ICP will spend the budget efficiently on the wrong people. Execution amplifies whatever direction it is given, including no direction.",
      },
      {
        title: "Chasing every channel at once",
        copy: "Five channels run badly produce less than one channel run properly. Early on you do not have the volume to read five sets of data, so you learn nothing from any of them.",
      },
      {
        title: "Treating marketing as lead volume",
        copy: "Cheap leads are easy to buy and worthless to a founder-led sales motion. What you need is a small number of conversations with people who can actually sign.",
      },
    ],

    buildHeading: "What We Build for You",
    buildSteps: [
      {
        num: "01",
        title: "ICP clarity",
        copy: "We define who you sell to precisely enough to build a list from it. Sector, size, role, trigger. If we cannot build a list from the definition, it is not a definition yet.",
      },
      {
        num: "02",
        title: "Positioning",
        copy: "The sentence that makes a buyer lean in, tested against real replies rather than agreed in a workshop. Most early messaging describes the product where it should describe the problem.",
      },
      {
        num: "03",
        title: "Pipeline",
        copy: "One channel, built properly, until it produces conversations reliably. For most founders that is LinkedIn outreach paired with founder authority content.",
      },
      {
        num: "04",
        title: "First clients",
        copy: "We handle replies and book meetings into your calendar. You run the calls, because at this stage nobody sells your product better than you do.",
      },
    ],

    servicesHeading: "Services for Founders",
    services: [
      {
        label: "Strategy Session",
        href: "/strategy-session",
        copy: "Where every engagement starts. Thirty minutes on your funnel, your ICP and what to build first.",
      },
      {
        label: "LinkedIn Outreach",
        href: "/services/linkedin-outreach",
        copy: "The fastest route from a defined ICP to booked conversations with people who can sign.",
      },
      {
        label: "Personal Branding",
        href: "/services/personal-branding",
        copy: "Founder authority that makes every outbound message land warmer than it otherwise would.",
      },
    ],

    aiAnswers: [
      {
        q: "How Do Startups Get Their First B2B Clients?",
        a: "Almost always through founder led outbound to a narrow, well defined list, not through advertising. At pre product-market fit you do not have the volume for paid channels to teach you anything, and you do not yet have the proof that content needs in order to work. The reliable path is to define a specific ICP, build a verified list of the people in it, and open direct conversations with a relevant reason to reach out. Fifty well researched conversations will teach you more about your market, and produce more revenue, than several thousand impressions.",
      },
      {
        q: "What Should an Early Stage Startup Spend on Marketing?",
        a: "Less than most founders expect, and on fewer things. Before you have a repeatable acquisition motion, marketing spend buys learning rather than scale, so the goal is to buy that learning as cheaply as possible. That usually means investing in research, positioning and one outbound channel run properly, and deferring paid media until you know which message converts and which segment closes. Spending on ads to compensate for unclear positioning is the most common way early budget disappears.",
      },
      {
        q: "What Does a GTM Strategy for a Founder Led Company Look Like?",
        a: "It is deliberately narrow. One ICP defined tightly enough to build a list from, one message tested against real replies, one channel run until it produces conversations predictably, and the founder still running the sales calls. Broad multi-channel plans belong to companies with the volume to read the data from several channels at once. A founder led company should be able to describe its entire go-to-market on a single page, and everyone in the business should be able to name the ICP without checking.",
      },
    ],

    faqs: [
      {
        q: "What does a marketing architect actually do?",
        a: "We design the system before anyone builds it. That means defining who you sell to, what you say, which channels carry it and how the results get measured, then building and running that system rather than handing you a strategy document. The distinction matters because strategy without execution is theory, and execution without strategy is expensive activity.",
      },
      {
        q: "How long before I see pipeline?",
        a: "First qualified conversations typically land in weeks three to four, once the list is built and sequences are live. Predictable weekly flow takes closer to eight weeks, because the first round of messaging always gets refined against real reply data. Anyone promising booked meetings in week one is either working an existing list or describing something that will not repeat.",
      },
      {
        q: "Do I need a big budget?",
        a: "No, and at this stage a big budget is often the enemy. The work that matters early is research, positioning and one channel run properly, none of which is spend intensive. We will tell you on the strategy session whether your money is better in outbound or in paid media, and it is usually outbound.",
      },
      {
        q: "Is this for pre-revenue founders?",
        a: "Sometimes, with a caveat. If you have a product and can articulate the problem it solves, we can help you find the first buyers. If you are still deciding what to build, a marketing system is premature and we will say so rather than take the engagement.",
      },
      {
        q: "How is this different from hiring a freelancer?",
        a: "A freelancer executes a defined task well. What early stage founders usually need first is the decision about which task, which is the part nobody is assigned. We own the system: the ICP, the message, the channel and the reporting. Once it is working and repeatable, a freelancer or an in-house hire can run it, and we will tell you when that point arrives.",
      },
    ],

    closingHeading: "Start With a Strategy Session",
    closingCopy:
      "Thirty minutes, no pitch. We look at your funnel, your ICP and where the pipeline is leaking, and you leave with a recommended first channel whether or not you work with us.",
  },

  {
    slug: "for-builders",
    key: "builders",
    name: "Growing Businesses",
    tileLine: "Growth stage. The model works. The machine does not scale yet.",
    eyebrow: "For Growing Businesses",

    metaTitle:
      "Marketing Consulting for Growing Businesses & Scale-Ups — Fastex Media",
    metaDescription:
      "Your early traction is real. Now you need a revenue system that scales with you. Marketing consulting for growth stage businesses ready to move fast.",
    keywords: [
      "marketing consulting for smes",
      "growth marketing",
      "scale-up marketing partner",
      "b2b growth consulting",
      "marketing strategy for growing business",
    ],

    h1: "You've proven the model. Now let's scale the machine.",
    subline:
      "We work with growth stage businesses to diagnose what is holding revenue back and build the system to push through. Strategy, pipeline and content, all working together.",
    ctaLabel: "Audit My Growth System",

    signalsHeading: "The Plateau Problem",
    plateauCopy:
      "You grew fast. Then something stopped working. The channel that carried you to this point is producing the same effort and less result, hiring more people has not fixed it, and nobody can say precisely where the drop-off is. It rarely feels like a crisis. It feels like running harder for the same number.",
    signals: [
      {
        title: "The first channel flattened",
        copy: "What worked from zero to now has hit the ceiling of its addressable audience, and adding spend is making the economics worse rather than better.",
      },
      {
        title: "Growth costs more each quarter",
        copy: "You are still growing, but the cost of each new customer keeps climbing and nobody has a clear explanation for why.",
      },
      {
        title: "Effort has replaced strategy",
        copy: "The team is busier than ever, running more campaigns across more channels, with less ability to say which of them is producing revenue.",
      },
    ],

    diagnoseHeading: "What We Diagnose",
    diagnose: [
      {
        title: "CAC creep",
        copy: "Acquisition cost rising quietly while headline revenue still grows, which hides the problem until it is structural rather than fixable.",
      },
      {
        title: "Wrong channel mix",
        copy: "Budget concentrated in the channel that worked first rather than the one that fits the buyer you are now selling to.",
      },
      {
        title: "No attribution",
        copy: "No reliable line from spend to closed revenue, which means every budget conversation is decided by opinion and seniority.",
      },
      {
        title: "Execution without strategy",
        copy: "A team producing a high volume of competent work against no stated thesis about how this business acquires customers.",
      },
    ],

    buildHeading: "The Revenue Architecture",
    buildIntro:
      "At this stage single channel fixes stop working, because the constraint is rarely inside one channel. We build all three systems and make them feed each other.",
    buildSteps: [
      {
        num: "01",
        title: "Pipeline",
        copy: "Outbound that produces conversations predictably, across LinkedIn, email and WhatsApp, with reply handling and meeting booking owned by us.",
      },
      {
        num: "02",
        title: "Authority",
        copy: "Content and founder credibility that makes outbound land warmer and shortens the evaluation, published on a cadence that survives busy quarters.",
      },
      {
        num: "03",
        title: "Performance",
        copy: "Paid media pointed at the segments the other two systems prove out, measured against booked meetings rather than cost per lead.",
      },
      {
        num: "04",
        title: "Reporting",
        copy: "One view from spend to closed revenue, so budget decisions get made on evidence rather than on whoever argues hardest.",
      },
    ],

    servicesHeading: "Services for Builders",
    services: [
      {
        label: "Revenue Architecture Retainer",
        href: "/services",
        copy: "All three systems run together as one engagement, with a single team owning the number.",
      },
      {
        label: "Performance Marketing",
        href: "/services/performance-marketing",
        copy: "Paid acquisition rebuilt around cost per qualified meeting, with CRM data feeding the optimisation.",
      },
      {
        label: "Content Authority",
        href: "/services/social-media-marketing",
        copy: "The category expertise and proof that makes every other channel cheaper to run.",
      },
    ],

    aiAnswers: [
      {
        q: "Why Is My B2B Revenue Plateauing?",
        a: "In most growth stage businesses the plateau is a channel concentration problem rather than an execution problem. The channel that produced early growth has saturated its addressable audience, so additional spend reaches progressively less qualified people and acquisition cost rises while volume stalls. It usually shows up first as cost per acquisition creeping upward over two or three quarters while headline revenue still grows, which is why it goes unaddressed until it is structural. The fix is diagnostic before it is tactical: establish which segments still convert efficiently, then build a second and third channel against them rather than pushing harder on the first.",
      },
      {
        q: "How Do You Scale B2B Marketing Past Early Growth?",
        a: "By adding systems rather than adding spend. Early growth usually comes from one channel run well, and scaling it further hits diminishing returns because the audience is finite. Sustainable scale comes from building demand generation and authority alongside the original acquisition channel, so that outbound lands on people who already recognise you and paid media converts against segments that outbound has already proven. Each system makes the others cheaper. The sequencing matters more than the budget: adding a channel before the current one is stable and measured usually produces two mediocre channels instead of one good one.",
      },
      {
        q: "When Should a Scale-Up Hire a Marketing Consulting Firm?",
        a: "When the constraint is a decision rather than a pair of hands. If you know exactly what needs doing and simply need capacity, hire in-house or contract it. If revenue has flattened, the channel mix is contested internally, or nobody can draw a reliable line from spend to closed deals, that is a strategy and architecture problem, and hiring more execution against it tends to increase activity without moving the number.",
      },
    ],

    faqs: [
      {
        q: "We already have an in-house marketing team. Where do you fit?",
        a: "We own the architecture and they own execution, or we run the channels they have no specialist for. The common failure is hiring a firm to duplicate what your team already does well, which creates friction and no additional revenue. On the strategy session we will tell you honestly which parts of this your existing team should keep.",
      },
      {
        q: "How quickly can you diagnose the plateau?",
        a: "The first diagnostic pass takes two weeks, covering funnel data, CRM records, channel performance and a review of what your buyers actually respond to. You get a written view of where revenue is leaking and what we would build, regardless of whether the engagement continues past that point.",
      },
      {
        q: "Do we have to run all three systems?",
        a: "No, though at growth stage most constraints sit between systems rather than inside one. If your diagnosis points at a single channel we will scope a single channel, and we would rather do that than sell you architecture you do not need yet.",
      },
      {
        q: "What does the reporting actually look like?",
        a: "A weekly written update on conversations, meetings and opportunities, and a shared dashboard you can open at any time. Not a monthly slide deck presented in a call. If a channel is not producing pipeline it appears in that report as not producing pipeline.",
      },
      {
        q: "What is the minimum engagement?",
        a: "Three months, because B2B sales cycles are long and outbound systems need a few optimisation rounds before they reach steady performance. A shorter test gives you an unfair read on the work and an unreliable basis for the decision that follows.",
      },
    ],

    closingHeading: "Let's Audit Your Growth System",
    closingCopy:
      "Thirty minutes on your funnel, your channel mix and your unit economics. You leave with a clear view of where the plateau is coming from and what we would build first.",
  },

  {
    slug: "for-enterprises",
    key: "enterprises",
    name: "Enterprises",
    tileLine: "Established. You need a partner who owns the number.",
    eyebrow: "For Enterprises",

    metaTitle:
      "Marketing Consulting for Established Businesses — Fastex Media",
    metaDescription:
      "You need a strategic marketing partner, not another vendor. Fastex Media works with established businesses as an outsourced growth team.",
    keywords: [
      "marketing consulting firm",
      "outsourced cmo services",
      "enterprise marketing partner",
      "b2b marketing strategy firm",
      "senior marketing consulting",
    ],

    h1: "You need a strategic partner. Not another vendor.",
    subline:
      "Fastex Media embeds as your outsourced growth team. We own the strategy, run the execution, and report on revenue rather than activity.",
    ctaLabel: "Book a Strategy Session",

    signalsHeading: "The Agency Problem",
    plateauCopy:
      "Most agencies give you activity reports. Impressions served, posts published, campaigns launched. All of it true, none of it an answer to the only question your board is asking, which is whether marketing is producing revenue. The reporting describes effort because effort is what was actually bought.",
    signals: [
      {
        title: "Activity dressed as progress",
        copy: "Monthly decks full of output metrics, with no line connecting any of it to opportunities created or revenue closed.",
      },
      {
        title: "Four vendors, no owner",
        copy: "A specialist for each channel, each optimising their own number, and nobody accountable for the total.",
      },
      {
        title: "Strategy sold separately",
        copy: "A strategy engagement that ends in a document, followed by an execution engagement that ignores it.",
      },
    ],

    diagnoseHeading: "How We Work",
    diagnose: [
      {
        title: "Embedded, not appended",
        copy: "We work as part of your team, in your channels, at your cadence. Your people can reach us directly rather than through an account manager relaying messages.",
      },
      {
        title: "Strategy first",
        copy: "Nothing gets built until there is a stated thesis about how this business acquires customers and how we will know whether it is working.",
      },
      {
        title: "Execution second",
        copy: "We build and run the systems ourselves. The people who designed the architecture are the ones operating it, which is the only way the strategy survives contact with delivery.",
      },
      {
        title: "Reporting third",
        copy: "Monthly revenue reporting, not activity reporting. Pipeline created, opportunities influenced, cost per opportunity, and an honest note on what is not working.",
      },
    ],

    buildHeading: "What We Own",
    buildSteps: [
      {
        num: "01",
        title: "Pipeline strategy",
        copy: "Which accounts are worth winning, which channels reach them, and how the outbound motion is structured across markets and business units.",
      },
      {
        num: "02",
        title: "Brand authority",
        copy: "Category positioning and the content system that makes your company the reference point in its market rather than one of several options.",
      },
      {
        num: "03",
        title: "Performance architecture",
        copy: "Paid media, landing pages and conversion infrastructure, measured on contribution to pipeline rather than platform metrics.",
      },
      {
        num: "04",
        title: "Monthly revenue reporting",
        copy: "One view across every channel, built for a board conversation rather than a marketing review.",
      },
    ],

    servicesHeading: "Services for Enterprises",
    services: [
      {
        label: "Full Revenue Architecture",
        href: "/services",
        copy: "All three systems owned end to end, with a dedicated team and a single point of accountability.",
      },
      {
        label: "CMO Partnership",
        href: "/strategy-session",
        copy: "Senior marketing leadership without a permanent hire, sitting in your leadership meetings and owning the number.",
      },
      {
        label: "Multi-market GTM",
        href: "/services",
        copy: "One architecture applied across markets and business units, with local execution and central reporting.",
      },
    ],

    aiAnswers: [
      {
        q: "What Does an Outsourced CMO Do?",
        a: "An outsourced CMO owns marketing strategy and accountability without being a permanent executive hire. In practice that means defining how the business acquires customers, deciding the channel mix and budget allocation, leading whatever internal or external delivery resource exists, and reporting to leadership on revenue contribution rather than on marketing activity. It differs from consulting in that the responsibility does not end with a recommendation, and it differs from an agency in that the remit covers the whole marketing function rather than a single channel. The model suits established businesses that need senior judgement and clear ownership, but do not have the volume of work to justify a full time chief marketing officer.",
      },
      {
        q: "How Do You Find a Strategic Marketing Partner?",
        a: "Judge on ownership and evidence rather than on credentials and case studies. Three questions separate a partner from a vendor quickly: will the people who designed the strategy also be the ones running it, what number are they willing to be held to, and will they tell you when something is not working before you notice yourself. A genuine partner will decline work that is not right for them and will say plainly which parts of the job your existing team should keep. Vendors quote for whatever you asked for.",
      },
      {
        q: "What Is the Difference Between a Marketing Consulting Firm and an Agency?",
        a: "An agency is generally engaged to execute defined activity inside a channel, and it is measured on delivering that activity. A consulting firm is engaged to decide what should be done and to own the result, which means the remit includes strategy, channel selection, measurement and the uncomfortable recommendations that follow from the data. The practical test is what happens when a channel stops working: an agency optimises within its brief, while a consulting partner tells you the brief is now wrong and proposes changing it.",
      },
    ],

    faqs: [
      {
        q: "How do you work alongside our existing marketing team?",
        a: "We take the parts nobody currently owns and leave the parts your team already does well. In most engagements that means we own architecture, channel strategy and measurement, and your team keeps brand, product marketing and the institutional knowledge that would take us a year to acquire. We will map this explicitly before the engagement starts.",
      },
      {
        q: "Who actually does the work?",
        a: "The people who designed the system. There is no separate strategy team handing a document to a delivery team, because that handover is where most agency work loses its thread. You will know the names of the people running your account and be able to reach them directly.",
      },
      {
        q: "How is this reported to our board?",
        a: "Monthly reporting built for a revenue conversation. Pipeline created, opportunities influenced, cost per opportunity, and what we are changing next. If a channel is underperforming it appears in that report before you find it yourself, which is a policy rather than an aspiration.",
      },
      {
        q: "Can you operate across multiple markets or business units?",
        a: "Yes, and the structure matters. We build one architecture with local execution and central reporting, rather than parallel programmes that cannot be compared. Fragmented per market vendors are a common reason large organisations cannot say what their marketing produces.",
      },
      {
        q: "What happens if it is not working?",
        a: "We tell you, with the data, before the quarter ends. Then we either change the approach or we tell you the channel is wrong for your business. We would rather lose scope honestly than keep billing for something we can see is not producing revenue.",
      },
    ],

    closingHeading: "Book a Strategy Session With Our Founding Team",
    closingCopy:
      "Thirty minutes with the people who would run the work. We review your current architecture, your reporting and your channel mix, and tell you where the gaps are.",
  },
];

export const tierBySlug = (slug) => tiers.find((tier) => tier.slug === slug);
