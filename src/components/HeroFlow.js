/**
 * Hero visual: five channels converging on one outcome.
 *
 * The site's own claim is "five channels, one system", reported on a single
 * number. This draws exactly that: five hairlines fan in from the left and
 * meet at one node, with a short orange dash running along each line.
 *
 * Deliberately not a chart and not a widget. No text, no boxes, no data that
 * has to be true. It reads as a diagram of the offer.
 *
 * Pure SVG and CSS, no script and no library: each line self-draws once, then
 * a travelling dash loops. Both effects animate stroke-dashoffset, which the
 * browser can hand to the compositor, so nothing touches the main thread.
 * Motion is switched off wholesale under prefers-reduced-motion.
 */

/** Geometry only. `len` is the rounded path length, used to time the dash. */
const CHANNELS = [
  { d: "M12,44 C120,44 158,210 268,210", len: 320, delay: "0s" },
  { d: "M12,127 C120,127 172,210 268,210", len: 285, delay: "0.9s" },
  { d: "M12,210 L268,210", len: 256, delay: "1.8s" },
  { d: "M12,293 C120,293 172,210 268,210", len: 285, delay: "2.7s" },
  { d: "M12,376 C120,376 158,210 268,210", len: 320, delay: "3.6s" },
];

export default function HeroFlow() {
  return (
    <div className="hero-flow" aria-hidden="true">
      <svg viewBox="0 0 300 420" fill="none" role="presentation">
        {CHANNELS.map((c, i) => (
          <g key={i}>
            {/* the rail */}
            <path
              className="hf-rail"
              d={c.d}
              style={{
                strokeDasharray: c.len,
                strokeDashoffset: c.len,
                animationDelay: `${0.35 + i * 0.12}s`,
              }}
            />
            {/* the dash that runs along it */}
            <path
              className="hf-pulse"
              d={c.d}
              style={{
                strokeDasharray: "14 9999",
                animationDelay: c.delay,
                "--hf-travel": `-${c.len + 14}px`,
              }}
            />
            {/* channel origin */}
            <circle
              className="hf-origin"
              cx="12"
              cy={[44, 127, 210, 293, 376][i]}
              r="3"
              style={{ animationDelay: `${0.9 + i * 0.12}s` }}
            />
          </g>
        ))}

        {/* the convergence: one outcome */}
        <circle className="hf-ring" cx="268" cy="210" r="13" />
        <circle className="hf-ring hf-ring--2" cx="268" cy="210" r="13" />
        <circle className="hf-node" cx="268" cy="210" r="5.5" />
      </svg>
    </div>
  );
}
