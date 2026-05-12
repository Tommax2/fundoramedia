import React from "react";

const TESTIMONIALS = [
  {
    name: "Kwame Asante",
    role: "Tech Startup Founder",
    quote: "Fundora handled everything from our product page to our Facebook ads. We exceeded our launch targets by 80% within 3 weeks. Their strategy and execution are genuinely world-class.",
    stars: 5,
    tag: "Launch Marketing"
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
    quote: "As someone with zero marketing experience, having Fundora run the entire promotion system was a game-changer. Professional, responsive, and laser-focused on results.",
    stars: 5,
    tag: "Launch Marketing"
  }
];

function TestimonialsSection() {
  return (
    <section className="testimonials reveal" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-head">
          <p className="eyebrow">Client testimonials</p>
          <h2>Trusted by creators worldwide</h2>
          <p>Real results from real projects. Here's what our clients say about working with us.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
                <span className="testimonial-tag">{t.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
