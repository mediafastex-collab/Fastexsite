import { clients, brands, founders } from "@/data/clients";
import ClientMark from "@/components/ClientMark";

/**
 * Homepage proof: every client, logo and name, in two slow rows drifting in
 * opposite directions.
 *
 * Each row is rendered twice end to end and translated by exactly half its
 * width, so the loop has no visible seam. The second copy is hidden from
 * assistive tech, which reads every name once. Hover pauses a row; reduced
 * motion turns the rows into a static, wrapped grid (see globals.css).
 */

// Alternate the two rows so neither one is all solar or all SaaS, and so the
// founders sit among the companies rather than bunched at one end.
const rowA = clients.filter((_, i) => i % 2 === 0);
const rowB = clients.filter((_, i) => i % 2 === 1);

function Card({ client }) {
  return (
    <li className="cm-card">
      <ClientMark client={client} />
      <span className="cm-name">{client.name}</span>
      <span className="cm-meta">
        {client.kind === "founder" ? "Founder brand" : client.industry}
      </span>
    </li>
  );
}

function Row({ items, reverse, duration }) {
  return (
    <div
      className={`cm-row${reverse ? " cm-row--reverse" : ""}`}
      style={{ "--cm-duration": `${duration}s` }}
    >
      <ul className="cm-track">
        {items.map((c) => (
          <Card key={c.name} client={c} />
        ))}
      </ul>
      <ul className="cm-track" aria-hidden="true">
        {items.map((c) => (
          <Card key={c.name} client={c} />
        ))}
      </ul>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section className="client-marquee" aria-labelledby="cm-label">
      <div className="container cm-head reveal">
        <p id="cm-label" className="cm-label">
          Trusted by {brands.length} brands and {founders.length} founders
        </p>
        <p className="cm-practices">
          <span>B2B Lead Generation</span>
          <span aria-hidden="true">·</span>
          <span>Founder Personal Branding</span>
          <span aria-hidden="true">·</span>
          <span>Social &amp; Go-to-Market</span>
        </p>
      </div>
      <div className="cm-rows reveal">
        {/* Durations scale with row length so both rows move at one speed. */}
        <Row items={rowA} duration={rowA.length * 4.5} />
        <Row items={rowB} duration={rowB.length * 4.5} reverse />
      </div>
    </section>
  );
}
