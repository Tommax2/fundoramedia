import React from "react";
import { Link } from "react-router-dom";
import LazyBackground from "./LazyBackground";

const SERVICES = [
  {
    title: "Strategy & Planning",
    image: "/hero-fund-2.webp",
    items: [
      "Market research & audience analysis",
      "Project positioning & competitive insights",
      "Pricing strategy development",
      "Launch roadmap creation",
      "Offer structuring & optimization"
    ]
  },
  {
    title: "Branding & Creative Design",
    image: "/hero-fund-1.webp",
    items: [
      "Brand identity development",
      "Visual asset creation & design",
      "Storytelling & compelling copywriting",
      "Landing page & sales page optimization",
      "Conversion-focused creative direction"
    ]
  },
  {
    title: "Pre-Launch Audience Building",
    image: "/svc-fund-3.webp",
    items: [
      "Email list building & audience growth",
      "Lead generation campaigns",
      "Early awareness & hype building",
      "Content strategy development"
    ]
  },
  {
    title: "Email Sequences & Automation",
    image: "/svc-fund-6.webp",
    items: [
      "Email sequence creation",
      "Announcement & promotion flows",
      "Audience nurturing & retention",
      "Follow-up & upsell automation"
    ]
  },
  {
    title: "Paid Traffic Management",
    image: "/hero-fund-3.webp",
    items: [
      "Meta, TikTok, Google & YouTube ads",
      "Campaign setup & optimization",
      "Lead generation & retargeting",
      "Performance tracking & reporting"
    ]
  },
  {
    title: "Outreach & Community Building",
    image: "/svc-fund-7.webp",
    items: [
      "Influencer & partnership outreach",
      "Affiliate program setup",
      "Community engagement strategy",
      "Ongoing content & interaction support"
    ]
  },
  {
    title: "Live Campaign Management",
    image: "/svc-fund-8.webp",
    items: [
      "Daily performance monitoring",
      "Real-time optimization",
      "Audience & customer management",
      "Milestone-based growth planning"
    ]
  },
  {
    title: "Post-Launch Support",
    image: "/svc-fund-9.webp",
    items: [
      "Customer feedback & surveys",
      "Retention & repeat purchase strategies",
      "Performance analysis & reporting",
      "Long-term growth recommendations"
    ]
  }
];

function MarketingServicesSection() {
  const carouselServices = [...SERVICES, ...SERVICES];

  return (
    <section className="crowd-services reveal" id="marketing-services">
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
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  className="service-cta"
                  to={`/packages?service=${encodeURIComponent(service.title)}`}
                  state={{ selectedService: service.title }}
                  tabIndex={index >= SERVICES.length ? -1 : 0}
                >
                  Get this service
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketingServicesSection;
