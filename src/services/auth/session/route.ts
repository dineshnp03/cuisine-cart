import { authenticateUser } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.split(" ")[1];
  if(!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const user = authenticateUser(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  return NextResponse.json(user, { status: 200 });
}
