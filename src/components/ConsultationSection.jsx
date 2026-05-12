import React, { useState } from "react";

function ConsultationSection({ tab }) {
  const isFund = tab === "fund";
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section className="consultation reveal" id={isFund ? "crowd-consultation" : "book-consultation"}>
      <div className="consultation-intro">
        <p className="eyebrow">Free Consultation</p>
        <h2>{isFund ? "Let's plan your launch marketing strategy" : "Let's plan your book growth strategy"}</h2>
        <p>
          Share a few details and our team will reach out with the best next steps, timeline, and budget options.
        </p>
      </div>

      <form className="consultation-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input type="text" name="name" placeholder="Your name" required />
        </label>

        <label>
          Email address
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>

        <label>
          Service needed
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option>{isFund ? "Launch strategy & planning" : "Book launch strategy"}</option>
            <option>{isFund ? "Paid ads management" : "Paid ads for books"}</option>
            <option>{isFund ? "Video production" : "Author branding"}</option>
            <option>Full package support</option>
          </select>
        </label>

        <label>
          Budget range
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Select budget
            </option>
            <option>$100 - $500</option>
            <option>$500 - $2,000</option>
            <option>$2,000 - $5,000</option>
            <option>$5,000+</option>
          </select>
        </label>

        <label className="message-field">
          Project details
          <textarea name="message" rows="4" placeholder="Tell us about your goals..." required />
        </label>

        <button type="submit">Request Consultation</button>

        {submitted && <p className="consultation-success">Thanks, your request has been received. We'll contact you shortly.</p>}
      </form>
    </section>
  );
}

export default ConsultationSection;
