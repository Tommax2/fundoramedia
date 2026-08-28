import React, { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Kwame Asante",
    role: "Tech Startup Founder",
    quote: "Fundora handled everything from our product page to our Facebook ads. We exceeded our launch targets by 80% within 3 weeks. Their strategy and execution are genuinely world-class.",
  },
  {
    name: "Adaeze Okafor",
    role: "Romance Author",
    quote: "My book launch was completely transformed. The branding they created and the email campaign they ran brought in readers I never would have reached on my own. Worth every penny.",
  },
  {
    name: "Marcus Webb",
    role: "Indie Game Developer",
    quote: "As someone with zero launch experience, having Fundora run the entire campaign system was a game-changer. Professional, responsive, and laser-focused on results.",
  },
  {
    name: "Nneka Bello",
    role: "Children's Book Author",
    quote: "Fundora helped us package the story, design the campaign, and reach schools and parents at scale. We sold out our first print run faster than expected."
  },
  {
    name: "Daniel Reyes",
    role: "SaaS Co-founder",
    quote: "Their team rebuilt our launch messaging and ad funnel in one week. Conversion improved immediately, and our acquisition cost kept falling."
  },
  {
    name: "Zainab Ibrahim",
    role: "Personal Finance Creator",
    quote: "Fundora gave our campaign structure, consistency, and clear reporting. Growth finally felt predictable instead of random."
  },
  {
    name: "Liam Ofori",
    role: "Independent Publisher",
    quote: "From author positioning to the promotional rollout, every step felt deliberate. The communication was excellent and the results exceeded our target."
  }
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-quote">{testimonial.quote}</p>
      <div className="testimonial-author">
        <span className="testimonial-name">{testimonial.name}</span>
        <span className="testimonial-role">{testimonial.role}</span>
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
    const intervalId = setInterval(() => {
      const lastIndex = isMobile ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 3;
      setActiveIndex((current) => (current >= lastIndex ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [isMobile]);

  useEffect(() => {
    const lastIndex = isMobile ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 3;
    setActiveIndex((current) => Math.min(current, lastIndex));
  }, [isMobile]);

  const lastIndex = isMobile ? TESTIMONIALS.length - 1 : TESTIMONIALS.length - 3;
  const goPrevious = () => setActiveIndex((current) => current === 0 ? lastIndex : current - 1);
  const goNext = () => setActiveIndex((current) => current >= lastIndex ? 0 : current + 1);

  return (
    <section className="testimonials reveal" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-head">
          <p className="eyebrow">Client testimonials</p>
          <h2>Trusted by creators worldwide</h2>
          <p>Real results from real projects. Here's what our clients say about working with us.</p>
        </div>

        <div className="testimonials-carousel-shell">
          <div className="testimonials-carousel-viewport" aria-live="polite">
            <div
              className="testimonials-carousel-track"
              style={{ transform: `translateX(-${activeIndex * (isMobile ? 100 : 33.333333)}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="testimonials-carousel-slide">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="testimonials-controls">
            <button type="button" className="testimonials-arrow" onClick={goPrevious} aria-label="Previous testimonial">←</button>
            <div className="testimonials-dots" role="tablist" aria-label="Testimonial slides">
              {Array.from({ length: lastIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`testimonials-dot ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === activeIndex}
                  role="tab"
                />
              ))}
            </div>
            <button type="button" className="testimonials-arrow" onClick={goNext} aria-label="Next testimonial">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
