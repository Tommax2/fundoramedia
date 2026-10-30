import React from "react";
import { Link } from "react-router-dom";

const STATS = [
  ["$4M+", "raised by our clients"],
  ["100+", "campaigns launched"],
  ["300+", "client projects"],
  ["7 yrs", "launch experience"],
];

const STEPS = [
  ["Free campaign review", "We assess your idea, goal and timeline, then tell you honestly if it is ready."],
  ["Build your audience", "Landing page, ads and email list, so backers are waiting before you go live."],
  ["Launch & get funded", "Campaign page, ads, PR and backer outreach, managed daily until the final hour."],
];

function HomeFlowSection() {
  return (
    <>
      <section className="proof-band reveal" aria-label="Fundora experience">
        <div className="proof-band-inner">
          {STATS.map(([value, label]) => (
            <div className="proof-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-flow reveal">
        <div className="home-flow-head">
          <p className="eyebrow">How it works</p>
          <h2>From idea to funded, in three steps</h2>
          <p>For product founders, authors, game studios and creative projects.</p>
        </div>
        <ol className="home-flow-grid">
          {STEPS.map(([title, description]) => (
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

export function HomeReviewCta() {
  return (
    <section className="home-review-cta reveal">
      <div>
        <p className="eyebrow">Start with a conversation</p>
        <h2>Planning a campaign? Let’s look at it together.</h2>
        <p>Book a free campaign review and get honest feedback on your goal, timing and next steps.</p>
      </div>
      <div className="home-review-actions">
        <Link to="/services#consultation">Book a free campaign review</Link>
        <a className="home-review-whatsapp" href="https://wa.me/2348109178506" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
    </section>
  );
}

export default HomeFlowSection;
