import type { Metadata } from "next";
import { UsaStudyPage } from "@/components/study-abroad/usa-study";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent.usa;

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function UsaPage() {
  return <UsaStudyPage />;
}
