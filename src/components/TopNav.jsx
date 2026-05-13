import React, { useState } from "react";

function TopNav({ tabs, tab, onTabChange, onLaunch }) {
  const [open, setOpen] = useState(false);

  const handleTabClick = (id) => {
    onTabChange(id);
    setOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navLinks = [
    { label: "Services",     sectionId: tab === "fund" ? "crowd-services"     : "book-services" },
    { label: "Packages",     sectionId: tab === "fund" ? "crowd-packages"     : "book-packages" },
    { label: "Consultation", sectionId: tab === "fund" ? "crowd-consultation" : "book-consultation" },
  ];

  return (
    <>
      <nav className="top-nav">
        <div className="brand">
          <img src="/logo.png" alt="Fundora Creative Media" className="brand-logo" />
        </div>
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
            <button key={link.label} type="button" onClick={() => scrollToSection(link.sectionId)}>
              {link.label}
            </button>
          ))}
        </div>
        <button className="cta" onClick={onLaunch}>Launch project</button>
      </nav>

      {open && (
        <div className="nav-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="nav-sheet">
            <div className="nav-sheet-header">
              <img src="/logo.png" alt="Fundora" className="nav-sheet-logo" />
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
                <button
                  key={link.label}
                  className="nav-sheet-link"
                  onClick={() => scrollToSection(link.sectionId)}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
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
