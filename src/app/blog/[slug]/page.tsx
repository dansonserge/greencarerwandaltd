"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Post } from "../../components/interfaces/PostInterface";
import Layout from "@/app/components/Layout";
import { useParams } from "next/navigation";
import CustomButton from "@/app/components/CustomButton";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PostPage = () => {
  const params = useParams(); // Get the slug from the URL
  const slug = params?.slug as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/posts/by-slug/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        console.log("our data - ", data);
        setPost(data);
      } catch (err) {
        setError("Post not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p className="text-center">Loading post...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!post) return <p className="text-center">Post not found.</p>;

  return (
    <Layout>
      <div className="flex px-20 gap-10 pt-5">
        <div className="w-3/4">
          <div className="flex gap-10 pt-2 justify-between">
            <p className="gradient-accent-color font-extrabold text-4xl">
              Article
            </p>
            <div className="flex gap-x-3">
              <CustomButton
                type="gradient-right-arrow"
                text="More posts"
                isLoading={false}
                handleOnClick={() => router.push(`/blog`)}
              />
            </div>
          </div>
          <div className="pt-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="relative w-full h-96 mb-6 bg-gray-200 flex items-center justify-center">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="contain" // Ensures full image is visible
                className="bg-gray-200"
              />
            </div>
            <ReactQuill
              theme="bubble"
              value={post.content}
              readOnly
              className="write"
            />
          </div>
        </div>
        <div className="w-1/4">
          <iframe
            className="w-full min-h-[calc(100vh)]"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063590337079&tabs=timeline&width=1000&height=1000&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId"
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
