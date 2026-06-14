"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
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

const socialLinks = [
  { href: "#", icon: FiLinkedin, label: "LinkedIn" },
  { href: "#", icon: FiTwitter, label: "Twitter" },
  { href: "#", icon: FiFacebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-3xl font-bold">
                Sue<span className="text-accent-red">Smart</span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              Premier legal services in Kenya specializing in commercial real estate,
              family law, commercial litigation, and products liability. Your trusted
              partner in legal excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent-red transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-xl font-semibold mb-6 text-accent-red">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-xl font-semibold mb-6 text-accent-red">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-accent-red transition-colors"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-xl font-semibold mb-6 text-accent-red">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-accent-red mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">
                  Suite 401, Kenya House Building<br />
                  Koinange Street, Nairobi<br />
                  Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-accent-red flex-shrink-0" size={20} />
                <a href="tel:+254700000000" className="text-gray-300 hover:text-accent-red transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-accent-red flex-shrink-0" size={20} />
                <a href="mailto:info@suesmart.co.ke" className="text-gray-300 hover:text-accent-red transition-colors">
                  info@suesmart.co.ke
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SueSmart. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-accent-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent-red transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}