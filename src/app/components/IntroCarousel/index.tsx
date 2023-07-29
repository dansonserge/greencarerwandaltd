import { useState } from "react";
import IntroDotsWrapper from "@/assets/IntroDots.svg";
import Image from "next/image";
import IntroDot from "@/assets/IntroDot.svg";
import SelectedDot from "@/assets/SelectedIntroDot.svg";
import DotsSelector from "./DotsSelector";
import BannerImageOne from "@/assets/BannerImageOne.svg"
import CustomButton from "../CustomButton";
import ContactUsIcon from "@/assets/contactUsIcon.svg";

const IntroCarousel = () => {
  return (
    <div className="flex">
      <DotsSelector />

      <div className="flex my-16 mx-16 ml-40 items-center w-full justify-between">
        <div className="flex-1">
          <div className="text-7xl font-black text-dark-blue">
            <p>Our Environment,</p>
            <p>Our <span className="gradient-accent-color">Concern</span></p>
          </div>
          <div className="mt-14 intro-text text-3xl mb-16">
            <span className="font-bold">Greencare Rwanda ltd </span>conducts research and develop the business
            models for waste management by supporting the public sector to
            convert the landfill into recycling plants to promote circular
            economy and environmental protection.
          </div>
          <div className="flex gap-4">
            <CustomButton text="About us" type={'normal'}/>
            <CustomButton text="Contact us" type={'gradient'} icon={ContactUsIcon}/>
          </div>
        </div>
        <div className="">
          <Image src={BannerImageOne} alt={"Banner Image One"}  width={840}/>
        </div>
      </div>
    </div>
  );
};

export default IntroCarousel;
