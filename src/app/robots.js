// Required by `output: "export"` — emits a static robots.txt at build time.
export const dynamic = "force-static";

const SITE = "https://fastexmedia.com";

/**
 * AI and answer-engine crawlers, listed explicitly.
 *
 * Most of these obey the generic `*` rule already, but naming them removes any
 * ambiguity — several operators treat an explicit allow as the signal to index
 * and cite a site, and a few (Google-Extended, Applebot-Extended) ONLY read
 * their own named block and are otherwise treated as opted out.
 */
const aiCrawlers = [
  "GPTBot", // OpenAI — model training
  "OAI-SearchBot", // OpenAI — ChatGPT Search index
  "ChatGPT-User", // OpenAI — live browsing on a user's behalf
  "ClaudeBot", // Anthropic — crawling
  "Claude-User", // Anthropic — live browsing on a user's behalf
  "Claude-SearchBot", // Anthropic — search indexing
  "anthropic-ai", // Anthropic — legacy agent string
  "Google-Extended", // Google — Gemini / AI Overviews grounding
  "PerplexityBot", // Perplexity — index
  "Perplexity-User", // Perplexity — live fetch
  "Applebot-Extended", // Apple — Apple Intelligence
  "meta-externalagent", // Meta AI
  "Bytespider", // ByteDance / Doubao
  "CCBot", // Common Crawl — feeds many models
  "cohere-ai",
  "Diffbot",
  "Amazonbot",
  "YouBot",
  "DuckAssistBot",
  "MistralAI-User",
];

export default function robots() {
  return {
    rules: [
      // Everything else, including Googlebot and Bingbot.
      {
        userAgent: "*",
        allow: "/",
      },
      // Named AI crawlers — full access, nothing gated.
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
