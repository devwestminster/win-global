import type { CmsProvider } from "./types";

export const staticCmsProvider: CmsProvider = {
  async getLatestResources() {
    return [];
  },
};
