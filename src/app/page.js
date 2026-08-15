import Link from "next/link";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { portfolioStats, testimonials } from "@/data/caseStudies";
import { site } from "@/data/site";

/** Result cards drifting behind the hero — what the system actually produces. */
const heroCards = [
  {
    icon: "✓",
    head: "Meeting booked",
    sub: "VP Engineering · Thu, 3:00 PM",
  },
  {
    icon: "↗",
    head: "42 qualified leads",
    sub: "This month · 3 channels",
    live: "Pipeline building",
  },
  {
    icon: "✉",
    head: "Reply received",
    sub: "“Send me the pricing.”",
  },
  {
    icon: "▶",
    head: "Demo scheduled",
    sub: "SaaS founder · 30 min",
  },
  {
    icon: "☀",
    head: "Site survey confirmed",
    sub: "Plant head · Solar EPC",
  },
  {
    icon: "↓",
    head: "CPL down 60%",
    sub: "Performance campaign",
  },
];

const process = [
  {
    num: "01",
    title: "Map the market",
    copy: "We define the accounts worth winning, then build a verified data set of the people who actually sign.",
  },
  {
    num: "02",
    title: "Build the system",
    copy: "Multi-channel sequences, deliverability infrastructure and deep personalization — assembled as one machine.",
  },
  {
    num: "03",
    title: "Scale what converts",
    copy: "Every reply is tracked. We double down on the channels producing pipeline and cut the ones that don't.",
  },
];

const capabilities = [
  "Performance Marketing",
  "LinkedIn Lead Generation",
  "Social Media Marketing",
  "WhatsApp Marketing",
  "Cold Email Marketing",
  "Lead Research",
  "Appointment Setting",
];

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container hero-content hero-anim">
          <h1>
            We engineer <span className="accent">predictable</span> B2B revenue.
          </h1>
          <p>
            Your 24/7 outbound sales infrastructure — filling the pipeline with
            qualified appointments and scaling MRR systematically.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <Link href="/work" className="btn btn-outline">
              See Case Studies
            </Link>
          </div>
          <div className="hero-stats">
            {portfolioStats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-cards" aria-hidden="true">
          {heroCards.map((card) => (
            <div className="hero-card" key={card.head}>
              <span className="card-icon">{card.icon}</span>
              <span className="card-body">
                <span className="card-head">{card.head}</span>
                <span className="card-sub">{card.sub}</span>
                {card.live && <span className="card-live">{card.live}</span>}
              </span>
            </div>
          ))}
        </div>

      </section>

      {/* ---------- CAPABILITY MARQUEE ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((pass) => (
            <div className="marquee-group" key={pass}>
              {capabilities.map((item) => (
                <span className="marquee-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- BRAND STATEMENT ---------- */}
      <section className="section-padding brand-band">
        <div className="container">
          <div className="brand-inner reveal">
            <div className="section-label">Who we are</div>
            <h2 className="brand-wordmark">
              Fastex <span className="mark">Media</span>
            </h2>
            <p className="brand-line">
              A B2B lead generation agency. We build the outbound systems that
              put qualified meetings in your sales calendar — every week, on
              purpose, in the sectors we know.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Capabilities</div>
            <h2>Five channels. One system.</h2>
            <p>
              Run together, reported on one number: qualified meetings booked.
            </p>
          </div>

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

      {/* ---------- INDUSTRIES ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Specialisation</div>
            <h2>Industries we work in.</h2>
            <p>
              We already know who signs, what they object to and how long the
              cycle runs.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-emoji" aria-hidden="true">
                  {industry.icon}
                </div>
                <h3>{industry.name}</h3>
                <div className="card-tagline">{industry.tagline}</div>
                <span className="card-link">
                  View sector <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
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
            <div className="section-label">How We Work</div>
            <h2>Three moves. One machine.</h2>
          </div>

          <div className="process-list">
            {process.map((step, i) => (
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

      {/* ---------- TESTIMONIALS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Client love</div>
            <h2>4.9 out of 5.</h2>
            <p>Average client satisfaction across active accounts.</p>
          </div>

          <div className="quote-grid">
            {testimonials.map((item, i) => (
              <figure
                key={item.name}
                className="quote-card reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="quote-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <span className="quote-avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <span>
                    <span className="quote-name">{item.name}</span>
                    <span className="quote-role">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
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
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
