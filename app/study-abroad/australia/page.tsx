import type { Metadata } from "next";
import { AustraliaStudyPage } from "@/components/study-abroad/australia-study";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent.australia;

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function AustraliaPage() {
  return <AustraliaStudyPage />;
}
