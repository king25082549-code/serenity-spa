import { NextRequest, NextResponse } from "next/server";

// ============================================================
// 🔧 CONTACT / BOOKING API - เชื่อมต่อ Neon DB
// ตั้งค่า DATABASE_URL ใน .env.local:
// DATABASE_URL=postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/dbname?sslmode=require
// ============================================================

async function ensureTable() {
  if (!process.env.DATABASE_URL) return null;

  const { neon } = await import("@neondatabase/serverless");
  const sql = neon(process.env.DATABASE_URL);

  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255),
      country VARCHAR(100),
      message TEXT NOT NULL,
      status VARCHAR(20) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  return sql;
}

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

    const sql = await ensureTable();

    if (sql) {
      // Insert booking into Neon DB
      await sql`
        INSERT INTO bookings (name, phone, email, country, message)
        VALUES (${name}, ${phone}, ${email || null}, ${country || null}, ${message})
      `;

      return NextResponse.json(
        { success: true, message: "Booking saved successfully." },
        { status: 200 }
      );
    }

    // Fallback: Log to console if no DB configured
    console.log("📩 New booking (no DB configured):", {
      name,
      phone,
      email,
      country,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Booking received. Configure DATABASE_URL to save to Neon DB." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
