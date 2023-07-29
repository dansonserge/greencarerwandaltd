import React from "react";
import Image from "next/image";
import AboutUsImage from "@/assets/about-us-image.svg";

function SmallAboutUs() {
  return (
    <div className="mt-20 mx-10">
      <div className="flex gap-4 items-center">
        <div className="w-4/12">
          <Image src={AboutUsImage} alt={"about us"} />
        </div>
        <div className="w-5/12">
          <div>About us</div>
          <div>
            <div>Our Mission</div>
            <div>
              Greencare Rwanda ltd is to revolutionize  waste management by
              providing integrated solutions  that promote  production and
              distribution of organic fertilizers (Grekompost), plastics pavers
              for construction projects, and the sales of recyclables materials
              to other recycling factories for a greener future.
            </div>
          </div>
          <div>
            <div>Our Vision</div>
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
                <td>400</td>
                <td>Tons per year of compost</td>
              </tr>
              <tr>
                <td>2,560</td>
                <td>Meter Square / Year of ecological pavers</td>
              </tr>
              <tr>
                <td>25</td>
                <td>Number of employees</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SmallAboutUs;
