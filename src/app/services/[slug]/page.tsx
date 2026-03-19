import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { Clock, CheckCircle } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${siteConfig.businessName}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero
        title={service.title}
        subtitle={service.shortDescription}
        image={service.image}
        height="medium"
      />

      {/* Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-primary-dark mb-6">
                  About This Treatment
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>

                <h3 className="text-xl font-bold tracking-wider uppercase text-primary-dark mb-4">
                  Benefits
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/60">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="bg-cream p-8 rounded-sm sticky top-28">
                  <h3 className="text-lg font-bold tracking-wider uppercase text-primary-dark mb-6">
                    Treatment Info
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-primary" />
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider">Duration</p>
                        <p className="font-medium text-foreground">{service.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold text-lg">$</span>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider">Price</p>
                        <p className="font-medium text-foreground">{service.price}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 text-sm font-medium tracking-widest uppercase text-center transition-colors"
                    >
                      Book via WhatsApp
                    </a>
                    <a
                      href={siteConfig.contact.lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#06C755] hover:bg-[#05a647] text-white px-6 py-4 text-sm font-medium tracking-widest uppercase text-center transition-colors"
                    >
                      Book via LINE
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="block w-full border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 text-sm font-medium tracking-widest uppercase text-center transition-colors"
                    >
                      Call to Book
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      {service.faq.length > 0 && (
        <div className="bg-cream">
          <FAQ items={service.faq} title={`${service.title} FAQ`} />
        </div>
      )}

      {/* Other Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase text-primary-dark mb-12 text-center">
              Other Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((s, i) => (
                <AnimatedSection key={s.slug} delay={i * 0.1}>
                  <Link href={`/services/${s.slug}`} className="group block">
                    <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${s.image})` }}
                        />
                        <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-primary-dark group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-sm text-foreground/50 mt-1">{s.price}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
