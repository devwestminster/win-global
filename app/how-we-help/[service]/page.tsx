import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageShell } from "@/components/layout/content-page-shell";
import { servicePageContent } from "@/data/page-content";

type ServiceSlug = keyof typeof servicePageContent;
type ServicePageProps = { params: Promise<{ service: string }> };

function isServiceSlug(slug: string): slug is ServiceSlug {
  return slug in servicePageContent;
}

export function generateStaticParams() {
  return Object.keys(servicePageContent).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  if (!isServiceSlug(service)) return {};

  const content = servicePageContent[service];
  return { title: content.eyebrow, description: content.description };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  if (!isServiceSlug(service)) notFound();

  return <ContentPageShell {...servicePageContent[service]} />;
}
