import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { authenticateUser } from "@/utils/auth"; // Ensure this path is correct

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) return NextResponse.json({ message: "No token provided" }, { status: 401 });

    const user = authenticateUser(token);
    if (!user) return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });

    await connectToDatabase();
    const foundUser = await User.findById(user.id);
    if (!foundUser) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json({
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
