"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseIcon from "@public/assets/close.svg";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";
import ReactQuill, { Quill } from "react-quill";
import CustomButton from "../components/CustomButton";

const AddArticle = ({
  setIsEditMode,
}: {
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}) => {
  const [description, setDescription] = useState("");

  interface Blog {
    title: string;
    banner: string;
    content: [];
    tags: string[];
    author: {};
  }

  return (
    <div className="flex flex-col px-12 gap-y-5">
      <div className="flex gap-10 pt-2 justify-between">
        <p className="gradient-accent-color font-extrabold text-4xl">
          Create an article
        </p>
        <div className="flex gap-x-3">
          <span className=" cursor-pointer">
            {/* <Image
              src={CloseIcon}
              alt="close menu"
              height={35}
              onClick={() => setIsEditMode(false)}
            /> */}
            <CustomButton
              type="gradient-right-arrow"
              text="close"
              isLoading={false}
              handleOnClick={() => setIsEditMode(true)}
            />
          </span>
          <div>
            <CustomButton
              type="normal-right"
              text="Publish"
              isLoading={false}
              handleOnClick={() => setIsEditMode(true)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="px-3">
          <input
            type="text"
            placeholder="Title"
            className="text-2xl outline-none w-full"
          />
        </span>

        <ReactQuill
          theme="bubble"
          value={description}
          onChange={setDescription}
          placeholder="Tell your story"
          className="write min-h-[300px]"
        />
      </div>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default AddArticle;
