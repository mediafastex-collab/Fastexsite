"use client";

import { useEffect, useRef, useState } from "react";
import VideoReel from "@/components/VideoReel";

/**
 * "Projection room": the AI video reels on a dark stage.
 *
 * One reel stands lit at the centre; its neighbours turn away into depth on
 * either side. A numbered index beside it names every reel, and the current
 * one's rail fills in brand orange as its turn runs out, then the stage moves
 * on by itself. Pick a number, click a side reel or use the arrows to choose.
 *
 * The turn is a CSS animation on the rail, so timing and the visible progress
 * are the same thing. It holds while a video is playing, while the stage is
 * off screen, and never runs for visitors who ask for reduced motion.
 * See design/projection-room.md for the design notes.
 */
const TURN_MS = 6000;

export default function ReelStage({ videos, id, label, heading, intro, children }) {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [reduced, setReduced] = useState(false);
  const n = videos.length;

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const root = rootRef.current;

    // Media events do not bubble, so listen in the capture phase.
    const sync = () =>
      setPlaying([...root.querySelectorAll("video")].some((v) => !v.paused));
    root.addEventListener("play", sync, true);
    root.addEventListener("pause", sync, true);
    root.addEventListener("ended", sync, true);

    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(root);

    return () => {
      root.removeEventListener("play", sync, true);
      root.removeEventListener("pause", sync, true);
      root.removeEventListener("ended", sync, true);
      io.disconnect();
    };
  }, []);

  const select = (i) => {
    const next = (i + n) % n;
    if (next === active) return;
    // Whatever was playing stops when the stage changes.
    rootRef.current.querySelectorAll("video").forEach((v) => v.pause());
    setActive(next);
  };

  // Position of each reel relative to the lit one: -1 left, 0 centre, 1 right.
  const place = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const running = onScreen && !playing && !reduced;

  return (
    <section id={id} className="rs" ref={rootRef}>
      <div className="container rs-grid">
        {/* ---------- Heading ---------- */}
        <div className="rs-head">
          <div className="rs-label">{label}</div>
          <h2 className="rs-heading">{heading}</h2>
          {intro ? <p className="rs-intro">{intro}</p> : null}
        </div>

        {/* ---------- Index ---------- */}
        <ol className="rs-list">
            {videos.map((v, i) => (
              <li key={v.slug}>
                <button
                  type="button"
                  className={`rs-item${i === active ? " is-on" : ""}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => select(i)}
                >
                  <span className="rs-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rs-text">
                    <span className="rs-title">{v.title}</span>
                    <span className="rs-kind">{v.kind}</span>
                    {i === active ? <span className="rs-summary">{v.summary}</span> : null}
                  </span>
                  <span className="rs-rail" aria-hidden="true">
                    {i === active ? (
                      <span
                        key={`${active}`}
                        className={`rs-fill${running ? "" : " is-held"}`}
                        style={{ animationDuration: `${TURN_MS}ms` }}
                        onAnimationEnd={() => select(active + 1)}
                      />
                    ) : null}
                  </span>
                </button>
              </li>
            ))}
        </ol>

        {children ? <div className="rs-extra">{children}</div> : null}

        {/* ---------- Stage ---------- */}
        <div className="rs-stage-wrap">
          <div className="rs-stage">
            {videos.map((v, i) => {
              const d = place(i);
              const pos = d === 0 ? "is-center" : d === -1 ? "is-left" : d === 1 ? "is-right" : "is-away";
              return (
                <div key={v.slug} className={`rs-slide ${pos}`} aria-hidden={d !== 0}>
                  <VideoReel video={v} />
                  {d !== 0 ? (
                    <button
                      type="button"
                      className="rs-hit"
                      tabIndex={-1}
                      aria-label={`Show ${v.title}`}
                      onClick={() => select(i)}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="rs-controls">
            <span className="rs-count">
              <span>{String(active + 1).padStart(2, "0")}</span> / {String(n).padStart(2, "0")}
            </span>
            <div className="rs-arrows">
              <button type="button" className="rs-arrow" onClick={() => select(active - 1)} aria-label="Previous video">
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" className="rs-arrow" onClick={() => select(active + 1)} aria-label="Next video">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
