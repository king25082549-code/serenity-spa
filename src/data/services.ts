// ============================================================
// 🔧 SERVICES DATA - แก้ไขบริการทั้งหมดได้ที่นี่
// ============================================================

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  duration: string;
  image: string;
  category: string;
  faq: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "full-body-massage",
    title: "Full Body Massage",
    shortDescription:
      "A complete head-to-toe massage that relieves tension, improves circulation, and promotes deep relaxation.",
    description:
      "Our signature Full Body Massage is a luxurious 60-90 minute experience that combines Swedish and deep tissue techniques. Our skilled therapists work through every muscle group, releasing built-up tension and restoring your body's natural balance. Using premium aromatic oils, this treatment not only soothes your muscles but also calms your mind, leaving you in a state of complete bliss.",
    benefits: [
      "Relieves muscle tension and chronic pain",
      "Improves blood circulation",
      "Reduces stress and anxiety",
      "Enhances flexibility and range of motion",
      "Promotes better sleep quality",
    ],
    duration: "60 / 90 min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    category: "Massage",
    faq: [
      {
        question: "How long does the Full Body Massage take?",
        answer: "We offer 60-minute and 90-minute sessions. We recommend the 90-minute session for first-time visitors.",
      },
      {
        question: "Is the massage painful?",
        answer: "Not at all. Our therapists adjust the pressure to your comfort level. Please communicate your preferences during the session.",
      },
      {
        question: "What should I wear?",
        answer: "We provide comfortable spa attire. You will be properly draped throughout the session for your privacy.",
      },
    ],
  },
  {
    slug: "thai-massage",
    title: "Thai Massage",
    shortDescription:
      "Ancient Thai healing art combining acupressure, stretching, and energy work for total body harmony.",
    description:
      "Experience the ancient art of Thai Massage, a 2,500-year-old healing tradition. This dynamic treatment involves rhythmic pressing and stretching along the body's energy lines (Sen lines). Unlike conventional massages, Thai Massage is performed on a comfortable mat, and you remain fully clothed in loose-fitting garments. It's often called 'lazy yoga' because your therapist guides your body through various yoga-like positions.",
    benefits: [
      "Increases flexibility and range of motion",
      "Balances the body's energy systems",
      "Relieves joint and muscle tension",
      "Improves posture and alignment",
      "Boosts energy levels naturally",
    ],
    duration: "90 / 120 min",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    category: "Massage",
    faq: [
      {
        question: "Do I need to be flexible for Thai Massage?",
        answer: "No, Thai Massage is suitable for all flexibility levels. Our therapist will adapt the stretches to your body.",
      },
      {
        question: "What should I wear?",
        answer: "We provide comfortable loose-fitting clothing. Thai Massage is performed fully clothed.",
      },
    ],
  },
  {
    slug: "aromatherapy",
    title: "Aromatherapy Massage",
    shortDescription:
      "A sensory journey using essential oils to heal, relax, and restore your body and mind.",
    description:
      "Our Aromatherapy Massage is a holistic healing treatment that uses natural plant extracts and essential oils to promote health and well-being. Your therapist will select a custom blend of essential oils based on your needs — whether it's lavender for relaxation, eucalyptus for invigoration, or chamomile for stress relief. The gentle massage techniques combined with the therapeutic properties of the oils create a deeply restorative experience.",
    benefits: [
      "Reduces stress and anxiety",
      "Enhances mood and emotional well-being",
      "Relieves pain and inflammation",
      "Improves skin health and complexion",
      "Boosts immune system function",
    ],
    duration: "60 / 90 min",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
    category: "Massage",
    faq: [
      {
        question: "Are the essential oils safe?",
        answer: "Yes, we use 100% pure, therapeutic-grade essential oils. Please inform us of any allergies beforehand.",
      },
      {
        question: "Can I choose my own oils?",
        answer: "Absolutely! Our therapist will guide you through our oil selection to find the perfect blend for you.",
      },
    ],
  },
  {
    slug: "facial-treatment",
    title: "Luxury Facial Treatment",
    shortDescription:
      "Premium skincare facial that cleanses, nourishes, and revitalizes your skin for a radiant glow.",
    description:
      "Our Luxury Facial Treatment is a comprehensive skincare experience tailored to your skin type. Beginning with a thorough skin analysis, our aesthetician creates a personalized treatment plan. The session includes deep cleansing, exfoliation, steam, extraction (if needed), a custom mask, and a relaxing facial massage. We use premium skincare products with natural ingredients to deliver visible results.",
    benefits: [
      "Deep cleansing and pore refinement",
      "Improved skin texture and tone",
      "Anti-aging and wrinkle reduction",
      "Hydration and nourishment",
      "Radiant, glowing complexion",
    ],
    duration: "60 / 90 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    faq: [
      {
        question: "How often should I get a facial?",
        answer: "We recommend once every 4-6 weeks for optimal skin health. Your aesthetician will advise based on your skin condition.",
      },
      {
        question: "Is there any downtime after the facial?",
        answer: "Minimal to none. You may experience slight redness that subsides within a few hours.",
      },
    ],
  },
  {
    slug: "moroccan-bath",
    title: "Moroccan Bath and Scrub",
    shortDescription:
      "A traditional Moroccan hammam experience featuring steam, black soap cleansing, and full-body exfoliation.",
    description:
      "Experience the time-honored Moroccan Bath (Hammam) tradition — a luxurious ritual that deeply cleanses and rejuvenates your entire body. The session begins with a relaxing steam bath to open your pores, followed by an application of authentic Moroccan black soap (Beldi). After the soap has softened your skin, our therapist performs a vigorous full-body scrub using a traditional Kessa glove, removing dead skin cells and impurities. The treatment concludes with a soothing rinse and moisturizing application, leaving your skin incredibly soft, smooth, and radiant.",
    benefits: [
      "Deep pore cleansing and detoxification",
      "Removes dead skin cells and impurities",
      "Improves blood circulation",
      "Softens and hydrates the skin",
      "Promotes deep relaxation and stress relief",
    ],
    duration: "60 / 90 min",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    category: "Bath & Scrub",
    faq: [
      {
        question: "What is included in the Moroccan Bath?",
        answer: "The full experience includes steam bath, black soap application, full-body Kessa glove scrub, rinse, and moisturizing. Everything is provided.",
      },
      {
        question: "Is the Moroccan Bath suitable for sensitive skin?",
        answer: "Yes, we adjust the scrub intensity based on your skin type. Please inform us of any skin conditions beforehand.",
      },
      {
        question: "How long does the full session take?",
        answer: "The 60-minute session covers the essential hammam experience. The 90-minute session includes additional relaxation time and a hydrating body mask.",
      },
    ],
  },
];

// Helper: ดึง service ตาม slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

// Helper: ดึง services ตาม category
export function getServicesByCategory(category: string): Service[] {
  return services.filter((s) => s.category === category);
}

// ดึง categories ทั้งหมด
export function getCategories(): string[] {
  return [...new Set(services.map((s) => s.category))];
}
