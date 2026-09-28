import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, industryBySlug, engagement } from "@/data/industries";

const SITE = "https://www.fastexmedia.com";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);

  if (!industry) return {};

  const url = `/industries/${industry.slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      type: "website",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: ["/og-image.jpg"],    },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = industryBySlug(slug);

  if (!industry) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: `${SITE}/industries`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: industry.name,
            item: `${SITE}/industries/${industry.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: `B2B Marketing for ${industry.name}`,
        serviceType: "B2B lead generation and appointment setting",
        description: industry.metaDescription,
        provider: {
          "@type": "Organization",
          name: "Fastex Media",
          url: SITE,
        },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
      {
        "@type": "FAQPage",
        mainEntity: industry.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

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
            <Link href="/industries">Industries</Link>
            <span className="sep">/</span>
            <span className="current">{industry.name}</span>
          </div>
          <div className="sector-badge"><span className="sector-emoji" aria-hidden="true">{industry.icon}</span><span>{industry.tagline}</span></div>
          <h1>{industry.h1}</h1>
          <p className="page-lede">{industry.heroSub}</p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <Link href="/work" className="btn btn-outline">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- PROOF BAND ---------- */}
      <section style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="proof-band">
            {industry.stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROBLEM ---------- */}
      <section className="section-padding">
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">{industry.problem.label}</div>
            </div>
            <div className="split-body">
              <h2>{industry.problem.heading}</h2>
              <p>{industry.problem.body}</p>
              <ul className="problem-list">
                {industry.problem.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES FOR THIS SECTOR ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What we run</div>
            <h2>Built for {industry.name}.</h2>
            <p>
              The same four channels, rewritten around the way your buyers
              actually decide.
            </p>
          </div>

          <div className="services-grid grid-2">
            {industry.services.map((service, i) => (
              <div
                key={service.index}
                className="service-card reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="service-index">{service.index}</div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <div className="service-arrow" aria-hidden="true">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DELIVERABLES ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">What you get</div>
            </div>
            <div className="split-body">
              <h2>Everything below is in scope from month one.</h2>
              <ul className="check-list">
                {industry.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">How we work</div>
            <h2>Three moves. One machine.</h2>
          </div>
          <div className="process-list">
            {engagement.map((step, i) => (
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

      {/* ---------- FAQ ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Questions</div>
            <h2>Before you book the call.</h2>
          </div>
          <div className="faq-list reveal">
            {industry.faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  {faq.q}
                  <span className="sign" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OTHER SECTORS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-label">Other sectors</div>
          <div className="pill-row">
            {industries
              .filter((other) => other.slug !== industry.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${other.slug}`}
                  className="pill"
                >
                  <span aria-hidden="true">{other.icon}</span> {other.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="section-padding cta"
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingBottom: "10rem",
        }}
      >
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Design. Scale. Dominate.</h2>
            <p className="cta-sub">
              Tell us where you want the pipeline to be in ninety days. We&apos;ll
              build the system that gets you there.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <div className="cta-contacts">
              <a href="mailto:hello@fastexmedia.com">hello@fastexmedia.com</a>
              <a href="tel:+919328680929">+91 9328680929</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
