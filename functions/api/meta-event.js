/**
 * POST /api/meta-event — server-side copy of browser pixel events that carry
 * no form data (currently only "Contact", fired on BOOK YOUR CALL NOW clicks).
 * "Lead" is sent from /api/enquiry, and only after the enquiry email is sent.
 */
import { sendMetaEvent } from "../../server/metaCapi.js";

const ALLOWED = new Set(["Contact"]);
const ID_RE = /^[A-Za-z0-9-]{8,64}$/;

export async function onRequestPost({ request, env, waitUntil }) {
  const origin = request.headers.get("Origin");
  let sameHost = false;
  try {
    sameHost = !!origin && new URL(origin).host === new URL(request.url).host;
  } catch {}
  if (!sameHost) return new Response(null, { status: 403 });

  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const sourceUrl = typeof data.url === "string" ? data.url.slice(0, 500) : "";
  if (!ALLOWED.has(data.eventName) || !ID_RE.test(data.eventId || "") || !sourceUrl.startsWith(new URL(request.url).origin)) {
    return new Response(null, { status: 400 });
  }

  waitUntil(
    sendMetaEvent({ request, env, eventName: data.eventName, eventId: data.eventId, sourceUrl })
  );
  return new Response(null, { status: 204 });
}
