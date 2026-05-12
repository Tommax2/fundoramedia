import React from "react";
import LazyBackground from "./LazyBackground";

function HeroSection({ tab, onStart, onExplore }) {
  const isFund = tab === "fund";
  const heroMedia = isFund
    ? [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70&fm=webp",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=70&fm=webp",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=70&fm=webp"
      ]
    : [
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=70&fm=webp",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=70&fm=webp",
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=70&fm=webp"
      ];

  return (
    <section className="hero reveal">
      <div className="hero-left">
        <p className="eyebrow">{isFund ? "Creative marketing agency" : "Author marketing studio"}</p>
        <h1>
          {isFund ? (
            <>
              We market campaigns that <em>get funded</em> and grow audiences
            </>
          ) : (
            <>
              We grow authors who <em>build readers</em> before launch day
            </>
          )}
        </h1>
        <p className="hero-copy">
          {isFund
            ? "From strategy and branding to paid ads and community growth — we handle the full marketing system behind your campaign launch."
            : "From book positioning and branding to promotion, ads, and media outreach — we build the marketing engine behind your book's success."}
        </p>
        <div className="hero-actions">
          <button className="hero-primary" onClick={onStart}>Get started</button>
          <button className="hero-secondary" onClick={onExplore}>See our work</button>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel-top hero-panel-meta">
          <strong>{isFund ? "Client campaign results" : "Client book results"}</strong>
          <span>Recent work</span>
        </div>
        <div className="hero-media-stack" aria-hidden="true">
          {heroMedia.map((image, index) => (
            <LazyBackground
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
