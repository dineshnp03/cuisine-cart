// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// export const signJwtToken = (payload: object) => jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

// export const verifyJwtToken = (token: string) => {
//   try {
//     return jwt.verify(token, JWT_SECRET);
//   } catch {
//     return null;
//   }
// };

import jwt from "jsonwebtoken";

// Define the expected structure of the decoded JWT payload
// interface JwtPayload {
//   id: string;  // Assuming the JWT includes an `id` field
//   // Other fields can be added if needed
// }

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const signJwtToken = (payload: object) => jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

export const verifyJwtToken = (token: string): { id: string } | null => {
  try {
    // Assuming JWT contains an id property
    return jwt.verify(token, JWT_SECRET) as { id: string };
  } catch (error) {
    console.log(error);
    return null;
  }
};
// export const verifyJwtToken = (token: string): JwtPayload | null => {
//   try {
//     // Decode the JWT and type it as JwtPayload
//     const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
//     return decoded;  // This will return an object that includes `id`
//   } catch {
//     return null;
//   }
// };
