/**
 * Canonical site URL for metadata, robots and sitemap.
 * Set NEXT_PUBLIC_SITE_URL explicitly when deploying to a different domain.
 * Otherwise, production uses the public custom domain rather than Vercel's
 * generated project domain, so social previews point to the shared website.
 */
function withProtocol(value: string): string {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return withProtocol(explicit).replace(/\/$/, "");

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL?.trim()) {
    return withProtocol(process.env.VERCEL_URL.trim()).replace(/\/$/, "");
  }

  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://www.avielkarisservices.com";
}

export const SITE_URL = resolveSiteUrl();
