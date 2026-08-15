import Link from "next/link";
import { services } from "@/data/services";
import { engagement } from "@/data/industries";

export const metadata = {
  title: "B2B Marketing Services | Fastex Media",
  description:
    "Performance marketing, LinkedIn lead generation, social media, WhatsApp and cold email — five B2B channels run as one system that books qualified meetings.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "B2B Marketing Services | Fastex Media",
    description:
      "Five B2B channels run as one system: performance marketing, LinkedIn, social media, WhatsApp and cold email.",
    url: "/services",
    type: "website",
      images: ["/og-image.jpg"],
  },
};

const SITE = "https://www.fastexmedia.com";

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "B2B Marketing Services",
  description:
    "Five B2B marketing channels run as one lead generation system.",
  numberOfItems: services.length,
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.title,
    description: service.summary,
    url: `${SITE}/services/${service.slug}/`,
  })),
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Services</span>
          </div>
          <div className="section-label">Capabilities</div>
          <h1>Five channels. Run as one system.</h1>
          <p className="page-lede">
            Channels fail in isolation. A reply on LinkedIn that nobody follows
            up on WhatsApp is a lost deal; an ad budget with no outbound behind
            it is a rented audience. We run all five as one machine, and report
            on the only number that matters — qualified meetings booked.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="industry-grid">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">{service.num}</div>
                <h3>{service.title}</h3>
                <p className="card-copy">{service.summary}</p>
                <span className="card-link">
                  View service <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
