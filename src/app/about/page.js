import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import Cta from "@/components/Cta";
import { site, founder } from "@/data/site";
import { systems } from "@/data/services";
import { outcomeMetrics } from "@/data/caseStudies";

const SITE = site.url;

export const metadata = {
  title: "About Fastex Media — The Architects of Revenue Growth",
  description:
    "Fastex Media is a marketing consulting firm built on one belief: strategy without execution is theory, and execution without strategy is waste.",
  keywords: [
    "marketing consulting firm",
    "revenue architecture",
    "about fastex media",
    "aagam shah fastex media",
    "b2b marketing partner",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Fastex Media — The Architects of Revenue Growth",
    description:
      "A marketing consulting firm built on one belief: strategy without execution is theory, and execution without strategy is waste.",
    url: "/about",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const principles = [
  {
    num: "01",
    title: "System before tactics",
    copy: "A tactic is only as good as the structure it sits inside. We will not run a channel until we can say what it is for, who it reaches and how we will know whether it worked. That is why our engagements start with a diagnosis rather than a campaign calendar.",
  },
  {
    num: "02",
    title: "Outcomes before deliverables",
    copy: "It is entirely possible to deliver everything promised and produce nothing. We would rather report on pipeline created and be held to it than hand over a folder of assets and call the month a success.",
  },
  {
    num: "03",
    title: "Honest before impressive",
    copy: "We tell clients when a channel is failing before they find it in the numbers, and we decline work we do not think will succeed. It costs us revenue occasionally. It is also the only reason anyone should trust the reporting we do send.",
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
          name: "About",
          item: `${SITE}/about/`,
        },
      ],
    },
    {
      "@type": "AboutPage",
      name: "About Fastex Media",
      description:
        "A marketing consulting firm that designs, builds and runs revenue systems for B2B companies.",
      url: `${SITE}/about/`,
      mainEntity: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#founder`,
      name: founder.name,
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE}/#organization` },
      url: founder.linkedin,
      sameAs: [founder.linkedin, founder.x],
      knowsAbout: [
        "B2B revenue architecture",
        "Go-to-market strategy",
        "LinkedIn outreach",
        "Cold email deliverability",
        "B2B performance marketing",
      ],
    },
  ],
};

export default function About() {
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
            <span className="current">The Architects</span>
          </div>
          <h1>We are Marketing Architects.</h1>
          <p className="page-lede">
            We do not run campaigns and report on clicks. We design the revenue
            system first, then we build and run it. That is the difference
            between a vendor and a partner.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href="/strategy-session" className="btn btn-primary">
              Work With Us
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              See Revenue Impact Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- PHILOSOPHY ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">The belief</div>
            </div>
            <div className="split-body">
              <h2>Strategy Without Execution Is Theory.</h2>
              <p>
                Execution without strategy is waste. Almost every marketing
                problem we are asked to fix sits in the gap between those two
                sentences. Someone was sold a strategy that arrived as a
                document and was never built, or a team was hired to execute
                against a direction nobody had actually decided.
              </p>
              <p>
                Architecture is the word we use for closing that gap. It means
                the people who decide what should happen are the same people who
                build it, run it and report on whether it worked. There is no
                handover, because the handover is where the thinking gets lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PRINCIPLES ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">How we operate</div>
            <h2>Three Principles We Hold To.</h2>
          </div>
          <div className="process-list">
            {principles.map((item, i) => (
              <div
                key={item.num}
                className="process-row reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="process-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOUNDER ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="founder-block reveal">
            <div className="founder-photo">
              <img
                src={founder.photo}
                alt={`${founder.name}, ${founder.role} of Fastex Media`}
                width={520}
                height={650}
              />
            </div>

            <div className="founder-body">
              <h2>{founder.name}</h2>
              <div className="founder-role">{founder.role}</div>
              <p>
                &ldquo;I kept meeting companies with a good product and no way to
                reach the people who needed it. Not a messaging problem, not a
                budget problem. Nobody had ever decided how the business was
                supposed to acquire customers, so every quarter became a
                different experiment run by whoever was loudest that month.
              </p>
              <p>
                What struck me is that the agencies they hired made it worse.
                Each one optimised its own channel, reported its own metric, and
                nobody owned the total. The client ended up coordinating four
                vendors and still could not answer the only question their board
                was asking.
              </p>
              <p>
                So we built the opposite. One team that decides the
                architecture, builds it, runs it, and puts its name on the
                number. If a channel is not working, you hear it from us
                first.&rdquo;
              </p>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="founder-social"
                aria-label={`${founder.name} on LinkedIn`}
              >
                <SocialIcon name="LinkedIn" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE BUILD ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What we build</div>
            <h2>Three Systems, One Architecture.</h2>
          </div>
          <div className="industry-grid">
            {systems.map((system, i) => (
              <Link
                key={system.key}
                href="/services"
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">{system.name}</div>
                <h3>{system.tagline}</h3>
                <p className="card-copy">{system.copy}</p>
                <span className="card-link">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROOF ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Proof</div>
            <h2>Measured, Not Claimed.</h2>
          </div>
          <div className="metric-row reveal">
            {outcomeMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <b>{metric.value}</b>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta
        heading="Work with us."
        copy="Every engagement starts with a strategy session. Thirty minutes, no pitch, and a straight answer on whether we are the right partner for you."
        label="Work With Us"
      />
    </>
  );
}
