import type { Metadata } from "next";
import { UkStudyPage } from "@/components/study-abroad/uk-study-page";
import { destinationPageContent } from "@/data/page-content";

const content = destinationPageContent["united-kingdom"];

export const metadata: Metadata = {
  title: content.eyebrow,
  description: content.description,
};

export default function UnitedKingdomPage() {
  return <UkStudyPage />;
}
