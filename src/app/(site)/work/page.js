import Link from "next/link";
import {
  portfolioStats,
  featuredCases,
  testimonials,
} from "@/data/caseStudies";
import { clients } from "@/data/clients";
import ClientGrid from "@/components/ClientGrid";
import ClientMark from "@/components/ClientMark";
import { site } from "@/data/site";
import { breadcrumb, webPage, graph } from "@/lib/schema";
import BookCall from "@/components/BookCall";

export const metadata = {
  title: "Case Studies & Client Results | Fastex Media",
  description:
    "Real B2B campaigns and outcomes across solar, SaaS, real estate, education and manufacturing. The lead generation systems we built and what they produced.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Case Studies & Client Results | Fastex Media",
    description:
      "Real B2B campaigns and outcomes across solar, SaaS, real estate, education and manufacturing.",
    url: "/work",
    type: "website",
      images: ["/og-image.jpg"],
  },
};

const pageSchema = graph(
  webPage({
    path: "/work",
    type: "CollectionPage",
    name: "Case Studies & Client Results | Fastex Media",
    description:
      "B2B campaigns and outcomes across solar, SaaS, real estate, education and manufacturing.",
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/work" },
  ]),
  {
    "@type": "ItemList",
    name: "Client Case Studies",
    numberOfItems: featuredCases.length,
    itemListElement: featuredCases.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title || c.client || `Case study ${i + 1}`,
    })),
  }
);

export default function Work() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: pageSchema }}
      />

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
            <BookCall>Book a Free Strategy Call</BookCall>
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
            <h2>A closer look.</h2>
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
                {item.logo ? (
                  <ClientMark client={item.logo} className="case-logo" />
                ) : null}
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

      {/* ---------- CLIENTS ----------
          The full client list from src/data/clients.js, filterable by the
          kind of work. It replaces the old project grid, so the names here
          are the only client names on the page. */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Portfolio</div>
            <h2>Brands we&apos;ve worked with.</h2>
            <p>
              {clients.length} brands and founders across lead generation,
              founder personal branding, social and go-to-market work.
            </p>
          </div>

          <ClientGrid />
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
