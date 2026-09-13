"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { plans, tiers } from "@/data/plans";

/**
 * Build-your-scope configurator.
 *
 * Deliberately withholds any figure until the visitor has chosen services:
 * selection first, price last. The pattern follows product-selector pricing
 * pages (Chili Piper, UpKeep) where a tailored price replaces a wall of tiers.
 *
 * Only Starter fees are published, so the reveal quotes the Starter baseline
 * for the chosen services and says plainly that higher tiers are scoped. It
 * never invents a Growth, Scale or Enterprise figure.
 *
 * Selection is mirrored into the URL so a scope can be shared or bookmarked.
 */

const TIER_SLUGS = tiers.map((t) => t.name.toLowerCase());

/** Rows worth previewing per service — enough to make a tier feel concrete. */
const PREVIEW_ROWS = 3;

function formatMoney(n) {
  return n.toLocaleString("en-US");
}

export default function ScopeBuilder() {
  const [selected, setSelected] = useState([]);
  const [tierIndex, setTierIndex] = useState(1); // Growth, the recommended tier
  const [hydrated, setHydrated] = useState(false);

  // Restore a shared scope from the URL. Runs after mount so the prerendered
  // HTML and the first client render agree.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("s");
    const t = params.get("t");

    if (s) {
      const valid = plans.map((p) => p.slug);
      const restored = s.split(",").filter((slug) => valid.includes(slug));
      if (restored.length) setSelected(restored);
    }
    if (t) {
      const i = TIER_SLUGS.indexOf(t.toLowerCase());
      if (i > -1) setTierIndex(i);
    }
    setHydrated(true);
  }, []);

  // Keep the URL in step with the selection, without adding history entries.
  useEffect(() => {
    if (!hydrated) return;
    const params = new URLSearchParams(window.location.search);
    if (selected.length) params.set("s", selected.join(","));
    else params.delete("s");
    params.set("t", TIER_SLUGS[tierIndex]);
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [selected, tierIndex, hydrated]);

  const toggle = (slug) =>
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

  const chosen = useMemo(
    () => plans.filter((p) => selected.includes(p.slug)),
    [selected]
  );

  const baseline = useMemo(
    () => chosen.reduce((sum, p) => sum + p.from, 0),
    [chosen]
  );

  const tier = tiers[tierIndex];
  const isStarter = tierIndex === 0;
  const isEnterprise = tierIndex === tiers.length - 1;
  const hasSelection = chosen.length > 0;

  return (
    <div className="sb">
      {/* ── Step 01 · services ─────────────────────────────── */}
      <div className="sb-step">
        <div className="sb-step-head">
          <span className="sb-step-num">01</span>
          <div>
            <h3>What do you need?</h3>
            <p>
              Pick one service, or connect several into a coordinated system.
              Nothing is priced until you&apos;ve chosen.
            </p>
          </div>
        </div>

        <ul className="sb-services">
          {plans.map((plan) => {
            const on = selected.includes(plan.slug);
            return (
              <li key={plan.slug}>
                <button
                  type="button"
                  className={`sb-service${on ? " is-on" : ""}`}
                  aria-pressed={on}
                  onClick={() => toggle(plan.slug)}
                >
                  <span className="sb-check" aria-hidden="true" />
                  <span className="sb-service-text">
                    <span className="sb-service-pillar">{plan.pillar}</span>
                    <span className="sb-service-name">{plan.name}</span>
                    <span className="sb-service-summary">{plan.summary}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Step 02 · level ────────────────────────────────── */}
      <div className={`sb-step${hasSelection ? "" : " is-waiting"}`}>
        <div className="sb-step-head">
          <span className="sb-step-num">02</span>
          <div>
            <h3>At what level?</h3>
            <p>
              The same strategic input at every level. Volume and account
              support are what change.
            </p>
          </div>
        </div>

        <div className="sb-tiers" role="radiogroup" aria-label="Engagement level">
          {tiers.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="radio"
              aria-checked={i === tierIndex}
              className={`sb-tier${i === tierIndex ? " is-on" : ""}`}
              onClick={() => setTierIndex(i)}
            >
              <span className="sb-tier-top">
                <span className="sb-tier-name">{t.name}</span>
                {t.recommended ? <span className="pl-rec">Recommended</span> : null}
              </span>
              <span className="sb-tier-blurb">{t.blurb}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Step 03 · the reveal ───────────────────────────── */}
      <div className="sb-step sb-step--last">
        <div className="sb-step-head">
          <span className="sb-step-num">03</span>
          <div>
            <h3>Your scope.</h3>
            <p>Built from what you selected above.</p>
          </div>
        </div>

        {!hasSelection ? (
          <div className="sb-empty">
            <p>
              Choose at least one service to see your starting fee and what
              lands each month.
            </p>
          </div>
        ) : (
          <div className="sb-result">
            <div className="sb-result-head">
              <span className="sb-result-count">
                {chosen.length} {chosen.length === 1 ? "service" : "services"}
              </span>
              <span className="sb-result-sep" aria-hidden="true">
                ·
              </span>
              <span className="sb-result-tier">{tier.name}</span>
            </div>

            {/* What actually lands, per selected service */}
            <ul className="sb-lines">
              {chosen.map((plan) => {
                const rows = plan.groups[0].rows
                  .filter((r) => !/^Additional|^Extra|^Expanded|^Above-ceiling/.test(r.label))
                  .slice(0, PREVIEW_ROWS);
                return (
                  <li className="sb-line" key={plan.slug}>
                    <div className="sb-line-head">
                      <span className="sb-line-name">{plan.name}</span>
                      <span className="sb-line-from">
                        from <strong>${formatMoney(plan.from)}</strong>
                        <span className="sb-line-per">/mo</span>
                      </span>
                    </div>
                    <dl className="sb-line-specs">
                      {rows.map((r) => (
                        <div className="sb-spec" key={r.label}>
                          <dt>{r.label}</dt>
                          <dd>{r.values[tierIndex]}</dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                );
              })}
            </ul>

            {/* The number, last */}
            <div className="sb-total">
              <div className="sb-total-figure">
                <span className="sb-total-label">
                  {isEnterprise ? "Enterprise" : "Starting from"}
                </span>
                {isEnterprise ? (
                  <span className="sb-total-custom">Custom-priced</span>
                ) : (
                  <span className="sb-total-amount">
                    <span className="sb-total-cur">$</span>
                    <span className="sb-total-num">{formatMoney(baseline)}</span>
                    <span className="sb-total-per">/month</span>
                  </span>
                )}
              </div>

              <p className="sb-total-note">
                {isEnterprise
                  ? "Enterprise volumes, support and fees are set entirely by your agreed scope of work."
                  : isStarter
                    ? "The published Starter fee for the services you selected, billed monthly in USD. Final fees are confirmed in your scope of work."
                    : `The Starter baseline for these services. ${tier.name} volumes are higher than shown at Starter and are quoted in your scope of work.`}
              </p>

              <div className="sb-total-cta">
                <Link href="/contact" className="btn btn-primary">
                  Book a Scoping Call
                </Link>
                <span className="sb-total-micro">
                  No fee is charged until a scope is signed.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
