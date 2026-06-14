"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix: string;
  index: number;
}

function Stat({ value, label, suffix, index }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, { duration: 2000 });
  const displayValue = useTransform(springValue, (val) => Math.round(val));

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, value, springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-heading text-4xl md:text-5xl font-bold text-accent-red mb-2">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-white/80 font-medium">{label}</p>
    </motion.div>
  );
}

const stats = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 500, label: "Cases Won", suffix: "+" },
  { value: 98, label: "Success Rate", suffix: "%" },
  { value: 50, label: "Legal Professionals", suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}