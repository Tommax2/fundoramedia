import React, { useState } from "react";
import PolicyModal from "./PolicyModal";

function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <>
      {activePolicy && (
        <PolicyModal
          policy={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      )}
      <footer className="site-footer">
        <div className="footer-glow-bar" />
        <div className="footer-orb footer-orb-1" />
        <div className="footer-orb footer-orb-2" />

        <div className="footer-inner">
          <img src="/logo.png" alt="Fundora Creative Media" className="footer-logo" />
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#crowd-services">Services</a>
            <a href="#crowd-packages">Pricing</a>
            <a href="/blog">Blog</a>
            <a href="mailto:hello@fundoramedia.com">Contact</a>
          </nav>
          <div className="footer-socials">
            <span>Follow</span>
            <a href="https://wa.me/2348109178506" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://x.com/Fundoramedia" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.linkedin.com/in/akorede-awokunle-6bba18214" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Fundoramedia. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <button onClick={() => setActivePolicy("privacy")}>
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => setActivePolicy("terms")}>
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
