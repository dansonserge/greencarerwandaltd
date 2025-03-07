import React from "react";
import Image from "next/image";
import ConsultantImage from "@public/assets/consultant-image.svg";
import CustomButton from "./CustomButton";
import ContactUsIcon from "@public/assets/contactUsIcon.svg";

function BookOurConsultancy() {
  return (
    <div
      className="mt-[150px] flex flex-col md:flex-row items-center gap-8 w-full md:w-4/5"
      id="/services"
    >
      <div className="ml-5 md:ml-0 text-dark-blue font-bold text-4xl md:text-[45px] md:w-[450px] md:hidden">
        Book our <span className="gradient-accent-color">consultancy</span>{" "}
        services Today{" "}
      </div>
      <div className="flex flex-1">
        <Image
          className="ml-auto"
          src={ConsultantImage}
          alt={"consultant image"}
        />
      </div>
      <div className="flex flex-col gap-8 flex-1 h-full">
        <div className="text-dark-blue font-bold text-[45px] w-[450px] hidden md:block">
          Book our <span className="gradient-accent-color">consultancy</span>{" "}
          services Today{" "}
        </div>
        <div className="font-[400] text-[#272727] text-xl text-center mx-5 md:mx-0 md:text-left">
          We provide consultancy services for projects in cities and secondary
          cities related to waste management and composting processes. Our
          services include designing and building waste management
          infrastructure, operating compost production from bio-waste, and
          developing profitable business models for urban, semi-urban, and
          emergency areas in Rwanda and abroad.
        </div>
        <div className="relative">
          <div className="absolute md:mt-[20px right-5 md:right-0">
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
