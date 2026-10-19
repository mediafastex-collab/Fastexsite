import Link from "next/link";
import { founders } from "@/data/clients";
import { serviceBySlug } from "@/data/services";
import { site } from "@/data/site";
import { breadcrumb, webPage, graph } from "@/lib/schema";
import BookCall from "@/components/BookCall";
import Hl from "@/components/Hl";

const TITLE = "Founder Brands: LinkedIn Personal Branding Stories | Fastex Media";
const DESCRIPTION =
  "The founders we have built LinkedIn personal brands for, and the story behind each one: the brief, what we built and what it does for them.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/founders" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/founders",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const branding = serviceBySlug("personal-branding");

// The programme every founder here went through (see the service page).
const BUILT =
  "A clear position on what the founder stands for, a LinkedIn profile rewritten to say it, and a steady stream of posts drafted from conversations with them and written in the founder's own voice.";

const pageSchema = graph(
  webPage({
    path: "/founders",
    type: "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Founder Brands", path: "/founders" },
  ]),
  {
    "@type": "ItemList",
    name: "Founder personal branding clients",
    numberOfItems: founders.length,
    itemListElement: founders.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: f.detail ? `${f.name}, ${f.detail}` : f.name,
    })),
  }
);

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const photo = (f) => `/assets/clients/founders/${f.photo.file}`;

export default function Founders() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: pageSchema }}
      />

      {/* ---------- HERO ---------- */}
      <section className="page-hero founders-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Founder Brands</span>
          </div>
          <div className="eyebrow">Founder Brands</div>
          <h1>Personal brands, built for founders.</h1>
          <p className="page-lede">
            <Hl terms={["people buy from the person"]}>
              {"In B2B, people buy from the person before they buy from the company. These are the founders we have built LinkedIn personal brands for, and the story behind each one."}
            </Hl>
          </p>

          {/* Portrait gallery: each portrait jumps to that founder's story. */}
          <ul className="fb-gallery">
            {founders.map((f, i) => (
              <li key={f.name} style={{ "--i": i }}>
                <a href={`#${slug(f.name)}`} className="fb-portrait">
                  <span className="fb-portrait-frame">
                    <img
                      src={photo(f)}
                      alt=""
                      width={f.photo.w}
                      height={f.photo.h}
                      decoding="async"
                    />
                  </span>
                  <span className="fb-portrait-name">{f.name}</span>
                  <span className="fb-portrait-detail">
                    {f.detail || "Founder"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- STORIES ---------- */}
      {founders.map((f, i) => (
        <section
          key={f.name}
          id={slug(f.name)}
          className="section-padding fb-story"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <div className={`container fb-story-grid${i % 2 ? " is-flipped" : ""}`}>
            <div
              className="fb-story-photo reveal"
              style={{ "--bg": `url(${photo(f)})` }}
            >
              <img
                src={photo(f)}
                alt={f.name}
                width={f.photo.w}
                height={f.photo.h}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="fb-story-body reveal">
              <span className="fb-story-num">
                {String(i + 1).padStart(2, "0")} · Founder Personal Branding
              </span>
              <h2>
                {f.name}
                {f.detail ? <span className="fb-story-detail">{f.detail}</span> : null}
              </h2>

              <div className="fb-story-block">
                <div className="fb-story-label">The brief</div>
                <p>{f.story.brief}</p>
              </div>
              <div className="fb-story-block">
                <div className="fb-story-label">What we built</div>
                <p>
                  <Hl terms={["the founder's own voice"]}>{BUILT}</Hl>
                </p>
              </div>
              <div className="fb-story-block">
                <div className="fb-story-label">The outcome</div>
                <p>
                  <Hl terms={["the right audience"]}>{f.story.outcome}</Hl>
                </p>
              </div>

              <div className="cs-tags fb-story-tags">
                {f.tags.map((t) => (
                  <span key={t} className="cs-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

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
            <h2>Your name, in front of the right people.</h2>
            <p className="cta-sub">
              <Hl terms={["in your own voice"]}>
                {"Tell us who you want to reach. We will build the positioning, the profile and the posts, in your own voice."}
              </Hl>
            </p>
            <div className="hero-btns" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <BookCall>Book a Free Strategy Call</BookCall>
              <Link href={`/services/${branding.slug}`} className="btn btn-outline">
                How personal branding works
              </Link>
            </div>
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
