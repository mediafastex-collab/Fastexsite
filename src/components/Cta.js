import Link from "next/link";
import { cta, site } from "@/data/site";

/**
 * The closing call to action, used at the foot of every page.
 *
 * There is exactly one CTA destination on this site. Routing every page
 * through this component is what keeps that true.
 *
 * Rendered as an inverted block so the page ends on a deliberate change of
 * surface rather than trailing off into more white.
 */
export default function Cta({
  heading = "Ready to build your revenue system?",
  copy = "Thirty minutes on your funnel, your ICP and where revenue is leaking. You leave with a recommendation whether or not you work with us.",
  label = cta.label,
}) {
  return (
    <section className="u-section u-section--lg u-section--invert">
      <div className="u-container cta-block">
        <h2 className="type-display-3 cta-block__title" data-reveal="up">
          {heading}
        </h2>
        <p className="type-lede" data-reveal="up">
          {copy}
        </p>
        <div className="cta-block__actions" data-reveal="up">
          <Link href={cta.href} className="btn btn-primary">
            {label}
          </Link>
          <a href={`mailto:${site.email}`} className="btn btn-outline">
            {site.email}
          </a>
        </div>
        <p className="cta-block__note" data-reveal="fade">
          {site.tagline}
        </p>
      </div>
    </section>
  );
}
