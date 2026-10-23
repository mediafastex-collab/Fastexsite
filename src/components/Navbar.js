"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import BookCall from "@/components/BookCall";

const navItems = [
  {
    num: "01",
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.navLabel,
      href: `/services/${service.slug}`,
      meta: service.num,
    })),
  },
  { num: "02", label: "Case Studies", href: "/work" },
  { num: "03", label: "Founder Brands", href: "/founders" },
  { num: "04", label: "AI Videos", href: "/ai-videos", badge: "New" },
  {
    num: "05",
    label: "Industries",
    href: "/industries",
    children: industries.map((industry, i) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
      meta: String(i + 1).padStart(2, "0"),
    })),
  },
  { num: "06", label: "Pricing", href: "/pricing" },
  { num: "07", label: "Blog", href: "/blog" },
  { num: "08", label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  /*
   * One soft highlight sits behind the links: it rests on the current page
   * and glides to whichever link the pointer is over, so the row reads as a
   * single calm control rather than seven separate words.
   */
  const linksRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, w: 0, show: false });

  const moveIndicator = useCallback((row) => {
    const list = linksRef.current;
    if (!list || !row) {
      setIndicator((i) => ({ ...i, show: false }));
      return;
    }
    const l = list.getBoundingClientRect();
    const r = row.getBoundingClientRect();
    setIndicator({ x: r.left - l.left, w: r.width, show: true });
  }, []);

  const restIndicator = useCallback(() => {
    moveIndicator(
      linksRef.current?.querySelector(".nav-item.is-current > .nav-row") ?? null
    );
  }, [moveIndicator]);

  useEffect(() => {
    restIndicator();
    // Re-measure once the web fonts have settled and whenever the bar resizes.
    document.fonts?.ready.then(restIndicator);
    const ro = new ResizeObserver(restIndicator);
    if (linksRef.current) ro.observe(linksRef.current);
    return () => ro.disconnect();
  }, [pathname, restIndicator]);

  // Close the menus when the route changes. Adjusting state during render is
  // React's recommended pattern here — an effect would cause a second render
  // pass with the menu still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  }

  /*
   * Past the hero the bar condenses into a floating pill. It stays on
   * screen the whole way down, so the menu and the call button are always
   * one click away.
   */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close any open dropdown on Escape, wherever focus happens to be.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);

  return (
    <nav
      className={[
        "navbar",
        isScrolled && "scrolled",
        isMobileMenuOpen && "menu-open",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="container nav-content">
        <Link href="/" className="logo">
          {/* Transparent-plate mark: the original logo.png carries its own
              white square, which would show as a block on the light ground. */}
          <img src="/assets/logo-mark.png" alt="Fastex Media Logo" />
          <span className="logo-text">Fastex Media</span>
        </Link>

        <ul
          ref={linksRef}
          className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}
          onMouseLeave={restIndicator}
        >
          <li
            className="nav-indicator"
            aria-hidden="true"
            style={{
              width: indicator.w,
              transform: `translateX(${indicator.x}px)`,
              opacity: indicator.show ? 1 : 0,
            }}
          />
          {navItems.map((item, index) => {
            const hasChildren = Boolean(item.children);
            const isOpen = openMenu === item.label;
            const isCurrent =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li
                key={item.label}
                className={`nav-item ${hasChildren ? "has-dropdown" : ""} ${
                  isOpen ? "is-open" : ""
                } ${isCurrent ? "is-current" : ""}`}
                style={{ "--n": index }}
                onMouseEnter={(e) => {
                  moveIndicator(e.currentTarget.querySelector(".nav-row"));
                  if (hasChildren) setOpenMenu(item.label);
                }}
                onMouseLeave={() => hasChildren && setOpenMenu(null)}
              >
                <span className="nav-row">
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    <span className="nav-number">{item.num}</span>
                    {item.label}
                    {item.badge ? (
                      <span className="nav-badge">{item.badge}</span>
                    ) : null}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      className="nav-caret"
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} menu`}
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    >
                      <span aria-hidden="true">+</span>
                    </button>
                  )}
                </span>

                {hasChildren && (
                  <div className="dropdown">
                    <div className="dropdown-inner">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="dropdown-link"
                        >
                          <span className="dropdown-num">{child.meta}</span>
                          <span className="dropdown-label">{child.label}</span>
                          <span className="dropdown-arrow" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      ))}
                      <Link href={item.href} className="dropdown-all">
                        All {item.label} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <BookCall className="book-call-btn">
          Book a call <span aria-hidden="true">→</span>
        </BookCall>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Pure CSS lines, not an icon font: this control is the only way to
              reach navigation on a phone, so it must not depend on a
              third-party stylesheet. The three lines fold into a cross. */}
          <span className="burger" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  );
}
