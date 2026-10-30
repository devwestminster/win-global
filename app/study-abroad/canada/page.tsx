import type { Metadata } from "next";
import { CanadaStudyPage } from "@/components/study-abroad/canada-study";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent.canada;

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function CanadaPage() {
  return <CanadaStudyPage />;
}
