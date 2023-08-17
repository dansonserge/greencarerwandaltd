import Image from "next/image";
import DotsSelector from "./DotsSelector";
import BannerImageOne from "@/assets/BannerImageOne.svg";
import CustomButton from "../CustomButton";
import ContactUsIcon from "@/assets/contactUsIcon.svg";

const IntroCarousel = () => {
  return (
    <div className="flex" id="/">
      <span className="hidden lg:block">
        <DotsSelector />
      </span>

      <div className="flex mx-5 md:my-10 md:mx-10 lg:my-16 lg:mx-16 lg:ml-40 items-center w-full justify-between">
        <div className="flex-1 space-y-8 mb-10">
          <div className="font-black text-dark-blue text-4xl mt-8 md:text-6xl ">
            <p>Our Environment,</p>
            <p>
              Our <span className="gradient-accent-color">Concern</span>
            </p>
          </div>
          <div className="lg:hidden block">
            <Image src={BannerImageOne} alt={"Banner Image One"} width={840} />
          </div>
          <div className="intro-text text-2xl md:text-4xl lg:text-2xl xl:text-4xl ">
            <span className="font-bold">Greencare Rwanda ltd </span>conducts
            research and develop the business models for waste management by
            supporting the public sector to convert the landfill into recycling
            plants to promote circular economy and environmental protection.
          </div>
          <div className="flex gap-4">
            <CustomButton text="About us" type={"normal"} />
            <CustomButton
              text="Contact us"
              type={"gradient"}
              icon={ContactUsIcon}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={BannerImageOne} alt={"Banner Image One"} width={840} />
        </div>
      </div>
    </div>
  );
};

export default IntroCarousel;
