"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { plans, tiers } from "@/data/plans";

/**
 * Pick one service, see its four plans.
 *
 * One mental model for the whole page. The service tabs answer "which of
 * these am I buying", the four cards answer "what do I get and what does it
 * cost". Nothing is priced until a service is chosen.
 *
 * Cards replace the old four-column comparison tables: at this width a table
 * had to scroll sideways, whereas cards simply stack on a phone.
 *
 * Only Starter fees are published in the plans deck, so Growth and Scale read
 * "Quoted on scope" and Enterprise reads "Custom". No figure is invented.
 */

/** Add-on rows live in their own page section, not on a plan card. */
const ADDON_ROW = /^(Additional|Extra|Expanded|Above-ceiling)/;

export default function PlanPicker() {
  const [slug, setSlug] = useState(null);

  // Allow /pricing?s=email-marketing to open on a service.
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("s");
    if (s && plans.some((p) => p.slug === s)) setSlug(s);
  }, []);

  const select = (next) => {
    setSlug(next);
    const params = new URLSearchParams(window.location.search);
    if (next) params.set("s", next);
    else params.delete("s");
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };

  const plan = plans.find((p) => p.slug === slug);

  return (
    <div className="pk">
      {/* ── Choose a service ───────────────────────────────── */}
      <div className="pk-tabs" role="tablist" aria-label="Services">
        {plans.map((p) => (
          <button
            key={p.slug}
            type="button"
            role="tab"
            aria-selected={p.slug === slug}
            className={`pk-tab${p.slug === slug ? " is-on" : ""}`}
            onClick={() => select(p.slug)}
          >
            {p.short}
          </button>
        ))}
      </div>

      {/* ── Nothing chosen yet ─────────────────────────────── */}
      {!plan ? (
        <p className="pk-prompt">
          Choose a service to see its four plans and starting fee.
        </p>
      ) : (
        <div className="pk-panel" role="tabpanel">
          <div className="pk-intro">
            <h3>{plan.name}</h3>
            <p>{plan.summary}</p>
          </div>

          {/* ── Four plans ───────────────────────────────── */}
          <div className="pk-cards">
            {tiers.map((tier, i) => {
              const rows = plan.groups
                .flatMap((g) => g.rows)
                .filter((r) => !ADDON_ROW.test(r.label));

              return (
                <div
                  key={tier.name}
                  className={`pk-card${tier.recommended ? " is-rec" : ""}`}
                >
                  <div className="pk-card-head">
                    <span className="pk-card-name">{tier.name}</span>
                    {tier.recommended ? (
                      <span className="pl-rec">Recommended</span>
                    ) : null}
                  </div>

                  <div className="pk-card-price">
                    <span className="pk-price-row">
                      {i === 0 ? (
                        <>
                          <span className="pk-price-cur">$</span>
                          <span className="pk-price-num">{plan.from}</span>
                          <span className="pk-price-per">/mo</span>
                        </>
                      ) : (
                        <span className="pk-price-scope">
                          {i === tiers.length - 1 ? "Custom" : "Quoted on scope"}
                        </span>
                      )}
                    </span>
                  </div>

                  <ul className="pk-card-list">
                    {rows.map((r) => (
                      <li key={r.label}>
                        <span className="pk-row-label">{r.label}</span>
                        <span className="pk-row-value">{r.values[i]}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`btn ${tier.recommended ? "btn-primary" : "btn-outline"} pk-card-cta`}
                  >
                    Book a Call
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="pk-note">
            Only Starter fees are published. Growth and Scale are quoted from
            the volumes you agree; Enterprise is fully custom. Billed monthly in
            USD.
          </p>

          <p className="pk-excludes">
            <span>Not included:</span> {plan.excludes}
          </p>
        </div>
      )}
    </div>
  );
}
