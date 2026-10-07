import { site } from "@/data/site";

/**
 * Every "Book a Call" button on the site.
 *
 * The calendar lives on cal.id, so these are real external links rather than
 * Next routes: a <Link> would try to client-side navigate and the booking
 * page would never load. One component keeps the URL, the target and the rel
 * identical everywhere instead of repeating them across twenty-odd call
 * sites — and means the link changes in one place.
 */
export default function BookCall({
  children = "Book a Call",
  variant = "primary",
  className = "",
}) {
  const base = variant === "outline" ? "btn btn-outline" : "btn btn-primary";
  return (
    <a
      href={site.booking}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
