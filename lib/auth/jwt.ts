import jwt from "jsonwebtoken";

export type AuthTokenPayload = {
  id: string;
  username: string;
  email: string;
};

// export function generateAccessToken(userId: string) {
//   return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: "15m" });
// }
export function generateAccessToken(payload: AuthTokenPayload) {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "15m" });
}
// export function verifyAccessToken(token: string) {
//   return jwt.verify(token, process.env.JWT_SECRET!);
// }
export function verifyAccessToken(token: string): AuthTokenPayload {
  return jwt.verify(token, process.env.JWT_SECRET!) as AuthTokenPayload;
}
