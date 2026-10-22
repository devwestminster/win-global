import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { destinationPageContent } from "@/data/page-content";

type DestinationSlug = keyof typeof destinationPageContent;
type DestinationPageProps = { params: Promise<{ destination: string }> };

function isDestinationSlug(slug: string): slug is DestinationSlug {
  return slug in destinationPageContent;
}

export function generateStaticParams() {
  return Object.keys(destinationPageContent).map((destination) => ({ destination }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  const { destination } = await params;
  if (!isDestinationSlug(destination)) return {};

  const content = destinationPageContent[destination];
  return { title: content.eyebrow, description: content.description };
}

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { destination } = await params;
  if (!isDestinationSlug(destination)) notFound();

  return <ContentPageShell {...destinationPageContent[destination]} />;
}
