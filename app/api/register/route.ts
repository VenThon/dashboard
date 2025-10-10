import { NextResponse } from "next/server";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { hashPassword } from "@/utils/hash";

import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { username, email, password, confirmPassword } = await req.json();

    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Passwords do not match." },
        { status: 400 },
      );
    }

    // Check if email exists
    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, email));
    if (existing.length > 0) {
      return NextResponse.json(
        { message: "Email already registered." },
        { status: 400 },
      );
    }

    // Create user
    const hashed = await hashPassword(password);
    await db.insert(users).values({
      username,
      email,
      password: hashed,
    });

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
