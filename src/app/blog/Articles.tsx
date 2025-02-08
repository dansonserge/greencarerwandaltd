"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CustomButton from "../components/CustomButton";

import { UserResponse } from "../components/interfaces/UserInterface";
import { Post, PostsResponse } from "../components/interfaces/PostInterface";
import PostComponent from "./PostComponent";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { PackageOpen } from "lucide-react";

const Articles = ({
  setDisplayMode,
  setSelectedPost,
}: {
  setDisplayMode: Dispatch<SetStateAction<string>>;
  setSelectedPost: Dispatch<SetStateAction<Post | undefined>>;
}) => {
  const [userDetails, setUserDetails] = useState<UserResponse | undefined>();
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("user-details");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const { posts, loading, error } = useFetchPosts();

  return (
    <div className="flex lg:px-20 pt-5">
      <div className="lg:w-3/4 w-full">
        <div className="flex justify-between px-8">
          <p className="gradient-accent-color font-extrabold text-5xl">
            Articles
          </p>
          <div className="hidden lg:block">
            {userDetails?.token && (
              <CustomButton
                type="normal-right"
                text="Add an article"
                isLoading={false}
                handleOnClick={() => setDisplayMode("Create")}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col mt-10 gap-8 mb-6 overflow-auto h-[calc(100vh-100px)] ">
          {posts.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <PackageOpen className="w-24 h-24 text-gray-500" />{" "}
              {/* 6xl is roughly 24rem */}
              <p className="mt-4 text-lg text-gray-600">No posts created yet</p>
            </div>
          )}

          {posts.map((post: any) => (
            <PostComponent
              key={post.id}
              post={post}
              setDisplayMode={setDisplayMode}
              setSelectedPost={setSelectedPost}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-1/4 hidden lg:block">
        <iframe
          className="w-full min-h-[calc(100vh)]"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063590337079&tabs=timeline&width=1000&height=1000&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
          style={{ border: "none", overflow: "hidden" }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Articles;
