/**
 * The four social marks, inlined.
 *
 * These previously came from the Phosphor icon library, loaded from a CDN on
 * every page of the site to draw four glyphs. Inlining them removes a
 * third-party request from the render path of all 29 pages and means the
 * icons cannot fail to arrive.
 *
 * Paths are drawn on a 24 unit grid and inherit `currentColor`.
 */
const PATHS = {
  linkedin:
    "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.55v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z",
  instagram: null,
  x: "M18.9 2H22l-7.1 8.1L23 22h-6.6l-5.2-6.8L5.3 22H2.2l7.6-8.7L1.6 2h6.8l4.7 6.2L18.9 2zm-1.1 18h1.7L7.3 3.7H5.5L17.8 20z",
  whatsapp:
    "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3a3 3 0 0 0-1 2.3 5.4 5.4 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c2.2.9 2.2.6 2.6.5a2.7 2.7 0 0 0 1.8-1.3c.2-.5.2-.9.2-1l-.4-.3z",
};

export default function SocialIcon({ name, size = 16 }) {
  const key = name.toLowerCase().replace(/[^a-z]/g, "").slice(0, 9);
  const id =
    key.startsWith("linkedin") ? "linkedin"
    : key.startsWith("instagram") ? "instagram"
    : key.startsWith("whatsapp") ? "whatsapp"
    : "x";

  // Instagram is a rounded square plus two circles rather than a single path.
  if (id === "instagram") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[id]} />
    </svg>
  );
}
