import { NextResponse } from "next/server";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { registerSchema } from "@/lib/validation/auth";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { username, email, password } = parsed.data;

    // 2. Check duplicate email
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 },
      );
    }

    // 3. Hash password
    const hashedPassword = bcrypt.hashSync(password, 12);

    // 4. Insert new user
    const newUser = await db
      .insert(users)
      .values({
        username,
        email,
        password: hashedPassword,
      })
      .returning();

    return NextResponse.json(
      { message: "User created", user: newUser },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("🔴 REGISTER ERROR:", error);
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 },
    );
  }
}
