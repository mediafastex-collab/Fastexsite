/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: every route is prerendered at build time and written to
  // `out/`, which is what Cloudflare Pages serves. No Node server needed.
  output: "export",

  // Emit `/services/index.html` style paths so static hosts resolve nested
  // routes without extra rewrite rules.
  trailingSlash: true,

  images: {
    // The default image loader needs a server; we use plain <img> tags.
    unoptimized: true,
  },
};

export default nextConfig;
