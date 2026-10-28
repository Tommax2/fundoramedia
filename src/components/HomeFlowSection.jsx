import React from "react";
import { Link } from "react-router-dom";

const FLOW = {
  book: {
    eyebrow: "How it works",
    title: "From manuscript to meaningful momentum",
    subtitle: "A focused launch process for independent authors and publishing teams.",
    stats: [
      ["300+", "client projects"],
      ["100+", "launch engagements"],
      ["7 yrs", "growth experience"],
      ["1:1", "strategy support"],
    ],
    steps: [
      ["Review your book", "We look at your audience, positioning, launch timing, and current platform."],
      ["Build the campaign", "We shape the message, assets, channels, and promotion plan around your goals."],
      ["Launch and grow", "We activate the campaign, review performance, and improve what happens next."],
    ],
    ctaTitle: "Planning a book launch? Let’s shape it together.",
  },
  marketing: {
    eyebrow: "How it works",
    title: "From promising idea to launch-ready campaign",
    subtitle: "A practical path for creators, founders, and teams building demand.",
    stats: [
      ["320+", "launches supported"],
      ["3.8×", "campaign lift"],
      ["7 yrs", "launch experience"],
      ["1:1", "strategy support"],
    ],
    steps: [
      ["Review the opportunity", "We assess your offer, audience, goal, timeline, and current launch readiness."],
      ["Build the audience", "We create the story, campaign assets, landing experience, and growth plan."],
      ["Launch and optimise", "We manage the campaign, track clear results, and refine performance as it runs."],
    ],
    ctaTitle: "Planning a campaign? Let’s look at it together.",
  },
};

function HomeFlowSection({ tab }) {
  const content = FLOW[tab] || FLOW.book;

  return (
    <>
      <section className="proof-band reveal" aria-label="Fundora experience">
        <div className="proof-band-inner">
          {content.stats.map(([value, label]) => (
            <div className="proof-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-flow reveal">
        <div className="home-flow-head">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>
        <ol className="home-flow-grid">
          {content.steps.map(([title, description]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

    </>
  );
}

export function HomeReviewCta({ tab }) {
  const content = FLOW[tab] || FLOW.book;

  return (
    <section className="home-review-cta reveal">
      <div>
        <p className="eyebrow">Start with a conversation</p>
        <h2>{content.ctaTitle}</h2>
        <p>Get clear feedback on your goal, timing, and the support you actually need.</p>
      </div>
      <Link to="/services#consultation">Book a free campaign review</Link>
    </section>
  );
}

export default HomeFlowSection;
