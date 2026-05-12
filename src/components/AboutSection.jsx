import React from "react";

const PILLARS = [
  {
    icon: "🎯",
    title: "Strategy first",
    body: "Every campaign starts with research, validation, and a clear plan — not guesswork."
  },
  {
    icon: "📈",
    title: "Growth-focused",
    body: "We measure success by real outcomes: leads generated, conversion rates, and funding results."
  },
  {
    icon: "🤝",
    title: "Partner, not vendor",
    body: "We work alongside you as an extension of your team throughout the entire campaign lifecycle."
  }
];

function AboutSection() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-inner">
        <div className="about-text">
          <p className="eyebrow">About us</p>
          <h2>Built for creators who take their launch seriously</h2>
          <p className="about-body">
            Fundora Creative Media is a specialist marketing agency helping crowdfunding creators and independent authors build audiences, attract supporters, and grow their impact. We combine strategy, creative production, and paid media to deliver real results — not just reports.
          </p>
          <p className="about-body">
            Founded by marketers with hands-on experience running campaigns across Kickstarter, Indiegogo, and Amazon KDP, we understand what it takes to stand out in a competitive landscape and convert interest into action.
          </p>
          <div className="about-contact-row">
            <a href="mailto:hello@fundoramedia.com" className="about-contact-link">hello@fundoramedia.com</a>
            <span className="about-contact-sep">·</span>
            <a href="tel:+2348000000000" className="about-contact-link">+234 800 000 0000</a>
          </div>
        </div>
        <div className="about-pillars">
          {PILLARS.map((p) => (
            <div key={p.title} className="about-pillar">
              <span className="about-pillar-icon">{p.icon}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
