/**
 * Question-shaped headings with one self-contained answer paragraph each.
 *
 * Answer engines lift passages, not pages. Each answer is written to stand on
 * its own without the surrounding context, so a single paragraph quoted in
 * isolation still reads as a complete answer.
 */
export default function AnswerBlock({ items, label = "Common questions" }) {
  if (!items?.length) return null;

  return (
    <section
      className="section-padding"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container">
        <div className="section-label">{label}</div>
        <div className="answer-list">
          {items.map((item) => (
            <div className="answer-block reveal" key={item.q}>
              <h2>{item.q}</h2>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
