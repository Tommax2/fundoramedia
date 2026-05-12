import React from "react";

const PACKAGES = [
  {
    tier: "BASIC PACKAGE",
    medal: "Bronze",
    subtitle: "Book Consultation & Market Validation",
    tagline: "Book Launch Preparation",
    includes: [
      "Book promotion consultation",
      "Audience research",
      "Genre & competitor analysis",
      "Launch readiness assessment",
      "Book positioning strategy",
      "Missing marketing requirements compilation",
      "Promotion roadmap",
      "Platform recommendations",
      "Reader targeting strategy"
    ],
    deliverables: ["Book marketing assessment", "Promotion roadmap", "Target audience insights"],
    price: "Starting from $150",
    // paystackLink: "https://paystack.com/pay/fundoramedia-book-basic",
    tone: "bronze"
  },
  {
    tier: "STANDARD PACKAGE",
    medal: "Silver",
    subtitle: "Book Branding & Launch Setup",
    tagline: "Professional Book Promotion Setup",
    includes: [
      "Launch campaign creation",
      "Social media promotional design",
      "Book branding setup",
      "Landing page creation",
      "Email marketing setup",
      "Amazon/KDP optimization",
      "Promotional content creation",
      "Graphic design materials",
      "Launch strategy execution",
      "Basic audience engagement setup"
    ],
    deliverables: ["Promotional assets", "Launch-ready setup", "Branded marketing materials"],
    price: "Starting from $500",
    // paystackLink: "https://paystack.com/pay/fundoramedia-book-standard",
    tone: "silver"
  },
  {
    tier: "PREMIUM PACKAGE",
    medal: "Gold",
    subtitle: "Full Book Marketing & Promotion",
    tagline: "Complete Author Growth System",
    includes: [
      "Everything in Standard Package",
      "Full paid advertising management",
      "Facebook/Instagram book ads",
      "Influencer outreach",
      "PR & media promotion",
      "Advanced email marketing",
      "Reader engagement campaigns",
      "Review growth strategy",
      "Ongoing campaign optimization",
      "Analytics tracking",
      "Multi-platform promotion",
      "Long-term growth strategy"
    ],
    deliverables: ["Active promotional campaigns", "Sales growth optimization", "Full marketing management"],
    price: "Starting from $2,000",
    // paystackLink: "https://paystack.com/pay/fundoramedia-book-premium",
    tone: "gold"
  }
];

function BookPackagesSection() {
  return (
    <section className="book-packages reveal" id="book-packages">
      <div className="book-packages-head">
        <p className="eyebrow">Author Marketing Packages</p>
        <h2>Choose Your Growth Level</h2>
      </div>
      <div className="book-packages-grid">
        {PACKAGES.map((pkg) => (
          <article key={pkg.tier} className={`package-card ${pkg.tone}`}>
            <p className="package-medal">{pkg.medal}</p>
            <h3>{pkg.tier}</h3>
            <p className="package-sub">{pkg.subtitle}</p>
            <p className="package-tagline">"{pkg.tagline}"</p>

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

            <div className="package-price">{pkg.price}</div>
            <a
              className="package-pay-btn"
              href={pkg.paystackLink || `mailto:hello@fundoramedia.com?subject=${encodeURIComponent(`Book Package Inquiry – ${pkg.tier}`)}&body=${encodeURIComponent(`Hi Fundoramedia,\n\nI'd like to get started with the ${pkg.tier} (${pkg.price}).\n\nPlease send payment details or next steps.`)}`}
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

export default BookPackagesSection;
