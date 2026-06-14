import { Hero } from "@/components/home/Hero";
import { PracticeAreasPreview } from "@/components/home/PracticeAreasPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Stats } from "@/components/home/Stats";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SueSmart | Premier Legal Services in Kenya",
  description:
    "Expert legal services in Kenya specializing in commercial real estate, family law, commercial litigation, and products liability. Trusted by businesses and individuals.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreasPreview />
      <AboutPreview />
      <Stats />
      <FAQ />
      <CTA />
    </>
  );
}