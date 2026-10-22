import type { Metadata } from "next";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { topLevelPageContent } from "@/data/page-content";

const content = topLevelPageContent["study-abroad"];

export const metadata: Metadata = {
  title: "Study Abroad",
  description: content.description,
};

export default function StudyAbroadPage() {
  return <ContentPageShell {...content} />;
}
