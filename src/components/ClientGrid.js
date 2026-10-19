"use client";

import { useState } from "react";
import { clients, clientServices } from "@/data/clients";
import ClientMark from "@/components/ClientMark";

/**
 * Every client on /work, filterable by the kind of work we did for them.
 *
 * All cards are in the static HTML whatever the filter, so search engines and
 * answer engines see the full list; the filter only hides cards. Changing it
 * replays a short staggered fade on the cards that remain.
 */
const FILTERS = [
  ["all", "All work"],
  ...Object.entries(clientServices),
];

export default function ClientGrid() {
  const [filter, setFilter] = useState("all");
  const count = (key) =>
    key === "all"
      ? clients.length
      : clients.filter((c) => c.services.includes(key)).length;

  let shown = 0;

  return (
    <div className="cg">
      <div className="cg-filters reveal" role="group" aria-label="Filter clients by service">
        {FILTERS.map(([key, label]) => (
          <button
            key={key}
            type="button"
            className={`cg-filter${filter === key ? " is-on" : ""}`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
            <span className="cg-count">{count(key)}</span>
          </button>
        ))}
      </div>

      {/* Keyed on the filter so the entrance animation replays on change. */}
      <ul className="cg-grid" key={filter}>
        {clients.map((c) => {
          const visible = filter === "all" || c.services.includes(filter);
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
    </div>
  );
}
