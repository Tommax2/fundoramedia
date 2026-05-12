import React from "react";
import PlanCard from "./PlanCard";

function PricingSection({ yearly, onToggleYearly }) {
  const proPrice = yearly ? 15 : 19;
  const studioPrice = yearly ? 47 : 59;

  return (
    <section className="pricing reveal">
      <div className="pricing-header">
        <p className="eyebrow">Pricing</p>
        <h2>Plans that scale with your creator journey</h2>
        <p>Start free, upgrade when growth demands better tools, collaboration, and lower platform fees.</p>
      </div>
      <div className="billing-toggle">
        <span>Monthly</span>
        <button className={`switch ${yearly ? "on" : ""}`} onClick={onToggleYearly} aria-label="Toggle yearly billing">
          <span />
        </button>
        <span>Yearly</span>
        <small>SAVE 20%</small>
      </div>
      <div className="plan-grid">
        <PlanCard name="Free" subtitle="For creators getting started" price="$0" period="/ forever" features={["1 campaign", "1 book draft", "Basic analytics", "5% platform fee"]} />
        <PlanCard name="Pro" subtitle="For serious creators ready to grow" price={`$${proPrice}`} period="/ month" featured features={["Unlimited campaigns", "Unlimited books", "Advanced analytics", "2.5% platform fee", "Priority support"]} />
        <PlanCard name="Studio" subtitle="For teams and publishers" price={`$${studioPrice}`} period="/ month" features={["Everything in Pro", "Team collaboration", "0% platform fee", "White-label pages", "API access"]} />
      </div>
    </section>
  );
}

export default PricingSection;
