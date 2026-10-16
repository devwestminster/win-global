import "server-only";
import { staticCmsProvider } from "./static-provider";
import { wordpressCmsProvider } from "./wordpress-provider";

export type { CmsProvider, ResourceSummary } from "./types";

export const cms = process.env.WORDPRESS_API_URL
  ? wordpressCmsProvider
  : staticCmsProvider;
