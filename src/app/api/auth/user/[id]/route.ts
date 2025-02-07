import { any } from './../../../../../../node_modules/@types/prop-types/index.d';
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/DB/db.config";
import { generateJWT } from "@/lib/jwt";
import { authenticateUser } from "@/lib/auth";

// Update user by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
     const res = await authenticateUser(req);
      if (res?.ok===false) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const userId = parseInt(params.id);
    const { name, email, password } = await req.json();

    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        ...(hashedPassword && { password: hashedPassword }),
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error :any) {
    return NextResponse.json({ message: "Error updating user", error: error.message }, { status: 500 });
  }
}

// Delete user by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
     const res = await authenticateUser(req);
  if (res?.ok===false) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const userId = parseInt(params.id);

    await prisma.user.delete({ where: { id: userId } });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: "Error deleting user", error: error.message }, { status: 500 });
  }
}