"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import { Post } from "../components/interfaces/PostInterface";
import { Pencil, Trash2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import moment from "moment";
import toast from "react-hot-toast";
import { getToken } from "@/lib/jwt";
import { UserResponse } from "../components/interfaces/UserInterface";

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [userDetails, setUserDetails] = useState<UserResponse | undefined>();
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("user-details");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  // Optimized Cloudinary Image URL
  const optimizedImageUrl = post.image
    ? post.image.replace("/upload/", "/upload/f_auto,q_auto,w_800/")
    : "/default-image.jpg"; // Fallback if no image

  const deleteArticle = async (articleId: number) => {
    setLoading(true);
    try {
      const token = getToken();
      if (!token) throw new Error("User not authenticated");

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions: RequestInit = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`/api/posts/by-id/${articleId}`, requestOptions)
        .then((response) => toast.success("Article deleted successfully!"))
        .catch((error) => toast.error(error));
    } catch (error) {
      toast.error("Failed to delete the article.");
      console.error("Error deleting article:", error);
    } finally {
      setLoading(false);
    }
  };

  function getInitials(name: string) {
    const words = name.trim().split(/\s+/);
    if (words.length === 1) {
      return words[0][0].toUpperCase();
    } else if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
  }

  return (
    <>
      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold text-center">
              Are you sure you want to delete this article?
            </h2>
            <p className="text-sm text-gray-600 text-center">
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => deleteArticle(post.id)}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Display */}
      <div className="flex px-8 cursor-pointer">
        <div className="flex flex-grow">
          <div className="w-1/3 relative ">
            <Image
              src={optimizedImageUrl}
              alt={post.title}
              priority
              fill
              placeholder="blur"
              blurDataURL={optimizedImageUrl}
              className=" object-cover"
              onClick={() => {
                router.push(`/blog/${post.slug}`);
              }}
            />
          </div>

          <div className="flex flex-col justify-between pl-5 gap-4 bg-[#f7f7f7] py-2 w-2/3">
            <div
              className="flex flex-col gap-4"
              onClick={() => {
                router.push(`/blog/${post.slug}`);
              }}
            >
              <p className="font-bold md:text-xl max-w-[600px] overflow-hidden whitespace-nowrap text-ellipsis">
                {post.title}
              </p>
              <p
                className="md:font-medium min-w-full overflow-hidden text-ellipsis line-clamp-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></p>
            </div>
            <div className="flex flex-col">
              {/* creator details */}
              <div className="flex justify-between">
                <div className="flex gap-6">
                  <span
                    className="w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl font-bold random-bg"
                    style={{
                      backgroundColor: `hsl(${randomHue}, 70%, 60%)`,
                    }}
                  >
                    {getInitials(post.user.name)}
                  </span>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold">{post.user.name}</p>
                    <p className="font-normal">
                      {moment(post.createdAt).format("Do MMMM YYYY HH:mm")}
                    </p>
                  </div>
                </div>

                {userDetails?.token && (
                  <div className=" gap-2 items-center mr-5 hidden lg:flex">
                    <button
                      className="px-3 py-1 flex items-center gap-1 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-200 shadow-md"
                      onClick={() => {
                        setSelectedPost(post);
                        setDisplayMode("Edit");
                      }}
                    >
                      <Pencil size={16} /> Edit
                    </button>
                    <button
                      className="px-3 py-1 flex items-center gap-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-200 shadow-md"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                )}
              </div>
              {/* end of creator details */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostComponent;
