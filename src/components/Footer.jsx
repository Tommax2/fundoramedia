import React, { useState } from "react";
import PolicyModal from "./PolicyModal";

function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "200+", label: "Authors Supported" },
    { value: "$4M+", label: "Revenue Driven for Clients" },
    { value: "98%", label: "Client Satisfaction" },
  ];

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
          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Fundora Creative Media"
              className="footer-logo"
            />
            <p className="footer-brand-sub">
              Performance marketing for product launches and ambitious authors.
            </p>
          </div>

          <div className="footer-stats">
            {stats.map((s) => (
              <div className="footer-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#fund-discover">Launch Marketing</a>
              <a href="#book-discover">Book Marketing</a>
              <a href="#crowd-services">What We Do</a>
              <a href="#crowd-packages">Packages & Pricing</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About us</a>
              <a href="#">Case studies</a>
              <a href="#">Blog — Coming Soon</a>
              <a href="#">Careers</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a
                href="mailto:hello@fundoramedia.com?subject=Customer%20Support%20Request"
                className="footer-support-link"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9A1.5 1.5 0 0116.5 16h-13A1.5 1.5 0 012 14.5v-9z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 6l8 5 8-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Customer Support: hello@fundoramedia.com</span>
              </a>

              <a
                href="https://wa.me/14707794358"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <a
                href="https://x.com/Fundoramedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61589420200597"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a href="#">Instagram</a>
            </div>
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
            <span>·</span>
            <button onClick={() => setActivePolicy("refund")}>
              Refund Policy
            </button>
            <span>·</span>
            <button onClick={() => setActivePolicy("delivery")}>
              Service Delivery
            </button>
          </div>
          <span className="footer-tagline">
            Built for launch-ready creators.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
