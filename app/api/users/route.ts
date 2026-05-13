import { NextResponse } from "next/server";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);

  const offset = (page - 1) * limit;

  const allUsers = await db
    .select({
      id: usersTable.id,
      username: usersTable.username,
      email: usersTable.email,
    })
    .from(usersTable)
    .limit(limit)
    .offset(offset);

  return NextResponse.json({
    data: allUsers,
    page,
    limit,
  });
}
