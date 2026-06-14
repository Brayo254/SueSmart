"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export function CTA() {
  return (
    <section className="py-20 bg-accent-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:30px_30px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Legal Help?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Schedule your free consultation today. Our experienced attorneys are
              ready to help you navigate your legal challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-accent-red hover:bg-navy hover:text-white px-8 py-3 text-lg"
              >
                Contact Us Now
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+254700000000">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-accent-red px-8 py-3 text-lg"
              >
                <FiPhone className="mr-2" />
                Call +254 700 000 000
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}