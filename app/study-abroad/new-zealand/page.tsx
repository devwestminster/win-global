import type { Metadata } from "next";
import { NewZealandStudyPage } from "@/components/study-abroad/new-zealand-study";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent["new-zealand"];

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function NewZealandPage() {
  return <NewZealandStudyPage />;
}
