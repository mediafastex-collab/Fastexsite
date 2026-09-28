import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { posts } from "@/data/posts";

// Required by `output: "export"` — emits a static sitemap.xml at build time.
export const dynamic = "force-static";

const SITE = "https://www.fastexmedia.com";

/**
 * `trailingSlash: true` means every page is served at a path ending in "/".
 * Sitemap URLs must match the canonical exactly, or crawlers see two URLs
 * for one page.
 */
const url = (path) => `${SITE}${path}${path.endsWith("/") ? "" : "/"}`;

export default function sitemap() {
  const lastModified = new Date();

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/it-ai-lead-generation", priority: 0.8, changeFrequency: "monthly" },
  ];

  return [
    ...pages.map((page) => ({
      url: url(page.path),
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...services.map((service) => ({
      url: url(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...industries.map((industry) => ({
      url: url(`/industries/${industry.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    // Articles carry their own publish date rather than the build date, so
    // crawlers are not told every post changed on every deploy.
    ...posts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: "yearly",
      priority: 0.7,
    })),
  ];
}
