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
 */
export default function VideoSlider({ videos }) {
  const trackRef = useRef(null);
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

  const step = (dir) => {
    const t = trackRef.current;
    const card = t.firstElementChild;
    const gap = parseFloat(getComputedStyle(t).columnGap || 0);
    t.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  const goTo = (i) => {
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
    <div className="vs">
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
