import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { getProject, projectRecords } from "../../project-data";
import ProjectDetailClient from "./ProjectDetailClient";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectRecords.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}${project.cover}`;
  const title = `${project.en.title} — Zilong Zheng`;

  return {
    title,
    description: project.en.summary,
    openGraph: { title, description: project.en.summary, type: "article", images: [{ url: image, alt: project.en.gallery[0].alt }] },
    twitter: { card: "summary_large_image", title, description: project.en.summary, images: [image] },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projectRecords.findIndex((item) => item.slug === slug);
  const nextProject = projectRecords[(index + 1) % projectRecords.length];

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
