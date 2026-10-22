import type { Metadata } from "next";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { topLevelPageContent } from "@/data/page-content";

const content = topLevelPageContent["how-we-help"];

export const metadata: Metadata = {
  title: "How We Help",
  description: content.description,
};

export default function HowWeHelpPage() {
  return <ContentPageShell {...content} />;
}
