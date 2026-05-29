import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { TABS } from "../data/constants";
import { fetchPublishedPosts, fetchPostComments, addComment, likePost, trackEvent } from "../services/api";

function renderPostContent(content, excerpt) {
  if (!content) return <p className="blog-post-content">{excerpt || "Post content coming soon."}</p>;

  const hasHtmlTag = /<\/?[a-z][\s\S]*>/i.test(content);
  if (!hasHtmlTag) return <p className="blog-post-content">{content}</p>;

  return <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: content }} />;
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getLikedPosts() {
  try { return JSON.parse(localStorage.getItem("fundora_liked") || "[]"); } catch { return []; }
}
function setLikedPosts(ids) {
  localStorage.setItem("fundora_liked", JSON.stringify(ids));
}

function BlogPostPage() {
  const { slugOrId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentForm, setCommentForm] = useState({ author: "", body: "" });
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [commentError, setCommentError] = useState("");

  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [liking, setLiking] = useState(false);

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
    setLikeCount(post.likes || 0);
    setLiked(getLikedPosts().includes(String(post.id)));

    setCommentsLoading(true);
    fetchPostComments(post.id)
      .then(setComments)
      .catch(() => setComments([]))
      .finally(() => setCommentsLoading(false));
  }, [post, slugOrId]);

  async function handleLike() {
    if (liking || !post) return;
    if (liked) {
      const updated = getLikedPosts().filter((id) => id !== String(post.id));
      setLikedPosts(updated);
      setLiked(false);
      setLikeCount((c) => Math.max(0, c - 1));
      return;
    }
    setLiking(true);
    try {
      const result = await likePost(post.id);
      setLikeCount(result.likes);
      const updated = [...getLikedPosts(), String(post.id)];
      setLikedPosts(updated);
      setLiked(true);
    } catch {
      // silent
    } finally {
      setLiking(false);
    }
  }

  async function handleCommentSubmit(e) {
    e.preventDefault();
    if (!commentForm.author.trim() || !commentForm.body.trim()) return;
    setCommentSubmitting(true);
    setCommentError("");
    try {
      const newComment = await addComment(post.id, commentForm);
      setComments((prev) => [newComment, ...prev]);
      setCommentForm({ author: "", body: "" });
    } catch {
      setCommentError("Failed to post comment. Please try again.");
    } finally {
      setCommentSubmitting(false);
    }
  }

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
            <>
              <article className="blog-post-detail">
                {post.imageUrl ? (
                  <img
                    className="blog-post-hero-image"
                    src={post.imageUrl}
                    alt={post.title || "Blog post image"}
                  />
                ) : null}
                {post.secondaryImageUrl ? (
                  <img
                    className="blog-post-hero-image blog-post-secondary-image"
                    src={post.secondaryImageUrl}
                    alt={`${post.title || "Blog post"} – secondary image`}
                  />
                ) : null}
                <span className="blog-soon-chip">{post.status || "published"}</span>
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-meta">By {post.author || "Fundora Team"}</p>
                {renderPostContent(post.content, post.excerpt)}
              </article>

              {/* Likes */}
              <div className="blog-post-likes">
                <button
                  type="button"
                  className={`blog-like-btn${liked ? " blog-like-btn--liked" : ""}`}
                  onClick={handleLike}
                  disabled={liking}
                  aria-label={liked ? "Unlike this post" : "Like this post"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {likeCount > 0 ? <span>{likeCount}</span> : null}
                  <span>{liked ? "Unlike" : "Like"}</span>
                </button>
              </div>

              {/* Comments */}
              <div className="blog-post-comments">
                <h3 className="blog-comments-title">
                  Comments{comments.length > 0 ? ` (${comments.length})` : ""}
                </h3>

                <form className="blog-comment-form" onSubmit={handleCommentSubmit}>
                  <input
                    className="blog-comment-input"
                    type="text"
                    placeholder="Your name"
                    value={commentForm.author}
                    onChange={(e) => setCommentForm((p) => ({ ...p, author: e.target.value }))}
                    required
                    maxLength={80}
                  />
                  <textarea
                    className="blog-comment-input blog-comment-textarea"
                    placeholder="Write a comment…"
                    value={commentForm.body}
                    onChange={(e) => setCommentForm((p) => ({ ...p, body: e.target.value }))}
                    required
                    rows={3}
                    maxLength={1000}
                  />
                  {commentError ? <p className="blog-comment-error">{commentError}</p> : null}
                  <button type="submit" className="blog-comment-submit" disabled={commentSubmitting}>
                    {commentSubmitting ? "Posting…" : "Post comment"}
                  </button>
                </form>

                {commentsLoading ? (
                  <p className="blog-comment-empty">Loading comments…</p>
                ) : comments.length === 0 ? (
                  <p className="blog-comment-empty">No comments yet. Be the first!</p>
                ) : (
                  <ul className="blog-comment-list">
                    {comments.map((c) => (
                      <li key={c.id || c._id} className="blog-comment">
                        <div className="blog-comment-header">
                          <span className="blog-comment-author">{c.author}</span>
                          <span className="blog-comment-time">{timeAgo(c.createdAt)}</span>
                        </div>
                        <p className="blog-comment-body">{c.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPostPage;
