import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | SueSmart - Premier Legal Services in Kenya",
  description:
    "Learn about SueSmart's history, mission, and values. Our team of experienced attorneys is dedicated to delivering justice with excellence and integrity.",
};

export default function AboutPage() {
  return <AboutContent />;
}