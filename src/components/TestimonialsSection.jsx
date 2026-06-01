import React, { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Kwame Asante",
    role: "Tech Startup Founder",
    quote: "Fundora handled everything from our product page to our Facebook ads. We exceeded our launch targets by 80% within 3 weeks. Their strategy and execution are genuinely world-class.",
    stars: 5,
    tag: "Campaign Launch"
  },
  {
    name: "Adaeze Okafor",
    role: "Romance Author",
    quote: "My book launch was completely transformed. The branding they created and the email campaign they ran brought in readers I never would have reached on my own. Worth every penny.",
    stars: 5,
    tag: "Book Marketing"
  },
  {
    name: "Marcus Webb",
    role: "Indie Game Developer",
    quote: "As someone with zero launch experience, having Fundora run the entire campaign system was a game-changer. Professional, responsive, and laser-focused on results.",
    stars: 5,
    tag: "Campaign Launch"
  },
  {
    name: "Nneka Bello",
    role: "Children's Book Author",
    quote: "Fundora helped us package the story, design the campaign, and reach schools and parents at scale. We sold out our first print run faster than expected.",
    stars: 5,
    tag: "Book Marketing"
  },
  {
    name: "Daniel Reyes",
    role: "SaaS Co-founder",
    quote: "Their team rebuilt our launch messaging and ad funnel in one week. Conversion rate improved immediately, and our CAC dropped month over month.",
    stars: 5,
    tag: "Campaign Launch"
  },
  {
    name: "Zainab Ibrahim",
    role: "Personal Finance Creator",
    quote: "I needed structure, consistency, and better campaign reporting. Fundora delivered all three and made growth feel predictable instead of random.",
    stars: 5,
    tag: "Campaign Launch"
  },
  {
    name: "Liam Ofori",
    role: "Publisher",
    quote: "From author positioning to promo rollout, every step felt deliberate. The communication was excellent and the final results exceeded our target.",
    stars: 5,
    tag: "Book Marketing"
  }
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-stars">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </div>
      <p className="testimonial-quote">{testimonial.quote}</p>
      <div className="testimonial-author">
        <span className="testimonial-name">{testimonial.name}</span>
        <span className="testimonial-role">{testimonial.role}</span>
        <span className="testimonial-tag">{testimonial.tag}</span>
      </div>
    </article>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 620px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) return undefined;

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 4200);

    return () => clearInterval(intervalId);
  }, [isMobile]);

  return (
    <section className="testimonials reveal" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-head">
          <p className="eyebrow">Client testimonials</p>
          <h2>Trusted by creators worldwide</h2>
          <p>Real results from real projects. Here's what our clients say about working with us.</p>
        </div>

        {!isMobile ? (
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        ) : (
          <>
            <div className="testimonials-carousel-viewport" aria-live="polite">
              <div
                className="testimonials-carousel-track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="testimonials-carousel-slide">
                    <TestimonialCard testimonial={t} />
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonials-dots" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={t.name}
                  type="button"
                  className={`testimonials-dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === activeIndex}
                  role="tab"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
