/**
 * "Trusted by" logo strip.
 *
 * Only clients already named publicly elsewhere on this site appear here —
 * the case studies, work page and blog — so the strip discloses nothing new.
 * The landing data carries an explicit rule against adding client names
 * without approval; that applies to logos too. To add a client, get their
 * sign-off first, then add a row below.
 *
 * Logos come from public/assets/client-logos/strip/: trimmed copies of the
 * originals with the empty padding cut away, so a square file with a small
 * wordmark does not render as a speck next to a wide one. The originals in
 * the parent folder are untouched.
 *
 * Rendered in grayscale with a multiply blend so the white plates several
 * files ship with disappear into the page ground; colour returns on hover.
 */
const CLIENTS = [
  { name: "Heaven Green Energy", file: "heaven-green-energy.png", w: 463, h: 143 },
  { name: "Tatvamasi Labs", file: "tatvamasi-labs.png", w: 494, h: 160 },
  { name: "QuickEst CRM", file: "quickest.png", w: 412, h: 160 },
  { name: "Linkziy", file: "linkziy.png", w: 358, h: 160 },
  { name: "Qbits Inverter", file: "qbits.png", w: 417, h: 160 },
  { name: "Institute of Design Technology", file: "idt.png", w: 160, h: 160 },
  { name: "Astronuts", file: "astronuts.png", w: 322, h: 160 },
];

/**
 * Sizes each logo to the same visual AREA rather than the same height.
 *
 * Equal heights make a square mark look like a speck beside a wide wordmark
 * (here the spread was 3x). Holding area constant is how logo walls are
 * normally balanced: a wide logo gets shorter, a square one taller.
 */
const TARGET_AREA = 4200; // px², at desktop size
const MAX_HEIGHT = 50;
const sizeFor = ({ w, h }) => {
  const ratio = w / h;
  const height = Math.min(Math.sqrt(TARGET_AREA / ratio), MAX_HEIGHT);
  return { height: Math.round(height), width: Math.round(height * ratio) };
};

export default function ClientLogos() {
  return (
    <section className="logo-strip" aria-labelledby="logo-strip-label">
      <div className="container logo-strip-inner">
        <p id="logo-strip-label" className="logo-strip-label">
          Trusted by teams at
        </p>
        <ul className="logo-strip-list">
          {CLIENTS.map((c) => (
            <li key={c.file}>
              <img
                src={`/assets/client-logos/strip/${c.file}`}
                alt={c.name}
                {...sizeFor(c)}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
