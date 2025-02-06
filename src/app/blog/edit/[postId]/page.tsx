"use client";
import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import CustomButton from "../../../components/CustomButton";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { getToken } from "@/lib/jwt";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const EditPost = ({ postId }: { postId: string }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/${postId}`);
        const post = await response.json();
        setTitle(post.title);
        setContent(post.content);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [postId]);

  const handleUpdate = async () => {
    const formData = new FormData();
    if (title) formData.append("title", title);
    if (content) formData.append("content", content);
    if (image) formData.append("image", image);

    setLoading(true);
    try {
      const token = getToken();
      if (!token) throw new Error("User not authenticated");

      const response = await fetch(`/api/posts/by-id/${postId}`, {
        method: "PATCH",

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: formData,
      });
      const result = await response.text();
      console.log("Post updated successfully:", result);
      router.push("/");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-12 gap-y-5 w-3/4 m-auto">
      <p className="gradient-accent-color font-extrabold text-4xl">Edit Post</p>
      <input
        type="text"
        placeholder="Title"
        className="text-2xl outline-none w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr className="w-full opacity-80" />
      <ReactQuill
        theme="bubble"
        value={content}
        onChange={setContent}
        placeholder="Edit your story"
        className="write min-h-[300px]"
      />
      <div className="flex justify-end gap-3">
        <CustomButton
          type="gradient-right-arrow"
          text="Cancel"
          isLoading={false}
          handleOnClick={() => router.push("/")}
        />
        <CustomButton
          type="normal-right"
          text={loading ? "Updating..." : "Update"}
          isLoading={loading}
          handleOnClick={handleUpdate}
        />
      </div>
    </div>
  );
};

export default EditPost;
