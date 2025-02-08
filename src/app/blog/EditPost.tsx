"use client";
import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic"; // Dynamic import to fix SSR issues
import "react-quill/dist/quill.bubble.css";
import CustomButton from "../components/CustomButton";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { Post } from "../components/interfaces/PostInterface";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImagePlus } from "lucide-react";
import toast from "react-hot-toast";
import { getToken } from "@/lib/jwt";

// Dynamically import ReactQuill to prevent SSR errors
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ImageUpload: React.FC<{
  setImage: (file: File | null) => void;
  selectedImage: string | undefined;
}> = ({ setImage, selectedImage }) => {
  const [preview, setPreview] = useState<string | undefined>(selectedImage);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-gray-50 cursor-pointer min-h-[20rem] mb-6 h-[500px] "
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      {preview && (
        <Image src={preview} alt="Preview" layout="fill" objectFit="contain" />
      )}
    </div>
  );
};

const EditPost = ({
  setDisplayMode,
  selectedPost,
}: {
  setDisplayMode: Dispatch<SetStateAction<string>>;
  selectedPost: Post | undefined;
}) => {
  const [description, setDescription] = useState(selectedPost?.content);
  const [id, setId] = useState(selectedPost?.id);
  const [userId, setUserId] = useState(selectedPost?.userId);
  const [title, setTitle] = useState(selectedPost?.title);
  const [selectedImage, setSelectedImage] = useState(selectedPost?.image);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { fetchPosts } = useFetchPosts(false);
  const [showImageEditor, setShowImageEditor] = useState<boolean>(false);

  const handleSubmit = async () => {
    const formData = new FormData();
    title && formData.append("title", title);
    description && formData.append("content", description);
    image && formData.append("image", image);

    setLoading(true);
    try {
      const token = getToken();
      if (!token) throw new Error("User not authenticated");

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const response = await fetch(`/api/posts/by-id/${id}`, {
        // Ensure leading `/`
        method: "PATCH",
        body: formData,
        headers: myHeaders,
      });

      toast.success("Post submitted successfully");
      fetchPosts().then(() => setDisplayMode("List"));
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Failed to submit post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-12 gap-y-5 w-3/4 m-auto">
      <div className="flex gap-10 pt-2 justify-between">
        <p className="gradient-accent-color font-extrabold text-4xl">
          Edit article
        </p>
        <div className="flex gap-x-3">
          <CustomButton
            type="gradient-right-arrow"
            text="Close"
            isLoading={false}
            handleOnClick={() => setDisplayMode("List")}
          />
          <CustomButton
            type="normal-right"
            text={loading ? "Publishing..." : "Submit"}
            isLoading={loading}
            handleOnClick={handleSubmit}
          />
        </div>
      </div>
      <div className="flex flex-col transparent">
        <ImageUpload setImage={setImage} selectedImage={selectedImage} />
        <span className="px-3">
          <input
            type="text"
            placeholder="Title"
            className="text-2xl outline-none w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
        <hr className="w-full opacity-80" />
        <ReactQuill
          theme="bubble"
          value={description}
          onChange={setDescription}
          placeholder="Tell your story"
          className="write min-h-[300px]"
        />
      </div>
    </div>
  );
};

export default EditPost;
