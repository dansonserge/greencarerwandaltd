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

function Footer() {
  return (
    <footer id="/contact-us">
      <div className="bg-[#F1F3F4] pt-5 md:pt-10">
        <div className="flex flex-col md:flex-row px-10 md:px-20 gap-5">
          <div className="w-full md:w-4/12 flex flex-col gap-5 md:gap-10">
            <div className="md:mb-5">
              <Image src={GreenCareLogo} alt={"logo"} height={89} />
            </div>
            <div className="font-[400] text-[#272727] text-md">
              <p className="gradient-accent-color text-xl font-bold mb-3">
                GreenCare Rwanda Ltd
              </p>
              <p>Rwanda, Southern Province</p>
              <p>Huye Industrial Zone</p>
              <p>TIN #: 106386718</p>
            </div>
            <div>
              <p className="gradient-accent-color text-xl font-medium">
                info@greencarerwandaltd.com
              </p>
              <p className=" text-dark-blue font-[700] text-2xl">
                +250 784 030 834
              </p>
            </div>
            <div className="font-[400] text-[#272727] text-md hidden md:block">
              <p>CMVX+657, Butare</p>
              <p>-2.556801907665808, 29.697951648243407</p>
            </div>
          </div>
          <div className="w-full md:w-4/12  md:relative left-9">
            <ContactUsForm />
          </div>
          <div className="w-full md:w-4/12 text-center h-[350px] md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8082.989606821302!2d29.69637199741683!3d-2.554226083737236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c30d62bea7cae5%3A0xe246ef4e6e11ddaa!2sGreencare%20Rwanda%20ltd!5e0!3m2!1sen!2srw!4v1690661446299!5m2!1sen!2srw"
              loading="lazy"
              className="border-none w-full h-full"
            ></iframe>
          </div>
        </div>
        <hr className="bg-[#ddd] h-[1.5px] mt-10" />
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:px-20 py-6 items-center">
          <div className="flex gap-8">
            <Link href={"#"}>
              <Image src={TwitterLogo} alt="twitter" width={50} />
            </Link>

            <Link href={"#"}>
              <Image src={InstagramLogo} alt="instagram" width={50} />
            </Link>

            <Link href={"#"}>
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
