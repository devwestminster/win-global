import type { Metadata } from "next";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { topLevelPageContent } from "@/data/page-content";

const content = topLevelPageContent.blog;

export const metadata: Metadata = {
  title: "Blog",
  description: content.description,
};

export default function BlogPage() {
  return <ContentPageShell {...content} />;
}
