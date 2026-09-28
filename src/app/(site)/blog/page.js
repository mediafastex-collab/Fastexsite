import Link from "next/link";
import { posts } from "@/data/posts";
import { abs, breadcrumb, webPage, graph } from "@/lib/schema";

export const metadata = {
  title: "B2B Marketing Blog | Fastex Media",
  description:
    "Practical writing on B2B lead generation: multi-channel outbound, LinkedIn, WhatsApp and cold email, from campaigns we run every day.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "B2B Marketing Blog | Fastex Media",
    description:
      "Practical writing on B2B lead generation, from campaigns we run every day.",
    url: "/blog",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const pageSchema = graph(
  webPage({
    path: "/blog",
    type: "CollectionPage",
    name: "B2B Marketing Blog | Fastex Media",
    description:
      "Practical writing on B2B lead generation from campaigns we run every day.",
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]),
  {
    "@type": "ItemList",
    name: "Articles",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: abs(`/blog/${post.slug}`),
    })),
  }
);

const longDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default function Blog() {
  // Newest first, without mutating the exported array.
  const ordered = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: pageSchema }}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Blog</span>
          </div>
          <div className="section-label">Writing</div>
          <h1>What we learn running campaigns.</h1>
          <p className="page-lede">
            No listicles and no recycled advice. These are the channels we run
            every day across B2B accounts, the numbers they actually produce,
            and the mistakes that quietly kill campaigns.
          </p>
        </div>
      </section>

      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <ul className="post-list">
            {ordered.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="post-row">
                  <span className="post-meta">
                    <span className="post-pillar">{post.pillar}</span>
                    <span className="post-dot" aria-hidden="true">
                      ·
                    </span>
                    <time dateTime={post.date}>{longDate(post.date)}</time>
                    <span className="post-dot" aria-hidden="true">
                      ·
                    </span>
                    <span>{post.read}</span>
                  </span>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-desc">{post.description}</p>
                  <span className="post-more">
                    Read <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* A listing page is thin by nature. This says what the writing covers,
          which is also what an answer engine needs to place the section. */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <h2 className="pk-h2">What we write about.</h2>
          <ul className="pk-included">
            <li>
              <span className="pk-inc-label">Revenue Architecture</span>
              <span className="pk-inc-value">
                How the channels fit together into one system
              </span>
            </li>
            <li>
              <span className="pk-inc-label">Founder POV</span>
              <span className="pk-inc-value">
                Honest comparisons from running both sides daily
              </span>
            </li>
            <li>
              <span className="pk-inc-label">Case Studies</span>
              <span className="pk-inc-value">
                What specific campaigns produced, with the numbers
              </span>
            </li>
            <li>
              <span className="pk-inc-label">Horror Stories</span>
              <span className="pk-inc-value">
                The mistakes that quietly kill outbound programmes
              </span>
            </li>
          </ul>
          <p className="pk-sub">
            Everything here comes out of live client work: deliverability
            infrastructure, LinkedIn outreach limits, WhatsApp API setup and
            what cost per qualified conversation actually looks like. If a
            number appears in a post, it came from a campaign we ran. We
            publish when there is something worth saying, not to a calendar.
          </p>
        </div>
      </section>

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
            <Link href="/contact" className="btn btn-primary">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
