"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  showCTA?: boolean;
  height?: "full" | "medium" | "small";
}

export default function Hero({
  title,
  subtitle,
  image,
  showCTA = false,
  height = "medium",
}: HeroProps) {
  const heightClass =
    height === "full"
      ? "min-h-screen"
      : height === "medium"
      ? "min-h-[60vh]"
      : "min-h-[40vh]";

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: image
            ? `url(${image})`
            : `url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-dark/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider uppercase mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Chat LINE / WhatsApp
            </a>
            <Link
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-300"
            >
              Book a Service
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
