import type { Metadata } from "next";
import { headers } from "next/headers";
import MathBenchDetailClient from "./MathBenchDetailClient";

const title = "MathBench — Zilong Zheng";
const description = "A bilingual, five-stage benchmark for evaluating the theory and application proficiency of large language models in mathematics.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/academic/mathbench-structure.png`;
  return {
    title,
    description,
    openGraph: { title, description, type: "article", images: [{ url: image, alt: "MathBench hierarchical mathematics benchmark" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function MathBenchPage() {
  return <MathBenchDetailClient />;
}
