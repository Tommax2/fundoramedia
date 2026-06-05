import React from "react";

const STATS = [
  { value: "300+", label: "Client Orders" },
  { value: "7 yrs", label: "Experience" },
  { value: "100+", label: "Launch Funding Projects" },
  { value: "$4M+", label: "Total Raised" },
];

const VALUES = [
  {
    accent: "leaf",
    title: "Strategy First",
    body: "Every engagement starts with research, audience mapping, and a clear roadmap — not templates or guesswork.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20h20M6 20V10l6-6 6 6v10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    accent: "blue",
    title: "Growth Focused",
    body: "We measure success by real outcomes: leads generated, conversion rates, and revenue — not vanity metrics.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    accent: "gold",
    title: "True Partnership",
    body: "We work alongside you as an extension of your team — transparent, accountable, and invested in your success.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
            Fundora Creative Media is a specialist campaign launch studio helping
            funding-ready creators and independent authors build audiences,
            attract buyers, and grow their impact. We combine strategy, creative
            production, and paid media to deliver real results — not just
            reports.
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
          <svg
            className="about-mission-quote"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 13c0-3.314 2.686-6 6-6v3c-1.657 0-3 1.343-3 3v1h3v6H9v-7zm13 0c0-3.314 2.686-6 6-6v3c-1.657 0-3 1.343-3 3v1h3v6h-6v-7z"
              fill="currentColor"
              opacity="0.25"
            />
          </svg>
          <p>
            We combine strategy, creative production, and paid media to deliver
            real results — not just reports. Founded by campaign strategists with hands-on
            experience across digital platforms and Amazon KDP, we understand
            what it takes to stand out and convert interest into action.
          </p>
        </div>

        {/* Founder */}
        <div className="about-founder">
          <div className="about-founder-photo-wrap">
            <img
              src="/ceo.jpeg"
              alt="Akorede Awokunle, launch funding and book growth consultant"
              className="about-founder-photo"
            />
          </div>
          <div className="about-founder-info">
            <div className="about-founder-eyebrow-row">
              <p className="about-founder-eyebrow">Meet the Founder</p>
              <a
                href="https://www.linkedin.com/in/akorede-awokunle-6bba18214"
                target="_blank"
                rel="noopener noreferrer"
                className="about-founder-linkedin"
                aria-label="View Akorede Awokunle on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <h3 className="about-founder-name">
              Akorede Awokunle — Launch Funding &amp; Book Growth Strategist
            </h3>
            <div className="about-founder-divider" />
            <p className="about-founder-bio">
              Akorede Awokunle is a professional launch funding and book
              growth strategist with extensive experience helping creators,
              authors, startups, and entrepreneurs raise support, build demand,
              and bring their ideas to life.
            </p>
            <p className="about-founder-bio">
              With a proven track record of 300+ completed projects on Fiverr
              and over 100 successful launch funding campaigns and author
              growth consultations, he specializes in end-to-end campaign
              development, strategic planning, and performance-driven launch
              execution. Akorede combines storytelling, strategy, and data-driven
              outreach to maximize funding potential, reader reach, and audience
              engagement.
            </p>
            <p className="about-founder-bio">
              He is certified in campaign funding strategy, complete Kickstarter
              campaign management, email strategy, social media
              promotion, and ads strategy &amp; campaign optimization.
            </p>
            <div className="about-founder-tags">
              <span>Launch Funding</span>
              <span>Book Growth</span>
              <span>Email Strategy</span>
              <span>Social Media</span>
              <span>Paid Ads</span>
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
              <span
                className={`about-pillar-icon about-pillar-icon--${v.accent}`}
              >
                {v.icon}
              </span>
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
