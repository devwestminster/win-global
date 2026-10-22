import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const dmSans = localFont({
  src: "../public/fonts/dm-sans-latin.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "100 1000",
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "WIN Education | Study Abroad with a Plan That Fits You",
    template: "%s | WIN Education",
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/assets/icons/faviocn.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "WIN Education | Study Abroad with a Plan That Fits You",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable} data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
