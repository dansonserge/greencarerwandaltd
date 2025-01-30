"use client";
import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { Post } from "../components/interfaces/PostInterface";
import { X } from "lucide-react";

interface PostComponentProps {
  post: Post;
}

const PostComponent = ({ post }: PostComponentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex px-8 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative min-w-[220px] min-h-[220px] max-w-[220px] max-h-[220px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between pl-5 gap-4">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-3xl max-w-[600px] overflow-hidden whitespace-nowrap text-ellipsis">
              {post.title}
            </p>
            <p className="font-medium text-lg max-w-[600px] overflow-hidden text-ellipsis line-clamp-3">
              {post.content}
            </p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-screen overflow-hidden flex flex-col relative m-6">
            <button
              className="absolute top-4 right-4 text-xl text-gray-700 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="w-full relative h-64 flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="p-6 overflow-y-auto flex-grow max-h-[60vh]">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p
                className="text-lg text-gray-700 mt-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></p>
              <div className="flex gap-6 mt-6 items-center">
                <span className="w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold bg-gray-700">
                  UA
                </span>
                <div className="flex flex-col justify-center">
                  <p className="font-bold">{post.user.name}</p>
                  <p className="font-normal">
                    {new Date(post.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostComponent;
