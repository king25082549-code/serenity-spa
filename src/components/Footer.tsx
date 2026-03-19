import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Logo size={36} textColor="text-white" className="mb-4" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}. Your sanctuary of peace and rejuvenation in
              the heart of Abu Dhabi.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-gold uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-primary-light transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-gold uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blog", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-gold uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-light mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-light shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-light shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-white/60 hover:text-primary-light transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary-light mt-0.5 shrink-0" />
                <div className="text-sm text-white/60">
                  <p>Everyday: {siteConfig.openingHours.everyday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              src={siteConfig.googleMapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
