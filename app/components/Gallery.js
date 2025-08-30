"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery1.jpg", alt: "Gallery image 1" },
  { src: "/gallery2.jpg", alt: "Gallery image 2" },
  { src: "/gallery3.jpg", alt: "Gallery image 3" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-background text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          A Glimpse into Our World
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="relative h-64">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}