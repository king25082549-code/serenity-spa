"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wider text-primary-dark">
              {siteConfig.businessName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm text-primary-dark font-medium"
            >
              <Phone size={16} />
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-primary-dark transition-colors duration-300 rounded-sm"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-warm-white border-t border-secondary/30"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors uppercase py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-secondary/30 pt-4 mt-2 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-primary-dark font-medium"
                >
                  <Phone size={16} />
                  {siteConfig.contact.phone}
                </a>
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 text-sm font-medium tracking-wide text-center hover:bg-primary-dark transition-colors rounded-sm"
                >
                  BOOK NOW
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
