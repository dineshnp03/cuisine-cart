import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/utils/jwt";

export function middleware(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  
  if (!token || !verifyJwtToken(token)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
