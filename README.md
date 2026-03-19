# SERENITY SPA - Business Website

เว็บไซต์ธุรกิจบริการ สปา/นวด/อบรม สร้างด้วย Next.js + Tailwind CSS  
ออกแบบเน้นปิดการขาย (High Conversion) พร้อม deploy บน Vercel

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Neon DB** (PostgreSQL - contact form)
- **Lucide React** (icons)
- **TypeScript**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 แก้ไขเนื้อหาเว็บ (สำหรับคนดูแลเว็บ)

ข้อมูลทั้งหมดอยู่ในโฟลเดอร์ `src/data/` — แก้ไขง่าย ไม่ต้องแก้โค้ดหน้าเว็บ:

| ไฟล์ | แก้อะไรได้ |
|------|-----------|
| `src/data/site-config.ts` | ชื่อธุรกิจ, เบอร์โทร, LINE, WhatsApp, ที่อยู่, เวลาทำการ, Social Media, Hero Slides, About Section |
| `src/data/services.ts` | รายการบริการทั้งหมด (ชื่อ, ราคา, รายละเอียด, รูปภาพ, FAQ) |
| `src/data/faq.ts` | คำถามที่พบบ่อย |
| `src/data/blog.ts` | บทความ/Insights |
| `src/data/portfolio.ts` | รูปภาพ Portfolio |

### ตัวอย่าง: เปลี่ยนเบอร์โทร

```ts
// src/data/site-config.ts
contact: {
  phone: "+971 50 999 8888",  // ← แก้ตรงนี้
  ...
}
```

### ตัวอย่าง: เพิ่มบริการใหม่

```ts
// src/data/services.ts
{
  slug: "foot-massage",
  title: "Foot Reflexology",
  shortDescription: "...",
  description: "...",
  benefits: ["...", "..."],
  duration: "60 min",
  price: "From AED 200",
  image: "https://your-image-url.com/foot.jpg",
  category: "Massage",
  faq: [{ question: "...", answer: "..." }],
}
```

### เปลี่ยนรูปภาพ

รูปภาพทั้งหมดใช้ URL — สามารถใช้:
- **Cloudinary** (แนะนำ): อัปโหลดรูปแล้วนำ URL มาวาง
- **Unsplash**: ใช้ URL จาก Unsplash โดยตรง
- **URL รูปภาพอื่นๆ**: ต้องเพิ่ม hostname ใน `next.config.ts`

## 🗄️ ตั้งค่า Neon Database (Contact Form)

1. สมัครที่ [neon.tech](https://neon.tech)
2. สร้าง Database ใหม่
3. คัดลอก Connection String
4. สร้างไฟล์ `.env.local`:

```env
DATABASE_URL=postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require
```

> ถ้าไม่ตั้งค่า DATABASE_URL ระบบจะ log ข้อมูลไว้ใน console แทน

## 🚀 Deploy บน Vercel

1. Push โค้ดขึ้น GitHub
2. ไปที่ [vercel.com](https://vercel.com) → Import Project
3. เพิ่ม Environment Variable: `DATABASE_URL`
4. Deploy!

## โครงสร้างเว็บ

```
/                    → Home (Hero Slider, Features, Services, About, FAQ, Contact Form)
/about               → About Us (Story, Highlights, Contact Form)
/services            → Services List (จัดกลุ่มตาม Category)
/services/[slug]     → Service Detail (รายละเอียด, Benefits, FAQ, CTA)
/portfolio           → Portfolio Gallery (Filter by Category)
/blog                → Insights/Blog (Sidebar, Categories)
/blog/[slug]         → Blog Detail
/contact             → Contact (Info, Form, Map)
/api/contact         → API Route (POST - บันทึกลง Neon DB)
```

## โครงสร้างไฟล์

```
src/
├── app/
│   ├── layout.tsx          # Root Layout (Header/Footer/Floating)
│   ├── page.tsx            # Home Page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── services/[slug]/page.tsx
│   ├── portfolio/page.tsx
│   ├── blog/page.tsx
│   ├── blog/[slug]/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HeroSlider.tsx
│   ├── FloatingButtons.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   └── AnimatedSection.tsx
└── data/                   # ← แก้ไขเนื้อหาที่นี่
    ├── site-config.ts
    ├── services.ts
    ├── faq.ts
    ├── blog.ts
    └── portfolio.ts
```
