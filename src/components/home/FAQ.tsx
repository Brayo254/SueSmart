"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { generalFAQs } from "@/lib/validations";

export function FAQ() {
  return (
    <section className="py-20 bg-white">
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-navy/70 text-lg">
            Find answers to the most common questions about our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="space-y-4">
            {generalFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-cream rounded-lg border-0 px-6"
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
  );
}