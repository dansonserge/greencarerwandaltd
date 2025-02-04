import prisma from "@/DB/db.config";
import axios from "axios";
import crypto from "crypto";

export const createPost = async (post: {
  title: string;
  content: string;
  userId: number;
  image: File;
}) => {
  try {
    if (!post.title || !post.content || !post.userId || !post.image) {
      throw new Error(`Please fill all the fields`);
    }

    const imageUrl = await uploadToCloudinary(post.image);

    if(!imageUrl){
        throw new Error(`Failed to upload image to images server`);
    }

    let slug = `${post.title.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 50)}-${Date.now()}`;


    return await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        image: imageUrl, // Use the returned image URL
        userId: post.userId,
        slug: slug
      },
    });
  } catch (error) {
    console.log(error)
    throw new Error(`Error creating a post : ${error}`);
  }
};

async function uploadToCloudinary(postImage: File) {
  const timestamp = Math.round(new Date().getTime() / 1000);

  // Generate the signature
  const paramsToSign = `timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`;
  const signature = crypto
    .createHash("sha1")
    .update(paramsToSign)
    .digest("hex");

  const formData = new FormData();
  formData.append('file', postImage);
  formData.append('timestamp', timestamp.toString());
  formData.append('api_key', process.env.CLOUDINARY_API_KEY??"");
  formData.append('signature', signature);

  try {
    // POST request to Cloudinary
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    return response.data.secure_url; // Return the image URL

  } catch (error: any) {
    console.error(
      "Error uploading to Cloudinary:",
      error.response?.data || error.message
    );
    throw error;
  }


}


export const updatePost = async (post: {
  title: string;
  content: string;
  id: number;
  image: File;
}) => {
  try {
    if (!post.title || !post.content || !post.id || !post.image) {
      throw new Error(`Please fill all the fields`);
    }

    const imageUrl = await uploadToCloudinary(post.image);

    if(!imageUrl){
        throw new Error(`Failed to upload image to images server`);
    }

    return await prisma.post.update({
      where: { id: Number(post.id) },
      data: {
        title: post.title,
        content: post.content,
        image: imageUrl,
      },
    });
  } catch (error) {
    throw new Error(`Error creating a post : ${error}`);
  }
};