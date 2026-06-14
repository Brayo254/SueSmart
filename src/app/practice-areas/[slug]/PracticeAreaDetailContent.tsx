"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  detailedContent: {
    overview: string;
    services: string[];
    whyChooseUs: string;
  };
  faqs: { question: string; answer: string }[];
}

interface Props {
  area: PracticeArea;
}

export function PracticeAreaDetailContent({ area }: Props) {
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
              {area.title}
            </span>
            <div className="text-8xl mb-6">{area.icon}</div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {area.title}
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              {area.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
                Overview
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                Comprehensive Legal Solutions
              </h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                {area.detailedContent.overview}
              </p>
              <p className="text-navy/70 text-lg leading-relaxed">
                {area.detailedContent.whyChooseUs}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-heading text-xl font-bold text-navy mb-6">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                  <span className="text-navy/70">
                    Extensive experience in {area.title.toLowerCase()}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                  <span className="text-navy/70">
                    Proven track record of successful cases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                  <span className="text-navy/70">
                    Personalized attention to every client
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-success mt-1 flex-shrink-0" size={20} />
                  <span className="text-navy/70">
                    Competitive pricing and flexible payment options
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.detailedContent.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-cream p-6 rounded-lg"
              >
                <FiCheckCircle className="text-accent-red mb-3" size={24} />
                <h4 className="font-heading font-bold text-navy">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent-red font-semibold text-sm uppercase tracking-wider mb-3">
              Common Questions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion className="space-y-4">
              {area.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border-0 px-6"
                >
                  <AccordionTrigger className="text-navy font-heading text-lg font-semibold hover:no-underline hover:text-accent-red transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy/70 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
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
              Need Legal Help with {area.title}?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experienced {area.title.toLowerCase()}{" "}
              attorneys today.
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