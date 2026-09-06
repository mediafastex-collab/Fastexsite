"use client";

import { useState } from "react";
import Link from "next/link";
import { pillars, posts } from "@/data/posts";

/**
 * Client component so the pillar tabs filter without a round trip. The post
 * list is small enough that filtering in the browser is the right trade.
 */
export default function BlogIndex() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? posts : posts.filter((post) => post.pillar === active);

  return (
    <>
      <div className="filter-row reveal">
        {["All", ...pillars].map((pillar) => (
          <button
            key={pillar}
            type="button"
            className={`filter-btn ${active === pillar ? "is-active" : ""}`}
            onClick={() => setActive(pillar)}
            aria-pressed={active === pillar}
          >
            {pillar}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="body-dim" style={{ marginTop: "2rem" }}>
          Nothing published under {active} yet. It is on the list.
        </p>
      ) : (
        <div className="industry-grid" style={{ marginTop: "2.5rem" }}>
          {visible.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="industry-card reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="card-index">{post.pillar}</div>
              <h3>{post.title}</h3>
              <p className="card-copy">{post.description}</p>
              <span className="card-link">
                {post.read} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
