/**
 * Content and settings for the IT and AI services landing page
 * (/it-ai-lead-generation/).
 *
 * Settings (privacyPolicyUrl and proof are still placeholders):
 *   calendarUrl       every "BOOK YOUR CALL NOW" button opens this booking
 *                     link. Set it to null to point them at the on-page
 *                     enquiry form instead.
 *   privacyPolicyUrl  no privacy policy page exists on the site yet.
 *   proof             approved case studies or testimonials only. Leave empty
 *                     and the section shows a neutral placeholder.
 */
export const landing = {
  path: "/it-ai-lead-generation/",
  calendarUrl: "https://cal.id/fastexmedia/lead-generation-strategy-call-fastex-media",
  privacyPolicyUrl: "/privacy-policy/",
  enquiryEndpoint: "/api/enquiry",
  // Meta pixel IDs are public. The Conversions API token is not, and lives
  // only in Cloudflare as META_CAPI_TOKEN (see server/metaCapi.js).
  metaPixelId: "2238203073389220",
  proof: [],
};

/** Shown as plain text in the ticker. Do not add names without approval. */
export const clientNames = [
  "RecurPost",
  "Jashom Technologies",
  "Reformiqo",
  "Wowlez Media",
  "Vijayho IT",
];

/** Also validated server-side in functions/api/enquiry.js. Keep in sync. */
export const serviceTypes = [
  "AI implementation",
  "Software development",
  "Cloud services",
  "Cybersecurity",
  "Data and technology consulting",
  "Other IT services",
];
