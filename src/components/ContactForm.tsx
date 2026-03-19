"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  showCountry?: boolean;
}

export default function ContactForm({ showCountry = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", country: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-foreground/60 mb-2">
            Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-secondary/50 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-foreground/60 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-secondary/50 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="+971 50 123 4567"
          />
        </div>
      </div>

      <div className={showCountry ? "grid grid-cols-1 sm:grid-cols-2 gap-5" : ""}>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-foreground/60 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-secondary/50 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
        {showCountry && (
          <div>
            <label className="block text-xs font-medium tracking-wider uppercase text-foreground/60 mb-2">
              Country
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-secondary/50 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="Your country"
            />
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium tracking-wider uppercase text-foreground/60 mb-2">
          Message *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white border border-secondary/50 rounded-sm text-sm focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle size={16} />
            Message Sent!
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm">Something went wrong. Please try again or contact us directly.</p>
      )}
    </form>
  );
}
