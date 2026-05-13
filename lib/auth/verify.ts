import { verifyAccessToken } from "./jwt";

export function getUserFromRequest(req: Request) {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) throw new Error("No token");

  const token = authHeader.split(" ")[1];

  return verifyAccessToken(token);
}
