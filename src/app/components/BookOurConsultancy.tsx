import React from "react";
import Image from "next/image";
import ConsultantImage from "@/assets/consultant-image.svg";
import CustomButton from "./CustomButton";
import ContactUsIcon from "@/assets/contactUsIcon.svg";

function BookOurConsultancy() {
  return (
    <div className="mt-[150px] flex items-center gap-8 w-4/5 ">
      <div className="flex flex-1">
        <Image
          className="ml-auto"
          src={ConsultantImage}
          alt={"consultant image"}
        />
      </div>
      <div className="flex flex-col gap-8 flex-1 h-full">
        <div className="text-dark-blue font-bold text-[45px] w-[450px]">
          Book our <span className="gradient-accent-color">consultancy</span>{" "}
          services Today{" "}
        </div>
        <div className="font-[400] text-[#272727] text-xl">
          We provide a consultant in waste management by developing the best
          model for waste management and composting system for good quality,
          project assistant in solid waste management, advise in agriculture,
          recyclable materials treatments.
        </div>
        <div className="relative">
          <div className="absolute mt-[20px] right-0">
            <CustomButton
              text="Contact us"
              type={"gradient-right-arrow"}
              icon={ContactUsIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookOurConsultancy;
