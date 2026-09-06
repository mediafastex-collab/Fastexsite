import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import { posts, postBySlug } from "@/data/posts";
import { site } from "@/data/site";

const SITE = site.url;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;

  return {
    title: `${post.title} | Fastex Media`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Aagam Shah"],
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((other) => other.slug !== post.slug).slice(0, 2);

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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${SITE}/blog/${post.slug}/`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.pillar,
        keywords: post.keywords,
        inLanguage: "en",
        isAccessibleForFree: true,
        mainEntityOfPage: `${SITE}/blog/${post.slug}/`,
        image: `${SITE}/og-image.jpg`,
        isPartOf: { "@id": `${SITE}/blog/#blog` },
        author: {
          "@type": "Person",
          name: "Aagam Shah",
          jobTitle: "Founder, Fastex Media",
          url: "https://www.linkedin.com/in/shahaagam/",
        },
        publisher: { "@id": `${SITE}/#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="article">
        <div className="article-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">The Architecture Brief</Link>
            <span className="sep">/</span>
            <span className="current">{post.pillar}</span>
          </div>

          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>By Aagam Shah</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{post.date}</time>
            <span aria-hidden="true">·</span>
            <span>{post.read}</span>
          </div>

          {/* Body is our own authored HTML, ported from the previous site. */}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="related">
            <div className="section-label">Keep reading</div>
            <div className="industry-grid">
              {related.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="industry-card"
                >
                  <div className="card-index">{other.pillar}</div>
                  <h3>{other.title}</h3>
                  <span className="card-link">
                    {other.read} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Cta
        heading="Want this built for your funnel?"
        copy="We run these systems daily for B2B companies. Book a strategy session and we will tell you which one to build first."
      />
    </>
  );
}
