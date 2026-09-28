import Link from "next/link";
import PlanPicker from "@/components/PlanPicker";
import { plans, engagement, addOns, process, terms, directCosts, ownership } from "@/data/plans";
import { SITE, abs, breadcrumb, faqPage, webPage, graph } from "@/lib/schema";

export const metadata = {
  title: "Pricing | Fastex Media",
  description:
    "Seven B2B marketing services, each across four plans: Starter, Growth, Scale and Enterprise. See what every plan delivers. Fees quoted on your scope.",
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

/**
 * Questions buyers actually ask about engaging an agency. Marked up as
 * FAQPage so answer engines can lift them directly, which matters more here
 * than anywhere else on the site: "how much does X cost" is the query, and
 * this page deliberately publishes no figure.
 */
const faqs = [
  {
    q: "How much does Fastex Media cost?",
    a: "Fees depend on the service you choose, the plan level and the volumes agreed in your scope of work. We quote them in the scoping call and confirm them in writing before any work begins. Engagements are a monthly retainer, billed in advance and settled in USD.",
  },
  {
    q: "What plans do you offer?",
    a: "Every service runs across four plans. Starter is a focused starting point to establish what works. Growth adds volume and a closer review rhythm. Scale is broader execution with weekly attention. Enterprise is custom volumes with a dedicated account manager.",
  },
  {
    q: "Can I start with just one service?",
    a: "Yes. Each of the seven services can be taken on its own, or several can be connected into one coordinated system. Most engagements start with a single service and add more once it is working.",
  },
  {
    q: "What is not included in the fee?",
    a: "Costs paid directly to providers sit outside the retainer at every plan level: ad spend, WhatsApp conversation charges, messaging and email platform subscriptions, prospecting tools, Sales Navigator seats, domains, hosting and CRM licences.",
  },
  {
    q: "Do I keep ownership of my accounts and data?",
    a: "Yes. Advertising accounts, contact data, content assets and platform access remain your property throughout the engagement and after it ends.",
  },
  {
    q: "How do I change plan later?",
    a: "Upgrades take effect from the next billing cycle. Downgrades take effect at the end of the current term. Any change of scope is agreed in writing before the work changes.",
  },
  {
    q: "What happens before work starts?",
    a: "Four steps: a scoping call to identify priorities and the services that fit, a scope of work confirming deliverables and fees, onboarding to grant access and complete research, then delivery. Work begins once the scope is signed and platform access is granted.",
  },
];

const pricingSchema = graph(
  webPage({
    path: "/pricing",
    name: "Pricing | Fastex Media",
    description:
      "Seven B2B marketing services across four plans. What each plan delivers, and how fees are agreed.",
  }),
  breadcrumb([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ]),
  faqPage(faqs),
  {
    "@type": "OfferCatalog",
    name: "Fastex Media Service Plans",
    url: abs("/pricing"),
    numberOfItems: plans.length,
    // No priceSpecification: fees are not published on the page, and
    // declaring one here would assert a price a visitor cannot see.
    itemListElement: plans.map((plan, i) => ({
      "@type": "Offer",
      position: i + 1,
      name: plan.name,
      description: plan.summary,
      category: plan.pillar,
      availability: "https://schema.org/InStock",
      eligibleCustomerType: "https://schema.org/Business",
      seller: { "@id": `${SITE}/#organization` },
    })),
  }
);

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: pricingSchema }}
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

      {/* ── Questions. Rendered, not just marked up: FAQPage schema has
             to correspond to content a visitor can actually see. ────── */}
      <section
        className="pk-section"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <h2 className="pk-h2">Common questions.</h2>
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
