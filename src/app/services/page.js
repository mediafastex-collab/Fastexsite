import Link from "next/link";
import Cta from "@/components/Cta";
import { services, systems, servicesBySystem } from "@/data/services";
import { tiers } from "@/data/tiers";
import { cta, site } from "@/data/site";

const SITE = site.url;

export const metadata = {
  title: "Marketing Services — The Architecture Suite | Fastex Media",
  description:
    "Pipeline, Authority and Performance. Three systems that work together to grow your revenue. Explore the full Fastex Media service suite.",
  keywords: [
    "b2b marketing services",
    "marketing consulting services",
    "linkedin outreach service",
    "performance marketing service",
    "personal branding service",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Marketing Services — The Architecture Suite | Fastex Media",
    description:
      "Pipeline, Authority and Performance. Three systems that work together to grow your revenue.",
    url: "/services",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

/** How an engagement is shaped. Deliberately no pricing. */
const engagements = [
  {
    num: "01",
    title: "Project",
    copy: "One system, one defined outcome, a fixed window. Suits a specific problem you can name: outbound is not producing meetings, or the founder profile needs rebuilding before a raise.",
  },
  {
    num: "02",
    title: "Retainer",
    copy: "Two or three systems run continuously with a standing team. The common shape for growth stage businesses, where the constraint moves and the architecture has to move with it.",
  },
  {
    num: "03",
    title: "Full Architecture",
    copy: "All three systems owned end to end, with senior leadership embedded in your team and monthly revenue reporting to your board. Effectively an outsourced growth function.",
  },
];

const listSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE}/services/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "The Architecture Suite",
      description:
        "Pipeline, Authority and Performance. Three systems that work together to generate and convert B2B demand.",
      numberOfItems: services.length,
      itemListElement: services.map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: service.title,
        description: service.summary,
        url: `${SITE}/services/${service.slug}/`,
      })),
    },
  ],
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Services</span>
          </div>
          <div className="section-label">The Architecture Suite</div>
          <h1>Three systems. One revenue architecture.</h1>
          <p className="page-lede">
            We do not sell individual services. We design systems, Pipeline,
            Authority and Performance, that work together to generate and
            convert demand.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href={cta.href} className="btn btn-primary">
              Start With a Strategy Session
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              See Revenue Impact Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- THE THREE SYSTEMS ---------- */}
      <section className="section-padding" style={{ paddingTop: "3rem" }}>
        <div className="container">
          {systems.map((system) => {
            const items = servicesBySystem(system.key);

            return (
              <div
                className="system-block reveal"
                key={system.key}
                id={system.key}
              >
                <div className="system-head">
                  <div>
                    <div className="system-name">{system.name}</div>
                    <span className="tier-line">{system.tagline}</span>
                  </div>
                  <p>{system.copy}</p>
                </div>

                <div className="system-rows">
                  {items.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="system-row"
                    >
                      <h3>{service.title}</h3>
                      <p>{service.outcome}</p>
                      <span className="go" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}

                  {/* Capabilities delivered inside this system that do not have
                      a page of their own yet. */}
                  {system.extras.map((extra) => (
                    <div className="system-row is-static" key={extra}>
                      <h3>{extra}</h3>
                      <p>Delivered as part of the {system.name} system.</p>
                      <span />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- CONSULTING ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Consulting</div>
            <h2>Before Any of It Gets Built.</h2>
            <p>
              Architecture is a decision before it is a deliverable. Both of
              these exist to make that decision properly.
            </p>
          </div>
          <div className="industry-grid">
            <Link href={cta.href} className="industry-card reveal">
              <div className="card-index">01</div>
              <h3>Strategy Session</h3>
              <p className="card-copy">
                Thirty minutes on your funnel, your ICP and where revenue is
                leaking. You leave with a channel recommendation and priority
                actions, at no cost.
              </p>
              <span className="card-link">
                Book a session <span aria-hidden="true">→</span>
              </span>
            </Link>
            <Link href="/for-builders" className="industry-card reveal">
              <div className="card-index">02</div>
              <h3>Growth Retainer</h3>
              <p className="card-copy">
                Ongoing ownership of the architecture. We diagnose, build, run
                and report, and we tell you when a channel should be cut rather
                than optimised.
              </p>
              <span className="card-link">
                Read more <span aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- HOW WE ENGAGE ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">How we engage</div>
            <h2>Three Ways to Work Together.</h2>
            <p>
              Scope depends on your ICP, deal size and how many meetings your
              team can actually handle. We quote after the strategy session,
              never before it.
            </p>
          </div>
          <div className="process-list">
            {engagements.map((item, i) => (
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

      {/* ---------- WHO WE WORK WITH ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Who we work with</div>
            <h2>The Right System Depends on Your Stage.</h2>
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

      <Cta
        heading="Not sure which system you need?"
        copy="That is what the strategy session is for. Thirty minutes, no pitch, and a straight recommendation on where to start."
        label="Start With a Strategy Session"
      />
    </>
  );
}
