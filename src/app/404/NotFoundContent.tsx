"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiHome, FiSearch } from "react-icons/fi";

export function NotFoundContent() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Large 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="font-heading text-[150px] sm:text-[200px] font-bold text-accent-red leading-none">
              404
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 text-lg max-w-2xl mx-auto mb-12"
          >
            The page you're looking for doesn't exist or has been moved. Let us help
            you find what you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button className="bg-accent-red hover:bg-white hover:text-navy text-white px-8 py-3 text-lg">
                <FiHome className="mr-2" />
                Go Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 text-lg"
              >
                Contact Us
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <p className="text-white/50 text-sm mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/practice-areas"
                className="text-white/70 hover:text-accent-red transition-colors"
              >
                Practice Areas
              </Link>
              <Link
                href="/about"
                className="text-white/70 hover:text-accent-red transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="text-white/70 hover:text-accent-red transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-accent-red transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-1/4 left-10 w-32 h-32 border border-white rounded-full"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-1/4 right-10 w-48 h-48 border border-white rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}