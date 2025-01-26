import { registerUserService, getAllUsers } from "@/server/auth/authService";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password, name } = await req.json();
    const data = await registerUserService({email, password, name});
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


export const GET = async (_:any) => {
  try {
    const data = await getAllUsers();
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



