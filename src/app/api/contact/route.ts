import { NextRequest, NextResponse } from "next/server";

// ============================================================
// 🔧 CONTACT API - เชื่อมต่อ Neon DB
// ตั้งค่า DATABASE_URL ใน .env.local:
// DATABASE_URL=postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, country, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    // Try to save to Neon DB if DATABASE_URL is configured
    if (process.env.DATABASE_URL) {
      const { neon } = await import("@neondatabase/serverless");
      const sql = neon(process.env.DATABASE_URL);

      // Create table if not exists
      await sql`
        CREATE TABLE IF NOT EXISTS contact_submissions (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          phone VARCHAR(50) NOT NULL,
          email VARCHAR(255),
          country VARCHAR(100),
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `;

      // Insert submission
      await sql`
        INSERT INTO contact_submissions (name, phone, email, country, message)
        VALUES (${name}, ${phone}, ${email || null}, ${country || null}, ${message})
      `;

      return NextResponse.json(
        { success: true, message: "Message saved to database." },
        { status: 200 }
      );
    }

    // Fallback: Log to console if no DB configured
    console.log("📩 New contact submission (no DB configured):", {
      name,
      phone,
      email,
      country,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received (logged to console). Configure DATABASE_URL to save to Neon DB." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
