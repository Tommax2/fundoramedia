import React, { useState } from "react";
import PolicyModal from "./PolicyModal";

function Footer() {
  const [activePolicy, setActivePolicy] = useState(null);

  const stats = [
    { value: "500+", label: "Campaigns Marketed" },
    { value: "200+", label: "Authors Supported" },
    { value: "$4M+", label: "Raised for Creators" },
    { value: "98%",  label: "Client Satisfaction" },
  ];

  return (
    <>
      {activePolicy && <PolicyModal policy={activePolicy} onClose={() => setActivePolicy(null)} />}
      <footer className="site-footer">
        <div className="footer-glow-bar" />
        <div className="footer-orb footer-orb-1" />
        <div className="footer-orb footer-orb-2" />

        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="Fundora Creative Media" className="footer-logo" />
            <p className="footer-brand-sub">Growth systems for crowdfunding creators and ambitious authors.</p>
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
              <h4>Platform</h4>
              <a href="#fund-discover">Crowdfunding</a>
              <a href="#book-discover">Book Studio</a>
              <a href="#crowd-services">Services</a>
              <a href="#crowd-packages">Packages</a>
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
              <a href="mailto:hello@fundoramedia.com">hello@fundoramedia.com</a>
              <a href="tel:+2348000000000">+234 800 000 0000</a>
              <a href="#">Twitter / X</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fundoramedia. All rights reserved.</span>
          <div className="footer-legal-links">
            <button onClick={() => setActivePolicy("privacy")}>Privacy Policy</button>
            <span>·</span>
            <button onClick={() => setActivePolicy("terms")}>Terms of Service</button>
            <span>·</span>
            <button onClick={() => setActivePolicy("refund")}>Refund Policy</button>
            <span>·</span>
            <button onClick={() => setActivePolicy("delivery")}>Service Delivery</button>
          </div>
          <span className="footer-tagline">Built for launch-ready creators.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
