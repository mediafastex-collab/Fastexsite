import Link from "next/link";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { portfolioStats, testimonials } from "@/data/caseStudies";
import { site } from "@/data/site";
import HeroFlow from "@/components/HeroFlow";
import BookCall from "@/components/BookCall";
import ClientMarquee from "@/components/ClientMarquee";
import Hl from "@/components/Hl";


const process = [
  {
    num: "01",
    title: "Map the market",
    copy: "We define the accounts worth winning, then build a verified data set of the people who actually sign.",
    highlights: ["verified data set"],
  },
  {
    num: "02",
    title: "Build the system",
    copy: "Multi-channel sequences, deliverability infrastructure and deep personalization — assembled as one machine.",
    highlights: ["assembled as one machine"],
  },
  {
    num: "03",
    title: "Scale what converts",
    copy: "Every reply is tracked. We double down on the channels producing pipeline and cut the ones that don't.",
    highlights: ["Every reply is tracked"],
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
          {/* Names both practices before the headline, so a first-time
              visitor knows what we do without scrolling. */}
          <div className="eyebrow hero-eyebrow">
            B2B Lead Generation &nbsp;·&nbsp; Founder Personal Branding
          </div>
          <h1>
            Your brand. Your <span className="accent">next chapter</span>.
          </h1>
          <p>
            <Hl terms={["discover it, trust it, and choose it"]}>
              {"You've put a lot into building your business. Let's help more people discover it, trust it, and choose it."}
            </Hl>
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <BookCall>Book a Free Strategy Call</BookCall>
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

        <HeroFlow />

      </section>

      {/* ---------- PROOF: CLIENTS ----------
          Directly under the hero, so a first-time visitor sees who already
          works with us before being asked to read about what we do. */}
      <ClientMarquee />

      {/* ---------- WHO WE ARE ----------
          Same heading and statement as before. The giant wordmark repeated
          the logo; the statement is what does the work, so it now leads. */}
      <section className="section-padding about-band">
        <div className="container about-grid">
          <div className="section-label reveal">Who we are</div>
          <div className="about-body reveal">
            <h2 className="about-name">
              Fastex <span className="mark">Media</span>
            </h2>
            <p className="about-statement">
              <Hl terms={["qualified meetings"]}>
                {"A B2B lead generation agency. We build the outbound systems that put qualified meetings in your sales calendar — every week, on purpose, in the sectors we know."}
              </Hl>
            </p>
            <p className="about-also">
              <Hl terms={["a personal brand on LinkedIn"]}>
                {"And for founders, a personal brand on LinkedIn that the right people find, follow and remember."}
              </Hl>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ----------
          A ruled list rather than a card grid: a list reads faster when the
          differences between rows are the point. Founder personal branding
          is one of the services, listed with the rest. */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Capabilities</div>
            <h2>Six services. One system.</h2>
            <p>
              Lead generation and founder brands, run together and reported on
              what they produce: qualified conversations.
            </p>
          </div>

          <ul className="svc-list">
            {services.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="svc-row reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <span className="svc-num">{service.num}</span>
                  <h3 className="svc-title">{service.title}</h3>
                  <p className="svc-copy">
                    <Hl terms={service.highlights}>{service.summary}</Hl>
                  </p>
                  <span className="svc-cta">
                    View service <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
                <p>
                  <Hl terms={step.highlights}>{step.copy}</Hl>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INDUSTRIES ----------
          Five sectors in five columns, so the row is always full. Numbered
          rather than emoji: emoji read as consumer, not as a B2B firm. */}
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

          <div className="ind-grid">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="ind-card reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className="ind-num">{String(i + 1).padStart(2, "0")}</span>
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
              <Hl terms={["ninety days"]}>
                {"Tell us where you want the pipeline to be in ninety days. We'll build the system that gets you there."}
              </Hl>
            </p>
            <BookCall>Book a Free Strategy Call</BookCall>
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
