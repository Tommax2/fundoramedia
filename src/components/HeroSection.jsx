import React from "react";
import LazyBackground from "./LazyBackground";

function HeroSection({ tab, onStart }) {
  const isFund = tab === "fund";
  const heroMedia = isFund
    ? ["/hero-fund-1.webp", "/hero-fund-2.webp", "/hero-fund-3.webp"]
    : ["/hero-book-1.webp", "/hero-book-2.webp", "/hero-book-3.webp"];

  return (
    <section className="hero reveal">
      <div className="hero-left">
        <p className="eyebrow">{isFund ? "Creative marketing agency" : "Author marketing studio"}</p>
        <h1>
          {isFund ? (
            <>
              We build marketing systems that <em>grow brands</em> and drive results
            </>
          ) : (
            <>
              We grow authors who <em>build readers</em> before launch day
            </>
          )}
        </h1>
        <p className="hero-copy">
          {isFund
            ? "From strategy and branding to paid ads and community growth — we handle the full marketing system behind your product launch."
            : "From book positioning and branding to promotion, ads, and media outreach — we build the marketing engine behind your book's success."}
        </p>
        <div className="hero-actions">
          <button className="hero-primary" onClick={onStart}>Get started</button>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel-top hero-panel-meta">
          <strong>{isFund ? "Client results" : "Client book results"}</strong>
          <span>Recent work</span>
        </div>
        <div className="hero-media-stack" aria-hidden="true">
          {heroMedia.map((image, index) => (
            <LazyBackground
              eager
              className={`hero-media-card media-${index + 1}`}
              key={image}
              image={image}
              fallback="linear-gradient(145deg, #2b2d33, #18191f)"
            />
          ))}
          <div className="hero-stat-chip chip-a">
            <p>{isFund ? "Leads generated" : "Pre-launch readers"}</p>
            <strong>{isFund ? "+1,284" : "+742"}</strong>
          </div>
          <div className="hero-stat-chip chip-b">
            <p>{isFund ? "Ad return (ROAS)" : "Email open rate"}</p>
            <strong>{isFund ? "4.3×" : "68%"}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
