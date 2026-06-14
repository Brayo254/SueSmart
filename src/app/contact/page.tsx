import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | SueSmart - Premier Legal Services in Kenya",
  description:
    "Contact SueSmart for expert legal services. Schedule a free consultation with our experienced attorneys in Nairobi, Kenya.",
};

export default function ContactPage() {
  return <ContactContent />;
}