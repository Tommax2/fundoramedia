import React from "react";
import LazyBackground from "./LazyBackground";

const SERVICES = [
  {
    title: "Launch Strategy & Planning",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Market research & validation", "Launch roadmap creation", "Pricing & target planning", "Offer tier structuring"]
  },
  {
    title: "Brand Page Creation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Landing page design", "Copywriting (story, headlines)", "Visual layout optimization", "Conversion-focused structure"]
  },
  {
    title: "Pre-Launch Marketing",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Email list building", "Lead generation ads", "Waitlist & early access setup", "Hype-building strategy"]
  },
  {
    title: "Video Production",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Brand video scripting", "Storyboarding", "Video editing", "Voiceover production"]
  },
  {
    title: "Paid Advertising",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Facebook & Instagram ads", "TikTok ads", "Google & YouTube ads", "Ad funnel optimization"]
  },
  {
    title: "Email Marketing & Automation",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Pre-launch sequences", "Launch announcement emails", "Customer retention emails", "Upsell & follow-up flows"]
  },
  {
    title: "Audience Outreach & Community Building",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Influencer outreach", "Affiliate marketing setup", "Community engagement (Discord, Telegram)", "Referral programmes"]
  },
  {
    title: "Live Marketing Management",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Daily performance optimisation", "Content & update posting", "Audience & buyer management", "Stretch goal planning"]
  },
  {
    title: "Post-Launch Services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Fulfilment strategy", "Customer surveys", "Upsell promotions", "Transition to eCommerce"]
  }
];

function CrowdfundingServicesSection() {
  const doubled = [...SERVICES, ...SERVICES];

  return (
    <section className="crowd-services reveal" id="crowd-services">
      <div className="crowd-services-head">
        <p className="eyebrow">What we do</p>
        <h2>Launch Marketing Services</h2>
      </div>

      <div className="service-carousel">
        <div className="service-track">
          {doubled.map((service, index) => (
            <article className={`service-card ${index >= SERVICES.length ? "dup-item" : ""}`} key={`${service.title}-${index}`}>
              <LazyBackground
                className="service-image"
                image={service.image}
                overlay="linear-gradient(130deg, rgba(0,0,0,.08), rgba(0,0,0,.58))"
                fallback="linear-gradient(135deg, #1f2735, #131722)"
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CrowdfundingServicesSection;
