import Link from "next/link";
import EnquiryForm from "@/components/landing/EnquiryForm";
import ClientTicker from "@/components/landing/ClientTicker";
import CtaLink from "@/components/landing/CtaLink";
import { landing } from "@/data/landing";
import { site } from "@/data/site";
import styles from "@/components/landing/landing.module.css";

const TITLE = "Lead Generation for IT and AI Services Companies | Fastex Media";
const DESCRIPTION =
  "Fastex Media helps IT and AI service companies generate qualified sales opportunities through lead generation and performance marketing. Book your call.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: landing.path },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: landing.path,
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

const challenges = [
  {
    title: "Referrals do most of the work",
    body: "Happy clients recommend you, and that is a good sign. But referrals arrive when they arrive, and they are hard to plan a quarter around.",
  },
  {
    title: "Enquiries come and go",
    body: "A strong month, then a quiet one. Without a steady source of new conversations, the team ends up busy one moment and chasing work the next.",
  },
  {
    title: "The right buyers are hard to reach",
    body: "You know who you help best. Getting in front of those decision-makers, at the moment they are looking, is a different job from delivering the work.",
  },
];

const steps = [
  {
    title: "Understand your services and ideal clients",
    body: "We start with what you sell, who buys it, and which projects you want more of. That shapes everything that follows.",
  },
  {
    title: "Build and manage the campaigns",
    body: "We plan, launch and run lead-generation and performance marketing campaigns aimed at the companies and roles you want to reach.",
  },
  {
    title: "Capture the enquiries",
    body: "Landing pages, forms and follow-up are set up so interested prospects can reach you easily, and nothing slips through the cracks.",
  },
  {
    title: "Review performance together",
    body: "We look at what is working and what is not, report on it plainly, and adjust the campaigns as we learn.",
  },
];

const audiences = [
  "AI implementation firms",
  "Software development companies",
  "Cloud service providers",
  "Cybersecurity firms",
  "Data and technology consultancies",
];

const trustClaims = [
  "Worked with 100+ brands",
  "Specialised in the IT industry",
  "Proven results",
];

