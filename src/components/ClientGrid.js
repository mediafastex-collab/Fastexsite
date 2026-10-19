"use client";

import { useState } from "react";
import { clients, clientServices, clientIndustries } from "@/data/clients";
import ClientMark from "@/components/ClientMark";

/**
 * Every client on /work, filterable by industry and by the kind of work we
 * did. The two filters combine: "Renewable Energy" + "Lead Generation" shows
 * only clients that are both.
 *
 * All cards are in the static HTML whatever the filter, so search engines and
 * answer engines see the full list; the filters only hide cards. Changing one
 * replays a short staggered fade on the cards that remain.
 */
const SERVICE_FILTERS = Object.entries(clientServices);

function Chips({ label, options, value, onChange }) {
  return (
    <div className="cg-filter-row">
      <span className="cg-filter-label">{label}</span>
      <div className="cg-chips" role="group" aria-label={`Filter clients by ${label.toLowerCase()}`}>
        {[["all", "All"], ...options].map(([key, text]) => (
          <button
            key={key}
            type="button"
            className={`cg-filter${value === key ? " is-on" : ""}`}
            aria-pressed={value === key}
            onClick={() => onChange(key)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ClientGrid() {
  const [industry, setIndustry] = useState("all");
  const [service, setService] = useState("all");

  const matches = (c) =>
    (industry === "all" || c.industry === industry) &&
    (service === "all" || c.services.includes(service));

  const anyShown = clients.some(matches);
  let shown = 0;

  return (
    <div className="cg">
      <div className="cg-filters reveal">
        <Chips
          label="Industry"
          options={clientIndustries.map((i) => [i, i])}
          value={industry}
          onChange={setIndustry}
        />
        <Chips
          label="Service"
          options={SERVICE_FILTERS}
          value={service}
          onChange={setService}
        />
      </div>

      {/* Keyed on the filters so the entrance animation replays on change. */}
      <ul className="cg-grid" key={`${industry}|${service}`}>
        {clients.map((c) => {
          const visible = matches(c);
          const order = visible ? shown++ : 0;
          return (
            <li
              key={c.name}
              className="cg-card"
              hidden={!visible}
              style={{ "--i": Math.min(order, 12) }}
            >
              <div className="cg-mark">
                <ClientMark client={c} />
              </div>
              <h3 className="cg-name">
                {c.name}
                {c.detail ? <span className="cg-detail"> · {c.detail}</span> : null}
              </h3>
              <p className="cg-meta">
                {c.industry}
                <span aria-hidden="true"> · </span>
                {c.services.map((k) => clientServices[k]).join(" + ")}
              </p>
              <p className="cg-copy">{c.summary}</p>
              {c.tags ? (
                <div className="project-tags">
                  {c.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {anyShown ? null : (
        <p className="cg-empty">
          No clients match both filters.{" "}
          <button
            type="button"
            onClick={() => {
              setIndustry("all");
              setService("all");
            }}
          >
            Show everyone
          </button>
        </p>
      )}
    </div>
  );
}
