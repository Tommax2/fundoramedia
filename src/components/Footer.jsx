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
            <a
              className="footer-instagram"
              href="https://www.instagram.com/fundoramedia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Fundoramedia on Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle className="instagram-dot" cx="17.4" cy="6.7" r="1" />
              </svg>
            </a>
            <a
              className="footer-tiktok"
              href="https://www.tiktok.com/@fundoramedia?_r=1&_t=ZS-9AvcoiRnGVh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Fundoramedia on TikTok"
              title="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.2 3c.35 2.06 1.56 3.29 3.8 3.42v3.12a7.63 7.63 0 0 1-3.76-1.1v6.03a6.1 6.1 0 1 1-5.25-6.04c.4-.06.8-.08 1.2-.04v3.18a3.03 3.03 0 1 0 .9 2.16V3h3.11Z" />
              </svg>
            </a>
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
