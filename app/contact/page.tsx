import type { Metadata } from "next";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { topLevelPageContent } from "@/data/page-content";

const content = topLevelPageContent.contact;

export const metadata: Metadata = {
  title: "Contact Us",
  description: content.description,
};

export default function ContactPage() {
  return <ContentPageShell {...content} showConsultationAction={false} />;
}
