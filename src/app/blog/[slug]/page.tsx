import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { blogPosts, getBlogBySlug } from "@/data/blog";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.businessName}`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Hero title={post.title} image={post.image} height="medium" />

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-secondary/30">
              <span className="text-xs font-medium tracking-wider uppercase text-primary bg-cream px-3 py-1">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-foreground/50">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1 text-sm text-foreground/50">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-foreground/50">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3
                      key={i}
                      className="text-xl font-bold text-primary-dark mt-8 mb-4"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {paragraph.split("\n").map((line, j) => (
                        <li
                          key={j}
                          className="text-foreground/60 leading-relaxed pl-4 border-l-2 border-primary/30"
                        >
                          {line.replace(/^- /, "").replace(/\*\*/g, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d+\./)) {
                  return (
                    <ol key={i} className="space-y-2 my-4 list-decimal list-inside">
                      {paragraph.split("\n").map((line, j) => (
                        <li key={j} className="text-foreground/60 leading-relaxed">
                          {line.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "")}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-foreground/60 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Back */}
            <div className="mt-12 pt-8 border-t border-secondary/30">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Insights
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 px-4 bg-cream">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-2xl font-bold tracking-wider uppercase text-primary-dark mb-10 text-center">
                More Insights
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherPosts.map((p, i) => (
                <AnimatedSection key={p.slug} delay={i * 0.1}>
                  <Link href={`/blog/${p.slug}`} className="group block">
                    <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url(${p.image})` }}
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">
                          {p.category}
                        </span>
                        <h3 className="font-bold text-primary-dark mt-2 group-hover:text-primary transition-colors line-clamp-2">
                          {p.title}
                        </h3>
                        <p className="text-xs text-foreground/40 mt-2">{p.readTime}</p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
