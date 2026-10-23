"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import VideoReel from "@/components/VideoReel";

/**
 * The AI video reels as a slider: three in view on desktop, two on tablets,
 * one (with the next peeking in) on phones.
 *
 * Built on native horizontal scrolling with scroll-snap, so swiping, trackpads
 * and keyboard scrolling all work without a library; the arrows just scroll
 * the track by one card. Arrows dim at either end, and the dots show where
 * you are.
 *
 * It also advances on its own every few seconds and loops back to the start.
 * Autoplay holds while the pointer is over it, for a while after someone
 * swipes or clicks, whenever a video is playing, when it is off screen or the
 * tab is hidden, and never runs for visitors who ask for reduced motion.
 */
const AUTO_MS = 4000; // time each position is shown
const RESUME_MS = 8000; // quiet time after an interaction before it resumes

export default function VideoSlider({ videos }) {
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setAtStart(t.scrollLeft < 4);
    setAtEnd(t.scrollLeft + t.clientWidth > t.scrollWidth - 4);
    const card = t.firstElementChild;
    if (card) {
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(t).columnGap || 0);
      setActive(Math.round(t.scrollLeft / step));
    }
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    update();
    t.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(t);
    return () => {
      t.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollStep = (dir) => {
    const t = trackRef.current;
    const card = t.firstElementChild;
    const gap = parseFloat(getComputedStyle(t).columnGap || 0);
    t.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  // Anything the visitor does holds autoplay for a while.
  const lastTouch = useRef(0);
  const touched = () => {
    lastTouch.current = Date.now();
  };

  const step = (dir) => {
    touched();
    scrollStep(dir);
  };

  useEffect(() => {
    const root = rootRef.current;
    const t = trackRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let hovering = false;
    // Mouse only: a tap on a phone fires pointerenter but no matching leave.
    const onEnter = (e) => {
      if (e.pointerType === "mouse") hovering = true;
    };
    const onLeave = () => (hovering = false);
    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointerleave", onLeave);
    t.addEventListener("pointerdown", touched);
    t.addEventListener("wheel", touched, { passive: true });
    t.addEventListener("touchstart", touched, { passive: true });

    const timer = setInterval(() => {
      const videoPlaying = [...t.querySelectorAll("video")].some((v) => !v.paused);
      // Measured each tick (cheap, every few seconds) rather than observed.
      const r = root.getBoundingClientRect();
      const onScreen = r.bottom > window.innerHeight * 0.25 && r.top < window.innerHeight * 0.75;
      if (
        hovering ||
        !onScreen ||
        document.hidden ||
        videoPlaying ||
        Date.now() - lastTouch.current < RESUME_MS
      ) {
        return;
      }
      if (t.scrollLeft + t.clientWidth > t.scrollWidth - 4) {
        t.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollStep(1);
      }
    }, AUTO_MS);

    return () => {
      clearInterval(timer);
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointerleave", onLeave);
      t.removeEventListener("pointerdown", touched);
      t.removeEventListener("wheel", touched);
      t.removeEventListener("touchstart", touched);
    };
  }, []);

  const goTo = (i) => {
    touched();
    const t = trackRef.current;
    const card = t.children[i];
    if (card) t.scrollTo({ left: card.offsetLeft - t.offsetLeft, behavior: "smooth" });
  };

  // How many positions the dots need: one per card that can sit first.
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const measure = () => {
      const t = trackRef.current;
      const card = t?.firstElementChild;
      if (!card) return;
      setPerView(Math.max(1, Math.round(t.clientWidth / card.getBoundingClientRect().width)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const positions = Math.max(1, videos.length - perView + 1);

  return (
    <div className="vs" ref={rootRef}>
      <div className="vs-track" ref={trackRef} tabIndex={0} aria-label="AI video reels">
        {videos.map((v) => (
          <div key={v.slug} className="vs-slide">
            <VideoReel video={v} />
          </div>
        ))}
      </div>

      {positions > 1 ? (
        <div className="vs-controls">
          <div className="vs-dots" role="tablist" aria-label="Choose a video">
            {Array.from({ length: positions }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={Math.min(active, positions - 1) === i}
                aria-label={`Show from video ${i + 1}`}
                className={`vs-dot${Math.min(active, positions - 1) === i ? " is-on" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="vs-arrows">
            <button
              type="button"
              className="vs-arrow"
              onClick={() => step(-1)}
              disabled={atStart}
              aria-label="Previous video"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="vs-arrow"
              onClick={() => step(1)}
              disabled={atEnd}
              aria-label="Next video"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
