import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.businessName}`,
  description: "Get in touch with us. Book your appointment, ask questions, or visit our spa.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out to book or ask any questions."
        image="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1920&q=80"
        height="medium"
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <AnimatedSection>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                  Get in Touch
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-8">
                  We are Here for You
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-sm flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Address</h3>
                      <p className="text-sm text-foreground/60">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-sm flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-sm flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cream rounded-sm flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Opening Hours</h3>
                      <p className="text-sm text-foreground/60">
                        Everyday: {siteConfig.openingHours.everyday}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white px-6 py-3.5 text-sm font-medium tracking-wider uppercase transition-colors"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3.5 text-sm font-medium tracking-wider uppercase transition-colors"
                  >
                    <Phone size={18} />
                    Call Us
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="bg-cream p-8 md:p-12 rounded-sm">
                  <h3 className="text-xl font-bold tracking-wider uppercase text-primary-dark mb-6">
                    Send Us a Message
                  </h3>
                  <ContactForm showCountry />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="w-full h-96 rounded-sm overflow-hidden">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
