import React from "react";
import Image from "next/image";
import AboutUsImage from "@/assets/about-us-image.svg";

function SmallAboutUs() {
  return (
    <div className="mt-20 mx-10">
      <div className="flex gap-4 items-center">
        <div className="w-4/12 ">
          <Image src={AboutUsImage} alt={"about us"} />
        </div>
        <div className="w-5/12 flex flex-col gap-7 ml-5">
          <div className="gradient-accent-color font-bold text-4xl">
            About us
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-dark-blue font-bold text-xl">Our Mission</div>
            <div>
              Greencare Rwanda ltd is to revolutionize  waste management by
              providing integrated solutions  that promote  production and
              distribution of organic fertilizers (Grekompost), plastics pavers
              for construction projects, and the sales of recyclables materials
              to other recycling factories for a greener future.
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-dark-blue font-bold text-xl">Our Vision</div>
            <div>
              To be one of the top companies in waste management services and
              market leader in the production and sales of branded  organic
              fertilizers,  plastics pavers and recyclables materials to promote
              circular economy.
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <table>
            <tbody>
              <tr>
                <td className="text-dark-blue text-5xl text-right font-poppins font-black pb-4">
                  400
                </td>
                <td className="text-[#2A6419] pl-5 pb-4">
                  <p>Tons per year</p>
                  <p>of compost</p>
                </td>
              </tr>
              <tr>
                <td className="text-dark-blue text-5xl text-right font-poppins font-black pb-4">
                  2,560
                </td>
                <td className="text-[#2A6419] pl-5 pb-4">
                  <p>Meter Square / Year</p> <p>of ecological pavers</p>{" "}
                </td>
              </tr>
              <tr>
                <td className="text-dark-blue text-5xl text-right font-poppins font-black">
                  25
                </td>
                <td className="text-[#2A6419] pl-5">
                  <p>Number </p>
                  <p>of employees</p>
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
