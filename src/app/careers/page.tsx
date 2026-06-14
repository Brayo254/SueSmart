import { Metadata } from "next";
import { CareersContent } from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | SueSmart - Join Our Legal Team",
  description:
    "Join SueSmart's team of experienced attorneys. Explore career opportunities in Kenya's premier law firm.",
};

export default function CareersPage() {
  return <CareersContent />;
}