const firstCall = [
  {
    title: "Your services",
    body: "What you offer, what makes you good at it, and the projects you would like more of.",
  },
  {
    title: "Your target clients",
    body: "The industries, company sizes and roles that are the best fit for your work.",
  },
  {
    title: "Your current challenges",
    body: "Where new opportunities come from today, and what is getting in the way.",
  },
  {
    title: "Possible next steps",
    body: "Whether we are a good fit, and if so, what a sensible plan could look like. No pressure either way.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}${landing.path}#webpage`,
  url: `${site.url}${landing.path}`,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { "@id": `${site.url}/#website` },
  about: {
    "@type": "Service",
    serviceType: "B2B lead generation",
    provider: { "@id": `${site.url}/#organization` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "IT and AI services companies",
    },
  },
};

export default function ItAiLeadGeneration() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <a href="#main" className={styles.skip}>
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={styles.wrap}>
          <Link href="/" className={styles.brand} aria-label="Fastex Media home">
            <img
              src="/assets/logo-mark.png"
              alt=""
              width="40"
              height="40"
              fetchPriority="high"
            />
            <span>Fastex Media</span>
          </Link>
          <CtaLink location="header" fallback="hero-form" />
        </div>
      </header>

      <main id="main">
        {/* ── 1. Hero ─────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Lead generation for IT and AI services
              </p>
              <h1>
                Great tech deserves a <em>steady flow</em> of leads.
              </h1>
              <p className={styles.lede}>
                We help IT and AI service companies generate qualified sales
                opportunities.
              </p>
              <div className={styles.heroCta}>
                <CtaLink location="hero" fallback="hero-form" large />
                <p className={styles.ctaNote}>
                  A short, no-obligation conversation with our team.
                </p>
              </div>
            </div>
            <div id="hero-form" className={styles.heroForm}>
              <EnquiryForm id="hero" heading="Tell us about your company" />
            </div>
          </div>
        </section>

        {/* ── 2. Client names ─────────────────────────────────── */}
        <ClientTicker />

        {/* ── 3. The challenge ───────────────────────────────── */}
        <section className={styles.section} aria-labelledby="challenge-h">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>The challenge</p>
              <h2 id="challenge-h">
                Great delivery does not always mean a predictable pipeline.
              </h2>
              <p className={styles.sectionLede}>
                Many IT and AI services companies win work because they are
                genuinely good at what they do. But strong technical delivery
                on its own rarely creates a steady flow of new sales
                conversations. If any of this sounds familiar, you are not
                alone.
              </p>
            </div>
            <div className={styles.cards3}>
              {challenges.map((c, i) => (
                <article key={c.title} className={styles.card}>
                  <span className={styles.cardNum} aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. How we help ─────────────────────────────────── */}
        <section
          className={`${styles.section} ${styles.dark}`}
          aria-labelledby="help-h"
        >
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>How Fastex Media helps</p>
              <h2 id="help-h">
                A lead-generation partner that works alongside your team.
              </h2>
              <p className={styles.sectionLede}>
                We focus on one thing: helping you start more of the right sales
                conversations. Here is how the partnership works.
              </p>
            </div>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 5. Who it's for ────────────────────────────────── */}
        <section className={styles.section} aria-labelledby="for-h">
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              <p className={styles.eyebrow}>Who it is for</p>
              <h2 id="for-h">Built for IT and AI services companies.</h2>
              <p className={styles.sectionLede}>
                We work with companies that sell expertise, projects and
                ongoing services to other businesses. If your team builds,
                secures, runs or advises on technology, we should talk.
              </p>
            </div>
            <ul className={styles.audience}>
              {audiences.map((a) => (
                <li key={a}>
                  <span className={styles.chev} aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. Trust ───────────────────────────────────────── */}
        <section
          className={`${styles.section} ${styles.tinted}`}
          aria-labelledby="trust-h"
        >
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Why Fastex Media</p>
              <h2 id="trust-h">A team that knows the IT market.</h2>
            </div>
            <ul className={styles.claims}>
              {trustClaims.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {landing.proof.length > 0 ? (
              <div className={styles.proofGrid}>
                {landing.proof.map((p) => (
                  <figure key={p.id} className={styles.card}>
                    <blockquote>{p.quote}</blockquote>
                    <figcaption>{p.attribution}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              // PLACEHOLDER: add approved case studies or testimonials to
              // `landing.proof` in src/data/landing.js. This block is kept
              // deliberately quiet until then.
              <div className={styles.proofPlaceholder}>
                <p>Case studies and client stories are coming soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── 7. What happens next ───────────────────────────── */}
        <section className={styles.section} aria-labelledby="next-h">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>What happens next</p>
              <h2 id="next-h">Your first conversation with us.</h2>
              <p className={styles.sectionLede}>
                After you get in touch, we arrange a call at a time that suits
                you. It is a practical conversation, not a sales pitch. We will
                cover four things.
              </p>
            </div>
            <div className={styles.cards4}>
              {firstCall.map((c) => (
                <article key={c.title} className={styles.card}>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              ))}
            </div>
            <p className={styles.honest}>
              Every company and market is different, so we do not promise a set
              number of leads. We will give you an honest view of what we think
              is achievable.
            </p>
          </div>
        </section>

        {/* ── 8. Final CTA ───────────────────────────────────── */}
        <section
          className={`${styles.section} ${styles.dark} ${styles.final}`}
          aria-labelledby="final-h"
        >
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <h2 id="final-h" className={styles.finalH}>
                Ready to build a stronger lead pipeline?
              </h2>
              <p className={styles.lede}>
                Tell us a little about your company and we will be in touch
                within one business day.
              </p>
              <div className={styles.heroCta}>
                <CtaLink location="final" fallback="final-form" large />
              </div>
            </div>
            <div id="final-form" className={styles.heroForm}>
              <EnquiryForm id="final" heading="Book your call" />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <span>© {new Date().getFullYear()} Fastex Media</span>
          <nav aria-label="Footer">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={landing.privacyPolicyUrl}>Privacy policy</a>
            <Link href="/">Main website</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
