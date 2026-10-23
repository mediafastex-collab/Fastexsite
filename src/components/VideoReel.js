"use client";

import { useEffect, useRef, useState } from "react";

/**
 * One showcase video.
 *
 * Shows its poster with a play button. Pressing play starts it with sound;
 * pressing it again (or the video itself) pauses it. Only one video plays at
 * a time: starting one announces itself and every other reel pauses. A video
 * also pauses when it is scrolled off screen. Nothing is downloaded until the
 * first press, so the page stays light.
 */
const PLAY_EVENT = "fastex:video-play";

export default function VideoReel({ video }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Another reel started: stop this one.
    const onOtherPlay = (e) => {
      if (e.detail !== video.slug && !el.paused) el.pause();
    };
    window.addEventListener(PLAY_EVENT, onOtherPlay);

    // Scrolled out of view: stop.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !el.paused) el.pause();
      },
      { threshold: 0.15 }
    );
    io.observe(el);

    return () => {
      window.removeEventListener(PLAY_EVENT, onOtherPlay);
      io.disconnect();
    };
  }, [video.slug]);

  const toggle = () => {
    const el = ref.current;
    if (el.paused) {
      el.muted = false;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  };

  const onPlay = () => {
    setPlaying(true);
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: video.slug }));
  };

  const onTime = () => {
    const el = ref.current;
    if (el.duration) setProgress(el.currentTime / el.duration);
  };

  const base = `/videos/ai/${video.slug}`;

  return (
    <figure className="vr-card" style={{ "--ar": `${video.w} / ${video.h}` }}>
      <div
        className={`vr-frame${playing ? " is-playing" : ""}${
          progress > 0 ? " has-started" : ""
        }`}
      >
        <video
          ref={ref}
          poster={`${base}.jpg`}
          playsInline
          preload="none"
          onClick={toggle}
          onPlay={onPlay}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={onTime}
          aria-label={`${video.title}: ${video.kind}`}
        >
          <source src={`${base}.mp4`} type="video/mp4" />
        </video>

        <button
          type="button"
          className="vr-toggle"
          onClick={toggle}
          aria-label={playing ? `Pause ${video.title}` : `Play ${video.title} with sound`}
        >
          <span className={playing ? "vr-icon-pause" : "vr-icon-play"} aria-hidden="true" />
        </button>

        <div className="vr-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>

      <figcaption className="vr-caption">
        <span className="vr-kind">{video.kind}</span>
        <span className="vr-title">{video.title}</span>
        <span className="vr-summary">{video.summary}</span>
      </figcaption>
    </figure>
  );
}
