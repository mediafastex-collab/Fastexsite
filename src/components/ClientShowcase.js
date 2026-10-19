import Link from "next/link";
import ClientMark from "@/components/ClientMark";

/**
 * "Brands we've worked with" on a service or industry page: the clients that
 * work was actually done for, logo and name, with a link to the full list.
 * Renders nothing when there are none, so a page never shows an empty band.
 */
export default function ClientShowcase({ clients, label, heading, intro }) {
  if (!clients.length) return null;

  return (
    <section
      className="section-padding client-showcase"
      style={{ borderTop: "1px solid var(--border-color)" }}
    >
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">{label}</div>
          <h2>{heading}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>

        <ul className="cs-grid reveal">
          {clients.map((c, i) => (
            <li key={c.name} className="cs-card" style={{ "--i": i }}>
              <div className="cs-mark">
                <ClientMark client={c} />
              </div>
              <span className="cs-name">{c.name}</span>
              <span className="cs-meta">{c.industry}</span>
              <span className="cs-tags">
                {c.tags.map((t) => (
                  <span key={t} className="cs-tag">
                    {t}
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>

        <Link href="/work" className="cs-all reveal">
          See every client <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
