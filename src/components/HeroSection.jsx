import React from "react";
import LazyBackground from "./LazyBackground";

function HeroSection({ tab, onStart }) {
  const isMarketing = tab === "marketing";

  const heroMedia = isMarketing
    ? ["/hero-fund-1.webp", "/hero-fund-2.webp", "/hero-fund-3.webp"]
    : ["/hero-book-1.webp", "/hero-book-2.webp", "/hero-book-3.webp"];

  const eyebrow = isMarketing ? "Campaign launch studio" : "Author marketing studio";

  const heading = isMarketing ? (
    <>We help creators, founders, and brands <em>raise support</em> for their ideas</>
  ) : (
    <>We grow authors who <em>build readers</em> before launch day</>
  );

  const copy = isMarketing
    ? "From story and page setup to paid ads, email sequences, and audience growth—we build campaigns designed to move people."
    : "From positioning and branding to promotion, ads, and media outreach—we build the growth system behind your book.";

  const statA = isMarketing
    ? { label: "Launches supported", value: "+320" }
    : { label: "Pre-launch readers", value: "+742" };

  const statB = isMarketing
    ? { label: "Funding lift", value: "3.8×" }
    : { label: "Email open rate", value: "68%" };

  return (
    <section className="hero reveal">
      <div className="hero-left">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{heading}</h1>
        <p className="hero-copy">{copy}</p>
        <div className="hero-actions">
          <button className="hero-primary" onClick={onStart}>Get started</button>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-gallery" aria-hidden="true">
          <LazyBackground
            eager
            className="hero-gallery-image hero-gallery-image-1"
            image={heroMedia[0]}
            fallback="linear-gradient(145deg, #2b2d33, #18191f)"
          />
        </div>
        <div className="hero-result-row" aria-label="Client results">
          {[statA, statB].map((stat) => (
            <div className="hero-result" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
