import { clientNames } from "@/data/landing";
import styles from "./landing.module.css";

/**
 * Looping strip of client names, text only.
 *
 * The list is rendered twice and the track slides by exactly half its width,
 * so the loop has no visible seam. Screen readers get the first copy as a
 * plain list; the duplicate is hidden from them. Motion pauses on hover and
 * keyboard focus, and stops entirely under prefers-reduced-motion (CSS).
 */
export default function ClientTicker() {
  // Each copy holds the names twice so it is wider than a large monitor;
  // otherwise the strip would run out before the loop point. Only the very
  // first run of names is exposed to assistive tech.
  const row = (hidden) => (
    <ul className={styles.tickerList} aria-hidden={hidden || undefined}>
      {[0, 1].flatMap((pass) =>
        clientNames.map((name) => (
          <li key={`${pass}-${name}`} aria-hidden={(!hidden && pass) || undefined}>
            {name}
          </li>
        ))
      )}
    </ul>
  );

  return (
    <section className={styles.ticker} aria-labelledby="clients-label">
      <p id="clients-label" className={styles.tickerLabel}>
        Companies we have worked with
      </p>
      <div
        className={styles.tickerViewport}
        tabIndex={0}
        aria-label="Client names. Focus or hover to pause."
      >
        <div className={styles.tickerTrack}>
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
