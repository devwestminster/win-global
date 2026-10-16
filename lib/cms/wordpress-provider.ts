import "server-only";
import type { CmsProvider, ResourceSummary } from "./types";

type WordPressResponse = {
  data?: {
    posts?: {
      nodes?: Array<{
        slug?: string;
        title?: string;
        excerpt?: string;
        date?: string;
        categories?: { nodes?: Array<{ name?: string }> };
        featuredImage?: {
          node?: {
            sourceUrl?: string;
            altText?: string;
            mediaDetails?: { width?: number; height?: number };
          };
        };
      }>;
    };
  };
  errors?: Array<{ message?: string }>;
};

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export const wordpressCmsProvider: CmsProvider = {
  async getLatestResources(limit = 3): Promise<ResourceSummary[]> {
    const endpoint = process.env.WORDPRESS_API_URL?.trim();
    if (!endpoint) return [];

    const first = Math.min(Math.max(Math.trunc(limit), 1), 12);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query LatestResources($first: Int!) {
          posts(first: $first, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
            nodes {
              slug title excerpt date
              categories { nodes { name } }
              featuredImage { node { sourceUrl altText mediaDetails { width height } } }
            }
          }
        }`,
        variables: { first },
      }),
      next: { revalidate: 300, tags: ["wordpress-resources"] },
    });

    if (!response.ok) throw new Error(`WordPress request failed (${response.status})`);

    const payload = (await response.json()) as WordPressResponse;
    if (payload.errors?.length) {
      throw new Error(payload.errors.map((error) => error.message).filter(Boolean).join("; "));
    }

    return (payload.data?.posts?.nodes ?? []).flatMap((post) => {
      if (!post.slug || !post.title || !post.date) return [];
      const image = post.featuredImage?.node;
      const width = image?.mediaDetails?.width;
      const height = image?.mediaDetails?.height;

      return [{
        slug: post.slug,
        title: stripHtml(post.title),
        excerpt: stripHtml(post.excerpt ?? ""),
        publishedAt: post.date,
        category: post.categories?.nodes?.[0]?.name ?? "Resource",
        featuredImage: image?.sourceUrl && width && height
          ? { url: image.sourceUrl, alt: image.altText ?? "", width, height }
          : null,
      }];
    });
  },
};
