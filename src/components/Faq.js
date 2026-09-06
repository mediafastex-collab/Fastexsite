/**
 * FAQ block. Pair with `faqSchema()` so the rendered questions and the
 * FAQPage markup can never drift apart.
 */
export default function Faq({
  faqs,
  label = "Questions",
  heading = "Before You Book the Session.",
}) {
  if (!faqs?.length) return null;

  return (
    <section
      className="section-padding"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{label}</div>
          <h2>{heading}</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.q}>
              <summary>
                {faq.q}
                <span className="sign" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** FAQPage node for the page's JSON-LD graph. */
export const faqSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});
