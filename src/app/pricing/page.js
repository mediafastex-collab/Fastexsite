import Link from "next/link";
import ScopeBuilder from "@/components/ScopeBuilder";
import {
  plans,
  tiers,
  pillars,
  engagement,
  addOns,
  process,
  terms,
  directCosts,
  ownership,
} from "@/data/plans";

export const metadata = {
  title: "Pricing | Fastex Media",
  description:
    "Build your scope: choose the B2B marketing services you need and the level you need them at, then see your starting fee. Seven services, four tiers, fees agreed in writing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Fastex Media",
    description:
      "Choose your services and your level, then see your starting fee. Seven services across three growth pillars.",
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
  itemListElement: plans.map((plan, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: plan.name,
    description: plan.summary,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: plan.from,
      priceCurrency: "USD",
      unitCode: "MON",
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
    category: plan.pillar,
    seller: { "@type": "Organization", name: "Fastex Media" },
  })),
};

/** One tier-comparison table. Scrolls horizontally inside its own container. */
function TierTable({ groups, caption }) {
  return (
    <div className="pl-tablewrap">
      <table className="pl-table">
        {caption ? <caption className="pl-sr">{caption}</caption> : null}
        <thead>
          <tr>
            <th scope="col" className="pl-th-label">
              Deliverables
            </th>
            {tiers.map((tier) => (
              <th
                scope="col"
                key={tier.name}
                className={tier.recommended ? "pl-th is-rec" : "pl-th"}
              >
                <span className="pl-th-name">{tier.name}</span>
                {tier.recommended ? <span className="pl-rec">Recommended</span> : null}
              </th>
            ))}
          </tr>
        </thead>
        {groups.map((group, gi) => (
          <tbody key={group.title || gi}>
            {group.title ? (
              <tr className="pl-grouprow">
                <th scope="colgroup" colSpan={tiers.length + 1}>
                  {group.title}
                </th>
              </tr>
            ) : null}
            {group.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="pl-td-label">
                  {row.label}
                </th>
                {row.values.map((value, vi) => (
                  <td
                    key={tiers[vi].name}
                    className={tiers[vi].recommended ? "pl-td is-rec" : "pl-td"}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />

      {/* ── Hero. No figures. ────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Pricing</span>
          </div>
          <div className="section-label">Plans</div>
          <h1>Build your scope.</h1>
          <p className="page-lede">
            Seven services across three growth pillars. Tell us what you need
            and at what level, and the fee follows from that, not from a package
            someone else designed. Everything is agreed in writing before work
            begins.
          </p>
          <div className="pill-row">
            {pillars.map((pillar) => (
              <span className="pill" key={pillar.name}>
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── The configurator: selection first, price last. ───── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <ScopeBuilder />
        </div>
      </section>

      {/* ── Three pillars ────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="split">
            <div className="split-aside reveal">
              <div className="section-label">Approach</div>
              <h2 style={{ fontSize: "clamp(2rem, 3.4vw, 2.8rem)", fontWeight: 400 }}>
                Three pillars.
              </h2>
            </div>
            <div className="split-body">
              <div className="pl-pillars">
                {pillars.map((pillar, i) => (
                  <div
                    className="pl-pillar reveal"
                    key={pillar.name}
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <h3>{pillar.name}</h3>
                    <p>{pillar.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shared engagement across every tier ──────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Your engagement</div>
            <h2>The same input at every level.</h2>
            <p>
              Whichever level you choose, the thinking is the same. Delivery
              volume and account support are what move.
            </p>
          </div>

          <div className="pl-shared reveal">
            <TierTable
              groups={[{ rows: engagement }]}
              caption="Shared tier benefits and support across all services"
            />
          </div>
        </div>
      </section>

      {/* ── Per-service detail ───────────────────────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Service detail</div>
            <h2>What each level includes.</h2>
            <p>Open a service to see the deliverables at every tier.</p>
          </div>

          <div className="pl-services">
            {plans.map((plan, i) => (
              <details
                className="pl-service reveal"
                key={plan.slug}
                id={plan.slug}
                open={i === 0}
              >
                <summary>
                  <span className="pl-service-head">
                    <span className="pl-service-pillar">{plan.pillar}</span>
                    <span className="pl-service-name">{plan.name}</span>
                  </span>
                  <span className="pl-service-meta">
                    <span className="sign" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <div className="pl-service-body">
                  <p className="pl-service-summary">{plan.summary}</p>
                  <TierTable groups={plan.groups} caption={`${plan.name} tiers`} />
                  <div className="pl-excludes">
                    <span className="pl-excludes-label">Outside the service fee</span>
                    <p>{plan.excludes}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-ons ──────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Additional services</div>
            <h2>Extend your scope.</h2>
            <p>
              Add capacity as your needs grow. Enterprise inclusions are
              tailored to your agreed scope; other tiers can add these
              separately.
            </p>
          </div>

          <ul className="pl-addons">
            {addOns.map((addOn, i) => (
              <li
                className="pl-addon reveal"
                key={addOn.name}
                style={{ transitionDelay: `${(i % 4) * 0.06}s` }}
              >
                <div className="pl-addon-main">
                  <h3>{addOn.name}</h3>
                  <p className="pl-addon-copy">{addOn.copy}</p>
                  <p className="pl-addon-applies">{addOn.applies}</p>
                </div>
                <span className="pl-addon-basis">{addOn.basis}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Costs + ownership ────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="pl-facts">
            <div className="pl-fact reveal">
              <h3>Costs paid directly to providers</h3>
              <p>{directCosts}</p>
            </div>
            <div className="pl-fact reveal" style={{ transitionDelay: "0.08s" }}>
              <h3>Your accounts stay yours</h3>
              <p>{ownership}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How we start ─────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">Working together</div>
            <h2>A clear start. A clear scope.</h2>
            <p>
              Each engagement begins with an agreed scope of work covering
              services, tiers, volumes and fees.
            </p>
          </div>

          <div className="process-list">
            {process.map((step, i) => (
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

          <div className="pl-terms">
            {terms.map((term, i) => (
              <div
                className="pl-term reveal"
                key={term.title}
                style={{ transitionDelay: `${(i % 2) * 0.08}s` }}
              >
                <h3>{term.title}</h3>
                <p>{term.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All starting fees. Deliberately the last thing. ───── */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="eyebrow">For reference</div>
            <h2>Every starting fee.</h2>
            <p>
              Each figure is the Starter tier, monthly, in USD. Growth, Scale
              and Enterprise scale the volume from there and are quoted on
              scope.
            </p>
          </div>

          <div className="pl-tablewrap reveal">
            <table className="pl-table pl-table--fees">
              <caption className="pl-sr">Starting fee for each service</caption>
              <thead>
                <tr>
                  <th scope="col" className="pl-th-label">
                    Service
                  </th>
                  <th scope="col" className="pl-th pl-th--left">
                    <span className="pl-th-name">Pillar</span>
                  </th>
                  <th scope="col" className="pl-th pl-th--right">
                    <span className="pl-th-name">From / month</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.slug}>
                    <th scope="row" className="pl-td-label">
                      <a href={`#${plan.slug}`}>{plan.name}</a>
                    </th>
                    <td className="pl-td pl-td--left">{plan.pillar}</td>
                    <td className="pl-td pl-td--right pl-fee">
                      <span className="pl-fee-cur">$</span>
                      {plan.from}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="section-padding cta"
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingBottom: "10rem",
        }}
      >
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Let&apos;s build your next stage of growth.</h2>
            <p className="cta-sub">
              Work begins once the scope is signed and platform access is
              granted. Start with a scoping call and we&apos;ll tell you which
              level actually fits.
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
