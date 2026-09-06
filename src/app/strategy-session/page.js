import Link from "next/link";
import Faq, { faqSchema } from "@/components/Faq";
import { tiers } from "@/data/tiers";
import { site } from "@/data/site";

const SITE = site.url;
const BOOKING_URL = "https://cal.id/aagam-digital/discovery-call";

export const metadata = {
  title: "Free Marketing Strategy Session — Fastex Media",
  description:
    "30 minutes. We audit your go-to-market, identify what is blocking your growth, and tell you exactly what to fix. No pitch. No cost.",
  keywords: [
    "free marketing strategy session",
    "gtm audit",
    "marketing audit for startups",
    "revenue audit",
    "free marketing consultation",
  ],
  alternates: { canonical: "/strategy-session" },
  openGraph: {
    title: "Free Marketing Strategy Session — Fastex Media",
    description:
      "30 minutes. We audit your go-to-market, identify what is blocking your growth, and tell you exactly what to fix. No pitch. No cost.",
    url: "/strategy-session",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const steps = [
  {
    num: "01",
    title: "We review your current state",
    copy: "Your funnel, your channels, your CRM if you have one, and what your last two quarters actually produced. We ask for numbers, not narrative.",
  },
  {
    num: "02",
    title: "We identify the three biggest gaps",
    copy: "Where demand is not being created, where it is leaking, and where effort is going into something that cannot work at your stage.",
  },
  {
    num: "03",
    title: "We recommend the right system",
    copy: "Which of Pipeline, Authority or Performance to build first, and just as importantly, which to leave alone for now.",
  },
  {
    num: "04",
    title: "You decide if we are a fit",
    copy: "Sometimes the honest answer is that you need an in-house hire, or that you are too early for any of this. We will say so.",
  },
];

const takeaways = [
  {
    title: "An ICP clarity note",
    copy: "Written down: who you sell to, tightly enough that someone could build a list from the definition. Most teams discover theirs was never that specific.",
  },
  {
    title: "A channel recommendation",
    copy: "Which channel to build first for your deal size, sales cycle and where your buyers already spend attention, and the reasoning behind it.",
  },
  {
    title: "Priority actions",
    copy: "The two or three things worth doing in the next thirty days, in order. Yours to keep and execute with or without us.",
  },
];

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes, and there is no catch worth hunting for. We run these because a properly diagnosed conversation is how we find the small number of engagements that are genuinely a fit, and because telling someone what is wrong is the fastest way to demonstrate that we know. You leave with the recommendation regardless of what you decide.",
  },
  {
    q: "What if I am not ready to hire?",
    a: "That is a completely normal reason to book one. A good share of these sessions end with us telling someone to fix their positioning first, hire a salesperson before an agency, or wait two quarters. The clarity note and channel recommendation are yours either way, and if the timing changes later you already know who to call.",
  },
  {
    q: "How is this different from a sales call?",
    a: "A sales call is structured to arrive at a proposal. This is structured to arrive at a diagnosis, which sometimes rules us out. We spend the time on your funnel rather than on our credentials, and there is no deck. If we think we can help we will say so in the last five minutes, and you can ignore it.",
  },
  {
    q: "Who runs the session?",
    a: "Aagam, our founder, runs it, along with whoever would actually lead the work if an engagement followed. You will not be handed to a salesperson who then introduces you to a delivery team you have never met.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Strategy Session",
          item: `${SITE}/strategy-session/`,
        },
      ],
    },
    {
      "@type": "Service",
      name: "Marketing Strategy Session",
      serviceType: "Marketing strategy consultation",
      description:
        "A 30 minute go-to-market audit. We review your funnel, identify the three biggest gaps blocking revenue, and recommend which system to build first.",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: "Complimentary 30 minute strategy session.",
      },
    },
    faqSchema(faqs),
  ],
};

export default function StrategySession() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Strategy Session</span>
          </div>
          <h1>30 minutes. We tell you exactly what&apos;s broken.</h1>
          <p className="page-lede">
            Every engagement starts here. We look at your business, your current
            marketing, and your goals, and we tell you what is holding revenue
            back. No pitch. Just clarity.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <a href="#book" className="btn btn-primary">
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WHAT HAPPENS ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">The session</div>
            <h2>What Happens in the Thirty Minutes.</h2>
          </div>
          <div className="process-list">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="process-row reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TAKEAWAYS ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What you keep</div>
            <h2>You Walk Away With Something Either Way.</h2>
            <p>
              A concrete deliverable before there is any question of hiring us.
            </p>
          </div>
          <div className="industry-grid">
            {takeaways.map((item, i) => (
              <div
                key={item.title}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p className="card-copy">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHO THIS IS FOR ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Who books these</div>
            <h2>Three Situations This Is Built For.</h2>
          </div>
          <div className="industry-grid">
            {tiers.map((tier, i) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">{tier.name}</div>
                <h3>{tier.h1}</h3>
                <p className="card-copy">{tier.tileLine}</p>
                <span className="card-link">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BOOKING ---------- */}
      <section
        id="book"
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Book</div>
            <h2>Pick a Time.</h2>
            <p>
              Choose a slot below, or send the three details and we will come
              back with times that suit you.
            </p>
          </div>

          <div className="booking-grid">
            <div className="embed-frame reveal">
              <iframe
                src={BOOKING_URL}
                title="Book a strategy session"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            <form
              className="session-form reveal"
              action={`https://formsubmit.co/${site.email}`}
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Strategy Session request"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="field">
                <label htmlFor="ss-name">Name</label>
                <input id="ss-name" name="name" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="ss-company">Company</label>
                <input id="ss-company" name="company" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="ss-challenge">
                  Biggest marketing challenge
                </label>
                <textarea
                  id="ss-challenge"
                  name="challenge"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Request a Session
              </button>
            </form>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} heading="Before You Book." />
    </>
  );
}
