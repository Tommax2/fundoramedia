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

  return (
    <nav className="top-nav">
      <div className="brand">
        <img src="/logo.jpeg" alt="Fundora Creative Media" className="brand-logo" />
      </div>
      <button className="nav-toggle" type="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
      <div className={`top-nav-center ${open ? "open" : ""}`}>
        <div className="tabs">
          {tabs.map((item) => (
            <button key={item.id} className={`tab ${tab === item.id ? "on" : ""}`} onClick={() => handleTabClick(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="top-links">
          <button type="button" onClick={() => scrollToSection(tab === "fund" ? "crowd-services" : "book-services")}>
            Services
          </button>
          <button type="button" onClick={() => scrollToSection(tab === "fund" ? "crowd-packages" : "book-packages")}>
            Packages
          </button>
          <button type="button" onClick={() => scrollToSection(tab === "fund" ? "crowd-consultation" : "book-consultation")}>
            Consultation
          </button>
        </div>
        <button className="cta mobile-menu-cta" onClick={onLaunch}>Launch project</button>
      </div>
      <button className="cta" onClick={onLaunch}>Launch project</button>
    </nav>
  );
}

export default TopNav;
