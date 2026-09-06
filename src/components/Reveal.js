"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = "[data-reveal], .reveal, .reveal-lines, .media-frame";

/**
 * The motion runtime.
 *
 * One IntersectionObserver drives every scroll reveal on the page: elements
 * marked `data-reveal`, line-masked headings (`.reveal-lines`), framed media
 * (`.media-frame`) and the legacy `.reveal` class still used by the older
 * inner pages.
 *
 * Three deliberate choices:
 *
 *  - The hidden starting state is gated behind `.js-reveal` on <html>, so if
 *    this never runs the page is fully visible rather than blank.
 *  - Elements are unobserved once shown. Reveals play once; re-animating on
 *    every scroll past is what makes a site feel restless.
 *  - A hidden document waits for visibility rather than giving up, so a page
 *    opened in a background tab still animates when it is switched to.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const show = (el) => el.classList.add("is-visible");

    const elements = Array.from(document.querySelectorAll(SELECTOR)).filter(
      (el) => !el.classList.contains("is-visible")
    );
    if (!elements.length) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // `.js-reveal` is set before first paint by the inline script in the root
    // layout, so the hidden starting state is never visible as a flash. If any
    // of the conditions below hold, drop the gate and show everything.
    const standDown = () => {
      root.classList.remove("js-reveal");
      elements.forEach(show);
    };

    // A document that is not being painted never receives intersection
    // callbacks, so nothing would ever be revealed.
    if (
      reducedMotion ||
      !("IntersectionObserver" in window) ||
      document.visibilityState === "hidden"
    ) {
      standDown();
      return;
    }

    let observer;
    let settle;

    const start = () => {
      // Position each element within its stagger group. Siblings sharing a
      // parent animate in sequence; a new parent restarts the count. Capped
      // so a long list never ends with a multi-second delay.
      const groups = new Map();
      elements.forEach((el) => {
        if (el.style.getPropertyValue("--i")) return;
        const parent = el.parentElement;
        const index = groups.get(parent) ?? 0;
        groups.set(parent, index + 1);
        el.style.setProperty("--i", String(Math.min(index, 6)));
      });

      // Line-masked headings carry their own internal stagger.
      document.querySelectorAll(".reveal-lines").forEach((block) => {
        block.querySelectorAll(".line > span").forEach((span, i) => {
          span.style.setProperty("--i", String(i));
        });
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            show(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
      );

      elements.forEach((el) => observer.observe(el));

      // Anything already on screen at load should not wait for a scroll that
      // may never come.
      settle = requestAnimationFrame(() => {
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            show(el);
            observer.unobserve(el);
          }
        });
      });
    };

    start();

    return () => {
      cancelAnimationFrame(settle);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
