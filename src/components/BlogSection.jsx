import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPublishedPosts, trackEvent } from "../services/api";

function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    trackEvent({ type: "page_view", path: "/#blog" });
    fetchPublishedPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const previewPosts = posts.slice(0, 3);

  return (
    <section className="blog-teaser reveal" id="blog">
      <div className="blog-teaser-inner">
        <div className="blog-teaser-head">
          <span className="blog-soon-pill">Live now</span>
          <h2 className="blog-teaser-title">The Fundora Blog</h2>
          <p className="blog-teaser-sub">
            Fresh insights, stories, and growth playbooks published from your admin panel.
          </p>
        </div>

        {loading ? (
          <div className="card"><p>Loading blog posts...</p></div>
        ) : (
          <div className="blog-preview-grid">
            {posts.length === 0 && (
              <p>No published posts yet. Publish one from the admin panel.</p>
            )}
            {previewPosts.map((post) => (
              <article key={post.id} className="blog-preview-card">
                <div className="blog-preview-image-wrap">
                  {post.imageUrl ? (
                    <img
                      className="blog-preview-image"
                      src={post.imageUrl}
                      alt={post.title || "Blog post image"}
                      loading="lazy"
                    />
                  ) : (
                    <div className="blog-preview-image blog-preview-image-fallback">No image</div>
                  )}
                </div>
                <div className="blog-preview-top">
                  <div className="blog-preview-emoji">??</div>
                  <span className="blog-soon-chip">{post.status}</span>
                </div>
                <span className="blog-preview-topic">By {post.author}</span>
                <p className="blog-preview-title">{post.title}</p>
                <p className="blog-preview-summary">{post.excerpt || "No excerpt provided."}</p>
                <button
                  className="blog-preview-read"
                  type="button"
                  onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                >
                  Read full post ->
                </button>
              </article>
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              className="blog-preview-read"
              type="button"
              onClick={() => navigate("/blog")}
            >
              View all posts ->
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogSection;
