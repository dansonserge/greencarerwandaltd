import React from "react";
import Image from "next/image";
import AboutUsImage from "@public/assets/about-us-image.svg";

function SmallAboutUs() {
  return (
    <div className="mt-20 mx-10" id="/about-us">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center">
        <div className="w-4/12 hidden md:block">
          <Image src={AboutUsImage} alt={"about us"} />
        </div>
        <div className="w-full md:w-5/12 flex flex-col gap-7 ml-5">
          <div className="gradient-accent-color font-bold text-4xl">
            About us
          </div>

          <div className="w-full md:hidden">
            <Image src={AboutUsImage} alt={"about us"} />
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-dark-blue font-bold text-2xl">Our Mission</div>
            <div className="font-[400] text-[#272727] text-xl">
              Greencare Rwanda Ltd is committed to driving sustainable waste
              management by producing organic fertilizers, branded grekompost
              from bio- waste promoting recyclables materials, and reducing
              landfill waste and greenhouse gas emissions. We aim to create
              long-term environmental and economic impacts for supporting the
              circular economy for a greener future.
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-dark-blue font-bold text-2xl">Our Vision</div>
            <div className="font-[400] text-[#272727] text-xl">
              To be a leading company in waste management services, recognized
              for excellence in producing and selling branded organic
              fertilizers, plastic pavers, and recyclable materials. We aim to
              promote the circular economy while offering expert consultancy
              services in waste management, composting, and recycling solutions,
              empowering businesses and communities for a sustainable future.
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/12 flex flex-col">
          <span className="text-dark-blue text-2xl text-left font-poppins font-black pb-4">
            OUR TARGET BY 2050
          </span>
          <table>
            <tbody>
              <tr>
                <td className="text-dark-blue text-5xl text-right font-poppins font-black pb-4">
                  2M
                </td>
                <td className="text-[#2A6419] pl-5 pb-4">
                  <p>2 millions of tons </p> of Bio- waste to be treated per
                  year.
                </td>
              </tr>

              <tr>
                <td className="text-dark-blue text-5xl text-right font-poppins font-black pb-4">
                  400
                </td>
                <td className="text-[#2A6419] pl-5 pb-4">
                  <p>400 tons of the compost</p> produced per Year
                </td>
              </tr>

              <tr>
                <td className="text-dark-blue text-5xl text-right font-poppins font-black">
                  300+
                </td>
                <td className="text-[#2A6419] pl-5">
                  <p>Green jobs</p>
                  <p>creation</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SmallAboutUs;
