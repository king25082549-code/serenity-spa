// ============================================================
// 🔧 PORTFOLIO DATA - แก้ไขรูปภาพ portfolio ได้ที่นี่
// รองรับ Cloudinary URL หรือ URL รูปภาพอื่นๆ
// ============================================================

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Relaxation Suite",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Thai Massage Room",
    category: "Treatment",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Aromatherapy Setup",
    category: "Treatment",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Spa Reception",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Moroccan Bath Room",
    category: "Treatment",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Couples Suite",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Garden Lounge",
    category: "Ambiance",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Essential Oils Collection",
    category: "Products",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  },
];

export const portfolioCategories = ["All", "Interior", "Treatment", "Ambiance", "Products"];
