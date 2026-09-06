import { systems } from "@/data/services";

/**
 * The revenue architecture, drawn.
 *
 * Three systems converge into one output. Entirely original vector geometry
 * drawn in code, not an illustration or a generated image: it stays sharp at
 * any size, weighs nothing, and can be recoloured from the same tokens the
 * rest of the site uses.
 *
 * Lanes are drawn in the brand triad, orange, ink and grey, so the diagram
 * introduces no colour the rest of the site does not already use.
 *
 * Motion is a pulse travelling each lane, animated with `stroke-dashoffset`
 * on a single dashed overlay per path. One property, no layout work, and it
 * degrades to a clean static diagram under reduced motion.
 */

const LANES = [
  {
    key: "pipeline",
    accent: "#FF6B00",
    d: "M 168 72 C 400 72, 470 190, 690 190",
    delay: "0s",
  },
  {
    key: "authority",
    accent: "#0A0A0A",
    d: "M 168 190 L 690 190",
    delay: "1.1s",
  },
  {
    key: "performance",
    accent: "#8A8A90",
    d: "M 168 308 C 400 308, 470 190, 690 190",
    delay: "2.2s",
  },
];

const NODE_Y = { pipeline: 72, authority: 190, performance: 308 };

export default function SystemFlow() {
  return (
    <figure className="flow">
      <svg
        className="flow__svg"
        viewBox="0 0 760 380"
        fill="none"
        role="img"
        aria-label="Diagram: the Pipeline, Authority and Performance systems converging into qualified meetings."
      >
        {/* Lane paths, drawn twice: a faint rail and a travelling pulse. */}
        {LANES.map((lane) => (
          <g key={lane.key}>
            <path
              d={lane.d}
              stroke="currentColor"
              strokeOpacity="0.16"
              strokeWidth="1.5"
            />
            <path
              className="flow__pulse"
              d={lane.d}
              stroke={lane.accent}
              strokeWidth="2"
              strokeLinecap="round"
              style={{ animationDelay: lane.delay }}
            />
          </g>
        ))}

        {/* Source nodes */}
        {LANES.map((lane) => (
          <g key={`${lane.key}-node`}>
            <circle
              cx="140"
              cy={NODE_Y[lane.key]}
              r="26"
              fill="var(--bg-color)"
              stroke="currentColor"
              strokeOpacity="0.16"
            />
            <circle
              cx="140"
              cy={NODE_Y[lane.key]}
              r="6"
              fill={lane.accent}
            />
          </g>
        ))}

        {/* Convergence node */}
        <circle
          cx="690"
          cy="190"
          r="54"
          fill="var(--bg-color)"
          stroke="currentColor"
          strokeOpacity="0.16"
        />
        <circle
          className="flow__core"
          cx="690"
          cy="190"
          r="12"
          fill="currentColor"
        />
      </svg>

      <figcaption className="flow__legend">
        {systems.map((system, i) => (
          <span className="flow__item" key={system.key}>
            <span
              className="flow__dot"
              style={{ background: LANES[i].accent }}
              aria-hidden="true"
            />
            {system.name}
          </span>
        ))}
        <span className="flow__item flow__item--out">
          Qualified meetings booked
        </span>
      </figcaption>
    </figure>
  );
}
