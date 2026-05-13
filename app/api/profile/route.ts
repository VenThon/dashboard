// import { NextResponse } from "next/server";
// import { getUserFromRequest } from "@/lib/auth/verify";
// export async function GET(req: Request) {
//   try {
//     const user = getUserFromRequest(req);
//     return NextResponse.json({
//       message: "Protected route success",
//       user,
//     });
//   } catch {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
// }
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import jwt from "jsonwebtoken";

type AuthTokenPayload = {
  id: string;
  username: string;
  email: string;
};

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET!) as AuthTokenPayload;

    return NextResponse.json(
      {
        message: "Protected route success",
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("PROFILE ERROR:", error);

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
