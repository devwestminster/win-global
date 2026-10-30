import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const wordpressUrl = process.env.WORDPRESS_API_URL;

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];

try {
  if (wordpressUrl) {
    const url = new URL(wordpressUrl);
    if (url.protocol === "https:" || url.protocol === "http:") {
      remotePatterns.push({
        protocol: url.protocol.slice(0, -1) as "http" | "https",
        hostname: url.hostname,
      });
    }
  }
} catch {
  // The application remains buildable before the CMS URL is configured.
}

const createNextConfig = (phase: string): NextConfig => {
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    // Keep development artifacts separate so `next build` cannot contend with
    // a running dev server for the same lock or output directory.
    distDir: isDevelopmentServer ? ".next-dev" : ".next",
    experimental: {
      cssChunking: {
        type: "graph",
        requestCost: 0,
        weightDistribution: 0.1,
      },
    },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1536, 1920, 2048, 2880, 3840],
      formats: ["image/webp"],
      qualities: [75, 85, 90],
      remotePatterns,
    },
    poweredByHeader: false,
  };
};

export default createNextConfig;
