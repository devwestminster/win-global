import type { NextConfig } from "next";

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

const nextConfig: NextConfig = {
  images: { remotePatterns },
  poweredByHeader: false,
};

export default nextConfig;
