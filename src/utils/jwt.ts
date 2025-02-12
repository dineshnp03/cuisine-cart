import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const signJwtToken = (payload: object) => jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

export const verifyJwtToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};
