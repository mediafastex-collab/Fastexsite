import { clients, roughly } from "./clients.js";

/**
 * Case studies, taken from the live fastexmedia.com/work page.
 * Client names, sectors and outcome labels are as published there.
 *
 * Only clients in src/data/clients.js may appear here. The client grid
 * itself lives in that file, not here.
 */

export const portfolioStats = [
  { value: roughly(clients.length), label: "Brands Served" },
  { value: "3X", label: "Average Lead Growth" },
  { value: "60%", label: "Avg. CPL Reduction" },
  { value: "4.9★", label: "Client Satisfaction" },
];

/** The long-form studies. */
export const featuredCases = [
  {
    num: "Case 01",
    sector: "Renewable Energy",
    client: "Heaven Green Energy Ltd",
    logo: clients.find((c) => c.name === "Heaven Green Energy"),
    service: "LinkedIn Personal Branding · Founder Authority",
    challenge:
      "The founder needed stronger positioning and visibility on LinkedIn to attract the right industry connections.",
    solution:
      "Created a consistent content strategy, refined personal positioning, and built a value-led posting framework.",
    outcome:
      "Increased reach, improved engagement, and attracted high-quality industry connections, strengthening both founder & brand authority.",
    metrics: [
      { value: "↑ 5x", label: "Revenue B2B" },
      { value: "Daily", label: "Campaigns" },
      { value: "High", label: "Authority" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Fastex Media built a lead system that fills our sales calendar every week. Best investment we've made in marketing.",
    initials: "RK",
    name: "Rahul Kapoor",
    role: "CEO, SolarTech India",
  },
  {
    quote:
      "Within 45 days we had more leads than the entire previous quarter. The WhatsApp automation is a game-changer.",
    initials: "PM",
    name: "Priya Mehta",
    role: "Founder, EduPro Institute",
  },
  {
    quote:
      "Their LinkedIn strategy made us look like the authority in our niche. Inbound leads started coming to us instead.",
    initials: "AS",
    name: "Amit Shah",
    role: "MD, AutomateIT Solutions",
  },
];
