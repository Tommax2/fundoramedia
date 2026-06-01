const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4100";

function resolveAssetUrl(rawUrl) {
  if (!rawUrl) return "";
  const value = String(rawUrl);

  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("//")) return `https:${value}`;

  const normalized = value.startsWith("/") ? value : `/${value}`;
  return `${API_BASE}${normalized}`;
}

function extractImageFromContent(content = "") {
  const match = String(content).match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || "";
}

function normalizePost(post = {}) {
  const imageUrl = post.imageUrl
    || post.image
    || post.coverImage
    || post.cover
    || post.thumbnail
    || post.featuredImage
    || extractImageFromContent(post.content)
    || "";

  return {
    ...post,
    imageUrl: resolveAssetUrl(imageUrl),
    secondaryImageUrl: resolveAssetUrl(post.secondaryImageUrl || ""),
  };
}

export async function fetchPublishedPosts() {
  const response = await fetch(`${API_BASE}/api/posts?published=true`);
  if (!response.ok) throw new Error("Failed to load blog posts");
  const posts = await response.json();
  return Array.isArray(posts) ? posts.map((p) => ({ ...normalizePost(p), views: p.views || 0, likes: p.likes || 0 })) : [];
}

export async function fetchPostComments(postId) {
  const response = await fetch(`${API_BASE}/api/posts/${postId}/comments`);
  if (!response.ok) throw new Error("Failed to load comments");
  return response.json();
}

export async function addComment(postId, { author, body }) {
  const response = await fetch(`${API_BASE}/api/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author, body }),
  });
  if (!response.ok) throw new Error("Failed to post comment");
  return response.json();
}

export async function likePost(postId) {
  const response = await fetch(`${API_BASE}/api/posts/${postId}/like`, {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to like post");
  return response.json();
}

export async function incrementPostView(postId) {
  try {
    const response = await fetch(`${API_BASE}/api/posts/${postId}/view`, { method: "POST" });
    if (!response.ok) return null;
    return response.json();
  } catch (_err) {
    return null;
  }
}

export async function trackEvent(payload) {
  try {
    await fetch(`${API_BASE}/api/analytics/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (_error) {
    // analytics failures should not break the site
  }
}
