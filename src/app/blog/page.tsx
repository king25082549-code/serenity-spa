"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero
        title="Insights"
        subtitle="Wellness tips, guides, and expert advice from our team"
        image="https://images.unsplash.com/photo-1540555700478-4be289fbec6e?auto=format&fit=crop&w=1920&q=80"
        height="medium"
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <AnimatedSection>
                <div className="flex flex-wrap gap-3 mb-10">
                  {blogCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                        activeCategory === cat
                          ? "bg-primary text-white"
                          : "bg-cream text-foreground/60 hover:bg-secondary/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </AnimatedSection>

              {/* Blog Posts */}
              <div className="space-y-8">
                {filtered.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.1}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <article className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                          <div className="relative h-48 sm:h-full overflow-hidden">
                            <div
                              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                              style={{ backgroundImage: `url(${post.image})` }}
                            />
                          </div>
                          <div className="sm:col-span-2 p-6">
                            <div className="flex items-center gap-4 mb-3">
                              <span className="text-xs font-medium tracking-wider uppercase text-primary bg-cream px-3 py-1">
                                {post.category}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-foreground/40">
                                <Calendar size={12} />
                                {new Date(post.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-foreground/40">
                                <Clock size={12} />
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2 mb-4">
                              {post.excerpt}
                            </p>
                            <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                              Read More <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                {/* Recent Posts */}
                <div className="bg-cream p-6 rounded-sm mb-8">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-primary-dark mb-6">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex gap-3 group"
                      >
                        <div
                          className="w-16 h-16 shrink-0 bg-cover bg-center rounded-sm"
                          style={{ backgroundImage: `url(${post.image})` }}
                        />
                        <div>
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-foreground/40 mt-1">{post.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-cream p-6 rounded-sm">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-primary-dark mb-6">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {blogCategories
                      .filter((c) => c !== "All")
                      .map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className="block w-full text-left px-4 py-2.5 text-sm text-foreground/60 hover:text-primary hover:bg-white/50 transition-colors rounded-sm"
                        >
                          {cat}
                          <span className="float-right text-foreground/30">
                            {blogPosts.filter((p) => p.category === cat).length}
                          </span>
                        </button>
                      ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
