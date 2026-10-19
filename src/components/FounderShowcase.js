/**
 * Founders we have built personal brands for, shown apart from the company
 * clients and with their full photographs, not a cropped avatar.
 *
 * The photos come in different shapes (portrait, square, landscape). Each one
 * sits whole inside the same square frame, over a soft blurred copy of
 * itself, so the cards line up without cutting anyone out of their picture.
 */
export default function FounderShowcase({ founders, label, heading, intro, border = true }) {
  if (!founders.length) return null;

  return (
    <section
      className="section-padding founder-showcase"
      style={border ? { borderTop: "1px solid var(--border-color)" } : undefined}
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{label}</div>
          <h2>{heading}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>

        <ul className="fs-grid reveal">
          {founders.map((f, i) => {
            const src = `/assets/clients/founders/${f.photo.file}`;
            return (
              <li key={f.name} className="fs-card" style={{ "--i": i }}>
                <div className="fs-photo" style={{ "--bg": `url(${src})` }}>
                  <img
                    src={src}
                    alt={f.name}
                    width={f.photo.w}
                    height={f.photo.h}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="fs-body">
                  <h3 className="fs-name">
                    {f.name}
                    {f.detail ? <span className="fs-detail"> · {f.detail}</span> : null}
                  </h3>
                  <p className="fs-role">Founder Personal Branding</p>
                  <p className="fs-copy">{f.summary}</p>
                  <div className="cs-tags fs-tags">
                    {f.tags.map((t) => (
                      <span key={t} className="cs-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
