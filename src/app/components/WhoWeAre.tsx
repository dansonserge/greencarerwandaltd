import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import WhoWeAreImage from "@public/assets/whowere-image.svg";

function WhoWeAre() {
  return (
    <div className="flex items-center m-8 md:m-20">
      <div className="md:w-1/2 flex flex-col gap-10">
        <div className="gradient-accent-color font-bold text-4xl">
          Who We are
        </div>
        <div className="w-full md:hidden">
          <Image src={WhoWeAreImage} alt={"who we are"} />
        </div>
        <div className="font-[400] text-[#272727] text-xl">
          <span className="font-bold">Greencare Rwanda Ltd </span>is a waste
          solutions company converting landfill into a recycling Plant  through 
          innovative technology to transform the waste into resources with 
          competitive products provide solutions to the agricultural sector,
          environment protection, circular economy, and create green jobs for
          young men and women.
        </div>
        <div>
          <CustomButton text={"More Details"} type={"normal"} />
        </div>
      </div>
      <div className="w-1/2 hidden md:block">
        <Image src={WhoWeAreImage} alt={"who we are"} />
      </div>
    </div>
  );
}

export default WhoWeAre;
