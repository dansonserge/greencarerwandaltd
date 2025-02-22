import Link from "next/link";
import React from "react";
import Image from "next/image";
import GreenCareLogo from "@public/assets/GreenCareLogo.svg";
import CustomButton from "../CustomButton";

import TwitterLogo from "@public/assets/twitter-logo.svg";
import InstagramLogo from "@public//assets/instagram.svg";
import Youtube from "@public/assets/youtube.svg";
import FaceBookLogo from "@public/assets/fb-logo.svg";
import LinkedInLogo from "@public/assets/linkedin logo.svg";

import { footerLinks } from "./footerMenu";
import ContactUsForm from "./ContactUsForm";
import ContactUsSection from "./ContactUsSection";
import { UserResponse } from "../interfaces/UserInterface";

function Footer({ userDetails }: { userDetails: UserResponse | undefined }) {
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
            <Link
              href={"https://www.facebook.com/profile.php?id=100063590337079"}
              target="_blank"
            >
              <Image src={FaceBookLogo} alt="facebook" width={50} />{" "}
            </Link>

            <Link
              href={"linkedin.com/company/greencare-rwanda-ltd"}
              target="_blank"
            >
              <Image src={LinkedInLogo} alt="facebook" width={50} />{" "}
            </Link>
          </div>
          <div className="flex gap-8 text-xs md:text-lg md:mx-0">
            {/*    {footerLinks.map((link, index) => {
              return (
                <Link key={index} href={"#"}>
                  {link.name}
                </Link>
              );
            })} */}
            <a href="/">Home</a>
            <a href="/#/about-us">About us</a>
            <a href="/#/service">Products</a>
            <a href="/blog">Blog</a>

            {!userDetails?.token ? (
              <a href="/login">Login</a>
            ) : (
              <a
                href="/login"
                onClick={() => localStorage.removeItem("user-details")}
              >
                Logout
              </a>
            )}
          </div>
        </div>
        <div className=" flex justify-between px-5 text-xs md:text-lg md:px-20 py-5 items-center bg-white">
          <div>
            <Link href={"#"}>
              GreenCare Rwanda Ltd’s copyright {new Date().getFullYear()}{" "}
            </Link>
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
