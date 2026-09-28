import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/data/services";
import { industries, engagement } from "@/data/industries";

const SITE = "https://www.fastexmedia.com";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) return {};

  const url = `/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/og-image.jpg"],    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);

  if (!service) notFound();

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
            name: "Services",
            item: `${SITE}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${SITE}/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.metaDescription,
        provider: {
          "@type": "Organization",
          name: "Fastex Media",
          url: SITE,
        },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
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
            <Link href="/services">Services</Link>
            <span className="sep">/</span>
            <span className="current">{service.title}</span>
          </div>
          <div className="eyebrow">Service {service.num}</div>
          <h1>{service.h1}</h1>
          <p className="page-lede">{service.summary}</p>
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

      {/* ---------- PROBLEM ---------- */}
      <section className="section-padding">
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">The problem</div>
            </div>
            <div className="split-body">
              <h2>{service.problem.heading}</h2>
              <p>{service.problem.body}</p>
              <ul className="problem-list">
                {service.problem.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- APPROACH ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">Our approach</div>
            </div>
            <div className="split-body">
              <h2>How we run {service.title}.</h2>
              <p>{service.detail}</p>
            </div>
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
              <div className="section-label">What&apos;s included</div>
            </div>
            <div className="split-body">
              <h2>Everything below is in scope from month one.</h2>
              <ul className="check-list">
                {service.deliverables.map((item) => (
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
            {service.faqs.map((faq) => (
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

      {/* ---------- CROSS LINKS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-label">Other services</div>
          <div className="pill-row">
            {services
              .filter((other) => other.slug !== service.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="pill"
                >
                  {other.navLabel}
                </Link>
              ))}
          </div>

          <div className="section-label" style={{ marginTop: "3.5rem" }}>
            Sectors we run this for
          </div>
          <div className="pill-row">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="pill"
              >
                {industry.name}
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
