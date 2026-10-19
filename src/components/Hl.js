/**
 * Marks the phrases in a sentence where we speak with authority: a soft
 * brand-orange marker drawn under the words, sweeping in as the text scrolls
 * into view (see `.hl` in globals.css).
 *
 *   <Hl terms={["qualified meetings"]}>Every week we book qualified meetings.</Hl>
 *
 * The sentence itself never changes, so copy and metadata stay identical;
 * only the matching phrases are wrapped. Use it sparingly — one or two
 * phrases a paragraph, or nothing stands out.
 */
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default function Hl({ children, terms = [] }) {
  if (typeof children !== "string" || terms.length === 0) return children;

  const pattern = new RegExp(`(${terms.map(escape).join("|")})`, "gi");
  const parts = children.split(pattern);

  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="hl">
        {part}
      </mark>
    ) : (
      part
    )
  );
}
