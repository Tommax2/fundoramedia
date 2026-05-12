import React from "react";

const PILLARS = [
  {
    icon: "🎯",
    title: "Strategy first",
    body: "Every project starts with research, validation, and a clear plan — not guesswork.",
    accent: "leaf"
  },
  {
    icon: "📈",
    title: "Growth-focused",
    body: "We measure success by real outcomes: leads generated, conversion rates, and revenue results.",
    accent: "blue"
  },
  {
    icon: "🤝",
    title: "Partner, not vendor",
    body: "We work alongside you as an extension of your team throughout the entire project lifecycle.",
    accent: "gold"
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
            Fundora Creative Media is a specialist marketing agency helping product launch brands and independent authors build audiences, attract buyers, and grow their impact. We combine strategy, creative production, and paid media to deliver real results — not just reports.
          </p>
          <p className="about-body">
            Founded by marketers with hands-on experience running product launches and promotional campaigns across digital platforms and Amazon KDP, we understand what it takes to stand out in a competitive landscape and convert interest into action.
          </p>
        </div>
        <div className="about-pillars">
          {PILLARS.map((p) => (
            <div key={p.title} className="about-pillar">
              <span className={`about-pillar-icon about-pillar-icon--${p.accent}`}>{p.icon}</span>
              <div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-contact-row">
          <a href="mailto:hello@fundoramedia.com" className="about-email-btn">
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2 5.5A1.5 1.5 0 013.5 4h13A1.5 1.5 0 0118 5.5v9A1.5 1.5 0 0116.5 16h-13A1.5 1.5 0 012 14.5v-9z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            hello@fundoramedia.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
