import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Users, Award, Home } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.businessName}`,
  description: siteConfig.about.mission,
};

export default function AboutPage() {
  const highlightIcons: Record<string, React.ReactNode> = {
    users: <Users size={36} className="text-primary" />,
    award: <Award size={36} className="text-primary" />,
    home: <Home size={36} className="text-primary" />,
  };

  return (
    <>
      <Hero
        title="About Us"
        subtitle="Discover our story, our passion, and our commitment to your wellness"
        image={siteConfig.about.image}
        height="medium"
      />

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-8">
                A Legacy of Wellness
              </h2>
              <p className="text-foreground/60 leading-relaxed text-lg">
                {siteConfig.about.story}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-cream p-8 md:p-12 rounded-sm text-center">
              <p className="text-foreground/70 leading-relaxed italic text-lg">
                &ldquo;{siteConfig.about.mission}&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-4">
                Why Choose Us
              </h2>
              <p className="text-foreground/60 max-w-xl mx-auto">
                Three reasons our clients trust us with their wellness journey
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.about.highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="bg-white p-10 text-center rounded-sm shadow-sm">
                  <div className="flex justify-center mb-6">
                    {highlightIcons[item.icon]}
                  </div>
                  <h3 className="text-lg font-bold tracking-wider uppercase text-primary-dark mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div
                className="h-80 lg:h-[500px] bg-cover bg-center rounded-sm"
                style={{ backgroundImage: `url(${siteConfig.about.image})` }}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                  Our Commitment
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-6">
                  Your Wellness, Our Priority
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  At {siteConfig.businessName}, every detail matters. From the moment you step through our doors, you are enveloped in an atmosphere of tranquility and care. Our team is dedicated to providing personalized treatments that address your unique needs.
                </p>
                <p className="text-foreground/60 leading-relaxed">
                  We continuously invest in training, technology, and premium products to ensure that every visit exceeds your expectations. Your satisfaction and well-being are the measures of our success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary-dark mb-4">
                Get in Touch
              </h2>
              <p className="text-foreground/60">
                Ready to start your wellness journey? Contact us today.
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
