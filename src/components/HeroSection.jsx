import React from "react";
import { Link } from "react-router-dom";
import LazyBackground from "./LazyBackground";

function HeroSection({ onStart }) {
  return (
    <section className="hero reveal">
      <div className="hero-left">
        <p className="eyebrow">Crowdfunding launch studio</p>
        <h1>We help creators, founders &amp; authors <em>hit their crowdfunding goal</em></h1>
        <p className="hero-copy">
          Kickstarter and Indiegogo campaigns, run end to end: strategy,
          pre-launch audience, campaign page, ads and backer outreach.
        </p>
        <div className="hero-actions">
          <button className="hero-primary" onClick={onStart}>Book a free campaign review</button>
          <Link className="hero-secondary" to="/blog">See campaigns we&rsquo;ve worked on</Link>
        </div>
        <div className="hero-platforms" aria-label="Crowdfunding platforms supported">
          <span>We launch on</span>
          <strong>Kickstarter</strong>
          <strong>Indiegogo</strong>
          <strong>Other platforms</strong>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-gallery" aria-hidden="true">
          <LazyBackground
            eager
            className="hero-gallery-image hero-gallery-image-1"
            image="/hero-fund-1.webp"
            fallback="linear-gradient(145deg, #dcebe4, #f4f7f4)"
          />
        </div>
        <div className="hero-result-row" aria-label="Client results">
          <div className="hero-result"><strong>100+</strong><span>Campaigns launched</span></div>
          <div className="hero-result"><strong>7 yrs</strong><span>Launch experience</span></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
