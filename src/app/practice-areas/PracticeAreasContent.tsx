"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { practiceAreasData } from "@/lib/validations";

export function PracticeAreasContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
              Our Expertise
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Practice Areas
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              We specialize in four key areas of law, providing comprehensive legal
              solutions to businesses and individuals across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreasData.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-6xl">{area.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                        {area.title}
                      </h3>
                      <p className="text-navy/70 leading-relaxed">
                        {area.shortDescription}
                      </p>
                    </div>
                  </div>

                  <h4 className="font-heading font-bold text-navy mb-3">
                    Key Services:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {area.detailedContent.services.slice(0, 6).map((service, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-navy/70 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/practice-areas/${area.slug}`}>
                    <Button className="bg-navy hover:bg-accent-red text-white">
                      Learn More
                      <FiArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Practice Area You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our experienced attorneys can help you identify the right legal solution
              for your specific situation.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-accent-red hover:bg-navy hover:text-white px-8 py-3 text-lg">
                Get Free Consultation
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}