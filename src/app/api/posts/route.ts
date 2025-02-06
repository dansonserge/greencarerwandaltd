import { createPost } from "@/server/posts/postsService";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/DB/db.config";
import upload, { uploadImage } from "@/server/upload/uploadService";
import { authenticateUser } from "@/lib/auth";

 export const POST = async (req: NextRequest) => {
   const res = await authenticateUser(req);
    if (res?.ok===false) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const userId = formData.get("userId") as any;
    const image = formData.get("image") as File;

    const userIdInt = Number(userId);

    const newPost = createPost({ title, content, userId: userIdInt, image });

    if (newPost) {
      return NextResponse.json({
        status: 201,
        message: "Post created successfully",
        data: newPost,
      });
    }
  } catch (error: unknown) {
    return error instanceof Error
      ? NextResponse.json({ message: error.message, status: 400 })
      : NextResponse.json({
          message: "An unknown error occurred",
          status: 400,
        });
  }
};




export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({

      orderBy: {
        createdAt: "desc",
      },

      include: {
        user: {
          select: { name: true, email: true },
        },
      },
    });
    if (!posts) {
      return NextResponse.json({
        status: 404,
        message: "Posts not found",
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    return error instanceof Error
      ? NextResponse.json({ message: error.message, status: 400 })
      : NextResponse.json({
          message: "An unknown error occurred",
          status: 400,
        });
  }
};
