import React from "react";
import LazyBackground from "./LazyBackground";

const SERVICES = [
  {
    title: "Pre-Launch Promotion",
    image: "/hero-book-2.webp",
    items: ["Audience building (email list growth)", "Landing page creation", "ARC (Advance Reader Copy) distribution", "Social media teaser campaigns"]
  },
  {
    title: "Book Launch Campaigns",
    image: "/hero-book-3.webp",
    items: ["Amazon/KDP launch strategy", "Bestseller ranking campaigns", "Launch day promotion blasts", "Influencer outreach"]
  },
  {
    title: "Paid Advertising",
    image: "/svc-book-3.webp",
    items: ["Facebook & Instagram ads", "Amazon ads (AMS)", "Google ads for books", "Retargeting campaigns"]
  },
  {
    title: "Content & Social Media Marketing",
    image: "/hero-fund-1.webp",
    items: ["Social media management", "Book trailers & video content", "Blog posts & SEO articles", "Author branding"]
  },
  {
    title: "Email Marketing",
    image: "/svc-book-5.webp",
    items: ["Newsletter setup & automation", "Launch email sequences", "Lead magnet creation", "Reader engagement campaigns"]
  },
  {
    title: "PR & Media Outreach",
    image: "/svc-book-6.webp",
    items: ["Press releases", "Podcast booking", "Book reviews (blogs, media)", "Author interviews"]
  },
  {
    title: "Book Reviews & Ratings Growth",
    image: "/svc-book-7.webp",
    items: ["Verified review strategies", "Goodreads promotion", "Reviewer outreach campaigns"]
  },
  {
    title: "Author Website & Funnel Setup",
    image: "/svc-book-8.webp",
    items: ["Author website design", "Sales funnels", "Landing pages", "Conversion optimization"]
  }
];

function BookPromotionSection() {
  const doubled = [...SERVICES, ...SERVICES];

  return (
    <section className="book-services reveal" id="book-services">
      <div className="book-services-head">
        <p className="eyebrow">Book Promotion</p>
        <h2>Subdivision Services</h2>
      </div>

      <div className="service-carousel">
        <div className="service-track reverse">
          {doubled.map((service, index) => (
            <article className={`service-card ${index >= SERVICES.length ? "dup-item" : ""}`} key={`${service.title}-${index}`}>
              <LazyBackground
                className="service-image"
                image={service.image}
                overlay="linear-gradient(130deg, rgba(0,0,0,.12), rgba(0,0,0,.62))"
                fallback="linear-gradient(135deg, #2c2c3b, #161821)"
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

export default BookPromotionSection;
