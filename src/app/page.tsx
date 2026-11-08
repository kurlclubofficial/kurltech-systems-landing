import type { Metadata } from "next";
import ConsultationProcess from "@/components/sections/consultation-process";
import FeatureShowcase from "@/components/sections/feature-showcase";
import HeroShowCase from "@/components/sections/hero-showcase";
import HowWeWork from "@/components/sections/how-we-work";
import ProductSpotlight from "@/components/sections/product-spotlight";
import SolutionShowcase from "@/components/sections/solution-showcase";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Internal Tools for Critical Workflows",
  description:
    "KurlTech Systems builds custom internal tools that simplify operations, connect workflows, and help teams work smarter.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <HeroShowCase />
      <FeatureShowcase />
      <SolutionShowcase />
      <HowWeWork />
      <ProductSpotlight />
      <ConsultationProcess />
    </main>
  );
}
