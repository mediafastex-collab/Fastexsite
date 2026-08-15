/**
 * Generates /llms.txt and /llms-full.txt into public/ before each build.
 *
 * llms.txt is a concise, link-first map of the site for AI crawlers and
 * answer engines (llmstxt.org). llms-full.txt carries the actual prose so a
 * model can answer questions about the business without fetching every page.
 *
 * Generated from the same data the pages render, so the two cannot drift.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { services } from "../src/data/services.js";
import { industries, engagement } from "../src/data/industries.js";
import { site, founder } from "../src/data/site.js";
import { portfolioStats, featuredCases, projects } from "../src/data/caseStudies.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const SITE = site.url;

const summary =
  "Fastex Media is a B2B-only lead generation agency. We build multi-channel outbound systems — performance marketing, LinkedIn, social media, WhatsApp and cold email — that book qualified sales meetings for business-to-business companies worldwide.";

/* ------------------------------------------------------------------ */
/* llms.txt — concise index                                            */
/* ------------------------------------------------------------------ */

const llms = `# Fastex Media

> ${summary}

Founded ${site.founded} by ${founder.name} (${founder.role}). B2B only — we do
not run direct-to-consumer campaigns. We work with clients worldwide and report
on qualified meetings booked rather than impressions or lead counts.

Contact: ${site.email} · ${site.phone}

## Services

${services
  .map(
    (s) =>
      `- [${s.title}](${SITE}/services/${s.slug}/): ${s.summary}`
  )
  .join("\n")}

## Industries

${industries
  .map(
    (i) =>
      `- [${i.name}](${SITE}/industries/${i.slug}/): ${i.metaDescription}`
  )
  .join("\n")}

## Company

- [Home](${SITE}/): B2B lead generation systems that book qualified meetings.
- [About Us](${SITE}/about/): Founded ${site.founded}. Team, approach and operating principles.
- [Case Studies](${SITE}/work/): Client results across solar, SaaS, real estate, education and manufacturing.
- [Pricing](${SITE}/pricing/): Engagement models and what they include.
- [Contact](${SITE}/contact/): Book a free strategy call.

## Optional

- [Full site content](${SITE}/llms-full.txt): Every page's prose in one file.
- [Sitemap](${SITE}/sitemap.xml)
`;

/* ------------------------------------------------------------------ */
/* llms-full.txt — full prose                                          */
/* ------------------------------------------------------------------ */

const faqBlock = (faqs) =>
  faqs.map((f) => `**Q: ${f.q}**\n\nA: ${f.a}`).join("\n\n");

const full = `# Fastex Media — Full Site Content

> ${summary}

Website: ${SITE}
Founded: ${site.founded}
Founder: ${founder.name}, ${founder.role} (${founder.linkedin})
Contact: ${site.email} · ${site.phone}
Registered address: ${site.address}
Area served: Worldwide

## Results to date

${portfolioStats.map((s) => `- ${s.value} — ${s.label}`).join("\n")}

## How we work

${engagement.map((e) => `### ${e.num}. ${e.title}\n\n${e.copy}`).join("\n\n")}

---

# Services

${services
  .map(
    (s) => `## ${s.title}

URL: ${SITE}/services/${s.slug}/

${s.summary}

${s.detail}

### The problem

${s.problem.heading}

${s.problem.body}

${s.problem.points.map((p) => `- ${p}`).join("\n")}

### What's included

${s.deliverables.map((d) => `- ${d}`).join("\n")}

### Frequently asked questions

${faqBlock(s.faqs)}`
  )
  .join("\n\n---\n\n")}

---

# Industries

${industries
  .map(
    (i) => `## ${i.name}

URL: ${SITE}/industries/${i.slug}/

${i.tagline}. ${i.heroSub}

### The problem

${i.problem.heading}

${i.problem.body}

${i.problem.points.map((p) => `- ${p}`).join("\n")}

### What we run for this sector

${i.services.map((s) => `**${s.title}** — ${s.copy}`).join("\n\n")}

### What you get

${i.deliverables.map((d) => `- ${d}`).join("\n")}

### Frequently asked questions

${faqBlock(i.faqs)}`
  )
  .join("\n\n---\n\n")}

---

# Case Studies

${featuredCases
  .map(
    (c) => `## ${c.client} — ${c.sector}

${c.service}

**Challenge:** ${c.challenge}

**Solution:** ${c.solution}

**Outcome:** ${c.outcome}

Metrics: ${c.metrics.map((m) => `${m.value} ${m.label}`).join(", ")}`
  )
  .join("\n\n")}

## Other active projects

${projects
  .map((p) => `- **${p.client}** (${p.sector}) — ${p.copy} [${p.tags.join(", ")}]`)
  .join("\n")}
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "llms.txt"), llms, "utf8");
writeFileSync(join(publicDir, "llms-full.txt"), full, "utf8");

console.log(
  `generated llms.txt (${llms.length} chars) and llms-full.txt (${full.length} chars)`
);
