import Link from "next/link";
import Faq, { faqSchema } from "@/components/Faq";
import AnswerBlock from "@/components/AnswerBlock";
import Cta from "@/components/Cta";
import Lines from "@/components/Lines";
import CountUp from "@/components/CountUp";
import SystemFlow from "@/components/SystemFlow";
import { systems, servicesBySystem } from "@/data/services";
import { tiers } from "@/data/tiers";
import {
  outcomeMetrics,
  portfolioStats,
  featuredCases,
  projects,
} from "@/data/caseStudies";
import { posts } from "@/data/posts";
import { industries } from "@/data/industries";
import { cta, site } from "@/data/site";

const SITE = site.url;

export const metadata = {
  title: "Fastex Media — B2B Marketing Consulting & Revenue Growth Partner",
  description:
    "We architect revenue systems for B2B companies, startups and growth-stage businesses. Strategy, pipeline and content, built to scale globally.",
  keywords: [
    "b2b marketing consulting",
    "revenue growth agency",
    "marketing consulting firm",
    "growth marketing partner",
    "b2b pipeline agency",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fastex Media — B2B Marketing Consulting & Revenue Growth Partner",
    description:
      "We architect revenue systems for B2B companies, startups and growth-stage businesses.",
    url: "/",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

/** Outcome statements, not feature lists. */
const architecture = [
  {
    key: "pipeline",
    name: "Pipeline",
    outcome: "Qualified conversations with people who can sign, every week.",
    copy: "Researched account lists, outreach that earns a reply, and follow-up that stops enquiries going cold. We handle the replies and book meetings into your calendar.",
  },
  {
    key: "authority",
    name: "Authority",
    outcome: "You are already the name they trust when the need appears.",
    copy: "Category expertise, founder credibility and customer proof published where the buying committee is looking. It shortens the evaluation and makes every other channel cheaper.",
  },
  {
    key: "performance",
    name: "Performance",
    outcome: "Spend that produces meetings, not impressions.",
    copy: "Paid acquisition pointed at the segments the other two systems prove out, with your CRM feeding the optimisation so the platform learns what a good account looks like.",
  },
];

const faqs = [
  {
    q: "What does Fastex Media actually do?",
    a: "We are a marketing consulting firm that designs and runs revenue systems for B2B companies. That means we decide the strategy, build the infrastructure and operate the channels ourselves, then report on pipeline created rather than activity delivered. The distinction from an agency is ownership: we are accountable for the number, not for producing a set of deliverables.",
  },
  {
    q: "Who do you work with?",
    a: "B2B companies at three stages. Founders looking for their first repeatable revenue system, growth stage businesses whose first channel has plateaued, and established organisations that need an embedded partner rather than another vendor. We do not work on direct to consumer or e-commerce.",
  },
  {
    q: "What does it cost?",
    a: "Scope depends on your ICP, deal size, target volume and how many meetings your team can handle, so we quote after we understand those rather than publishing packages. Every engagement starts with a strategy session, which costs nothing and ends with a recommendation whether or not you go further.",
  },
  {
    q: "How quickly do you produce results?",
    a: "First qualified conversations typically appear in weeks three to four on outbound channels, with steady flow around week eight once messaging has been refined against real reply data. Authority and organic content take three to six months to contribute meaningfully. Any firm promising pipeline in week one is describing an existing list, not a system.",
  },
  {
    q: "Do you work with businesses outside our region?",
    a: "Yes. We work with ambitious businesses worldwide and run everything remote first, with calls scheduled in your timezone. Channel selection changes by market, and we account for that on the strategy session.",
  },
];

const aiAnswers = [
  {
    q: "What Is a Revenue Architecture Firm?",
    a: "A revenue architecture firm designs the system a company uses to generate and convert demand, then builds and operates it. It differs from a marketing agency in scope and accountability: an agency is usually engaged to execute activity inside one channel and is measured on delivering that activity, while a revenue architecture firm decides which channels should exist in the first place, how they feed each other, and how results are measured against closed revenue. The practical test is what happens when something stops working. An agency optimises within its brief; an architecture partner tells you the brief is wrong and proposes changing it.",
  },
  {
    q: "How Do You Build a B2B Marketing System?",
    a: "In a fixed order, because each stage depends on the one before it. First define the ideal customer profile precisely enough that a list can be built from the definition. Second, build the infrastructure the channels need: sending domains and authentication for email, verified data, tracking and CRM events. Third, launch one channel and run it until it produces conversations predictably. Only then add a second. Most failed B2B programmes invert this, launching several channels at once before the ICP is settled, which produces activity across all of them and reliable learning from none.",
  },
  {
    q: "How Do You Choose a B2B Marketing Consulting Firm?",
    a: "Judge on accountability and honesty rather than on client logos. Three questions separate a partner from a vendor: will the people who design the strategy also run the work, what number will they be held to, and will they tell you when a channel is failing before you notice it yourself. A firm worth hiring will decline work that is not right for them, will tell you which parts of the job your existing team should keep, and will report the channels that are not producing pipeline alongside the ones that are.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [faqSchema(faqs)],
};

/** Clients shown in the hero. Those with a published study link to it. */
const heroClients = [
  ...featuredCases.map((c) => ({
    name: c.client.replace(/ Ltd$/, ""),
    sector: c.sector,
    study: true,
  })),
  ...projects.slice(0, 4).map((p) => ({
    name: p.client,
    sector: p.sector,
    study: false,
  })),
];

export default function Home() {
  const latestPosts = posts.slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ══════════════ HERO ══════════════
          Dense rather than poster-like: headline, lede, actions, a scale
          line and the client proof all sit inside the first screen, so a
          visitor sees who we work with before scrolling. */}
      <section className="hero-v2">
        <div className="u-container">
          <p className="hero-v2__eyebrow" data-reveal="fade">
            B2B Marketing Consulting
          </p>

          <Lines
            as="h1"
            className="type-display-1 hero-v2__title"
            lines={["Your startup needs pipeline.", "Not more campaigns."]}
          />

          <p className="hero-v2__lede" data-reveal="up">
            Fastex Media is a marketing consulting firm for startups and growing
            B2B companies. We define the ICP, build the pipeline, and run the
            machine that fills your sales calendar.
          </p>

          <div className="hero-v2__actions" data-reveal="up">
            <Link href={cta.href} className="btn btn-primary">
              {cta.label}
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              See Revenue Impact Stories
            </Link>
          </div>

          {/* Scale line and client proof, side by side, still above the fold. */}
          <div className="hero-v2__proof" data-reveal="up">
            <p className="hero-v2__scale">
              Running growth systems for {portfolioStats[0].value} active B2B
              brands across SaaS, energy, ERP and manufacturing.
            </p>

            <ul className="hero-v2__clients">
              {heroClients.map((client) => (
                <li key={client.name} className="hero-v2__client">
                  <span className="hero-v2__clientName">{client.name}</span>
                  {client.study ? (
                    <Link href="/case-studies" className="hero-v2__caseLink">
                      Case study
                    </Link>
                  ) : (
                    <span className="hero-v2__sector">{client.sector}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════ THE PROBLEM ══════════════
          A dark full-bleed pivot. The page states the pain on a different
          ground, then resolves it back on white, so the turn is felt rather
          than just read. */}
      <section className="u-section u-section--lg pivot">
        <div className="u-container">
          <p className="u-label" data-reveal="fade">
            The problem
          </p>
          <Lines
            as="p"
            className="type-display-2 pivot__statement"
            lines={[
              "You know the pipeline",
              "should be predictable.",
              "So far, it hasn't been.",
            ]}
          />
          <p className="type-lede pivot__sub" data-reveal="up">
            Most agencies run campaigns. We build the system campaigns run
            inside. Strategy without execution is theory. Execution without
            strategy is expensive activity.
          </p>
        </div>
      </section>

      {/* Resolution, back on white. */}
      <section className="u-section">
        <div className="u-container">
          <Lines
            as="h2"
            className="type-display-3 resolve"
            lines={["That is exactly where we come in."]}
          />
        </div>
      </section>

      {/* ══════════════ WHO WE WORK WITH ══════════════ */}
      <section className="u-section u-section--ruled">
        <div className="u-container">
          <div className="u-head">
            <p className="u-label" data-reveal="fade">
              Who we work with
            </p>
            <h2 className="type-display-3" data-reveal="up">
              Three Stages. Three Different Problems.
            </h2>
            <p className="type-lede" data-reveal="up">
              The right system depends entirely on where your business is now.
            </p>
          </div>

          <div className="card-grid card-grid--3">
            {tiers.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className="card"
                data-reveal="up"
              >
                <span className="card__index">{tier.name}</span>
                <h3 className="card__title">{tier.h1}</h3>
                <p className="card__copy">{tier.tileLine}</p>
                <span className="u-link card__link">
                  Read more
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT WE ARCHITECT ══════════════
          Indexed rows rather than a third card grid, so consecutive sections
          do not read as the same shape repeated. */}
      <section className="u-section u-section--ruled">
        <div className="u-container">
          <div className="u-head">
            <p className="u-label" data-reveal="fade">
              What we architect
            </p>
            <h2 className="type-display-3" data-reveal="up">
              Three Systems That Feed Each Other.
            </h2>
            <p className="type-lede" data-reveal="up">
              Run in isolation each one underperforms. Run together, each makes
              the others cheaper.
            </p>
          </div>

          <div className="flow-wrap" data-reveal="scale">
            <SystemFlow />
          </div>

          <div className="rows">
            {architecture.map((system) => (
              <Link
                key={system.key}
                href="/services"
                className="rows__row u-row"
                data-reveal="up"
              >
                <span className="rows__label">{system.name}</span>
                <span className="rows__body">
                  <span className="rows__title">{system.outcome}</span>
                  <span className="rows__copy">{system.copy}</span>
                </span>
                <span className="rows__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="u-actions" data-reveal="up">
            <Link href="/services" className="btn btn-outline">
              The Architecture Suite
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ PROOF ══════════════
          Given a surface band: the numbers are the page's factual anchor and
          the change of ground makes them read as a distinct moment. */}
      <section className="u-section u-section--wash">
        <div className="u-container">
          <div className="u-head">
            <p className="u-label" data-reveal="fade">
              Proof
            </p>
            <h2 className="type-display-3" data-reveal="up">
              Numbers From Real Engagements.
            </h2>
          </div>

          <div className="metrics">
            {outcomeMetrics.map((metric) => (
              <div className="metrics__item" key={metric.label} data-reveal="up">
                <span className="metrics__value">
                  <CountUp value={metric.value} />
                </span>
                <span className="metrics__label">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="u-actions" data-reveal="up">
            <Link href="/case-studies" className="btn btn-outline">
              Revenue Impact Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ MID-PAGE CTA ══════════════
          A second, lighter call placed just after the proof. The reference
          breaks its page the same way rather than making a reader reach the
          footer before being asked. */}
      <section className="u-section midcta">
        <div className="u-container midcta__inner">
          <div>
            <h2 className="type-display-3 midcta__title">
              Ready to make pipeline predictable?
            </h2>
            <p className="type-lede midcta__copy">
              Thirty minutes on your funnel, your ICP and where revenue is
              leaking. You leave with a recommendation either way.
            </p>
          </div>
          <div className="midcta__action">
            <Link href={cta.href} className="btn btn-primary">
              {cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════ INDUSTRIES ══════════════
          Five sector pages already exist and were never linked from the
          homepage. Naming the sector a visitor works in does more than any
          general claim about B2B. */}
      <section className="u-section u-section--ruled">
        <div className="u-container">
          <div className="u-head">
            <p className="u-label" data-reveal="fade">
              Industries we work in
            </p>
            <h2 className="type-display-3" data-reveal="up">
              We Already Know Who Signs in Your Sector.
            </h2>
            <p className="type-lede" data-reveal="up">
              The buying committee, the objections and the length of the cycle
              differ by industry. We start from what we have already learned.
            </p>
          </div>

          <div className="sectors">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="sector u-row"
                data-reveal="up"
              >
                <span className="sector__name">{industry.name}</span>
                <span className="sector__tag">{industry.tagline}</span>
                <span className="sector__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT EACH SYSTEM PRODUCES ══════════════
          The outcome line already carried by every service, grouped by the
          system it belongs to. No new claims, just the existing ones put
          somewhere a visitor will actually read them. */}
      <section className="u-section u-section--ruled">
        <div className="u-container">
          <div className="u-head">
            <p className="u-label" data-reveal="fade">
              What each system produces
            </p>
            <h2 className="type-display-3" data-reveal="up">
              The Result You Are Buying.
            </h2>
          </div>

          <div className="results">
            {systems.map((system) => (
              <div className="results__col" key={system.key} data-reveal="up">
                <div className="results__head">{system.name}</div>
                <div className="results__list">
                  {servicesBySystem(system.key).map((service) => (
                    <div className="results__item" key={service.slug}>
                      <span className="results__service">{service.title}</span>
                      <span className="results__outcome">{service.outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ THE ARCHITECTURE BRIEF ══════════════
          Banded. Without it the page runs five white sections back to back
          through the middle, which reads as one undifferentiated wall. */}
      <section className="u-section u-section--surface">
        <div className="u-container">
          <div className="u-head">
            <p className="u-label" data-reveal="fade">
              The Architecture Brief
            </p>
            <h2 className="type-display-3" data-reveal="up">
              Frameworks and Opinions, Written Down.
            </h2>
          </div>

          <div className="card-grid card-grid--2">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card"
                data-reveal="up"
              >
                <span className="card__index">{post.pillar}</span>
                <h3 className="card__title">{post.title}</h3>
                <p className="card__copy">{post.description}</p>
                <span className="u-link card__link">
                  {post.read}
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="u-actions" data-reveal="up">
            <Link href="/blog" className="btn btn-outline">
              Read the Brief
            </Link>
          </div>
        </div>
      </section>

      <AnswerBlock items={aiAnswers} label="Straight answers" />

      <Faq faqs={faqs} heading="Questions We Get Asked First." />

      <Cta heading="Ready to build your revenue system?" />
    </>
  );
}
