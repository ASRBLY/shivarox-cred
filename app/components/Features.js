"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Lightning Fast",
    description:
      "Experience near‑instant load times and fluid animations on every device.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-primary mb-4"
      >
        <polyline points="13 2 3 14 12 14 11 22 21 10 13 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Built Secure",
    description:
      "Your data is protected with enterprise‑grade encryption and best practices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-primary mb-4"
      >
        <path d="M12 2l7 4v6c0 5.55-3.84 10.74-9 12C5.84 22.74 2 17.55 2 12V6l10-4z" />
      </svg>
    ),
  },
  {
    title: "Crafted Design",
    description:
      "Enjoy an interface that feels as good as it looks. Precision‑crafted for you.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-10 h-10 text-primary mb-4"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polygon points="2 12 12 17 22 12 12 7 2 12" />
        <polygon points="2 17 12 22 22 17 12 12 2 17" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Designed for Tomorrow
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="p-8 bg-surface rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              {feat.icon}
              <h3 className="text-2xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-400">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}