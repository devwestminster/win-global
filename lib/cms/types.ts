export type ResourceSummary = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  } | null;
};

export interface CmsProvider {
  getLatestResources(limit?: number): Promise<ResourceSummary[]>;
}
