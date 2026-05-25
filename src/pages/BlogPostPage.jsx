import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { TABS } from "../data/constants";
import { fetchPublishedPosts, trackEvent } from "../services/api";

function renderPostContent(content, excerpt) {
  if (!content) return <p className="blog-post-content">{excerpt || "Post content coming soon."}</p>;

  const hasHtmlTag = /<\/?[a-z][\s\S]*>/i.test(content);
  if (!hasHtmlTag) return <p className="blog-post-content">{content}</p>;

  return <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: content }} />;
}

function BlogPostPage() {
  const { slugOrId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const post = useMemo(() => {
    return posts.find((item) => String(item.id) === String(slugOrId) || item.slug === slugOrId);
  }, [posts, slugOrId]);

  useEffect(() => {
    if (!post) return;
    trackEvent({ type: "post_view", path: `/blog/${slugOrId}`, postId: post.id });
  }, [post, slugOrId]);

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

      <section className="blog-teaser" style={{ paddingTop: "7rem" }}>
        <div className="blog-teaser-inner">
          <button
            className="blog-preview-read"
            type="button"
            onClick={() => navigate("/blog")}
            style={{ alignSelf: "flex-start" }}
          >
            Back to all posts
          </button>

          {loading ? (
            <div className="card"><p>Loading post...</p></div>
          ) : !post ? (
            <div className="card"><p>Post not found.</p></div>
          ) : (
            <article className="blog-post-detail">
              {post.imageUrl ? (
                <img
                  className="blog-post-hero-image"
                  src={post.imageUrl}
                  alt={post.title || "Blog post image"}
                />
              ) : null}
              <span className="blog-soon-chip">{post.status || "published"}</span>
              <h1 className="blog-post-title">{post.title}</h1>
              <p className="blog-post-meta">By {post.author || "Fundora Team"}</p>
              {renderPostContent(post.content, post.excerpt)}
            </article>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPostPage;
