import Link from "next/link";
import BlogIndex from "./BlogIndex";
import Cta from "@/components/Cta";
import { posts } from "@/data/posts";
import { cta, site } from "@/data/site";

const SITE = site.url;

export const metadata = {
  title: "The Architecture Brief — Marketing Strategy Insights | Fastex Media",
  description:
    "Frameworks, opinions and real-world lessons on building B2B revenue systems. Written for founders and marketing leaders who want strategy, not tips.",
  keywords: [
    "b2b marketing strategy",
    "revenue architecture",
    "b2b growth frameworks",
    "founder marketing insights",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Architecture Brief | Fastex Media",
    description:
      "Frameworks, opinions and real-world lessons on building B2B revenue systems.",
    url: "/blog",
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
          name: "The Architecture Brief",
          item: `${SITE}/blog/`,
        },
      ],
    },
    {
      "@type": "Blog",
      "@id": `${SITE}/blog/#blog`,
      name: "The Architecture Brief",
      description:
        "Frameworks, opinions and real-world lessons on building B2B revenue systems.",
      url: `${SITE}/blog/`,
      inLanguage: "en",
      publisher: { "@id": `${SITE}/#organization` },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        url: `${SITE}/blog/${post.slug}/`,
        author: { "@type": "Person", name: "Aagam Shah" },
      })),
    },
  ],
};

export default function Blog() {
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
            <span className="current">The Architecture Brief</span>
          </div>
          <h1>The Architecture Brief.</h1>
          <p className="page-lede">
            Frameworks, opinions and real-world lessons on building revenue
            systems. Written for the people who build businesses, not the people
            who manage campaigns.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href={cta.href} className="btn btn-primary">
              {cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <BlogIndex />
        </div>
      </section>

      <Cta
        heading="Rather have it built than read about it?"
        copy="Book a strategy session and we will map the system for your funnel instead of writing about someone else's."
      />
    </>
  );
}
