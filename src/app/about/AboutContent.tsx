"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiArrowRight, FiTarget, FiHeart, FiShield } from "react-icons/fi";

const timeline = [
  {
    year: "2009",
    title: "Foundation",
    description:
      "SueSmart was founded with a vision to provide exceptional legal services to businesses and individuals in Kenya.",
  },
  {
    year: "2014",
    title: "Expansion",
    description:
      "Expanded our practice areas to include commercial litigation and products liability, becoming a full-service law firm.",
  },
  {
    year: "2019",
    title: "Growth",
    description:
      "Opened additional offices in Mombasa and Kisumu, serving clients across Kenya.",
  },
  {
    year: "2024",
    title: "Leadership",
    description:
      "Recognized as one of Kenya's top law firms, with over 500 successful cases and a 98% success rate.",
  },
];

const values = [
  {
    icon: FiShield,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty.",
  },
  {
    icon: FiTarget,
    title: "Excellence",
    description:
      "We strive for excellence in every case, using our expertise to achieve the best outcomes.",
  },
  {
    icon: FiHeart,
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and deliver.",
  },
];

export function AboutContent() {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story & Mission
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Since 2009, SueSmart has been a trusted legal partner for businesses and
              individuals across Kenya. Our commitment to excellence and integrity has
              made us one of the most respected law firms in the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Our Mission
              </h3>
              <p className="text-navy/70 leading-relaxed">
                To provide exceptional legal services that protect our clients' interests
                and achieve the best possible outcomes. We are committed to making quality
                legal representation accessible to everyone in Kenya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">
                Our Vision
              </h3>
              <p className="text-navy/70 leading-relaxed">
                To be the leading law firm in Kenya, recognized for our expertise,
                integrity, and commitment to client success. We aim to set the standard
                for legal excellence in the region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent-red" size={32} />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-navy/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-accent-red/30 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                      <span className="text-accent-red font-heading text-3xl font-bold">
                        {item.year}
                      </span>
                      <h4 className="font-heading text-xl font-bold text-navy mt-2">
                        {item.title}
                      </h4>
                      <p className="text-navy/70 mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-accent-red rounded-full absolute left-1/2 -translate-x-1/2" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experienced attorneys today.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-accent-red hover:bg-navy hover:text-white px-8 py-3 text-lg">
                Get in Touch
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}