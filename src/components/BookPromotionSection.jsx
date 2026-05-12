import React from "react";
import LazyBackground from "./LazyBackground";

const SERVICES = [
  {
    title: "Pre-Launch Promotion",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Audience building (email list growth)", "Landing page creation", "ARC (Advance Reader Copy) distribution", "Social media teaser campaigns"]
  },
  {
    title: "Book Launch Campaigns",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Amazon/KDP launch strategy", "Bestseller ranking campaigns", "Launch day promotion blasts", "Influencer outreach"]
  },
  {
    title: "Paid Advertising",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Facebook & Instagram ads", "Amazon ads (AMS)", "Google ads for books", "Retargeting campaigns"]
  },
  {
    title: "Content & Social Media Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Social media management", "Book trailers & video content", "Blog posts & SEO articles", "Author branding"]
  },
  {
    title: "Email Marketing",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Newsletter setup & automation", "Launch email sequences", "Lead magnet creation", "Reader engagement campaigns"]
  },
  {
    title: "PR & Media Outreach",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Press releases", "Podcast booking", "Book reviews (blogs, media)", "Author interviews"]
  },
  {
    title: "Book Reviews & Ratings Growth",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=640&q=60&fm=webp",
    items: ["Verified review strategies", "Goodreads promotion", "Reviewer outreach campaigns"]
  },
  {
    title: "Author Website & Funnel Setup",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=60&fm=webp",
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
