import type { Metadata } from "next";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { topLevelPageContent } from "@/data/page-content";

const content = topLevelPageContent.scholarships;

export const metadata: Metadata = {
  title: "Scholarships",
  description: content.description,
};

export default function ScholarshipsPage() {
  return <ContentPageShell {...content} />;
}
