import { featuredCases, projects } from "@/data/caseStudies";

/**
 * Client wall, set in type rather than in logos.
 *
 * There are no rights-cleared logo files, and a wall of mismatched logos at
 * different weights and crops usually looks worse than one consistent
 * typographic treatment anyway. Setting every name in the same face at the
 * same size reads as deliberate.
 *
 * Names come from the case studies and active engagements already in the
 * data, so this list can never drift from the work on /case-studies.
 */

const CLIENTS = [
  ...featuredCases.map((c) => c.client),
  ...projects.map((p) => p.client),
];

export default function ClientMarquee() {
  return (
    <div className="marquee-band">
      {/* Duplicated once so the track can loop seamlessly at -50%. */}
      <div className="marquee-band__track" aria-hidden="true">
        {[0, 1].map((pass) => (
          <div className="marquee-band__group" key={pass}>
            {CLIENTS.map((name) => (
              <span className="marquee-band__item" key={`${pass}-${name}`}>
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* The names again, readable by assistive tech and by search. */}
      <p className="sr-only">
        Clients include {CLIENTS.join(", ")}.
      </p>
    </div>
  );
}
