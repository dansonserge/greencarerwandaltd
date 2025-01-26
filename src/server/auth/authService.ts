// src/server/auth/authService.ts
import bcrypt from "bcrypt";
import prisma from "@/DB/db.config";
import { generateJWT } from "@/lib/jwt";

export const loginService = async (email: string, password: string) => {
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

export const registerUserService = async (user: {
  email: string;
  password: string;
  name: string;
}) => {
  try {
    const userExists = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (userExists)
      throw new Error(
        "a user with the same email exists, please use an other email."
      );

    const hashedPassword = await bcrypt.hash(user.password, 10);
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });
  } catch (error) {
    throw new Error(`Error when fetching all users: ${error}`);
  }
};

export const resetPwdService = async (id: number, newPassword: string) => {
  try {
    const password = await bcrypt.hash(newPassword, 10);
    const update = await prisma.user.update({
      where: { id },
      data: { password },
      select: { id: true, password: true },
    });

    if (!update) {
      throw new Error(
        `"An error occurred while processing your request. Please try again."`
      );
    }
    return update;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};
