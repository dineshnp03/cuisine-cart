// import { verifyJwtToken } from "./jwt";

// export const authenticateUser = (token: string | null) => {
//   if (!token) return null;
//   return verifyJwtToken(token);
// };


// import { verifyJwtToken } from "./jwt";

// export const authenticateUser = (token: string | null) => {
//   if (!token) return null;
//   const decoded = verifyJwtToken(token);
//   if (decoded) {
//     return decoded;  // Now `decoded` will include an `id` field
//   }
//   return null;
// };


import { verifyJwtToken } from "./jwt";

export const authenticateUser = (token: string | null): { id: string } | null => {
  if (!token) return null;
  const verifiedToken = verifyJwtToken(token);
  return verifiedToken ? verifiedToken : null;
};
