import { resetPwdService } from "@/server/auth/authService";
import { NextResponse, NextRequest } from "next/server";

export const PATCH = async (req: NextRequest) => {
  try {
    const { userId, password } = await req.json();
    const data = await resetPwdService(userId, password);
    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    return error instanceof Error
      ? NextResponse.json({ message: error.message, status: 400 })
      : NextResponse.json({
          message: "An unknown error occurred",
          status: 400,
        });
  }
};
