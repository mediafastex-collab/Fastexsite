import Link from "next/link";
import { featuredCases, projects, portfolioStats } from "@/data/caseStudies";

/**
 * Scale line plus client names, sized to sit inside the first screen.
 *
 * Shared by the homepage and the tier pages so proof appears before a visitor
 * scrolls, rather than only on pages that happened to get it.
 *
 * `tier` narrows the clients to that audience where a match exists, so a
 * founder sees startups and an enterprise buyer sees larger engagements.
 * Anything with a published study links to it.
 */
export default function HeroProof({ tier, limit = 7 }) {
  const matches = (item) => !tier || item.tier === tier;

  const studies = featuredCases.filter(matches);
  const rest = projects.filter(matches);

  // Fall back to the full roster if a tier has too little of its own.
  const pool = studies.length + rest.length >= 4
    ? [...studies, ...rest]
    : [...featuredCases, ...projects];

  const clients = pool.slice(0, limit).map((item) => ({
    name: item.client.replace(/ Ltd$/, ""),
    sector: item.sector,
    study: Boolean(item.headline),
  }));

  return (
    <div className="hero-v2__proof" data-reveal="up">
      <p className="hero-v2__scale">
        Running growth systems for {portfolioStats[0].value} active B2B brands
        across SaaS, energy, ERP and manufacturing.
      </p>

      <ul className="hero-v2__clients">
        {clients.map((client) => (
          <li key={client.name} className="hero-v2__client">
            <span className="hero-v2__clientName">{client.name}</span>
            {client.study ? (
              <Link href="/case-studies" className="hero-v2__caseLink">
                Case study
              </Link>
            ) : (
              <span className="hero-v2__sector">{client.sector}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
