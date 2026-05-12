import React from "react";

function PlanCard({ name, subtitle, price, period, features, featured = false }) {
  return (
    <article className={`plan ${featured ? "featured" : ""}`}>
      <div className="plan-top">
        <h3>{name}</h3>
        {featured && <span className="plan-badge">Most popular</span>}
      </div>
      <p>{subtitle}</p>
      <div className="price-line">
        <strong>{price}</strong>
        <span>{period}</span>
      </div>
      <ul>
        {features.map((feat) => (
          <li key={feat}>{feat}</li>
        ))}
      </ul>
      <a
        className="plan-inquiry-btn"
        href={`mailto:hello@fundoramedia.com?subject=${encodeURIComponent(`Inquiry: ${name} Plan`)}&body=${encodeURIComponent(`Hi Fundoramedia,\n\nI'm interested in the ${name} plan (${price}${period}).\n\nPlease send me more details about getting started.`)}`}
      >
        {featured ? "Upgrade to Pro" : name === "Free" ? "Get started free" : "Start now"}
      </a>
    </article>
  );
}

export default PlanCard;
