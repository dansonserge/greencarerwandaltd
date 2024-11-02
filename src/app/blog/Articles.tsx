"use client";
import React, { Dispatch, SetStateAction } from "react";
import CustomButton from "../components/CustomButton";
import ArticleListItem from "./ArticleListItem";

const Articles = ({
  setIsEditMode,
}: {
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex px-20 gap-10 pt-5">
      <div className="w-3/4">
        <div className="flex justify-between px-8">
          <p className="gradient-accent-color font-extrabold text-5xl">
            Articles
          </p>
          <div className="flex">
            <CustomButton
              type="normal-right"
              text="Add an article"
              isLoading={false}
              handleOnClick={() => setIsEditMode(true)}
            />
          </div>
        </div>

        <div className="flex flex-col mt-10 gap-8 mb-6 overflow-auto h-[calc(100vh-100px)]">
          <ArticleListItem />

          <ArticleListItem />

          <ArticleListItem />

          <ArticleListItem />

          <ArticleListItem />
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
  );
};

export default Articles;
