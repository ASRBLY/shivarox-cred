"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-3xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight"
        >
          Elevate Your Digital World with{" "}
          <span className="text-primary">ShivaroX</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300 mb-8"
        >
          Where cutting-edge technology meets refined aesthetics. Join us as we
          craft experiences that inspire.
        </motion.p>
        <motion.a
          href="#features"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block px-8 py-3 bg-primary text-black font-semibold rounded-full shadow-md transition-colors hover:bg-secondary"
        >
          Discover More
        </motion.a>
      </div>
    </section>
  );
}