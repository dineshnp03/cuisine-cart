import { connectToDatabase } from "@/lib/db";
import { User } from "@/models/User";
import { comparePassword } from "@/utils/bcrypt";
import { signJwtToken } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    await connectToDatabase();
    const user = await User.findOne({ email });

    if (!user || !(await comparePassword(password, user.password))) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = signJwtToken({ userId: user._id, role: user.role });

    return NextResponse.json({ token, message: "Login successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Internal Server Error : ${error} ` }, { status: 500 });
  }
}
