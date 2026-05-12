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
        <p className="eyebrow">{isFund ? "Crowdfunding platform" : "Book authoring studio"}</p>
        <h1>
          {isFund ? (
            <>
              Back ideas that <em>shift culture</em> and change communities
            </>
          ) : (
            <>
              Build your book <em>in public</em> with readers behind you
            </>
          )}
        </h1>
        <p className="hero-copy">
          {isFund
            ? "From hardware inventions to local projects, fund campaigns with transparent milestones and audience momentum."
            : "Write in chapters, ship drafts weekly, and turn audience feedback into stronger storytelling before launch day."}
        </p>
        <div className="hero-actions">
          <button className="hero-primary" onClick={onStart}>Start now</button>
          <button className="hero-secondary" onClick={onExplore}>Explore creators</button>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel-top hero-panel-meta">
          <strong>{isFund ? "Launch momentum" : "Reader momentum"}</strong>
          <span>Live preview</span>
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
            <p>{isFund ? "Email opt-ins" : "Early readers"}</p>
            <strong>{isFund ? "+1,284" : "+742"}</strong>
          </div>
          <div className="hero-stat-chip chip-b">
            <p>{isFund ? "Ad CTR" : "Chapter saves"}</p>
            <strong>{isFund ? "4.3%" : "68%"}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
