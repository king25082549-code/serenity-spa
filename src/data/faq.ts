// ============================================================
// 🔧 FAQ DATA - แก้ไขคำถามที่พบบ่อยได้ที่นี่
// ============================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFAQ: FAQItem[] = [
  {
    question: "What are your opening hours?",
    answer:
      "We are open everyday from 11:00 AM to 2:00 AM. We recommend booking in advance to secure your preferred time slot.",
  },
  {
    question: "Do I need to make an appointment?",
    answer:
      "While walk-ins are welcome subject to availability, we highly recommend booking an appointment to ensure you get your preferred time and therapist. You can book through WhatsApp or our contact form.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "You don't need to bring anything! We provide all necessary spa attire, towels, and amenities. Just arrive 15 minutes early to enjoy our relaxation lounge before your treatment.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, we offer free cancellation or rescheduling up to 24 hours before your appointment. Cancellations within 24 hours may incur a 50% charge.",
  },
  {
    question: "Do you offer couples treatments?",
    answer:
      "Yes! We have a beautiful couples suite where you and your partner can enjoy treatments side by side. Couples packages are available for most of our massage and spa services.",
  },
  {
    question: "Are your products organic and safe?",
    answer:
      "We use only premium, organic, and dermatologically tested products. All our essential oils are 100% pure therapeutic grade. Please inform us of any allergies or skin conditions.",
  },
  {
    question: "Do you offer gift vouchers?",
    answer:
      "Yes, we offer beautifully packaged gift vouchers for all our services and packages. They make the perfect gift for any occasion. Contact us to purchase.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, complimentary parking is available for all our clients. Our location at Baniyas Tower also has easy access to public transportation.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit/debit cards, Apple Pay, and bank transfers. Payment is collected after your treatment.",
  },
  {
    question: "Can I request a specific therapist?",
    answer:
      "Absolutely! If you have a preferred therapist, please mention it when booking and we will do our best to accommodate your request.",
  },
];
