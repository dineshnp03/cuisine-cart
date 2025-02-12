import { verifyJwtToken } from "./jwt";

export const authenticateUser = (token: string | null) => {
  if (!token) return null;
  return verifyJwtToken(token);
};