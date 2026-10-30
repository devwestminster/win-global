import type { Metadata } from "next";
import { MalaysiaStudyPage } from "@/components/study-abroad/malaysia-syudy";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent.malaysia;

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function MalaysiaPage() {
  return <MalaysiaStudyPage />;
}
