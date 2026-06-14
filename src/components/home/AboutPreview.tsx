"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";

export function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-red rounded-lg" />
              <div className="relative bg-navy rounded-lg p-8 h-full min-h-[400px] flex flex-col justify-center">
                <span className="text-accent-red text-6xl font-heading font-bold mb-4">
                  15+
                </span>
                <h3 className="text-white text-2xl font-heading font-bold mb-2">
                  Years of Excellence
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Since our founding, we have been committed to providing exceptional
                  legal services with integrity and dedication.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
              About SueSmart
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
              Trusted Legal Partners in Kenya
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-6">
              SueSmart is a premier law firm based in Nairobi, Kenya, specializing in
              commercial real estate, family law, commercial litigation, and products
              liability. Our team of experienced attorneys is dedicated to delivering
              justice with excellence and integrity.
            </p>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              We believe that everyone deserves access to quality legal representation.
              Our mission is to provide personalized, effective legal solutions that
              protect our clients' interests and achieve the best possible outcomes.
            </p>
            <Link href="/about">
              <Button
                variant="secondary"
                className="bg-navy text-white hover:bg-accent-red px-8 py-3"
              >
                Learn More About Us
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}