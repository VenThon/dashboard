import { NextResponse } from "next/server";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { loginSchema } from "@/lib/validation/auth";

import { eq } from "drizzle-orm";
import { verify } from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { email, password } = parsed.data;

  // find user
  const foundUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (foundUser.length === 0) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 },
    );
  }

  const user = foundUser[0];

  // check password
  const isValid = await verify(user.password, password);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 },
    );
  }

  return NextResponse.json({ message: "Login success", user });
}
