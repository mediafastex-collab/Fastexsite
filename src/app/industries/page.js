import Link from "next/link";
import { industries, engagement } from "@/data/industries";

export const metadata = {
  title: "Industries We Specialise In | B2B Marketing | Fastex Media",
  description:
    "Fastex Media builds B2B outbound systems for IT & software, solar & renewable energy, manufacturing, educational institutes and commercial real estate.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Specialise In | Fastex Media",
    description:
      "B2B outbound systems built for IT & software, solar & renewable, manufacturing, education and commercial real estate.",
    url: "/industries",
    type: "website",
      images: ["/og-image.jpg"],
  },
};

const cardCopy = {
  "it-software":
    "Meetings with CTOs, IT directors and technical buyers — built on tech-stack research, not job titles.",
  "solar-renewable":
    "Commercial and industrial projects. Facility heads, plant managers and the CFOs who sign the capex.",
  manufacturing:
    "Procurement heads, sourcing managers and distributors — in the markets you want to grow into.",
  education:
    "Corporate partnerships, institutional sales and franchise expansion for education organisations.",
  "real-estate":
    "Channel partners, corporate tenants and investors — direct pipelines instead of shared portal leads.",
};

const SITE = "https://fastexmedia.com";

const listSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries We Serve",
  description:
    "B2B sectors Fastex Media builds lead generation systems for.",
  numberOfItems: industries.length,
  itemListElement: industries.map((industry, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: industry.name,
    description: industry.metaDescription,
    url: `${SITE}/industries/${industry.slug}/`,
  })),
};

export default function Industries() {
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
            <span className="current">Industries</span>
          </div>
          <div className="section-label">Specialisation</div>
          <h1>Industries we work in.</h1>
          <p className="page-lede">
            A generalist agency has to relearn your market on your budget. We
            work in a small number of B2B sectors, which means we already know
            who signs, what they object to and how long the cycle runs — before
            the first sequence goes out.
          </p>
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

      <section className="section-padding" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="industry-grid">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="card-emoji" aria-hidden="true">
                  {industry.icon}
                </div>
                <h3>{industry.name}</h3>
                <div className="card-tagline">{industry.tagline}</div>
                <p className="card-copy">{cardCopy[industry.slug]}</p>
                <span className="card-link">
                  View sector <span aria-hidden="true">→</span>
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
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">Why sector focus</div>
            </div>
            <div className="split-body">
              <h2>Specialisation is the difference between outreach and noise.</h2>
              <p>
                The reason most outbound fails is not the channel — it is that
                the message could have been sent to anybody. When we already
                know that a plant head cares about sanctioned load, or that a
                procurement manager wants your certifications before your
                story, the first message earns a reply instead of an unsubscribe.
              </p>
              <p>
                It also means we can tell you honestly when you are not a fit.
                We would rather decline an engagement than spend three months
                learning a market on your budget.
              </p>
              <Link href="/contact" className="btn btn-outline">
                Book a Free Strategy Call
              </Link>
            </div>
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
            <h2>Not sure you fit?</h2>
            <p className="cta-sub">
              Tell us what you sell and who signs the cheque. If we are the
              wrong agency for it, we will say so on the call.
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
