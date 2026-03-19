// ============================================================
// 🔧 BLOG DATA - แก้ไขบทความได้ที่นี่
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-thai-massage",
    title: "5 Amazing Benefits of Thai Massage You Didn't Know",
    excerpt:
      "Discover why Thai Massage is more than just a relaxation technique — it's a 2,500-year-old healing art that can transform your health.",
    content: `Thai Massage, also known as Nuad Thai, is an ancient healing system that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures. Unlike Western massage styles, Thai Massage is performed on a mat on the floor, and the recipient remains fully clothed.

Here are 5 amazing benefits you might not know about:

**1. Improves Flexibility**
Thai Massage involves a series of yoga-like stretches that gradually increase your range of motion. Regular sessions can significantly improve your flexibility, even if you've never practiced yoga before.

**2. Boosts Energy Levels**
By working along the body's energy lines (Sen lines), Thai Massage helps remove blockages and restore the natural flow of energy. Many clients report feeling energized and alert after a session.

**3. Relieves Headaches**
Studies have shown that Thai Massage can be effective in reducing the intensity of both tension headaches and migraine headaches. The technique focuses on specific pressure points that help alleviate head pain.

**4. Reduces Back Pain**
Thai Massage is particularly effective for lower back pain. The combination of stretching and pressure point work helps release tension in the muscles that support the spine.

**5. Promotes Mental Clarity**
The meditative aspect of Thai Massage, combined with rhythmic pressing and stretching, creates a deeply calming effect on the mind. This can help reduce anxiety and improve mental clarity.

Book your Thai Massage session today and experience these incredible benefits for yourself!`,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
    category: "Wellness",
    author: "Serenity Team",
    date: "2025-12-15",
    readTime: "5 min read",
  },
  {
    slug: "aromatherapy-guide",
    title: "The Complete Guide to Aromatherapy Essential Oils",
    excerpt:
      "Learn how different essential oils can improve your mood, health, and well-being. A beginner's guide to the world of aromatherapy.",
    content: `Aromatherapy is the practice of using natural plant extracts, primarily essential oils, to promote physical and emotional well-being. This holistic healing treatment has been used for thousands of years across various cultures.

**Understanding Essential Oils**

Essential oils are concentrated plant extracts that retain the natural smell and flavor of their source. They are obtained through distillation or cold pressing.

**Popular Essential Oils and Their Benefits:**

- **Lavender**: Calming, reduces anxiety, promotes sleep
- **Eucalyptus**: Clears sinuses, boosts immunity, pain relief
- **Peppermint**: Energizing, relieves headaches, improves focus
- **Tea Tree**: Antibacterial, antifungal, skin healing
- **Chamomile**: Relaxing, anti-inflammatory, digestive aid
- **Ylang Ylang**: Mood enhancer, reduces stress, aphrodisiac

**How to Use Essential Oils:**

1. **Massage**: Diluted with carrier oils for therapeutic massage
2. **Diffusion**: Using an aromatherapy diffuser to fill a room
3. **Bath**: Adding a few drops to warm bath water
4. **Inhalation**: Direct inhalation from the bottle or steam

Visit Serenity Spa to experience our custom aromatherapy treatments!`,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
    category: "Education",
    author: "Serenity Team",
    date: "2025-11-20",
    readTime: "7 min read",
  },
  {
    slug: "self-care-routine",
    title: "Building Your Perfect Self-Care Routine in 2026",
    excerpt:
      "Start the new year with a self-care routine that actually works. Expert tips from our spa professionals.",
    content: `Self-care isn't selfish — it's essential. In our fast-paced world, taking time to nurture your body and mind is more important than ever. Here's how to build a self-care routine that you'll actually stick to.

**Morning Rituals:**

Start your day with intention. Before reaching for your phone, take 5 minutes for deep breathing or gentle stretching. This simple practice sets a positive tone for the entire day.

**Skincare Essentials:**

A consistent skincare routine doesn't have to be complicated:
- Cleanser (morning and night)
- Moisturizer with SPF (morning)
- Serum (night)
- Weekly exfoliation and mask

**Movement:**

Find a form of exercise you enjoy. Whether it's yoga, swimming, or a brisk walk, aim for at least 30 minutes of movement daily.

**Monthly Spa Day:**

Treat yourself to a professional spa treatment at least once a month. Regular massage therapy has been proven to reduce cortisol levels, improve sleep quality, and boost immune function.

**Digital Detox:**

Set boundaries with technology. Designate screen-free times, especially before bed. This simple change can dramatically improve your sleep quality.

At Serenity Spa, we believe that self-care is a journey, not a destination. Let us be part of your wellness routine.`,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=800&q=80",
    category: "Lifestyle",
    author: "Serenity Team",
    date: "2026-01-05",
    readTime: "6 min read",
  },
  {
    slug: "hot-stone-therapy-explained",
    title: "Hot Stone Therapy: Everything You Need to Know",
    excerpt:
      "What is hot stone therapy? How does it work? Is it right for you? Get all your questions answered.",
    content: `Hot Stone Therapy is one of the most popular spa treatments worldwide, and for good reason. This ancient practice uses heated volcanic basalt stones to deliver deep, penetrating warmth to your muscles.

**How It Works:**

Smooth, flat basalt stones are heated to between 130-145°F (54-63°C). The therapist places stones on specific points along the body — typically along the spine, on the stomach, chest, face, palms, and feet. The heat from the stones warms and relaxes the muscles, allowing the therapist to apply deeper pressure without discomfort.

**Benefits:**

- Deep muscle relaxation without intense pressure
- Improved circulation and blood flow
- Pain relief for chronic conditions
- Stress and anxiety reduction
- Better sleep quality

**What to Expect:**

A typical hot stone session lasts 75-90 minutes. You'll lie on a massage table while the therapist alternates between placing heated stones and performing massage strokes. The warmth is deeply soothing and most clients find themselves in a state of deep relaxation within minutes.

**Is It Right for You?**

Hot Stone Therapy is suitable for most people, but may not be recommended if you have diabetes, high blood pressure, heart disease, or are pregnant. Always consult with our team before booking.

Experience the healing power of Hot Stone Therapy at Serenity Spa.`,
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=800&q=80",
    category: "Wellness",
    author: "Serenity Team",
    date: "2025-10-10",
    readTime: "5 min read",
  },
];

export const blogCategories = ["All", "Wellness", "Education", "Lifestyle"];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
