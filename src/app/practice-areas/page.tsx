import { Metadata } from "next";
import { PracticeAreasContent } from "./PracticeAreasContent";

export const metadata: Metadata = {
  title: "Practice Areas | SueSmart - Legal Services in Kenya",
  description:
    "Explore our practice areas: commercial real estate, family law, commercial litigation, and products liability. Expert legal services in Kenya.",
};

export default function PracticeAreasPage() {
  return <PracticeAreasContent />;
}