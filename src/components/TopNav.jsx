import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const navLinks = [
    { label: "Services", to: "/services" },
    { label: "Our work", to: "/#testimonials" },
    { label: "Pricing", to: "/packages" },
    { label: "About", to: "/about" },
    { label: "Contact", href: "mailto:hello@fundoramedia.com" },
  ];

  const isActive = (to) => {
    const [path, hash] = to.split("#");
    return location.pathname === (path || "/") && (!hash || location.hash === `#${hash}`);
  };

  return (
    <>
      <nav className="top-nav" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="Fundora home">
          <img src="/logo.png" alt="Fundora Creative Media" className="brand-logo" loading="eager" decoding="async" fetchpriority="high" />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="top-links">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={isActive(link.to) ? "active" : ""}
              >
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </div>
        <Link className="cta" to="/services#consultation">
          Book a free campaign review
        </Link>
      </nav>

      {open && (
        <div className="nav-overlay" onClick={(event) => event.target === event.currentTarget && setOpen(false)}>
          <div className="nav-sheet">
            <div className="nav-sheet-header">
              <Link to="/" onClick={() => setOpen(false)} aria-label="Fundora home">
                <img src="/logo.png" alt="Fundora" className="nav-sheet-logo" loading="lazy" decoding="async" />
              </Link>
              <button className="nav-sheet-close" onClick={() => setOpen(false)} aria-label="Close navigation">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="nav-sheet-links" aria-label="Mobile navigation">
              <Link
                to="/"
                className={`nav-sheet-link${location.pathname === "/" ? " active" : ""}`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`nav-sheet-link${isActive(link.to) ? " active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-sheet-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <Link
              className="cta nav-sheet-cta"
              to="/services#consultation"
              onClick={() => setOpen(false)}
            >
              Book a free campaign review
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default TopNav;
