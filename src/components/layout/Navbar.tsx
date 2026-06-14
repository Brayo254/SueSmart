"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const practiceAreas = [
  { href: "/practice-areas/commercial-real-estate", label: "Commercial Real Estate" },
  { href: "/practice-areas/family-law", label: "Family Law" },
  { href: "/practice-areas/commercial-litigation", label: "Commercial Litigation" },
  { href: "/practice-areas/products-liability", label: "Products Liability" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-navy">
              Sue<span className="text-accent-red">Smart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.href === "/practice-areas"
                    ? setActiveDropdown("practice")
                    : null
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-medium text-sm uppercase tracking-wide transition-colors duration-200 hover:text-accent-red ${
                    isScrolled || !link.href.includes("/")
                      ? "text-navy"
                      : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>

                {/* Dropdown */}
                {link.href === "/practice-areas" && activeDropdown === "practice" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 border border-gray-100"
                  >
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block px-4 py-2 text-sm text-navy hover:bg-cream hover:text-accent-red transition-colors"
                      >
                        {area.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                variant="default"
                className="bg-accent-red hover:bg-navy text-white font-semibold px-6 py-2"
              >
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-medium text-navy py-2 text-lg border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                  {link.href === "/practice-areas" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {practiceAreas.map((area) => (
                        <Link
                          key={area.href}
                          href={area.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-navy/70 py-1 text-base hover:text-accent-red"
                        >
                          {area.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-accent-red hover:bg-navy text-white font-semibold mt-4">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}