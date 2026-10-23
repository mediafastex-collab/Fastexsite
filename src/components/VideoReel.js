"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One showcase video.
 *
 * Plays muted and looped while it is on screen and pauses when it leaves, so
 * a page of videos never plays them all at once or burns a phone's data in
 * the background. Nothing downloads until the card is close to the screen;
 * until then the poster stands in. A tap on the sound button unmutes this
 * video (and only this one).
 */
export default function VideoReel({ video }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // React does not always carry `muted` onto the element, and browsers only
    // autoplay a muted video, so set it directly.
    el.muted = true;
    el.defaultMuted = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (el.preload !== "auto") el.preload = "auto";
          if (!reduced) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const el = ref.current;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) el.play().catch(() => {});
  };

  const base = `/videos/ai/${video.slug}`;

  return (
    <figure className="vr-card" style={{ "--ar": `${video.w} / ${video.h}` }}>
      <div className={`vr-frame${ready ? " is-ready" : ""}`}>
        <video
          ref={ref}
          poster={`${base}.jpg`}
          muted
          loop
          playsInline
          preload="none"
          onPlaying={() => setReady(true)}
          aria-label={`${video.title}: ${video.kind}`}
        >
          <source src={`${base}.mp4`} type="video/mp4" />
        </video>

        <button
          type="button"
          className="vr-sound"
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? `Turn sound on for ${video.title}` : `Mute ${video.title}`}
        >
          <span aria-hidden="true">{muted ? "Sound on" : "Mute"}</span>
        </button>
      </div>

      <figcaption className="vr-caption">
        <span className="vr-kind">{video.kind}</span>
        <span className="vr-title">{video.title}</span>
        <span className="vr-summary">{video.summary}</span>
      </figcaption>
    </figure>
  );
}
