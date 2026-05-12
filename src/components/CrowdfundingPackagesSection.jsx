import React from "react";

const PACKAGES = [
  {
    tier: "BASIC PACKAGE",
    medal: "Bronze",
    subtitle: "Campaign Consultation & Validation",
    tagline: "Foundation & Strategy Setup",
    description: "Best for creators who are still preparing their idea before launch.",
    includes: [
      "Campaign consultation session",
      "Product/idea research",
      "Market & competitor analysis",
      "Requirements validation",
      "Missing requirements compilation",
      "Reward tier recommendations",
      "Funding goal guidance",
      "Campaign improvement suggestions",
      "Launch readiness checklist",
      "Strategic execution roadmap"
    ],
    deliverables: ["Campaign assessment report", "Market validation insights", "Action plan document"],
    bestFor: ["First-time creators", "Unclear campaign direction", "Product validation stage"],
    price: "Starting from $100",
    // paystackLink: "https://paystack.com/pay/fundoramedia-crowd-basic",
    tone: "bronze"
  },
  {
    tier: "STANDARD PACKAGE",
    medal: "Silver",
    subtitle: "Campaign Creation & Branding",
    tagline: "Professional Campaign Development",
    description: "Everything needed to professionally build your campaign before promotion.",
    includes: [
      "Everything in Basic Package",
      "Campaign creation on your desired campaign platform",
      "Campaign storytelling & copywriting",
      "Creative strategy development",
      "Graphic design & visual formation",
      "Campaign page structuring",
      "Reward tier setup",
      "FAQ & risk section creation",
      "Branding consistency setup",
      "Basic email sequence setup",
      "Launch strategy planning",
      "Campaign optimization setup"
    ],
    deliverables: ["Fully designed campaign page", "Campaign graphics", "Professional campaign structure", "Launch-ready setup"],
    bestFor: ["Creators ready to launch", "Startups needing professional presentation", "Campaign preparation stage"],
    price: "Starting from $500",
    // paystackLink: "https://paystack.com/pay/fundoramedia-crowd-standard",
    tone: "silver"
  },
  {
    tier: "PREMIUM PACKAGE",
    medal: "Gold",
    subtitle: "Full Campaign Marketing & Promotion",
    tagline: "Complete Growth & Funding System",
    description: "A full-scale done-for-you crowdfunding marketing solution.",
    includes: [
      "Everything in Standard Package",
      "Full campaign promotion",
      "Facebook & Instagram ads management",
      "Lead generation campaigns",
      "Influencer outreach",
      "Email marketing automation",
      "Pre-launch audience building",
      "Backer engagement management",
      "Daily campaign monitoring",
      "Performance optimization",
      "Retargeting ads",
      "Community growth strategy",
      "Stretch goal strategy",
      "Post-launch support",
      "Analytics & reporting"
    ],
    deliverables: ["Active marketing campaigns", "Audience growth system", "Campaign performance reports", "Funding optimization strategy"],
    bestFor: ["Serious creators", "High funding goals", "Brands seeking maximum exposure", "Full campaign management"],
    price: "Starting from $3,000",
    // paystackLink: "https://paystack.com/pay/fundoramedia-crowd-premium",
    tone: "gold"
  }
];

function CrowdfundingPackagesSection() {
  return (
    <section className="crowd-packages reveal" id="crowd-packages">
      <div className="crowd-packages-head">
        <p className="eyebrow">Crowdfunding Campaign Packages</p>
        <h2>From Validation to Full-Scale Funding Growth</h2>
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
              href={pkg.paystackLink || `mailto:hello@fundoramedia.com?subject=${encodeURIComponent(`Crowdfunding Package Inquiry – ${pkg.tier}`)}&body=${encodeURIComponent(`Hi Fundoramedia,\n\nI'd like to get started with the ${pkg.tier} (${pkg.price}).\n\nPlease send payment details or next steps.`)}`}
              target={pkg.paystackLink ? "_blank" : undefined}
              rel={pkg.paystackLink ? "noopener noreferrer" : undefined}
            >
              {pkg.paystackLink ? "Pay with Paystack" : "Inquire & Pay"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CrowdfundingPackagesSection;
