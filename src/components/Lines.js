/**
 * Line-masked heading.
 *
 * Lines are passed explicitly rather than measured at runtime. Auto-splitting
 * re-wraps on every resize and fights the browser's own line breaking; naming
 * the breaks means the headline is typeset deliberately at each breakpoint
 * and the mask always lines up with an actual line box.
 *
 * Renders as a single heading element, so the text stays one accessible
 * string for screen readers and for the document outline.
 */
export default function Lines({ as: Tag = "h2", lines, className = "" }) {
  return (
    <Tag className={`reveal-lines ${className}`}>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
