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
