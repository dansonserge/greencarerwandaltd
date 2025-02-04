"use client";
import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { Post } from "../components/interfaces/PostInterface";
import { Pencil, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import moment from "moment";

interface PostComponentProps {
  post: Post;
  setDisplayMode: Dispatch<SetStateAction<string>>;
  setSelectedPost: Dispatch<SetStateAction<Post | undefined>>;
}

const PostComponent = ({
  post,
  setDisplayMode,
  setSelectedPost,
}: PostComponentProps) => {
  const randomHue = Math.floor(Math.random() * 360);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex px-8 cursor-pointer">
        <div className="flex">
          <div className="relative min-w-[220px] min-h-[220px] max-w-[220px] max-h-[220px] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              onClick={() => {
                router.push(`/blog/${post.slug}`);
              }}
            />
          </div>
          <div className="flex flex-col justify-between pl-5 gap-4">
            <div
              className="flex flex-col gap-4"
              onClick={() => {
                router.push(`/blog/${post.slug}`);
              }}
            >
              <p className="font-bold text-3xl max-w-[600px] overflow-hidden whitespace-nowrap text-ellipsis">
                {post.title}
              </p>
              <p
                className="font-medium text-lg  overflow-hidden text-ellipsis line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></p>
            </div>
            <div className="flex flex-col">
              {/* creator details */}
              <div className="flex justify-between ">
                <div className="flex gap-6">
                  <span
                    className="w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold random-bg"
                    style={{
                      backgroundColor: `hsl(${randomHue}, 70%, 60%)`, // Generates a random HSL color
                    }}
                  >
                    UA
                  </span>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold">{post.user.name}</p>
                    <p className="font-normal">
                      {moment(post.createdAt).format("Do MMMM YYYY HH:mm")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <button
                    className="px-3 py-1 flex items-center gap-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 shadow-md"
                    onClick={() => {
                      setSelectedPost(post);
                      setDisplayMode("Edit");
                    }}
                  >
                    <Pencil size={16} /> Edit
                  </button>
                  <button className="px-3 py-1 flex items-center gap-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-200 shadow-md">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
              {/* end of creator details */}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-screen overflow-hidden flex flex-col relative m-6">
              <div className="w-full relative h-64 flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 overflow-y-auto flex-grow max-h-[60vh]">
                <button
                  className="absolute top-4 right-4 text-xl text-gray-700 hover:text-black bg-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X size={40} />
                </button>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p
                  className="text-lg text-gray-700 mt-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></p>
                <div className="flex gap-6 mt-6 items-center justify-between">
                  <div className="flex gap-6">
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
                  <div className="mt-6 flex justify-end">
                    <CustomButton
                      type="normal-right"
                      text="Edit"
                      isLoading={false}
                      handleOnClick={() => {
                        setSelectedPost(post);
                        setDisplayMode("Edit");
                      }}
                      // handleOnClick={() => router.push(`/blog/edit/${post.id}`)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PostComponent;
