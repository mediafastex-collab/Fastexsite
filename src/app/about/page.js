import Link from "next/link";
import { site, founder } from "@/data/site";
import { industries, engagement } from "@/data/industries";
import { services } from "@/data/services";
import { portfolioStats } from "@/data/caseStudies";

const SITE = "https://fastexmedia.com";

export const metadata = {
  title: "About Fastex Media | B2B Lead Generation Agency in Surat",
  description:
    "Fastex Media is a B2B lead generation agency founded in June 2025 in Surat, India. We build outbound systems that book qualified meetings for B2B companies across five sectors.",
  keywords: [
    "b2b lead generation agency",
    "b2b marketing agency india",
    "b2b marketing agency surat",
    "about fastex media",
    "aagam shah fastex media",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Fastex Media | B2B Lead Generation Agency",
    description:
      "Founded June 2025. A B2B-only lead generation agency building outbound systems that book qualified meetings.",
    url: "/about",
    type: "website",
  },
};

const beliefs = [
  {
    num: "01",
    title: "B2B only",
    copy: "We do not run D2C campaigns, and we do not pretend the same playbook works for both. Every system we build assumes a buying committee, a long cycle and a decision that has to be justified internally.",
  },
  {
    num: "02",
    title: "Meetings, not metrics",
    copy: "Impressions, clicks and lead counts are easy to inflate. We report on qualified meetings booked and pipeline created, because those are the numbers that decide whether the engagement was worth it.",
  },
  {
    num: "03",
    title: "Honest about fit",
    copy: "If outbound is the wrong move for you right now, we will say so on the first call. Taking an engagement we cannot win costs you a quarter and costs us a reference.",
  },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: `${SITE}/about`,
          },
        ],
      },
      {
        "@type": "Organization",
        name: site.name,
        url: SITE,
        foundingDate: "2025-06",
        email: site.email,
        telephone: "+91-9328680929",
        description:
          "B2B lead generation agency building outbound systems that book qualified meetings.",
        founder: {
          "@type": "Person",
          name: founder.name,
          jobTitle: founder.role,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ---------- HERO ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About Us</span>
          </div>
          <div className="section-label">About us</div>
          <h1>A B2B lead generation agency, built for one job.</h1>
          <p className="page-lede">
            Fastex Media started in June 2025 with a narrow remit: build the
            outbound systems that put qualified B2B meetings in a sales
            calendar, every week, on purpose. No retainers for activity. No
            dashboards full of numbers nobody acts on.
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: "1rem" }}>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <Link href="/work" className="btn btn-outline">
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="proof-band">
            {portfolioStats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section className="section-padding">
        <div className="container">
          <div className="split reveal">
            <div className="split-aside">
              <div className="section-label">Our story</div>
            </div>
            <div className="split-body">
              <h2>Founded in June 2025, in Surat.</h2>
              <p>
                Fastex Media was founded in June 2025 by {founder.name} after
                watching the same pattern repeat across B2B companies: a good
                product, a capable sales team, and no reliable way to get in
                front of the people who actually sign. Growth depended on
                referrals, trade shows and whoever the founder happened to know.
              </p>
              <p>
                We built the agency around the part nobody wanted to own — the
                unglamorous infrastructure. Verified data, sending domains,
                deliverability, multi-channel sequencing and follow-up
                discipline. Done properly, that machinery produces qualified
                meetings predictably. Done badly, it burns your domain and your
                reputation, which is why most companies quietly give up on it.
              </p>
              <p>
                Today we run performance marketing, LinkedIn, social media,
                WhatsApp and cold email as a single system for B2B companies in
                five sectors — IT and software, solar and renewable energy,
                manufacturing, educational institutes and commercial real
                estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOUNDER ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="founder-block reveal">
            <div className="founder-photo">
              <img
                src={founder.photo}
                alt={`${founder.name}, ${founder.role} of Fastex Media`}
                width={520}
                height={650}
              />
            </div>

            <div className="founder-body">
              <div className="section-label">Leadership</div>
              <h2>{founder.name}</h2>
              <div className="founder-role">{founder.role}</div>
              <p>
                Aagam leads strategy and client delivery at Fastex Media. He
                works directly on every engagement — the ICP research, the
                messaging and the first sequences all get his hands on them
                before anything goes out under your name.
              </p>
              <p>
                If you book a strategy call, it is Aagam you will be speaking
                to. He will tell you plainly whether outbound is the right move
                for your business right now, and what it will realistically
                take.
              </p>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="founder-social"
                aria-label={`${founder.name} on LinkedIn`}
              >
                <i className="ph ph-linkedin-logo" aria-hidden="true"></i>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BELIEFS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">How we operate</div>
            <h2>Three things we hold to.</h2>
          </div>

          <div className="process-list">
            {beliefs.map((belief, i) => (
              <div
                key={belief.num}
                className="process-row reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="process-num">{belief.num}</div>
                <h3>{belief.title}</h3>
                <p>{belief.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE DO ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What we do</div>
            <h2>Five channels, five sectors.</h2>
          </div>

          <div className="section-label">Services</div>
          <div className="pill-row">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="pill"
              >
                {service.navLabel}
              </Link>
            ))}
          </div>

          <div className="section-label" style={{ marginTop: "3.5rem" }}>
            Industries
          </div>
          <div className="pill-row">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="pill"
              >
                <span aria-hidden="true">{industry.icon}</span> {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section
        className="section-padding"
        style={{ borderTop: "1px solid var(--border-color)" }}
      >
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">How we work</div>
            <h2>Three moves. One machine.</h2>
          </div>
          <div className="process-list">
            {engagement.map((step, i) => (
              <div
                key={step.num}
                className="process-row reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="process-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        className="section-padding cta"
        style={{
          borderTop: "1px solid var(--border-color)",
          paddingBottom: "10rem",
        }}
      >
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Let&apos;s talk pipeline.</h2>
            <p className="cta-sub">
              Tell us where you want the pipeline to be in ninety days. We&apos;ll
              build the system that gets you there.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <div className="cta-contacts">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
