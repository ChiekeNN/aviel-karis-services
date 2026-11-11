/**
 * Canonical site URL resolution.
 *
 * Priority:
 * 1. NEXT_PUBLIC_SITE_URL — explicit override (custom domain, staging, etc.)
 * 2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL — provided by Vercel at build
 *    time, so production metadata, robots and sitemap are correct without any
 *    manual configuration.
 * 3. localhost — local development.
 */
function withProtocol(value: string): string {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return withProtocol(explicit).replace(/\/$/, "");

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();
  if (vercel) return withProtocol(vercel).replace(/\/$/, "");

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
