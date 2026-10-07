import Link from "next/link";
import { notFound } from "next/navigation";
import { publishedPosts, postBySlug } from "@/data/posts";
import { SITE, abs, breadcrumb, faqPage, graph } from "@/lib/schema";
import { founder } from "@/data/site";
import BookCall from "@/components/BookCall";

export function generateStaticParams() {
  // Scheduled posts get no page, so nothing can link to or index them early.
  return publishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.metaTitle ?? post.title,
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

/**
 * Pulls the Q&A pairs out of an article body.
 *
 * Every post ends with a "Frequently Asked Questions" heading followed by
 * h3/p pairs. They are already rendered, so marking them up as FAQPage
 * describes visible content rather than inventing it — which is the line
 * Google draws on this schema type.
 */
function extractFaqs(body) {
  const start = body.search(/Frequently Asked Questions/i);
  if (start < 0) return [];
  const tail = body.slice(start);
  const out = [];
  const re = /<h3>\s*([\s\S]*?)\s*<\/h3>\s*<p>\s*([\s\S]*?)\s*<\/p>/gi;
  let m;
  while ((m = re.exec(tail))) {
    const strip = (s) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    out.push({ q: strip(m[1]), a: strip(m[2]) });
  }
  return out;
}

/** First image in the body, used as the article's representative image. */
function leadImage(body) {
  const m = body.match(/<img[^>]+src="([^"]+)"/i);
  return m ? m[1] : "/og-image.jpg";
}

const longDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function Article({ params }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const faqs = extractFaqs(post.body);
  const image = leadImage(post.body);
  const url = abs(`/blog/${post.slug}`);

  const articleSchema = graph(
    {
      "@type": "BlogPosting",
      "@id": url,
      headline: post.title,
      description: post.description,
      url,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "en",
      image: image.startsWith("http") ? image : `${SITE}${image}`,
      articleSection: post.pillar,
      keywords: post.keywords,
      // Authored by a named person, not the company: answer engines weight
      // identifiable authorship, and the Person node carries verifiable
      // profiles via sameAs.
      author: { "@id": `${SITE}/#aagam-shah` },
      publisher: { "@id": `${SITE}/#organization` },
      isPartOf: { "@id": `${SITE}/#website` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    faqs.length ? faqPage(faqs) : null
  );

  const others = publishedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />

      <section className="page-hero article-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span className="current">{post.pillar}</span>
          </div>
          <h1>{post.title}</h1>
          <p className="page-lede">{post.description}</p>
          <div className="article-meta">
            {/* Visible byline. The BlogPosting author points at the Person
                node, and schema should describe what is on the page. */}
            <span className="article-author">By {founder.name}</span>
            <span className="post-dot" aria-hidden="true">
              ·
            </span>
            <span className="post-pillar">{post.pillar}</span>
            <span className="post-dot" aria-hidden="true">
              ·
            </span>
            <time dateTime={post.date}>{longDate(post.date)}</time>
            <span className="post-dot" aria-hidden="true">
              ·
            </span>
            <span>{post.read}</span>
          </div>
        </div>
      </section>

      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          {/* Bodies are our own authored HTML, ported from the previous site.
              No user-supplied content reaches this. */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </section>

      {others.length > 0 && (
        <section
          className="pk-section"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className="container">
            <h2 className="pk-h2">Keep reading.</h2>
            <ul className="post-list">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="post-row">
                    <span className="post-meta">
                      <span className="post-pillar">{p.pillar}</span>
                      <span className="post-dot" aria-hidden="true">
                        ·
                      </span>
                      <span>{p.read}</span>
                    </span>
                    <h3 className="post-title">{p.title}</h3>
                    <span className="post-more">
                      Read <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section
        className="pk-section cta"
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingBottom: "8rem",
        }}
      >
        <div className="container">
          <div className="cta-inner">
            <h2>Want this run for you?</h2>
            <p className="cta-sub">
              Tell us what you are trying to grow. We will tell you which
              channels fit and what it takes.
            </p>
            <BookCall>Book a Strategy Call</BookCall>
          </div>
        </div>
      </section>
    </>
  );
}
