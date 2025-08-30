"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50K+",
    label: "Satisfied Users",
  },
  {
    value: "120+",
    label: "Countries Served",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-surface text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="text-5xl font-extrabold text-primary mb-2">
                {item.value}
              </div>
              <div className="text-xl text-gray-300">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}