import Link from "next/link";
import {
  portfolioStats,
  featuredCases,
  projects,
  testimonials,
} from "@/data/caseStudies";
import { site } from "@/data/site";

export const metadata = {
  title: "Case Studies & Client Results | Fastex Media",
  description:
    "Real B2B campaigns and outcomes — solar, SaaS, real estate, education and manufacturing clients. See the lead generation systems we've built and what they produced.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Case Studies & Client Results | Fastex Media",
    description:
      "Real B2B campaigns and outcomes across solar, SaaS, real estate, education and manufacturing.",
    url: "/work",
    type: "website",
  },
};

export default function Work() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Case Studies</span>
          </div>
          <div className="section-label">Featured portfolio</div>
          <h1>Results that speak.</h1>
          <p className="page-lede">
            Real campaigns, real outcomes. Here&apos;s what we&apos;ve built for
            brands like yours.
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

      {/* ---------- PORTFOLIO STATS ---------- */}
      <section style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="proof-band">
            {portfolioStats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED CASES ---------- */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">In depth</div>
            <h2>Two we can talk through.</h2>
          </div>

          <div className="case-list">
            {featuredCases.map((item, i) => (
              <article
                key={item.client}
                className="case-item reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="case-head">
                  <span className="case-num">{item.num}</span>
                  <span className="case-sector">{item.sector}</span>
                </div>
                <h3>{item.client}</h3>
                <div className="case-service">{item.service}</div>

                <div className="case-body">
                  <div className="case-block">
                    <div className="case-label">Challenge</div>
                    <p>{item.challenge}</p>
                  </div>
                  <div className="case-block">
                    <div className="case-label">Solution</div>
                    <p>{item.solution}</p>
                  </div>
                  <div className="case-block">
                    <div className="case-label">Outcome</div>
                    <p>{item.outcome}</p>
                  </div>
                </div>

                <div className="case-metrics">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="stat-value">{metric.value}</div>
                      <div className="stat-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ACTIVE PROJECTS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Portfolio</div>
            <h2>Other active projects.</h2>
            <p>Live engagements across sectors, channels and ticket sizes.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, i) => (
              <article
                key={project.client + project.sector}
                className="project-card reveal"
                style={{ transitionDelay: `${(i % 3) * 0.06}s` }}
              >
                <div className="project-top">
                  <span className="project-initials" aria-hidden="true">
                    {project.initials}
                  </span>
                  <span className="project-sector">{project.sector}</span>
                </div>
                <h3>{project.client}</h3>
                <p>{project.copy}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
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
            <h2>Ready to be our next case study?</h2>
            <p className="cta-sub">
              Let&apos;s build a lead machine for your business. Book a free
              strategy call today.
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
