"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

/**
 * Every service shown in the menu, in one flat list.
 *
 * A category selector hides most of the list behind a hover the visitor has to
 * discover, so the whole menu is laid out at once instead. Order groups the
 * pipeline services first, then authority, then performance.
 *
 * Declared here rather than derived from `@/data/services` because the brief
 * lists four capabilities that do not have pages yet, and these descriptions
 * are menu copy rather than the page summaries.
 */
const SERVICES = [
  {
    name: "GTM for Startups",
    href: "/services/gtm-strategy",
    description: "ICP, positioning and your first channel.",
  },
  {
    name: "LinkedIn Outreach",
    href: "/services/linkedin-outreach",
    description: "30+ qualified conversations a month.",
  },
  {
    name: "WhatsApp Marketing",
    href: "/services/whatsapp-marketing",
    description: "Broadcast sequences that convert.",
  },
  {
    name: "Email Marketing",
    href: "/services/email-marketing",
    description: "Nurture flows built to close.",
  },
  {
    name: "Lead Generation",
    href: "/services/lead-generation",
    description: "Multi-channel outbound engine.",
  },
  {
    name: "Personal Branding",
    href: "/services/personal-branding",
    description: "Make the founder the brand's best asset.",
  },
  {
    name: "Social Media",
    href: "/services/social-media",
    description: "Content that builds buyers.",
  },
  {
    name: "UGC Videos",
    href: "/services/ugc-videos",
    description: "Social proof that removes hesitation.",
  },
  {
    name: "LinkedIn Branding",
    href: "/services/linkedin-branding",
    description: "Own your LinkedIn presence completely.",
  },
  {
    name: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Campaigns built for pipeline.",
  },
  {
    name: "Video Ads",
    href: "/services/video-ads",
    description: "Creatives that stop the scroll.",
  },
  {
    name: "Conversion Optimisation",
    href: "/services/conversion-optimisation",
    description: "Fix leaks between traffic and revenue.",
  },
];


const LINKS = [
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

function ChevronDown({ open }) {
  return (
    <svg
      className={`${styles.chevronDown} ${open ? styles.chevronUp : ""}`}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.root} onMouseLeave={closeMenu}>
      <div className={`${styles.bar} ${isOpen ? styles.barOpen : ""}`}>
        <Link href="/" className={styles.logo} aria-label="Fastex Media home">
          <img
            src="/assets/logo.png"
            alt=""
            className={styles.logoMark}
            width={28}
            height={28}
          />
          <span>Fastex Media</span>
        </Link>

        <nav className={styles.navGroup} aria-label="Primary">
          {/* A link, not a button: hovering opens the panel, clicking still
              navigates to the services page. */}
          <Link
            href="/services"
            className={`${styles.navItem} ${styles.servicesButton} ${
              isOpen ? styles.servicesButtonOpen : ""
            }`}
            onMouseEnter={openMenu}
            onFocus={openMenu}
            aria-expanded={isOpen}
          >
            Services
            <ChevronDown open={isOpen} />
          </Link>

          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navItem}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className={styles.barEnd}>
          <Link href="/strategy-session" className={styles.cta}>
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownInner}>
            {SERVICES.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.service}
                /* Each item enters just behind the one before it, so the
                   panel resolves as a sweep rather than all at once. */
                style={{ "--i": i }}
              >
                <span className={styles.serviceName}>{service.name}</span>
                <span className={styles.serviceDescription}>
                  {service.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayTop}>
            <Link
              href="/"
              className={styles.logo}
              onClick={() => setMobileOpen(false)}
              aria-label="Fastex Media home"
            >
              <img
                src="/assets/logo.png"
                alt=""
                className={styles.logoMark}
                width={28}
                height={28}
              />
              <span>Fastex Media</span>
            </Link>
            <button
              type="button"
              className={styles.close}
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <button
            type="button"
            className={styles.accordionButton}
            onClick={() => setMobileServicesOpen((open) => !open)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown open={mobileServicesOpen} />
          </button>

          {/* One flat list on mobile too, so the same services are reachable
              in the same number of taps. */}
          {mobileServicesOpen &&
            SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={styles.mobileService}
                onClick={() => setMobileOpen(false)}
              >
                {service.name}
              </Link>
            ))}

          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className={styles.mobileDivider} />

          <Link
            href="/strategy-session"
            className={styles.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
}
