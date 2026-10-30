import type { Metadata } from "next";
import { SingaporeStudyPage } from "@/components/study-abroad/singapore-study";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent.singapore;

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function SingaporePage() {
  return <SingaporeStudyPage />;
}
