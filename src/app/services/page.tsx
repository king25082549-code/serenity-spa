import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { services, getCategories } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.businessName}`,
  description: "Explore our range of premium spa and wellness services including massage, facial treatments, and body therapies.",
};

export default function ServicesPage() {
  const categories = getCategories();

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Premium wellness treatments tailored to your needs"
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80"
        height="medium"
      />

      {/* Services by Category */}
      {categories.map((category) => (
        <section key={category} className="py-16 px-4 even:bg-cream">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-primary-dark mb-12 text-center">
                {category}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter((s) => s.category === category)
                .map((service, i) => (
                  <AnimatedSection key={service.slug} delay={i * 0.1}>
                    <Link href={`/services/${service.slug}`} className="group block">
                      <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="relative h-56 overflow-hidden">
                          <div
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                            style={{ backgroundImage: `url(${service.image})` }}
                          />
                          <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />
                          <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1.5 tracking-wider uppercase">
                            {service.price}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-foreground/60 mb-4 leading-relaxed line-clamp-2">
                            {service.shortDescription}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-foreground/50">
                              <Clock size={14} />
                              {service.duration}
                            </div>
                            <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                              Details <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-white text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase mb-6">
            Ready to Book?
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            Contact us today to schedule your appointment or ask about our special packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-dark hover:bg-cream px-8 py-4 text-sm font-medium tracking-widest uppercase transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-primary-dark px-8 py-4 text-sm font-medium tracking-widest uppercase transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
