import React from "react";
import { Link } from "react-router-dom";
import LazyBackground from "./LazyBackground";

const SERVICES = [
  {
    title: "Launch Strategy & Planning",
    image: "/hero-fund-2.webp",
    items: ["Market research & validation", "Launch roadmap creation", "Pricing & target planning", "Offer tier structuring"]
  },
  {
    title: "Brand Page Creation",
    image: "/hero-fund-1.webp",
    items: ["Landing page design", "Copywriting (story, headlines)", "Visual layout optimization", "Conversion-focused structure"]
  },
  {
    title: "Pre-Launch Audience Building",
    image: "/svc-fund-3.webp",
    items: ["Email list building", "Lead generation ads", "Waitlist & early access setup", "Hype-building strategy"]
  },
  {
    title: "Video Production",
    image: "/svc-fund-4.webp",
    items: ["Brand video scripting", "Storyboarding", "Video editing", "Voiceover production"]
  },
  {
    title: "Paid Advertising",
    image: "/hero-fund-3.webp",
    items: ["Facebook & Instagram ads", "TikTok ads", "Google & YouTube ads", "Ad funnel optimization"]
  },
  {
    title: "Email Sequences & Automation",
    image: "/svc-fund-6.webp",
    items: ["Pre-launch sequences", "Launch announcement emails", "Customer retention emails", "Upsell & follow-up flows"]
  },
  {
    title: "Audience Outreach & Community Building",
    image: "/svc-fund-7.webp",
    items: ["Influencer outreach", "Partner referral setup", "Community engagement (Discord, Telegram)", "Referral programmes"]
  },
  {
    title: "Live Campaign Management",
    image: "/svc-fund-8.webp",
    items: ["Daily performance optimisation", "Content & update posting", "Audience & buyer management", "Stretch goal planning"]
  },
  {
    title: "Post-Launch Services",
    image: "/svc-fund-9.webp",
    items: ["Fulfilment strategy", "Customer surveys", "Upsell promotions", "Transition to eCommerce"]
  }
];

function CrowdfundingServicesSection() {
  const carouselServices = [...SERVICES, ...SERVICES];

  return (
    <section className="crowd-services reveal" id="crowd-services">
      <div className="crowd-services-head">
        <p className="eyebrow">What we do</p>
        <h2>Campaign Launch Services</h2>
      </div>

      <div className="service-carousel">
        <div className="service-track">
          {carouselServices.map((service, index) => (
            <article className="service-card" key={`${service.title}-${index}`} aria-hidden={index >= SERVICES.length}>
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
                    <li key={item}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="#065F46" opacity="0.12"/>
                        <path d="M3.5 6.5l2 2 4-4" stroke="#065F46" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  className="service-cta"
                  to={`/packages?service=${encodeURIComponent(service.title)}`}
                  state={{ selectedService: service.title }}
                  tabIndex={index >= SERVICES.length ? -1 : 0}
                >
                  Get this service
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CrowdfundingServicesSection;
