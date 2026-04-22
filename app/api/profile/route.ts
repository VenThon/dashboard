import { NextResponse } from "next/server";

import { getUserFromRequest } from "@/lib/auth/verify";

export async function GET(req: Request) {
  try {
    const user = getUserFromRequest(req);

    return NextResponse.json({
      message: "Protected route success",
      user,
    });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
