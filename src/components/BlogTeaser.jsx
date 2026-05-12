import React, { useState } from "react";

const PREVIEW_POSTS = [
  { emoji: "🚀", topic: "Crowdfunding", title: "How to hit your funding goal in the first 48 hours", blur: true },
  { emoji: "📖", topic: "Book Marketing", title: "5 strategies authors use to reach 10,000 readers", blur: true },
  { emoji: "💡", topic: "Creator Economy", title: "Building an audience before you launch your campaign", blur: false },
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
          <span className="blog-soon-pill">Launching Soon</span>
          <h2 className="blog-teaser-title">The Fundora Blog</h2>
          <p className="blog-teaser-sub">
            Expert guides, creator stories, and strategies for crowdfunding success and book marketing growth — written by people who've done it.
          </p>
        </div>

        <div className="blog-preview-grid">
          {PREVIEW_POSTS.map((post) => (
            <div key={post.title} className={`blog-preview-card ${post.blur ? "blog-locked" : ""}`}>
              <div className="blog-preview-emoji">{post.emoji}</div>
              <span className="blog-preview-topic">{post.topic}</span>
              <p className="blog-preview-title">{post.title}</p>
              {post.blur && (
                <div className="blog-lock-overlay">
                  <span>Coming soon</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <form className="blog-notify-form" onSubmit={handleNotify}>
          {submitted ? (
            <p className="blog-notify-success">You're on the list! We'll let you know when we launch.</p>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email to get notified"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Notify me</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default BlogTeaser;
