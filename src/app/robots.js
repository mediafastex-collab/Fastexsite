// Required by `output: "export"` — emits a static robots.txt at build time.
export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fastexmedia.com/sitemap.xml",
  };
}
