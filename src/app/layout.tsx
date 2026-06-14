import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SueSmart | Premier Legal Services in Kenya",
  description: "SueSmart offers expert legal services in Kenya specializing in commercial real estate, family law, commercial litigation, and products liability. Trusted by businesses and individuals across Kenya.",
  keywords: ["legal services Kenya", "law firm Kenya", "commercial real estate law", "family law Kenya", "commercial litigation", "products liability", "attorney Kenya", "lawyer Nairobi"],
  authors: [{ name: "SueSmart" }],
  openGraph: {
    title: "SueSmart | Premier Legal Services in Kenya",
    description: "Expert legal services specializing in commercial real estate, family law, commercial litigation, and products liability.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-navy">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}