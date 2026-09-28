"use client";

import { landing } from "@/data/landing";
import { track } from "@/lib/track";
import styles from "./landing.module.css";

/**
 * The "BOOK YOUR CALL NOW" button. Goes to the booking calendar when one is
 * configured, otherwise to the nearest enquiry form (`fallback`).
 */
export default function CtaLink({ location, fallback, large = false }) {
  const external = Boolean(landing.calendarUrl);
  const href = landing.calendarUrl || `#${fallback}`;

  function onClick(e) {
    track("cta_click", { cta_location: location, destination: external ? "calendar" : "form" });
    if (external) return;
    const target = document.getElementById(fallback);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    // Move keyboard focus to the first field so the next Tab is useful.
    target.querySelector("input, select, textarea")?.focus({ preventScroll: true });
  }

  return (
    <a
      href={href}
      className={`${styles.btn} ${large ? styles.btnLarge : ""}`}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      BOOK YOUR CALL NOW
      <span className={styles.btnArrow} aria-hidden="true">→</span>
    </a>
  );
}
