import Link from "next/link";
import React from "react";
import Image from "next/image";
import GreenCareLogo from "@public/assets/GreenCareLogo.svg";
import CustomButton from "../CustomButton";

import TwitterLogo from "@public/assets/twitter-logo.svg";
import InstagramLogo from "@public//assets/instagram.svg";
import Youtube from "@public/assets/youtube.svg";
import { footerLinks } from "./footerMenu";
import ContactUsForm from "./ContactUsForm";
import ContactUsSection from "./ContactUsSection";

function Footer() {
  return (
    <footer id="/contact-us">
      <div className="bg-[#F1F3F4]">
        <hr className="bg-[#ddd] h-[1.5px]" />
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:px-20 py-6 items-center">
          <div className="flex gap-8">
            <Link href={"https://x.com/GREENCARE2016"} target="_blank">
              <Image src={TwitterLogo} alt="twitter" width={50} />
            </Link>
            <Link
              href={"https://www.instagram.com/greencarerwandaltd9/"}
              target="_blank"
            >
              <Image src={InstagramLogo} alt="instagram" width={50} />
            </Link>

            <Link
              href={"https://www.youtube.com/@greencarerwandaltd2788"}
              target="_blank"
            >
              <Image src={Youtube} alt="youtube" width={50} />{" "}
            </Link>
          </div>
          <div className="flex gap-8 text-xs md:text-lg md:mx-0">
            {footerLinks.map((link, index) => {
              return (
                <Link key={index} href={"#"}>
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" flex justify-between px-5 text-xs md:text-lg md:px-20 py-5 items-center bg-white">
          <div>
            <Link href={"#"}>GreenCare Rwanda Ltd’s copyright 2023</Link>
          </div>
          <div>
            <Link href={"#"}>Terms of privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
