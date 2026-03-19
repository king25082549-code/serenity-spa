import HeroSlider from "@/components/HeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import Link from "next/link";
import { Leaf, Droplets, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { generalFAQ } from "@/data/faq";

export default function Home() {
  const featureIcons: Record<string, React.ReactNode> = {
    leaf: <Leaf size={40} className="text-primary" />,
    droplets: <Droplets size={40} className="text-primary" />,
    sparkles: <Sparkles size={40} className="text-primary" />,
  };

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Brand Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="bg-cream rounded-sm p-8 md:p-12 shadow-sm flex items-center justify-center min-h-[320px]">
                <Logo size={320} className="max-w-full" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                  Orchid Spa
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-6">
                  A Beautiful New Look For Your Wellness Experience
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Enjoy a refined Orchid Spa experience with elegant branding, calming visuals, and a warm welcome from the moment you arrive on the website.
                </p>
                <div
                  className="h-64 rounded-sm bg-cover bg-center shadow-sm"
                  style={{ backgroundImage: `url(${siteConfig.aboutPreview.image})` }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-4">
                The Orchid Spa Experience
              </h2>
              <p className="text-foreground/60 max-w-xl mx-auto">
                Three pillars of wellness that define every treatment we offer
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.15}>
                <div className="bg-white p-10 text-center rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-center mb-6">
                    {featureIcons[feature.icon]}
                  </div>
                  <h3 className="text-xl font-bold tracking-widest uppercase text-primary-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-4">
                Our Services
              </h2>
              <p className="text-foreground/60 max-w-xl mx-auto">
                Discover our range of premium wellness treatments
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.1}>
                <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/40 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-3 py-1.5 tracking-wider uppercase">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4 leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-end">
                      <Link
                        href={`/services/${service.slug}`}
                        className="bg-primary hover:bg-primary-dark text-white px-5 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div
                className="h-80 lg:h-[500px] bg-cover bg-center rounded-sm"
                style={{
                  backgroundImage: `url(${siteConfig.aboutPreview.image})`,
                }}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                  About Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-6">
                  {siteConfig.aboutPreview.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-8">
                  {siteConfig.aboutPreview.description}
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 text-sm font-medium tracking-widest uppercase transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={generalFAQ} />

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-4">
                Get in Touch
              </h2>
              <p className="text-foreground/60">
                Have a question or ready to book? Send us a message and we will get back to you shortly.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
