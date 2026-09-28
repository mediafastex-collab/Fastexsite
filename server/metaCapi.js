/**
 * Meta Conversions API, shared by the Pages Functions in /functions.
 *
 * Each server event carries the same event_id as the browser pixel event, so
 * Meta deduplicates them and counts the conversion once.
 *
 * Settings (Cloudflare → Workers & Pages → fastexsite → Settings →
 * Variables and Secrets):
 *   META_CAPI_TOKEN       (secret)  Conversions API access token from Events
 *                                   Manager. Never put this in front-end code.
 *   META_PIXEL_ID         (text)    Optional, defaults to the pixel below.
 *   META_TEST_EVENT_CODE  (text)    Optional. Set while checking events in
 *                                   Events Manager → Test events; remove after.
 *
 * Without META_CAPI_TOKEN this does nothing; the browser pixel still works.
 */

const DEFAULT_PIXEL_ID = "2238203073389220";
const API_VERSION = "v26.0";

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function cookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  const match = header.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

/**
 * @param {object} opts
 * @param {Request} opts.request   the visitor's request (IP, user agent, cookies, location)
 * @param {object}  opts.env
 * @param {string}  opts.eventName Meta standard event, e.g. "Contact" or "Lead"
 * @param {string}  opts.eventId   same id the browser pixel used
 * @param {string}  opts.sourceUrl page the event happened on
 * @param {string} [opts.email]    hashed before sending
 * @param {object} [opts.customData]
 */
export async function sendMetaEvent({ request, env, eventName, eventId, sourceUrl, email, customData }) {
  if (!env.META_CAPI_TOKEN) return;

  const user = {
    client_ip_address: request.headers.get("CF-Connecting-IP") || undefined,
    client_user_agent: request.headers.get("User-Agent") || undefined,
    fbp: cookie(request, "_fbp"),
    fbc: cookie(request, "_fbc"),
  };

  // Meta's normalisation: lowercase, no spaces or punctuation, then SHA-256.
  const cf = request.cf || {};
  if (email) user.em = [await sha256(email.trim().toLowerCase())];
  if (cf.city) user.ct = [await sha256(cf.city.toLowerCase().replace(/[^\p{L}]/gu, ""))];
  if (cf.country) user.country = [await sha256(cf.country.toLowerCase())];

  const body = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: sourceUrl,
        action_source: "website",
        user_data: user,
        ...(customData ? { custom_data: customData } : {}),
      },
    ],
    ...(env.META_TEST_EVENT_CODE ? { test_event_code: env.META_TEST_EVENT_CODE } : {}),
  };

  const pixelId = env.META_PIXEL_ID || DEFAULT_PIXEL_ID;
  try {
    const res = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(env.META_CAPI_TOKEN)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    if (!res.ok) console.error("Meta CAPI rejected event", eventName, res.status, await res.text());
  } catch (err) {
    console.error("Meta CAPI unreachable", err);
  }
}
