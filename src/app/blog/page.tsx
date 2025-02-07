"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Layout from "../components/Layout";

import { useState } from "react";

import Articles from "./Articles";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import { Post } from "../components/interfaces/PostInterface";

const Blog = () => {
  const [displayMode, setDisplayMode] = useState<string>("List");
  const [selectedPost, setSelectedPost] = useState<Post | undefined>();
  //List=> show all posts, Edit=> edit a post, Create=> create a port

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
