"use client";
import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFetchPosts } from "./hooks/useFetchPosts";

const ImageUpload: React.FC<{ setImage: (file: File | null) => void }> = ({
  setImage,
}) => {
  const [preview, setPreview] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
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
      className="flex flex-col items-center justify-center bg-gray-100 cursor-pointer min-h-[20rem] mb-6"
      onClick={() => fileInputRef.current?.click()}
    >
      <div className="flex flex-col items-center p-4 max-h-120">
        {preview === "" && (
          <h2 className="text-xl font-bold">Upload Article image</h2>
        )}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 p-2 border rounded hidden"
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {preview && (
          <div className="mt-4 w-full max-w-xl max-h-56">
            <img src={preview} alt="Preview" className="max-h-60 " />
          </div>
        )}
      </div>
    </div>
  );
};

const AddPost = ({
  setIsEditMode,
}: {
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    posts,
    loading: postsLoading,
    error: postsError,
    fetchPosts,
  } = useFetchPosts(false);

  const handleSubmit = async () => {
    if (!title || !description || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description);
    formData.append("userId", "1");
    formData.append("image", image);

    setLoading(true);
    try {
      const response = await fetch("api/posts", {
        method: "POST",
        body: formData,
        redirect: "follow",
      });
      const result = await response.text();
      console.log("Post submitted successfully:", result);
      fetchPosts();
      setIsEditMode(false);
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
          Create an article
        </p>
        <div className="flex gap-x-3">
          <CustomButton
            type="gradient-right-arrow"
            text="Close"
            isLoading={false}
            handleOnClick={() => setIsEditMode(false)}
          />
          <CustomButton
            type="normal-right"
            text={loading ? "Publishing..." : "Publish"}
            isLoading={loading}
            handleOnClick={handleSubmit}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <ImageUpload setImage={setImage} />
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

export default AddPost;
