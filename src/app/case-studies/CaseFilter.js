"use client";

import { useState } from "react";
import Link from "next/link";
import { featuredCases, projects } from "@/data/caseStudies";
import { tiers } from "@/data/tiers";

const TABS = [
  { key: "all", label: "All" },
  ...tiers.map((tier) => ({ key: tier.key, label: tier.name })),
];

export default function CaseFilter() {
  const [active, setActive] = useState("all");

  const match = (item) => active === "all" || item.tier === active;
  const cases = featuredCases.filter(match);
  const others = projects.filter(match);

  return (
    <>
      <div className="filter-row reveal">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`filter-btn ${active === tab.key ? "is-active" : ""}`}
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Metric first, story second. */}
      <div className="case-list" style={{ marginTop: "3rem" }}>
        {cases.map((study) => (
          <article className="case-item reveal" key={study.client}>
            <div className="case-head">
              <span className="case-sector">{study.sector}</span>
              <h2>{study.headline}</h2>
              <span className="case-service">
                {study.client} · {study.service}
              </span>
            </div>
            <div className="case-body">
              <div className="case-block">
                <span className="case-label">Challenge</span>
                <p>{study.challenge}</p>
              </div>
              <div className="case-block">
                <span className="case-label">What we built</span>
                <p>{study.solution}</p>
              </div>
              <div className="case-block">
                <span className="case-label">Outcome</span>
                <p>{study.outcome}</p>
              </div>
            </div>
            <div className="case-metrics">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <b>{metric.value}</b>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {cases.length === 0 && (
        <p className="body-dim" style={{ marginTop: "2rem" }}>
          No long-form study published for this stage yet. The engagements below
          are live.
        </p>
      )}

      {others.length > 0 && (
        <>
          <div className="section-label" style={{ marginTop: "4.5rem" }}>
            Other active engagements
          </div>
          <div className="project-grid" style={{ marginTop: "1.5rem" }}>
            {others.map((project) => (
              <div className="project-card reveal" key={project.client}>
                <div className="project-top">
                  <span className="project-initials" aria-hidden="true">
                    {project.initials}
                  </span>
                  <span className="project-sector">{project.sector}</span>
                </div>
                <h3>{project.client}</h3>
                <p>{project.copy}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
