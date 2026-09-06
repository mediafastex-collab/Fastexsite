"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a metric up to its value the first time it scrolls into view.
 *
 * Values arrive as written strings like "5x", "60%" or "↓ 60%", so the numeric
 * part is extracted and the surrounding characters are preserved exactly. A
 * value with no digits is rendered untouched.
 *
 * Runs once, cleans up after itself, and renders the final value immediately
 * when motion is reduced.
 */
export default function CountUp({ value, duration = 1100 }) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/s);
  const ref = useRef(null);
  const [display, setDisplay] = useState(() => (match ? null : value));

  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";
  const decimals = match && match[2].includes(".") ? 1 : 0;

  useEffect(() => {
    if (!match) return;

    const node = ref.current;
    const settle = () => setDisplay(target.toFixed(decimals));

    if (
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      settle();
      return;
    }

    let frame;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // Matches the deceleration curve the rest of the site animates on.
          const eased = 1 - Math.pow(1 - t, 4);
          setDisplay((target * eased).toFixed(decimals));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [match, target, decimals, duration]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {/* The finished value is always in the DOM for assistive tech and for
          search, regardless of where the animation has got to. */}
      <span aria-hidden="true">
        {prefix}
        {display ?? "0"}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
