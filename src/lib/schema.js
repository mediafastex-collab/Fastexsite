/**
 * Shared structured-data helpers.
 *
 * The service and industry detail pages already emit BreadcrumbList, Service
 * and FAQPage. The hub pages (/services, /industries, /work, /pricing,
 * /contact) emitted none, so crawlers saw them as untyped documents and
 * answer engines had nothing to lift. These helpers give the hubs the same
 * treatment without repeating the JSON in five files.
 *
 * Note the trailing slashes: `trailingSlash: true` means every canonical ends
 * in "/", and schema @id values must match the canonical exactly or the two
 * describe different URLs.
 */

export const SITE = "https://www.fastexmedia.com";

/** Absolute, trailing-slashed URL for a path. */
export const abs = (path) => {
  if (path === "/") return `${SITE}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE}${clean.endsWith("/") ? clean : `${clean}/`}`;
};

/**
 * BreadcrumbList from an ordered trail.
 * `trail` is [{ name, path }], shallowest first, including Home.
 */
export function breadcrumb(trail) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/** FAQPage from [{ q, a }]. Answers are plain text, as the spec expects. */
export function faqPage(items) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** A typed page node, so the hub is not just an anonymous document. */
export function webPage({ path, name, description, type = "WebPage" }) {
  return {
    "@type": type,
    "@id": abs(path),
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": `${SITE}/#website` },
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en",
  };
}

/** Wraps nodes into one @graph block, which is the shape layout.js uses. */
export function graph(...nodes) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}
