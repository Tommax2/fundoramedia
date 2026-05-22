import React from "react";

const PACKAGES = [
  {
    tier: "BRONZE PACKAGE",
    medal: "Bronze",
    subtitle: "Foundation & Strategy",
    tagline: "Foundation & Strategy Setup",
    description: "Best for creators and founders preparing their project.",
    includes: [
      "Strategy consultation session",
      "Market & competitor research",
      "Project positioning & validation",
      "Target audience planning",
      "Project improvement suggestions",
      "Marketing readiness checklist & roadmap"
    ],
    deliverables: ["Strategy report", "Action plan document"],
    bestFor: ["Creators & founders starting out", "Project validation stage", "Strategic direction"],
    price: "Starting from $100",
    tone: "bronze"
  },
  {
    tier: "SILVER PACKAGE",
    medal: "Silver",
    subtitle: "Campaign Development",
    tagline: "Professional Branding & Setup",
    description: "Everything needed to professionally prepare your project for promotion.",
    includes: [
      "Project storytelling & copywriting",
      "Creative strategy & visual design",
      "Landing page structuring & optimization",
      "Offer structuring",
      "Basic email sequence setup",
      "Branding consistency across materials"
    ],
    deliverables: ["Complete campaign assets", "Launch-ready materials"],
    bestFor: ["Brands ready to promote", "Founders needing professional presence", "Campaign preparation stage"],
    price: "Starting from $500",
    tone: "silver"
  },
  {
    tier: "GOLD PACKAGE",
    medal: "Gold",
    subtitle: "Full Marketing Management",
    tagline: "Complete Growth & Performance System",
    description: "Done-for-you promotion and growth solution.",
    includes: [
      "Paid advertising management (Meta, TikTok, Google, YouTube)",
      "Email marketing automation",
      "Audience building & lead generation",
      "Influencer & partnership outreach",
      "Community engagement strategy",
      "Daily performance monitoring & optimization",
      "Post-campaign analytics & support"
    ],
    deliverables: ["Active campaign execution", "Detailed performance reports"],
    bestFor: ["Serious founders & brands", "High-growth goals", "Maximum exposure", "Full marketing management"],
    price: "Contact for pricing",
    tone: "gold"
  }
];

function MarketingPackagesSection() {
  return (
    <section className="crowd-packages reveal" id="marketing-packages">
      <div className="crowd-packages-head">
        <p className="eyebrow">Marketing Packages</p>
        <h2>From Strategy to Full-Scale Project Growth</h2>
      </div>
      <div className="crowd-packages-grid">
        {PACKAGES.map((pkg) => (
          <article key={pkg.tier} className={`package-card ${pkg.tone}`}>
            <p className="package-medal">{pkg.medal}</p>
            <h3>{pkg.tier}</h3>
            <p className="package-sub">{pkg.subtitle}</p>
            <p className="package-tagline">"{pkg.tagline}"</p>
            <p className="package-desc">{pkg.description}</p>

            <p className="package-label">Includes</p>
            <ul>
              {pkg.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="package-label">Deliverables</p>
            <div className="deliverables">
              {pkg.deliverables.map((item) => (
                <span key={item}>+ {item}</span>
              ))}
            </div>

            <p className="package-label">Best For</p>
            <div className="best-for">
              {pkg.bestFor.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="package-price">{pkg.price}</div>
            <a
              className="package-pay-btn"
              href={`mailto:hello@fundoramedia.com?subject=${encodeURIComponent(`Marketing Package Inquiry – ${pkg.tier}`)}&body=${encodeURIComponent(`Hi Fundoramedia,\n\nI'd like to get started with the ${pkg.tier} (${pkg.price}).\n\nPlease send payment details or next steps.`)}`}
            >
              Inquire & Pay
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MarketingPackagesSection;
