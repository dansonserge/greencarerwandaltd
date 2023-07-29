import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import WhoWeAreImage from "@/assets/whowere-image.svg";

function WhoWeAre() {
  return (
    <div className="flex items-center m-20">
      <div className="w-1/2 flex flex-col gap-10">
        <div>Who We are</div>
        <div>
          Greencare Rwanda Ltd is a waste solutions company converting landfill
          into a recycling Plant  through  innovative technology to transform
          the waste into resources with  competitive products provide solutions
          to the agricultural sector, environment protection, circular economy,
          and create green jobs for young men and women.
        </div>
        <div>
          <CustomButton text={'More Details'} type={'normal'} />
        </div>
      </div>
      <div className="w-1/2">
        <Image src={WhoWeAreImage} alt={'who we are'} />
      </div>
    </div>
  );
}

export default WhoWeAre;
