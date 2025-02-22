import Image from "next/image";
import DotsSelector from "./DotsSelector";
import BannerImageOne from "@public/assets/banner-image.png";
import CustomButton from "../CustomButton";
import ContactUsIcon from "@public/assets/contactUsIcon.svg";
import { redirect } from "next/navigation";

const IntroCarousel = () => {
  return (
    <div className="flex" id="/home">
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
          <div className="intro-text text-xl md:text-4xl lg:text-xl xl:text-2xl ">
            <span className="font-bold">Greencare Rwanda Ltd </span>provides a
            sustainable business model for solid waste management through the
            design, construction, and operation of a Bio-waste facility. The
            company converts all bio-waste into organic fertilizers, branded as
            Grekompost, while reducing bio-waste sent to landfills by 100%.
            <br />
            <br />
            <span className="font-bold">Greencare Rwanda Ltd </span> also
            promotes the sorting and sale of recyclable materials to other
            industries, supporting the circular economy. This approach creates
            green jobs, reduces landfill waste, and helps lower greenhouse gas
            emissions in the
          </div>
          <div className="flex gap-4">
            <a href="/blog/about-us">
              <CustomButton text="About us" type={"normal"} />
            </a>

            <a href="/#/contact-us">
              <CustomButton
                text="Contact us"
                type={"gradient"}
                icon={ContactUsIcon}
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={BannerImageOne} alt={"Banner Image One"} width={600} />
        </div>
      </div>
    </div>
  );
};

export default IntroCarousel;
