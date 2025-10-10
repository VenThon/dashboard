import { NextResponse } from "next/server";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { comparePassword } from "@/utils/hash";
import { signToken } from "@/utils/jwt";

import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required." },
        { status: 400 },
      );
    }

    // Find user
    const found = await db.select().from(users).where(eq(users.email, email));
    const user = found[0];
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 },
      );
    }

    // Check password
    const valid = await comparePassword(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 },
      );
    }

    // Create token
    const token = signToken({ id: user.id, email: user.email });

    return NextResponse.json(
      { message: "Login successful", token },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
