"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${siteConfig.contact.phone}`}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        aria-label="Call us"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
