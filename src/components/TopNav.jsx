import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function TopNav({ tabs, tab, onTabChange, onLaunch }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleTabClick = (id) => {
    onTabChange(id);
    setOpen(false);
  };

  const navLinks = [
    { label: "Services",  href: "/services" },
    { label: "Packages",  href: "/packages" },
    { label: "About",     href: "/about" },
    { label: "Blog",      href: "/blog" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <>
      <nav className="top-nav">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Fundora Creative Media" className="brand-logo" loading="eager" decoding="async" fetchpriority="high" />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <div className="tabs">
          {tabs.map((item) => (
            <button
              key={item.id}
              className={`tab ${tab === item.id ? "on" : ""}`}
              onClick={() => handleTabClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="top-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={isActive(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="cta" onClick={onLaunch}>Launch project</button>
      </nav>

      {open && (
        <div className="nav-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="nav-sheet">
            <div className="nav-sheet-header">
              <Link to="/" onClick={() => setOpen(false)}>
                <img src="/logo.png" alt="Fundora" className="nav-sheet-logo" loading="lazy" decoding="async" />
              </Link>
              <button className="nav-sheet-close" onClick={() => setOpen(false)} aria-label="Close">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="tabs nav-sheet-tabs-row">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  className={`tab ${tab === item.id ? "on" : ""}`}
                  onClick={() => handleTabClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <nav className="nav-sheet-links">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`nav-sheet-link${isActive(link.href) ? " active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </nav>

            <button className="cta nav-sheet-cta" onClick={() => { onLaunch(); setOpen(false); }}>
              Launch project
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TopNav;
