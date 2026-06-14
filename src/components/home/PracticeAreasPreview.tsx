"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const practiceAreas = [
  {
    slug: "commercial-real-estate",
    title: "Commercial Real Estate",
    description:
      "Expert guidance for property transactions, developments, leasing, and real estate disputes.",
    icon: "🏢",
  },
  {
    slug: "family-law",
    title: "Family Law",
    description:
      "Compassionate support for divorce, custody, adoption, and inheritance matters.",
    icon: "👨‍👩‍👧",
  },
  {
    slug: "commercial-litigation",
    title: "Commercial Litigation",
    description:
      "Skilled advocacy in business disputes, contract breaches, and arbitration proceedings.",
    icon: "⚖️",
  },
  {
    slug: "products-liability",
    title: "Products Liability",
    description:
      "Protecting consumers and manufacturers in product defect claims and recalls.",
    icon: "🛡️",
  },
];

export function PracticeAreasPreview() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Areas of Practice
          </h2>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto">
            We offer comprehensive legal services across four specialized practice areas,
            delivering exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/practice-areas/${area.slug}`}>
                <div className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-red/30 h-full">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">{area.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-accent-red transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-navy/70 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                      <span className="inline-flex items-center text-accent-red font-semibold group-hover:translate-x-2 transition-transform">
                        Learn More <FiArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/practice-areas">
            <button className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-red transition-colors duration-300">
              View All Practice Areas
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}