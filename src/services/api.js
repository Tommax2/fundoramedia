const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4100";

function resolveAssetUrl(rawUrl) {
  if (!rawUrl) return "";
  if (/^https?:\/\//i.test(rawUrl)) return rawUrl;
  if (rawUrl.startsWith("//")) return `https:${rawUrl}`;

  const normalized = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
  return `${API_BASE}${normalized}`;
}

function extractImageFromContent(content = "") {
  const match = String(content).match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || "";
}

function normalizePost(post) {
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
  };
}

export async function fetchPublishedPosts() {
  const response = await fetch(`${API_BASE}/api/posts?published=true`);
  if (!response.ok) throw new Error("Failed to load blog posts");
  const posts = await response.json();
  return Array.isArray(posts) ? posts.map(normalizePost) : [];
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
