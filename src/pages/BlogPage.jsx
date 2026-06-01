import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPublishedPosts, trackEvent } from "../services/api";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import { TABS } from "../data/constants";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(
    () => localStorage.getItem("fundora_tab") || "book",
  );
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    trackEvent({ type: "page_view", path: "/blog" });
    fetchPublishedPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const featured = posts[0];
  const nonFeaturedPosts = posts.slice(1);
  const isCarousel = nonFeaturedPosts.length > 3;

  const scrollCarousel = (dir) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector(".blog-preview-card");
    if (!card) return;
    carouselRef.current.scrollBy({
      left: dir * (card.offsetWidth + 12),
      behavior: "smooth",
    });
  };

  return (
    <div className="app-shell">
      <div className="ambient a1" />
      <div className="ambient a2" />
      <TopNav
        tabs={TABS}
        tab={tab}
        onTabChange={(id) => {
          setTab(id);
          localStorage.setItem("fundora_tab", id);
          navigate("/");
        }}
        onLaunch={() => navigate("/")}
      />

      <section className="blog-teaser blog-page-section">
        <div className="blog-teaser-inner blog-page-inner">
          <div className="blog-teaser-head">
            <span className="blog-soon-pill">Live now</span>
            <h2 className="blog-teaser-title">The Fundora Blog</h2>
            <p className="blog-teaser-sub">
              Perspectives on publishing, campaign launches, and the art of getting your
              story heard.
            </p>
          </div>

          {loading ? (
            <div className="card">
              <p style={{ color: "#9db0a4" }}>Loading blog posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <p style={{ color: "#9db0a4" }}>
              Our first story is brewing — check back soon.
            </p>
          ) : (
            <>
              {featured && (
                <article className="blog-preview-card blog-preview-featured">
                  <span className="blog-featured-badge">Featured</span>
                  <div className="blog-preview-image-wrap">
                    {featured.imageUrl ? (
                      <img
                        className="blog-preview-image blog-featured-image"
                        src={featured.imageUrl}
                        alt={featured.title || "Featured blog post image"}
                        loading="eager"
                      />
                    ) : (
                      <div className="blog-preview-image blog-preview-image-fallback blog-featured-image">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="blog-preview-top">
                    <div className="blog-preview-emoji">Top</div>
                    <span className="blog-soon-chip">{featured.status}</span>
                  </div>
                  <span className="blog-preview-topic">
                    By {featured.author}
                  </span>
                  <p className="blog-preview-title">{featured.title}</p>
                  <p className="blog-preview-summary">
                    {featured.excerpt || "No excerpt provided."}
                  </p>
                  <div className="blog-preview-meta">
                    <span className="blog-preview-views">
                      {featured.views || 0} views
                    </span>
                    <span className="blog-preview-likes">
                      {featured.likes || 0} likes
                    </span>
                  </div>
                  <button
                    className="blog-preview-read"
                    type="button"
                    onClick={() => {
                      trackEvent({
                        type: "post_click",
                        path: `/blog/${featured.slug || featured.id}`,
                        postId: featured.id,
                      });
                      navigate(`/blog/${featured.slug || featured.id}`);
                    }}
                  >
                    Read featured post
                  </button>
                </article>
              )}

              {nonFeaturedPosts.length > 0 &&
                (isCarousel ? (
                  <div className="blog-carousel-wrap">
                    <button
                      className="blog-carousel-btn"
                      type="button"
                      aria-label="Previous posts"
                      onClick={() => scrollCarousel(-1)}
                    >
                      &#8249;
                    </button>
                    <div className="blog-preview-carousel" ref={carouselRef}>
                      {nonFeaturedPosts.map((post) => (
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
                              <div className="blog-preview-image blog-preview-image-fallback">
                                No image
                              </div>
                            )}
                          </div>
                          <div className="blog-preview-top">
                            <div className="blog-preview-emoji">New</div>
                            <span className="blog-soon-chip">
                              {post.status}
                            </span>
                          </div>
                          <span className="blog-preview-topic">
                            By {post.author}
                          </span>
                          <p className="blog-preview-title">{post.title}</p>
                          <p className="blog-preview-summary">
                            {post.excerpt || "No excerpt provided."}
                          </p>
                          <div className="blog-preview-meta">
                            <span className="blog-preview-views">
                              {post.views || 0} views
                            </span>
                            <span className="blog-preview-likes">
                              {post.likes || 0} likes
                            </span>
                          </div>
                          <button
                            className="blog-preview-read"
                            type="button"
                            onClick={() => {
                              trackEvent({
                                type: "post_click",
                                path: `/blog/${post.slug || post.id}`,
                                postId: post.id,
                              });
                              navigate(`/blog/${post.slug || post.id}`);
                            }}
                          >
                            Read more
                          </button>
                        </article>
                      ))}
                    </div>
                    <button
                      className="blog-carousel-btn"
                      type="button"
                      aria-label="Next posts"
                      onClick={() => scrollCarousel(1)}
                    >
                      &#8250;
                    </button>
                  </div>
                ) : (
                  <div className="blog-preview-grid blog-preview-grid--multi">
                    {nonFeaturedPosts.map((post) => (
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
                            <div className="blog-preview-image blog-preview-image-fallback">
                              No image
                            </div>
                          )}
                        </div>
                        <div className="blog-preview-top">
                          <div className="blog-preview-emoji">New</div>
                          <span className="blog-soon-chip">{post.status}</span>
                        </div>
                        <span className="blog-preview-topic">
                          By {post.author}
                        </span>
                        <p className="blog-preview-title">{post.title}</p>
                        <p className="blog-preview-summary">
                          {post.excerpt || "No excerpt provided."}
                        </p>
                        <div className="blog-preview-meta">
                          <span className="blog-preview-views">
                            {post.views || 0} views
                          </span>
                          <span className="blog-preview-likes">
                            {post.likes || 0} likes
                          </span>
                        </div>
                        <button
                          className="blog-preview-read"
                          type="button"
                          onClick={() => {
                            trackEvent({
                              type: "post_click",
                              path: `/blog/${post.slug || post.id}`,
                              postId: post.id,
                            });
                            navigate(`/blog/${post.slug || post.id}`);
                          }}
                        >
                          Read more
                        </button>
                      </article>
                    ))}
                  </div>
                ))}
            </>
          )}
        </div>
      </section>

      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default BlogPage;
