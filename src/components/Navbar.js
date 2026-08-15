"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

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
  {
    num: "03",
    label: "Industries",
    href: "/industries",
    children: industries.map((industry, i) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
      meta: String(i + 1).padStart(2, "0"),
    })),
  },
  { num: "04", label: "Pricing", href: "/pricing" },
  { num: "05", label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close the menus when the route changes. Adjusting state during render is
  // React's recommended pattern here — an effect would cause a second render
  // pass with the menu still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <Link href="/" className="logo">
          <img src="/assets/logo.png" alt="Fastex Media Logo" />
          <span className="logo-text">Fastex Media</span>
        </Link>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children);
            const isOpen = openMenu === item.label;

            return (
              <li
                key={item.label}
                className={`nav-item ${hasChildren ? "has-dropdown" : ""} ${
                  isOpen ? "is-open" : ""
                }`}
                onMouseEnter={() => hasChildren && setOpenMenu(item.label)}
                onMouseLeave={() => hasChildren && setOpenMenu(null)}
              >
                <span className="nav-row">
                  <Link href={item.href}>
                    <span className="nav-number">{item.num}</span>
                    {item.label}
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

        <Link href="/contact" className="btn btn-outline book-call-btn">
          Book a Call
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={isMobileMenuOpen ? "ph ph-x" : "ph ph-list"}></i>
        </button>
      </div>
    </nav>
  );
}
