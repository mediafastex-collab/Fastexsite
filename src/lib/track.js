/**
 * Conversion tracking that works with whatever tag is on the page.
 *
 * GA4 (gtag) is loaded site-wide in the root layout. Pushing the same event
 * to `dataLayer` means a Google Tag Manager container can pick it up too,
 * without code changes, if one is added later.
 */
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
    if (typeof window.gtag === "function") window.gtag("event", event, params);
  } catch {
    // Analytics must never break the page.
  }
}

export function newEventId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
  }
}

/**
 * Meta pixel event. Returns the event id so the matching Conversions API
 * event (sent from a Pages Function) can reuse it and Meta counts it once.
 *
 * `server: true` also posts the event to /api/meta-event. Use it only for
 * events with no form data; Lead is sent by /api/enquiry itself.
 */
export function metaTrack(eventName, { eventId = newEventId(), server = false } = {}) {
  if (typeof window === "undefined") return eventId;
  try {
    if (typeof window.fbq === "function") {
      window.fbq("track", eventName, {}, { eventID: eventId });
    }
    if (server) {
      fetch("/api/meta-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventName, eventId, url: window.location.href }),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Analytics must never break the page.
  }
  return eventId;
}
