import React from "react";
import LazyBackground from "./LazyBackground";

const SERVICES = [
  {
    title: "Campaign Strategy & Planning",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Market research & validation", "Campaign roadmap", "Pricing & funding goal strategy", "Reward tier structuring"]
  },
  {
    title: "Campaign Page Creation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Campaign page design", "Copywriting (story, headlines)", "Visual layout optimization", "Conversion-focused structure"]
  },
  {
    title: "Pre-Launch Campaign",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Email list building", "Lead generation ads", "Waitlist/early bird setup", "Hype-building strategy"]
  },
  {
    title: "Video Production",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Campaign video scripting", "Storyboarding", "Video editing", "Voiceover production"]
  },
  {
    title: "Paid Advertising",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Facebook & Instagram ads", "TikTok ads", "Google/Youtube ads", "Ad funnel optimization"]
  },
  {
    title: "Email Marketing & Automation",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Pre-launch sequences", "Launch announcement emails", "Supporter retention emails", "Upsell/downsell flows"]
  },
  {
    title: "Audience Outreach & Community Building",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Influencer outreach", "Affiliate marketing setup", "Community engagement (Discord, Telegram)", "Referral campaigns"]
  },
  {
    title: "Campaign Management (Live Phase)",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Daily campaign optimisation", "Update posting", "Audience & supporter management", "Stretch goal planning"]
  },
  {
    title: "Post-Campaign Services",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Fulfillment strategy", "Backer surveys", "Upsell campaigns", "Transition to eCommerce"]
  }
];

function CrowdfundingServicesSection() {
  const doubled = [...SERVICES, ...SERVICES];

  return (
    <section className="crowd-services reveal" id="crowd-services">
      <div className="crowd-services-head">
        <p className="eyebrow">What we do</p>
        <h2>Campaign Marketing Services</h2>
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
