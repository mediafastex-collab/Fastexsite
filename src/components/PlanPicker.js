"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { plans, tiers } from "@/data/plans";

/**
 * Pick one service, see its four plans.
 *
 * One mental model for the whole page. The service tabs answer "which of
 * these am I buying", the four cards answer "what do I actually get".
 *
 * Cards replace the old four-column comparison tables: at this width a table
 * had to scroll sideways, whereas cards simply stack on a phone.
 *
 * No fees appear on this page. Volumes and deliverables are public; the number
 * is quoted in the scoping call, which also avoids publishing a Starter figure
 * as if it were the price of an engagement.
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
          Choose a service to see its four plans and what each one delivers.
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

                  {/* No figure here by design. The tier's positioning line
                      does the work a price used to, and fees are quoted in
                      the scoping call instead. */}
                  <p className="pk-card-blurb">{tier.blurb}</p>

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
            Fees depend on the service, the plan and the volumes you agree. We
            quote them in the scoping call and confirm them in writing before
            any work begins.
          </p>

          <p className="pk-excludes">
            <span>Not included:</span> {plan.excludes}
          </p>
        </div>
      )}
    </div>
  );
}
