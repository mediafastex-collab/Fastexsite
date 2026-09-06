import Link from "next/link";
import Faq, { faqSchema } from "@/components/Faq";
import AnswerBlock from "@/components/AnswerBlock";
import Cta from "@/components/Cta";
import HeroProof from "@/components/HeroProof";
import { caseForTier } from "@/data/caseStudies";
import { cta, site } from "@/data/site";

const SITE = site.url;

/** Schema graph for a tier page. Kept beside the component that renders it. */
export const tierSchema = (tier) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: tier.eyebrow,
          item: `${SITE}/${tier.slug}/`,
        },
      ],
    },
    {
      "@type": "Service",
      name: `Marketing consulting ${tier.eyebrow.toLowerCase()}`,
      serviceType: "Marketing consulting",
      description: tier.metaDescription,
      provider: { "@id": `${SITE}/#organization` },
      areaServed: { "@type": "Place", name: "Worldwide" },
      audience: { "@type": "Audience", audienceType: tier.name },
    },
    faqSchema(tier.faqs),
  ],
});

export default function TierPage({ tier }) {
  const study = caseForTier(tier.key);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tierSchema(tier)) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">{tier.eyebrow}</span>
          </div>
          <h1>{tier.h1}</h1>
          <p className="page-lede">{tier.subline}</p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href={cta.href} className="btn btn-primary">
              {tier.ctaLabel}
            </Link>
            <Link href="/case-studies" className="btn btn-outline">
              See Revenue Impact Stories
            </Link>
          </div>

          {/* Proof in the first screen, same as the homepage, narrowed to
              this audience where we have engagements for it. */}
          <HeroProof tier={tier.key} limit={6} />
        </div>
      </section>

      {/* ---------- SIGNALS / THE PROBLEM ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">The situation</div>
            <h2>{tier.signalsHeading}</h2>
            {tier.plateauCopy && <p>{tier.plateauCopy}</p>}
          </div>
          <div className="industry-grid">
            {tier.signals.map((signal, i) => (
              <div
                key={signal.title}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{signal.title}</h3>
                <p className="card-copy">{signal.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- MISTAKES (founders) or DIAGNOSIS (builders, enterprises) ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">
                {tier.mistakes ? "What goes wrong" : "How we work"}
              </div>
            </div>
            <div className="split-body">
              <h2>{tier.mistakesHeading || tier.diagnoseHeading}</h2>
              {tier.mistakesIntro && <p>{tier.mistakesIntro}</p>}
            </div>
          </div>

          <div className="process-list" style={{ marginTop: "3rem" }}>
            {(tier.mistakes || tier.diagnose).map((item, i) => (
              <div
                key={item.title}
                className="process-row reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="process-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE BUILD ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">The build</div>
            <h2>{tier.buildHeading}</h2>
            {tier.buildIntro && <p>{tier.buildIntro}</p>}
          </div>
          <div className="process-list">
            {tier.buildSteps.map((step, i) => (
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

      {/* ---------- CASE STUDY ---------- */}
      {study && (
        <section className="section-padding section-padding--ruled">
          <div className="container">
            <div className="section-header reveal">
              <div className="section-label">Proof</div>
              <h2>{study.headline}</h2>
            </div>

            <div className="case-item reveal">
              <div className="case-head">
                <span className="case-sector">{study.sector}</span>
                <h3>{study.client}</h3>
                <span className="case-service">{study.service}</span>
              </div>
              <div className="case-body">
                <div className="case-block">
                  <span className="case-label">Challenge</span>
                  <p>{study.challenge}</p>
                </div>
                <div className="case-block">
                  <span className="case-label">What we built</span>
                  <p>{study.solution}</p>
                </div>
                <div className="case-block">
                  <span className="case-label">Outcome</span>
                  <p>{study.outcome}</p>
                </div>
              </div>
              <div className="case-metrics">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <b>{metric.value}</b>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/case-studies" className="btn btn-outline">
                All Revenue Impact Stories
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ---------- SERVICES FOR THIS TIER ---------- */}
      <section
        className="section-padding section-padding--ruled"
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Where to start</div>
            <h2>{tier.servicesHeading}</h2>
          </div>
          <div className="industry-grid">
            {tier.services.map((service, i) => (
              <Link
                key={service.label}
                href={service.href}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{service.label}</h3>
                <p className="card-copy">{service.copy}</p>
                <span className="card-link">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-outline">
              The Full Architecture Suite
            </Link>
          </div>
        </div>
      </section>

      <AnswerBlock items={tier.aiAnswers} label="Straight answers" />

      <Faq faqs={tier.faqs} heading="Before You Book the Session." />

      <Cta
        heading={tier.closingHeading}
        copy={tier.closingCopy}
        label={tier.ctaLabel}
      />
    </>
  );
}
