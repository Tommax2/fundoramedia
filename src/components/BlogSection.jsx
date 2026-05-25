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
            Perspectives on publishing, marketing, and the art of getting your story heard.
          </p>
        </div>

        {loading ? (
          <div className="card"><p style={{ color: "#9db0a4" }}>Loading blog posts...</p></div>
        ) : posts.length === 0 ? (
          <p style={{ color: "#9db0a4" }}>Our first story is brewing — check back soon.</p>
        ) : (
          <div className="blog-preview-grid blog-preview-grid--multi">
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
                  <div className="blog-preview-emoji">New</div>
                  <span className="blog-soon-chip">{post.status}</span>
                </div>
                <span className="blog-preview-topic">By {post.author}</span>
                <p className="blog-preview-title">{post.title}</p>
                <p className="blog-preview-summary">{post.excerpt || "No excerpt provided."}</p>
                <button
                  className="blog-preview-read"
                  type="button"
                  onClick={() => {
                    trackEvent({ type: "post_click", path: `/blog/${post.slug || post.id}`, postId: post.id });
                    navigate(`/blog/${post.slug || post.id}`);
                  }}
                >
                  Read full post &rarr;
                </button>
              </article>
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <button
              className="blog-preview-read"
              type="button"
              onClick={() => navigate("/blog")}
            >
              View all posts &rarr;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogSection;
