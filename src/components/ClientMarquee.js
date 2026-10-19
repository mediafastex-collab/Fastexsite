"use client";

import { useEffect, useRef } from "react";
import { clients, brands, founders, roughly } from "@/data/clients";
import ClientMark from "@/components/ClientMark";

/**
 * Homepage proof: every client, logo and name, in two rows drifting in
 * opposite directions.
 *
 * Motion is driven here rather than by a CSS loop so it can feel physical:
 *  - a lens: each card grows to full size as it passes the centre of the
 *    screen and eases back down towards the edges, so the eye has a focus;
 *  - hovering a row eases it to a stop (and back), instead of freezing it,
 *    and a soft glow follows the pointer across the card;
 *  - scrolling the page gives both rows a brief push in their own direction,
 *    which settles back to cruising speed;
 *  - nothing runs while the band is off screen.
 *
 * Each row holds its cards twice, end to end, and wraps by exactly one copy's
 * width, so the loop has no seam. The second copy is hidden from assistive
 * tech. Without JavaScript the CSS loop in globals.css still runs; with
 * reduced motion the rows become a still, wrapped grid.
 */

// Alternate the two rows so neither one is all solar or all SaaS, and so the
// founders sit among the companies rather than bunched at one end.
const rowA = clients.filter((_, i) => i % 2 === 0);
const rowB = clients.filter((_, i) => i % 2 === 1);

const CRUISE = 34; // px per second
const MAX_BOOST = 260; // extra px per second at the peak of a scroll

function Card({ client, index }) {
  return (
    <li className="cm-card" style={{ "--k": Math.min(index, 9) }}>
      <ClientMark client={client} />
      <span className="cm-name">{client.name}</span>
      <span className="cm-meta">
        {client.kind === "founder" ? "Founder brand" : client.industry}
      </span>
    </li>
  );
}

function Row({ items, reverse }) {
  return (
    <div className={`cm-row${reverse ? " cm-row--reverse" : ""}`}>
      <ul className="cm-track">
        {items.map((c, i) => (
          <Card key={c.name} client={c} index={i} />
        ))}
      </ul>
      <ul className="cm-track" aria-hidden="true">
        {items.map((c, i) => (
          <Card key={c.name} client={c} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default function ClientMarquee() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("cm-js"); // hands the motion over from the CSS loop

    const rows = [...root.querySelectorAll(".cm-row")].map((el, i) => ({
      el,
      dir: i % 2 === 0 ? -1 : 1,
      x: 0,
      speed: CRUISE,
      target: CRUISE,
      width: 0,
    }));

    // Card centres within their row, measured once (and on resize) so the
    // lens never has to read layout during a frame.
    const measure = () => {
      rows.forEach((r) => {
        r.width = r.el.firstElementChild.getBoundingClientRect().width;
        r.cards = [...r.el.querySelectorAll(".cm-card")].map((card) => ({
          card,
          mid: card.offsetLeft + card.offsetWidth / 2,
          s: -1,
        }));
        // A row moving right starts one copy to the left, so it never shows
        // an empty edge.
        if (r.dir === 1 && r.x === 0) r.x = -r.width;
      });
    };
    measure();

    const enter = (r) => () => (r.target = 0);
    const leave = (r) => () => (r.target = CRUISE);
    const handlers = rows.map((r) => {
      const on = enter(r);
      const off = leave(r);
      r.el.addEventListener("pointerenter", on);
      r.el.addEventListener("pointerleave", off);
      return [on, off];
    });

    // Pointer glow: the card under the cursor gets the pointer position.
    const onMove = (e) => {
      const card = e.target.closest(".cm-card");
      if (!card) return;
      const b = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - b.left}px`);
      card.style.setProperty("--my", `${e.clientY - b.top}px`);
    };
    root.addEventListener("pointermove", onMove);

    let boost = 0;
    let lastY = window.scrollY;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastY);
      lastY = window.scrollY;
      boost = Math.min(boost + dy * 4, MAX_BOOST);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let last = 0;
    const tick = (t) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      boost *= Math.exp(-dt * 2.5);

      rows.forEach((r) => {
        // Ease towards the target speed; a hovered row glides to a stop.
        r.speed += (r.target - r.speed) * Math.min(dt * 5, 1);
        const v = r.speed + (r.target ? boost : 0);
        r.x += r.dir * v * dt;
        if (r.x <= -r.width) r.x += r.width;
        if (r.x > 0) r.x -= r.width;
        r.el.style.transform = `translate3d(${r.x.toFixed(2)}px,0,0)`;

        // Lens. Distance from the viewport centre, 0 at the middle and 1 at
        // the edges, eased so the middle third stays at full size.
        const half = window.innerWidth / 2;
        r.cards.forEach((c) => {
          const d = Math.min(Math.abs(c.mid + r.x - half) / half, 1.2);
          const s = 1 - 0.09 * Math.min(d * d, 1);
          if (Math.abs(s - c.s) > 0.001) {
            c.s = s;
            c.card.style.scale = s.toFixed(3);
          }
        });
      });

      raf = requestAnimationFrame(tick);
    };

    // Run only while the band is on screen.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(root);

    const ro = new ResizeObserver(measure);
    rows.forEach((r) => ro.observe(r.el.firstElementChild));

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.removeEventListener("pointermove", onMove);
      rows.forEach((r, i) => {
        r.el.removeEventListener("pointerenter", handlers[i][0]);
        r.el.removeEventListener("pointerleave", handlers[i][1]);
        r.el.style.transform = "";
      });
      root.classList.remove("cm-js");
    };
  }, []);

  return (
    <section ref={ref} className="client-marquee" aria-labelledby="cm-label">
      <div className="container cm-head reveal">
        <p id="cm-label" className="cm-label">
          Trusted by {roughly(brands.length)} brands and{" "}
          {roughly(founders.length)} founders
        </p>
        <p className="cm-practices">
          <span>B2B Lead Generation</span>
          <span aria-hidden="true">·</span>
          <span>Founder Personal Branding</span>
          <span aria-hidden="true">·</span>
          <span>Social &amp; Go-to-Market</span>
        </p>
      </div>
      <div className="cm-rows reveal">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>
    </section>
  );
}
