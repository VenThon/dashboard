import { NextResponse } from "next/server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { generateAccessToken } from "@/lib/auth/jwt";
import { loginSchema } from "@/lib/validation/auth";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { username, password } = parsed.data;

    const foundUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username.trim()))
      .limit(1);

    if (foundUser.length === 0) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 },
      );
    }

    const user = foundUser[0];

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 },
      );
    }

    const accessToken = generateAccessToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    const response = NextResponse.json(
      {
        message: "Login success",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      },
      { status: 200 },
    );

    response.cookies.set("token", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
