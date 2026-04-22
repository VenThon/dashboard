import { NextResponse } from "next/server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { registerSchema } from "@/lib/validation/auth";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY:", body);
    console.log("DB URL:", process.env.DATABASE_URL);

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
    const existingEmail = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingEmail.length > 0) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 },
      );
    }

    // 3. Check duplicate username
    const existingUsername = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username));

    if (existingUsername.length > 0) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 409 },
      );
    }

    // 4. Hash password (async)
    const hashedPassword = await bcrypt.hash(password, 12);

    // 5. Insert new user
    const newUser = await db
      .insert(usersTable)
      .values({
        username: username.trim(),
        email: email.trim(),
        password: hashedPassword,
      })
      .returning();

    const user = newUser[0];

    return NextResponse.json(
      {
        message: "User created",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          password: user.password,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("🔴 REGISTER ERROR:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
