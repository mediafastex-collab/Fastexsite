"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

/**
 * The booking calendar, opened over the page instead of in a new tab.
 *
 * Every <BookCall> button fires a `fastex:book` event; this one dialog, mounted
 * once in the site layout, answers it. The cal.id page is framed in embed mode
 * and only starts loading when a pointer reaches a booking button (or on the
 * first click), then is kept, so a second open is instant.
 *
 * Built on the native <dialog>: it traps focus, closes on Escape and returns
 * focus to the button that opened it, with no extra code.
 */
export const BOOKING_EVENT = "fastex:book";
/** Fired when a pointer reaches a booking button: start loading early. */
export const BOOKING_WARM_EVENT = "fastex:book-warm";
const EMBED_URL = `${site.booking}?embed=true&theme=light`;

export default function BookingModal() {
  const ref = useRef(null);
  const [requested, setRequested] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If cal.id never says it is ready, show the frame anyway after a while.
  useEffect(() => {
    if (!requested || loaded) return;
    const t = setTimeout(() => setLoaded(true), 12000);
    return () => clearTimeout(t);
  }, [requested, loaded]);

  useEffect(() => {
    const dialog = ref.current;
    const open = () => {
      setRequested(true);
      if (!dialog.open) dialog.showModal();
      document.documentElement.classList.add("booking-open");
    };
    const onClose = () => document.documentElement.classList.remove("booking-open");

    const warm = () => setRequested(true);

    // The framed page draws its calendar a moment after the frame's own load
    // event, so wait for cal.id to say it has finished before revealing it.
    const onMessage = (e) => {
      if (e.origin !== new URL(site.booking).origin) return;
      const type = e.data?.type;
      if (type === "__windowLoadComplete" || type === "__dimensionChanged" || type === "linkReady") {
        setLoaded(true);
      }
    };

    window.addEventListener(BOOKING_EVENT, open);
    window.addEventListener(BOOKING_WARM_EVENT, warm);
    window.addEventListener("message", onMessage);
    dialog.addEventListener("close", onClose);
    // Tells <BookCall> the dialog is ready; until then it falls back to a
    // plain link in the same tab.
    document.documentElement.dataset.booking = "ready";

    return () => {
      window.removeEventListener(BOOKING_EVENT, open);
      window.removeEventListener(BOOKING_WARM_EVENT, warm);
      window.removeEventListener("message", onMessage);
      dialog.removeEventListener("close", onClose);
      delete document.documentElement.dataset.booking;
    };
  }, []);

  // A click on the dim backdrop (the dialog box itself, outside the panel)
  // closes it.
  const onBackdrop = (e) => {
    if (e.target === ref.current) ref.current.close();
  };

  return (
    <dialog
      ref={ref}
      className="booking-modal"
      aria-labelledby="booking-title"
      onClick={onBackdrop}
    >
      <div className="booking-panel">
        <div className="booking-head">
          <div>
            <p id="booking-title" className="booking-title">
              Book a discovery call
            </p>
            <p className="booking-sub">
              Pick a time that suits you. The confirmation comes by email.
            </p>
          </div>
          <button
            type="button"
            className="booking-close"
            aria-label="Close"
            onClick={() => ref.current.close()}
          >
            <span aria-hidden="true" />
          </button>
        </div>

        <div className="booking-body">
          {!loaded ? (
            <div className="booking-loading" aria-live="polite">
              <span className="booking-spinner" aria-hidden="true" />
              Loading the calendar…
            </div>
          ) : null}
          {requested ? (
            <iframe
              src={EMBED_URL}
              title="Book a discovery call with Fastex Media"
              className={loaded ? "is-ready" : ""}
              allow="payment"
            />
          ) : null}
        </div>

        <a className="booking-fallback" href={site.booking}>
          Calendar not loading? Open it here
        </a>
      </div>
    </dialog>
  );
}
