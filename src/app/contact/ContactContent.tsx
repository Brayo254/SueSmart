"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMapPin,
    title: "Office Location",
    details: [
      "Suite 401, Kenya House Building",
      "Koinange Street, Nairobi",
      "Kenya",
    ],
  },
  {
    icon: FiPhone,
    title: "Phone",
    details: ["+254 700 000 000", "+254 20 000 0000"],
  },
  {
    icon: FiMail,
    title: "Email",
    details: ["info@suesmart.co.ke", "legal@suesmart.co.ke"],
  },
  {
    icon: FiClock,
    title: "Office Hours",
    details: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 1:00 PM",
      "Sunday: Closed",
    ],
  },
];

export function ContactContent() {
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
              Contact Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              We're here to help with your legal needs. Reach out to schedule a
              consultation or ask any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-accent-red" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-navy/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-navy rounded-lg p-8 h-full min-h-[500px] flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-white mb-6">
                  Visit Our Office
                </h3>
                <div className="flex-1 bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FiMapPin className="text-accent-red mx-auto mb-4" size={48} />
                    <p className="text-white/80">Map integration placeholder</p>
                    <p className="text-white/60 text-sm mt-2">
                      Suite 401, Kenya House Building<br />
                      Koinange Street, Nairobi
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-white/60 text-sm">Nearest Landmark</p>
                    <p className="text-white font-medium">Kenya Archives</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-white/60 text-sm">Parking</p>
                    <p className="text-white font-medium">Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}