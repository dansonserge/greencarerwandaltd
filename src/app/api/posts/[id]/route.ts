import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: any, { params } : any) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: Number(params.id),
      },
      include: {
        user: {
          select: { name: true, email: true },
        },
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Posts fetched successfully",
      data: post,
    });
  } catch (error) {
   return error instanceof Error
      ? NextResponse.json({ message: error.message, status: 400 })
      : NextResponse.json({
          message: "An unknown error occurred",
          status: 500,
        });
  }
};
export const DELETE = async (_:any, { params }:any) => {
  try {
    const post = await prisma.post.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Post deleted successfully",
      data: post,
    });
  } catch (error) {
     return error instanceof Error
      ? NextResponse.json({ message: error.message, status: 400 })
      : NextResponse.json({
          message: "An unknown error occurred",
          status: 500,
        });
  }
};

export const PATCH = async (req: NextRequest, {params}: any) => {

  try {
     const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;


    const update = await prisma.post.update({
      where: { id: Number(params.id) },
      data: { content, title },
      select: { id: true, content: true, title: true },
    });
    if (!update) {
      return NextResponse.json({
        status: 400,
        message:
          "An error occurred while processing your request. Please try again.",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Post updated successfully",
      data: update,
    });
  } catch (error) {
   return error instanceof Error
      ? NextResponse.json({ message: error.message, status: 400 })
      : NextResponse.json({
          message: "An unknown error occurred",
          status: 500,
        });
  }
};

function uploadToCloudinary(image: any) {
    throw new Error("Function not implemented.");
}

