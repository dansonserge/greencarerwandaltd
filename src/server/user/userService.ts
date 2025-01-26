import bcrypt from "bcrypt";
import prisma from "@/DB/db.config";

export const getAllUsers = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");

    // Generate JWT token
    const token = generateJWT(user);
    return { token, user };
  } catch (error) {
    throw new Error(`Login Error: ${error}`);
  }
};