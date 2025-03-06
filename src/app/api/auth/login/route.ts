import { User } from "@/models/User";
import { comparePassword } from "@/utils/bcrypt";
import { signJwtToken } from "@/utils/jwt";
import { connectToDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Connect to DB
    await connectToDatabase();

    // 2. Parse request body
    const { email, password } = (await req.json()) as { email?: string; password?: string };

    // 3. Check for missing fields
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    // 4. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials (user not found)" }, { status: 401 });
    }

    // 5. Compare passwords
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials (wrong password)" }, { status: 401 });
    }

    // 6. Sign JWT containing user info
    const token = signJwtToken({ userId: user._id, role: user.role });

    // 7. Return success with token & role
    return NextResponse.json(
      {
        token,
        role: user.role,
        message: "Login successful",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ error: `Internal Server Error : ${error}` }, { status: 500 });
  }
}
