"use client";

import { site } from "@/data/site";
import { BOOKING_EVENT, BOOKING_WARM_EVENT } from "@/components/BookingModal";

/**
 * Every "Book a Call" button on the site.
 *
 * A click opens the cal.id calendar in a dialog over the current page
 * (BookingModal), so the visitor never leaves the site. The element is still
 * a real link to the booking page: with JavaScript off, before the dialog is
 * ready, or on a cmd/ctrl-click, it behaves as one, in the same tab unless
 * the visitor chooses otherwise. One component keeps all twenty-odd buttons
 * identical, and the link changes in one place.
 */
export default function BookCall({
  children = "Book a Call",
  variant = "primary",
  className = "",
}) {
  const base = variant === "outline" ? "btn btn-outline" : "btn btn-primary";

  const onClick = (e) => {
    const plainClick =
      e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
    if (!plainClick || document.documentElement.dataset.booking !== "ready") return;
    e.preventDefault();
    window.dispatchEvent(new Event(BOOKING_EVENT));
  };

  // Start fetching the calendar as soon as someone shows intent.
  const warm = () => window.dispatchEvent(new Event(BOOKING_WARM_EVENT));

  return (
    <a
      href={site.booking}
      onClick={onClick}
      onPointerEnter={warm}
      onFocus={warm}
      aria-haspopup="dialog"
      className={`${base} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
