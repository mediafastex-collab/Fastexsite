import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { tiers } from "@/data/tiers";
import { cta, site, socials } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href="/" className="logo footer-logo">
            Fastex Media.
          </Link>
          <p className="footer-blurb">
            A marketing consulting firm. We architect the revenue systems that
            put qualified meetings in your sales calendar.
          </p>
          <p className="footer-blurb" style={{ marginTop: "1rem" }}>
            {site.tagline}
          </p>

          <div className="social-row">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon name={social.label} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Services</h4>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.navLabel}
              </Link>
            ))}
          </div>

          <div className="link-group">
            <h4>Industries</h4>
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                {industry.name}
              </Link>
            ))}
          </div>

          <div className="link-group">
            <h4>Who We Work With</h4>
            {tiers.map((tier) => (
              <Link key={tier.slug} href={`/${tier.slug}`}>
                {tier.name}
              </Link>
            ))}
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">The Architecture Brief</Link>
          </div>

          <div className="link-group">
            <h4>Company</h4>
            <Link href="/about">The Architects</Link>
            <Link href="/industries">Industries</Link>
            <Link href={cta.href}>{cta.label}</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright &copy; {currentYear} Fastex Media. All rights reserved.{" "}
          {site.tagline}
        </p>
      </div>
    </footer>
  );
}
