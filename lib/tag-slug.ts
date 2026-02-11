/**
 * Slugify tag for URL-safe paths (no spaces or encoded chars).
 * Avoids 404s on static export where hosts decode URLs before file lookup.
 */
export function tagToSlug(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Resolve URL slug back to the canonical tag name from the list.
 */
export function slugToTag(slug: string, allTags: string[]): string | null {
  const normalized = slug.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return allTags.find((t) => tagToSlug(t) === normalized) ?? null;
}
