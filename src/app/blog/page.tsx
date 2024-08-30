"use client";

import CustomButton from "../components/CustomButton";
import Layout from "../components/Layout";
import SamplePic from "@public/assets/samplePhoto.jpg";

import Image from "next/image";

const Blog = () => {
  const randomHue = Math.floor(Math.random() * 360);
  return (
    <Layout>
      <div className="px-16">
        <div className="flex justify-between">
          <p className="gradient-accent-color font-black text-2xl">News</p>
          <div className="flex">
            <CustomButton
              type="normal-right"
              text="Add News"
              isLoading={false}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/3">
              <Image src={SamplePic} alt={""} className="cursor-pointer" />
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printin typesetting
                industry. Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>
              <div className="flex justify-between">
                <div className="flex gap-8">
                  <span
                    className="w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold random-bg"
                    style={{
                      backgroundColor: `hsl(${randomHue}, 70%, 60%)`, // Generates a random HSL color
                    }}
                  >
                    UA
                  </span>
                  <div>
                    <p>Arlette Umugwaneza</p>
                    <p>14th August 2024 12:00</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div>
                    <span>edit</span>
                  </div>
                  <div>
                    <span>delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
