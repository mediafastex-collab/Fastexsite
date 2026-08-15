import Link from "next/link";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site, socials } from "@/data/site";

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
            A B2B lead generation agency. We build the outbound systems that put
            qualified meetings in your sales calendar.
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
                <i className={`ph ${social.icon}`} aria-hidden="true"></i>
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
            <h4>Company</h4>
            <Link href="/work">Case Studies</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Book a Call</Link>
          </div>

          <div className="link-group">
            <h4>Contact</h4>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.phoneHref}>{site.phone}</a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "1rem" }}
            >
              Surat, Gujarat, India
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright &copy; {currentYear} Fastex Media. All rights reserved.
          Engineered for B2B scale.
        </p>
      </div>
    </footer>
  );
}
