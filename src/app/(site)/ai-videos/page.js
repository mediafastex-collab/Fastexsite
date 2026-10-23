import Link from "next/link";
import { aiVideos, videoFormats, videoProcess } from "@/data/aiVideos";
import { site } from "@/data/site";
import { breadcrumb, webPage, graph, SITE } from "@/lib/schema";
import BookCall from "@/components/BookCall";
import Hl from "@/components/Hl";
import VideoReel from "@/components/VideoReel";

const TITLE = "AI Video Production: 2D & 3D Animation for Brands | Fastex Media";
const DESCRIPTION =
  "2D and 3D AI animation videos for brands: explainers, product animation, character-led reels and short-form video, scripted and finished by our team.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/ai-videos" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/ai-videos",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const pageSchema = graph(
  webPage({ path: "/ai-videos", name: TITLE, description: DESCRIPTION }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "AI Videos", path: "/ai-videos" },
  ]),
  ...aiVideos.map((v) => ({
    "@type": "VideoObject",
    name: `${v.title}: ${v.kind}`,
    description: v.summary,
    thumbnailUrl: `${SITE}/videos/ai/${v.slug}.jpg`,
    contentUrl: `${SITE}/videos/ai/${v.slug}.mp4`,
    uploadDate: "2026-10-23",
    ...(v.duration ? { duration: `PT${Math.round(v.duration)}S` } : {}),
    creator: { "@id": `${SITE}/#organization` },
  }))
);

export default function AiVideos() {
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
            <span className="current">AI Videos</span>
          </div>
          <div className="eyebrow">New · AI video production</div>
          <h1>2D and 3D AI animation, made for your brand.</h1>
          <p className="page-lede">
            <Hl terms={["made with AI and finished by people"]}>
              {"Explainers, product animation and character-led reels, made with AI and finished by people. Built for the feed, your website and the sales deck."}
            </Hl>
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <BookCall>Plan a video with us</BookCall>
            <a href="#work" className="btn btn-outline">
              Watch the work
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WORK ---------- */}
      <section id="work" className="section-padding vr-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Recent work</div>
            <h2>Videos we have made.</h2>
            <p>Plays on mute as you scroll. Tap “Sound on” to listen.</p>
          </div>
          <div className="vr-grid">
            {aiVideos.map((v, i) => (
              <div key={v.slug} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <VideoReel video={v} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FORMATS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What we make</div>
            <h2>One studio, four kinds of video.</h2>
          </div>
          <div className="industry-grid industry-grid--even vf-grid">
            {videoFormats.map((f, i) => (
              <div
                key={f.title}
                className="industry-card reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="card-index">{String(i + 1).padStart(2, "0")}</div>
                <h3>{f.title}</h3>
                <p className="card-copy">{f.copy}</p>
              </div>
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
            <div className="section-label">How it works</div>
            <h2>From brief to final cut.</h2>
          </div>
          <div className="process-list">
            {videoProcess.map((step, i) => (
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
            <h2>Have a story to tell? Let&apos;s animate it.</h2>
            <p className="cta-sub">
              <Hl terms={["where it will run"]}>
                {"Tell us what the video needs to say and where it will run. We will come back with a script, a look and a plan."}
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
