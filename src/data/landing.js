/**
 * Content and settings for the IT and AI services landing page
 * (/it-ai-lead-generation/).
 *
 * PLACEHOLDERS — replace before sending paid traffic:
 *   calendarUrl       null keeps every "Book your call" button pointed at the
 *                     on-page enquiry form. Set it to a booking link (for
 *                     example the cal.id link used on /contact/) to send those
 *                     buttons to the calendar instead.
 *   privacyPolicyUrl  no privacy policy page exists on the site yet.
 *   proof             approved case studies or testimonials only. Leave empty
 *                     and the section shows a neutral placeholder.
 */
export const landing = {
  path: "/it-ai-lead-generation/",
  calendarUrl: null,
  privacyPolicyUrl: "/privacy-policy/",
  enquiryEndpoint: "/api/enquiry",
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
