import Link from "next/link";
import CaseFilter from "./CaseFilter";
import Cta from "@/components/Cta";
import { featuredCases, outcomeMetrics } from "@/data/caseStudies";
import { cta, site } from "@/data/site";

const SITE = site.url;

export const metadata = {
  title: "Case Studies — Revenue Impact Stories | Fastex Media",
  description:
    "Real results from real clients. See how Fastex Media has built pipeline, grown revenue and architected marketing systems for B2B companies and startups.",
  keywords: [
    "marketing case studies",
    "b2b marketing results",
    "startup marketing success",
    "marketing roi examples",
    "lead generation case studies",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Revenue Impact Stories | Fastex Media",
    description:
      "Every client story starts with a problem and ends with a number.",
    url: "/case-studies",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Case Studies",
          item: `${SITE}/case-studies/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Revenue Impact Stories",
      description:
        "Measured outcomes from B2B marketing engagements across renewable energy, SaaS and commercial real estate.",
      numberOfItems: featuredCases.length,
      itemListElement: featuredCases.map((study, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${study.client}: ${study.headline}`,
        description: study.outcome,
        url: `${SITE}/case-studies/`,
      })),
    },
  ],
};

export default function CaseStudies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Case Studies</span>
          </div>
          <h1>Revenue Impact Stories.</h1>
          <p className="page-lede">
            Every client story starts with a problem and ends with a number.
            Here is what we have built, and what we measured.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href={cta.href} className="btn btn-primary">
              See What We&apos;d Build for You
            </Link>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="metric-row reveal">
            {outcomeMetrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <b>{metric.value}</b>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <CaseFilter />
        </div>
      </section>

      <Cta
        heading="Want results like these?"
        copy="Book a strategy session and we will tell you exactly how we would approach your funnel."
        label="See What We'd Build for You"
      />
    </>
  );
}
