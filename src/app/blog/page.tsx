"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import SamplePic from "@public/assets/samplePhoto.jpg";

import Image from "next/image";
import ArticleListItem from "./ArticleListItem";
import { useEffect, useState } from "react";
import AddArticle from "./AddArticle";
import Articles from "./Articles";
import { UserResponse } from "../components/interfaces/UserInterface";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { Post } from "../components/interfaces/PostInterface";

const Blog = () => {
  const router = useRouter();
  const [displayMode, setDisplayMode] = useState<string>("List");
  const [selectedPost, setSelectedPost] = useState<Post | undefined>();
  //List=> show all posts, Edit=> edit a post, Create=> create a port
  const searchParams = useSearchParams();
  const toggleIsEditor = (modeName: string) => {
    console.log(searchParams);
    router.push("/blog?isEditor=false");
    setDisplayMode(modeName);
  };

  return (
    <Layout>
      {displayMode === "Create" ? (
        <AddPost setDisplayMode={setDisplayMode} />
      ) : displayMode === "Edit" ? (
        <EditPost setDisplayMode={setDisplayMode} selectedPost={selectedPost} />
      ) : (
        <Articles
          setDisplayMode={setDisplayMode}
          setSelectedPost={setSelectedPost}
        />
      )}
    </Layout>
  );
};

export default Blog;
