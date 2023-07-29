import Link from "next/link";
import React from "react";
import Image from "next/image";
import GreenCareLogo from "@/assets/GreenCareLogo.svg";
import CustomButton from "../CustomButton";
import SendMessageIcon from "@/assets/send-message-icon.svg";
import TwitterLogo from "@/assets/twitter-logo.svg";
import InstagramLogo from "@/assets/instagram.svg";
import Youtube from "@/assets/youtube.svg";
import { footerLinks } from "./footerMenu";

function Footer() {
  return (
    <footer className="">
      <div className="bg-[#EEF0F2] pt-10">
        <div className="flex px-20">
          <div className="w-4/12">
            <div>
              <Image src={GreenCareLogo} alt={"logo"} />
            </div>
            <div>
              <p>GreenCare Rwanda Ltd</p>
              <p>Rwanda, Southern Province</p>
              <p>Huye Industrial Zone</p>
              <p>TIN106386718</p>
            </div>
            <div>
              <p>info@greencarerwandaltd.com</p>
              <p>+250 784 030 834</p>
            </div>
            <div>
              <p>CMVX+657, Butare</p>
              <p>-2.556801907665808, 29.697951648243407</p>
            </div>
          </div>
          <div className="w-4/12 text-center">
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="names"></input>
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <input type="email" name="email"></input>
              </div>
              <div>
                <label htmlFor="name">Phone</label>
                <input type="phone" name="phone"></input>
              </div>
              <div>
                <label htmlFor="name">Message</label>
                <textarea name="message"></textarea>
              </div>

              <div className="right-0">
                <CustomButton
                  type="normal"
                  text="Send"
                  icon={SendMessageIcon}
                />
              </div>
            </form>
          </div>
          <div className="w-4/12 text-center">MAP</div>
        </div>
        <hr className="bg-[#ddd] h-[1.5px] mt-10"/>
        <div className="flex justify-between px-20 py-6 items-center">
          <div className="flex gap-8">
            <Link href={"#"}>
              <Image src={TwitterLogo} alt="twitter"  width={40} />
            </Link>

            <Link href={"#"}>
              <Image src={InstagramLogo} alt="instagram" width={40} />
            </Link>

            <Link href={"#"}>
              <Image src={Youtube} alt="youtube"  width={40} />{" "}
            </Link>
          </div>
          <div className="flex gap-8">
            {footerLinks.map((link, index) => {
              return <Link key={index} href={"#"}>{link.name}</Link>;
            })}
          </div>
        </div>
      </div>
      <div className=" flex justify-between px-20 py-5 items-center">
        <div>
          <Link href={"#"}>GreenCare Rwanda Ltd’s copyright 2023</Link>
        </div>
        <div>
          <Link href={"#"}>Terms of privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
