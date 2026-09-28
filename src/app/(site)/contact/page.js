import { site } from "@/data/site";
import { abs, breadcrumb, webPage, graph, faqPage } from "@/lib/schema";

export const metadata = {
  title: "Contact Fastex Media | Book a B2B Strategy Call",
  description:
    "Book a free 30-minute B2B strategy call with Fastex Media. Tell us what you are trying to grow and we will tell you which channels fit and what it takes.",
  // Without this the page inherited the site root and told Google it was a
  // duplicate of the homepage, which keeps it out of the index.
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Fastex Media | Book a B2B Strategy Call",
    description:
      "Book a free 30-minute B2B strategy call. Email, phone and calendar below.",
    url: "/contact",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

/** Answers people want before they will give up a calendar slot. */
const faqs = [
  {
    q: "What happens on the strategy call?",
    a: "Thirty minutes with the founder. We ask what you sell, who signs, and what you have already tried. You leave with a view on which channels fit your buying cycle and what a realistic first ninety days looks like, whether or not you work with us.",
  },
  {
    q: "Is the call free?",
    a: "Yes. The scoping call carries no fee and no obligation. Fees are only quoted once we understand the scope, and nothing is charged until a scope of work is signed.",
  },
  {
    q: "How quickly do you reply?",
    a: "Email and WhatsApp enquiries are answered within one business day. If you book a slot directly on the calendar you will get a confirmation immediately.",
  },
  {
    q: "Who will I be speaking to?",
    a: "Aagam Shah, the founder. Not a sales development rep and not an account executive reading a script.",
  },
  {
    q: "Do you work with companies outside India?",
    a: "Yes. Fastex Media works with B2B companies worldwide and fees are quoted and settled in USD. The team operates across time zones and calls are booked to suit yours.",
  },
];

const pageSchema = graph(
  webPage({
    path: "/contact",
    type: "ContactPage",
    name: "Contact Fastex Media",
    description:
      "Book a free 30-minute B2B strategy call with Fastex Media, or reach the team by email, phone or WhatsApp.",
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  faqPage(faqs),
  {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    telephone: site.phone,
    availableLanguage: ["en"],
    areaServed: "Worldwide",
    url: abs("/contact"),
  }
);

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: pageSchema }}
      />

      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <span className="current">Contact</span>
          </div>
          <h1>Book a strategy call.</h1>
          <p className="page-lede">
            Thirty minutes with the founder. Tell us what you are trying to
            grow, and we will tell you which channels fit your buying cycle and
            what a realistic first ninety days looks like. No fee, no
            obligation, and no pitch deck.
          </p>
        </div>
      </section>

      {/* ── Calendar ─────────────────────────────────────────── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div
            className="cal-embed-container"
            style={{
              background: "var(--bg-raised)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--border-color)",
            }}
          >
            <iframe
              src="https://cal.id/aagam-digital/discovery-call"
              title="Book a discovery call with Fastex Media"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              style={{ width: "100%", height: "700px", display: "block" }}
            ></iframe>
          </div>

          {/* The calendar is an iframe, so nothing inside it is crawlable or
              readable by an answer engine. These details are the page's own. */}
          <ul className="pk-included" style={{ marginTop: "3.5rem" }}>
            <li>
              <span className="pk-inc-label">Email</span>
              <span className="pk-inc-value">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </li>
            <li>
              <span className="pk-inc-label">Phone and WhatsApp</span>
              <span className="pk-inc-value">
                <a href={site.phoneHref}>{site.phone}</a>
              </span>
            </li>
            <li>
              <span className="pk-inc-label">Response time</span>
              <span className="pk-inc-value">Within one business day</span>
            </li>
            <li>
              <span className="pk-inc-label">Working with</span>
              <span className="pk-inc-value">B2B companies worldwide</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Questions, rendered so the FAQPage markup has a source ── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container" style={{ maxWidth: "1000px" }}>
          <h2 className="pk-h2">Before you book.</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <span className="sign" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
