import React, { useState } from "react";

const FAQS = [
  {
    q: "How quickly can we start after payment?",
    a: "After payment confirmation, we usually begin onboarding within 1-2 business days and align your goals, timelines, and deliverables."
  },
  {
    q: "Do you work with both product founders and authors?",
    a: "Yes. We support product launches and book marketing campaigns, with strategy and execution tailored to each audience."
  },
  {
    q: "Can I request revisions during the project?",
    a: "Absolutely. Each package includes revision rounds, and higher-tier plans include more flexible ongoing support."
  },
  {
    q: "How do I contact customer support?",
    a: "You can reach us at hello@fundoramedia.com. For faster response, use the subject line: Customer Support Request."
  },
  {
    q: "Do you offer custom plans for unique campaigns?",
    a: "Yes. If your goals do not fit a standard package, we can prepare a custom scope and pricing proposal."
  }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section reveal" id="faq">
      <div className="faq-inner">
        <div className="faq-head">
          <p className="eyebrow">FAQ</p>
          <h2>Answers before you launch</h2>
          <p>Quick answers to common questions about onboarding, support, and delivery.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? "-" : "+"}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
