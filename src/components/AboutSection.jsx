import React from "react";

const STATS = [
  { value: "50+", label: "Clients Served" },
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "Campaigns Launched" },
  { value: "5★", label: "Client Rating" },
];

const VALUES = [
  {
    accent: "leaf",
    title: "Strategy First",
    body: "Every engagement starts with research, audience mapping, and a clear roadmap — not templates or guesswork.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M6 20V10l6-6 6 6v10"/><path d="M10 20v-5h4v5"/>
      </svg>
    ),
  },
  {
    accent: "blue",
    title: "Growth Focused",
    body: "We measure success by real outcomes: leads generated, conversion rates, and revenue — not vanity metrics.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    accent: "gold",
    title: "True Partnership",
    body: "We work alongside you as an extension of your team — transparent, accountable, and invested in your success.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

function AboutSection() {
  return (
    <section className="about-section reveal" id="about">
      <div className="about-inner">

        {/* Hero */}
        <div className="about-text">
          <p className="eyebrow">About Us</p>
          <h2>Built for creators who take their launch seriously</h2>
          <p className="about-body">
            Fundora Creative Media is a specialist marketing agency helping product launch brands and independent authors build audiences, attract buyers, and grow their impact. We combine strategy, creative production, and paid media to deliver real results — not just reports.
          </p>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {STATS.map((s) => (
            <div key={s.label} className="about-stat">
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="about-mission">
          <svg className="about-mission-quote" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M9 13c0-3.314 2.686-6 6-6v3c-1.657 0-3 1.343-3 3v1h3v6H9v-7zm13 0c0-3.314 2.686-6 6-6v3c-1.657 0-3 1.343-3 3v1h3v6h-6v-7z" fill="currentColor" opacity="0.25"/>
          </svg>
          <p>We combine strategy, creative production, and paid media to deliver real results — not just reports. Founded by marketers with hands-on experience across digital platforms and Amazon KDP, we understand what it takes to stand out and convert interest into action.</p>
        </div>

        {/* Founder */}
        <div className="about-founder">
          <div className="about-founder-photo-wrap">
            <img src="/pic.png" alt="CEO of Fundora Creative Media" className="about-founder-photo" />
          </div>
          <div className="about-founder-info">
            <p className="about-founder-eyebrow">Meet the Founder</p>
            <h3 className="about-founder-name">CEO, Fundora Creative Media</h3>
            <div className="about-founder-divider" />
            <p className="about-founder-bio">
              With years of hands-on experience running product launches and promotional campaigns across digital platforms and Amazon KDP, our founder built Fundora Creative Media to give creators and brands the strategic edge they need — turning ideas into impactful launches and interest into loyal buyers.
            </p>
            <div className="about-founder-tags">
              <span>Product Launches</span>
              <span>Amazon KDP</span>
              <span>Paid Media</span>
              <span>Brand Strategy</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about-values-header">
          <p className="eyebrow">Our Approach</p>
          <h3>How we work with you</h3>
        </div>
        <div className="about-pillars">
          {VALUES.map((v) => (
            <div key={v.title} className="about-pillar">
              <span className={`about-pillar-icon about-pillar-icon--${v.accent}`}>{v.icon}</span>
              <div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
