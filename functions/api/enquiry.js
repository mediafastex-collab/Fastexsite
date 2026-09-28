/**
 * POST /api/enquiry — Cloudflare Pages Function.
 *
 * The site is a static export, so Next.js cannot handle form posts. Cloudflare
 * Pages runs any file under /functions as a server-side route on the same
 * domain, which keeps the email API key out of the browser.
 *
 * Email is sent through Resend (https://resend.com). Required settings, added
 * in Cloudflare dashboard → Workers & Pages → fastexsite → Settings →
 * Variables and Secrets (for Production, and Preview if you test there):
 *
 *   RESEND_API_KEY  (secret)  API key from Resend with "sending" access.
 *   ENQUIRY_FROM    (text)    Verified sender, e.g.
 *                             "Fastex Media Website <enquiries@fastexmedia.com>".
 *                             The domain must be verified in Resend first.
 *   ENQUIRY_TO      (text)    Optional. Defaults to hello@fastexmedia.com.
 *
 * Until RESEND_API_KEY and ENQUIRY_FROM are set, this returns an error and the
 * form tells the visitor their enquiry was NOT sent.
 */

const DEFAULT_TO = "hello@fastexmedia.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Keep in sync with serviceTypes in src/data/landing.js.
const SERVICE_TYPES = new Set([
  "AI implementation",
  "Software development",
  "Cloud services",
  "Cybersecurity",
  "Data and technology consulting",
  "Other IT services",
]);

const LIMITS = {
  name: 120,
  email: 200,
  company: 160,
  website: 200,
  serviceType: 80,
  challenge: 2000,
  page: 500,
  formLocation: 40,
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Strip anything that could break an email header.
const oneLine = (s) => s.replace(/[\r\n]+/g, " ").trim();

export async function onRequestPost({ request, env }) {
  // Only accept posts from our own pages.
  const origin = request.headers.get("Origin");
  if (origin) {
    let sameHost = false;
    try {
      sameHost = new URL(origin).host === new URL(request.url).host;
    } catch {}
    if (!sameHost) return json({ ok: false, error: "Forbidden" }, 403);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  // Honeypot filled in: almost certainly a bot. Report success so it moves
  // on, but send nothing.
  if (typeof data.url2 === "string" && data.url2.trim() !== "") {
    return json({ ok: true });
  }

  const f = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    const v = typeof data[key] === "string" ? data[key].trim() : "";
    f[key] = v.slice(0, max);
  }

  const errors = {};
  if (!f.name) errors.name = "required";
  if (!f.email || !EMAIL_RE.test(f.email)) errors.email = "invalid";
  if (!f.company) errors.company = "required";
  if (!SERVICE_TYPES.has(f.serviceType)) errors.serviceType = "invalid";
  if (data.consent !== true) errors.consent = "required";
  if (Object.keys(errors).length) {
    return json({ ok: false, error: "Validation failed", fields: errors }, 422);
  }

  if (!env.RESEND_API_KEY || !env.ENQUIRY_FROM) {
    console.error("Enquiry not sent: RESEND_API_KEY or ENQUIRY_FROM is not configured.");
    return json({ ok: false, error: "Email is not configured" }, 503);
  }

  const rows = [
    ["Name", f.name],
    ["Work email", f.email],
    ["Company", f.company],
    ["Website", f.website || "—"],
    ["Service type", f.serviceType],
    ["Main growth challenge", f.challenge || "—"],
    ["Consent to reply", "Yes"],
    ["Form", f.formLocation || "—"],
    ["Page", f.page || "—"],
    ["Received", new Date().toISOString()],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:sans-serif">New website enquiry</h2>
<table cellpadding="8" style="font-family:sans-serif;border-collapse:collapse">
${rows
  .map(
    ([k, v]) =>
      `<tr><th align="left" valign="top" style="border-bottom:1px solid #ddd">${k}</th><td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
  )
  .join("\n")}
</table>`;

  let res;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.ENQUIRY_FROM,
        to: [env.ENQUIRY_TO || DEFAULT_TO],
        reply_to: oneLine(f.email),
        subject: oneLine(`New enquiry: ${f.company} (${f.serviceType})`),
        text,
        html,
      }),
    });
  } catch (err) {
    console.error("Enquiry not sent: could not reach Resend.", err);
    return json({ ok: false, error: "Could not send" }, 502);
  }

  if (!res.ok) {
    console.error("Enquiry not sent: Resend returned", res.status, await res.text());
    return json({ ok: false, error: "Could not send" }, 502);
  }

  return json({ ok: true });
}

export function onRequest() {
  return json({ ok: false, error: "Method not allowed" }, 405);
}
