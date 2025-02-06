import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./jwt"; // A helper function to verify JWT

export async function authenticateUser(req: NextRequest) {
  const token = req.headers.get("Authorization")?.split(" ")[1]; // Extract Bearer token

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = verifyJWT(token); // Decode and verify the token
    return user; // Return user data if valid
  } catch (error) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 403 });
  }
}
