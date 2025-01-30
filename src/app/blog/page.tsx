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

const Blog = () => {
  const router = useRouter();
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const toggleIsEditor = () => {
    console.log(searchParams);
    router.push("/blog?isEditor=false");
    setIsEditMode(!isEditMode);
  };

  return (
    <Layout>
      {isEditMode ? (
        <AddPost setIsEditMode={toggleIsEditor} />
      ) : (
        <Articles setIsEditMode={toggleIsEditor} />
      )}
    </Layout>
  );
};

export default Blog;
