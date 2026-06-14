import { Metadata } from "next";
import { PracticeAreaDetailContent } from "./PracticeAreaDetailContent";
import { practiceAreasData } from "@/lib/validations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practiceAreasData.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreasData.find((a) => a.slug === slug);

  if (!area) {
    return {
      title: "Practice Area Not Found | SueSmart",
    };
  }

  return {
    title: `${area.title} | SueSmart - Legal Services in Kenya`,
    description: area.shortDescription,
  };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = practiceAreasData.find((a) => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-navy mb-4">
            Practice Area Not Found
          </h1>
          <p className="text-navy/70 mb-8">
            The practice area you're looking for doesn't exist.
          </p>
          <a
            href="/practice-areas"
            className="bg-accent-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy transition-colors"
          >
            View All Practice Areas
          </a>
        </div>
      </div>
    );
  }

  return <PracticeAreaDetailContent area={area} />;
}