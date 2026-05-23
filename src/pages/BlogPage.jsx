import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPublishedPosts, trackEvent } from "../services/api";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { TABS } from "../data/constants";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("book");
  const navigate = useNavigate();

  useEffect(() => {
    trackEvent({ type: "page_view", path: "/blog" });
    fetchPublishedPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-shell">
      <div className="ambient a1" />
      <div className="ambient a2" />
      <TopNav
        tabs={TABS}
        tab={tab}
        onTabChange={(id) => { setTab(id); navigate("/"); }}
        onLaunch={() => navigate("/")}
      />

      <section className="blog-teaser" style={{ paddingTop: "7rem" }}>
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
              {posts.map((post) => (
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
                    onClick={() => {
                      trackEvent({ type: "post_click", path: `/blog/${post.slug || post.id}`, postId: post.id });
                      navigate(`/blog/${post.slug || post.id}`);
                    }}
                  >
                    Read more
                  </button>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;
