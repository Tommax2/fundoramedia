import React, { useState } from "react";

const PREVIEW_POSTS = [
  {
    icon: "GS",
    topic: "Growth Strategy",
    title: "Building an audience before your product launch",
    summary: "Why pre-launch community building is the single biggest lever most founders ignore.",
    readTime: "6 min read",
    soon: true
  },
  {
    icon: "PA",
    topic: "Paid Ads",
    title: "How we hit 4.3x ROAS on a $2,000 launch budget",
    summary: "A step-by-step breakdown of the ad strategy that drove our best-performing campaign.",
    readTime: "8 min read",
    soon: true
  },
  {
    icon: "BM",
    topic: "Book Marketing",
    title: "Amazon KDP launch checklist: what to do in the first 7 days",
    summary: "The exact sequence we use with every author client to maximize ranking and early reviews.",
    readTime: "5 min read",
    soon: true
  }
];

function BlogTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="blog-teaser reveal">
      <div className="blog-teaser-inner">
        <div className="blog-teaser-head">
          <span className="blog-soon-pill">Launching soon</span>
          <h2 className="blog-teaser-title">The Fundora Blog</h2>
          <p className="blog-teaser-sub">
            Expert guides, client stories, and strategies for launch success and book marketing growth - written by people who've done it.
          </p>
        </div>

        <div className="blog-notify-card">
          <h3>Get notified when we go live</h3>
          <p>Be first to read new guides and case studies.</p>
          <form className="blog-notify-form" onSubmit={handleNotify}>
            {submitted ? (
              <p className="blog-notify-success">You're on the list! We'll let you know when we launch.</p>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Notify me</button>
              </>
            )}
          </form>
        </div>

        <div className="blog-coming-up">Coming up</div>

        <div className="blog-preview-grid">
          {PREVIEW_POSTS.map((post) => (
            <article key={post.title} className="blog-preview-card">
              <div className="blog-preview-top">
                <div className="blog-preview-emoji">{post.icon}</div>
                {post.soon && <span className="blog-soon-chip">Soon</span>}
              </div>
              <span className="blog-preview-topic">{post.topic}</span>
              <p className="blog-preview-title">{post.title}</p>
              <p className="blog-preview-summary">{post.summary}</p>
              <p className="blog-preview-read">{post.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogTeaser;
