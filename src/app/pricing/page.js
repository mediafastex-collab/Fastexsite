import Link from "next/link";
import PlanPicker from "@/components/PlanPicker";
import { plans, engagement, addOns, process, terms, directCosts, ownership } from "@/data/plans";

export const metadata = {
  title: "Pricing | Fastex Media",
  description:
    "Pick a service, see its four plans. Social media, performance marketing, WhatsApp, email and LinkedIn, each across Starter, Growth, Scale and Enterprise. Fees quoted on your scope and agreed in writing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Fastex Media",
    description:
      "Pick a service, see its four plans. Seven B2B marketing services, fees quoted on your scope.",
    url: "/pricing",
    type: "website",
    images: ["/og-image.jpg"],
  },
};

const SITE = "https://www.fastexmedia.com";

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Fastex Media Service Plans",
  url: `${SITE}/pricing/`,
  numberOfItems: plans.length,
  // No priceSpecification: fees are not published on the page, and declaring
  // one here would assert a price a visitor cannot see.
  itemListElement: plans.map((plan, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: plan.name,
    description: plan.summary,
    category: plan.pillar,
    availability: "https://schema.org/InStock",
    eligibleCustomerType: "https://schema.org/Business",
    seller: { "@type": "Organization", name: "Fastex Media" },
  })),
};

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="page-hero pk-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Pricing</span>
          </div>
          <h1>Pick a service. See its plans.</h1>
          <p className="page-lede">
            Four plans for every service. Start with one, add more when it
            works. Fees are agreed in writing before anything begins.
          </p>
        </div>
      </section>

      {/* ── The one thing this page does ─────────────────────── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <PlanPicker />
        </div>
      </section>

      {/* ── Same at every level ──────────────────────────────── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <h2 className="pk-h2">Included at every level.</h2>
          <ul className="pk-included">
            {engagement.map((row) => (
              <li key={row.label}>
                <span className="pk-inc-label">{row.label}</span>
                <span className="pk-inc-value">
                  {row.values[0] === row.values[1]
                    ? row.values[0]
                    : `${row.values[0]} → ${row.values[3]}`}
                </span>
              </li>
            ))}
          </ul>
          <p className="pk-sub">
            The strategic input is the same whichever plan you choose. Volume
            and account support are what change.
          </p>
        </div>
      </section>

      {/* ── How we start ─────────────────────────────────────── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <h2 className="pk-h2">How we start.</h2>
          <ol className="pk-steps">
            {process.map((step) => (
              <li key={step.num}>
                <span className="pk-step-num">{step.num}</span>
                <span className="pk-step-title">{step.title}</span>
                <span className="pk-step-copy">{step.copy}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Detail, folded away until asked for ──────────────── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <h2 className="pk-h2">The details.</h2>

          <div className="pk-details">
            <details className="pl-service">
              <summary>
                <span className="pl-service-name">Add-ons you can bolt on</span>
                <span className="pl-service-meta">
                  <span className="sign" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <div className="pk-details-body">
                <ul className="pk-addons">
                  {addOns.map((a) => (
                    <li key={a.name}>
                      <span className="pk-addon-name">{a.name}</span>
                      <span className="pk-addon-copy">{a.copy}</span>
                      <span className="pk-addon-basis">{a.basis}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="pl-service">
              <summary>
                <span className="pl-service-name">Costs and ownership</span>
                <span className="pl-service-meta">
                  <span className="sign" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <div className="pk-details-body">
                <p className="pk-detail-p">{directCosts}</p>
                <p className="pk-detail-p">{ownership}</p>
              </div>
            </details>

            <details className="pl-service">
              <summary>
                <span className="pl-service-name">Terms</span>
                <span className="pl-service-meta">
                  <span className="sign" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <div className="pk-details-body">
                <ul className="pk-terms">
                  {terms.map((t) => (
                    <li key={t.title}>
                      <span className="pk-term-title">{t.title}</span>
                      <span className="pk-term-copy">{t.copy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="pk-section cta"
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingBottom: "8rem",
        }}
      >
        <div className="container">
          <div className="cta-inner">
            <h2>Not sure which plan fits?</h2>
            <p className="cta-sub">
              Tell us what you are trying to grow. We will tell you which
              service and which level, and what it costs.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Scoping Call
            </Link>
            <div className="cta-contacts">
              <a href="mailto:hello@fastexmedia.com">hello@fastexmedia.com</a>
              <a href="tel:+919328680929">+91 9328680929</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
