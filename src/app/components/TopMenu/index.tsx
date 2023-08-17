import React, { useState } from "react";

import Image from "next/image";
import GreenCareLogo from "@/assets/GreenCareLogo.svg";
import MenuBar from "@/assets/menu-bars.svg";
import CloseIcon from "@/assets/close.svg";

import Menu from "./Menu";

function TopMenu() {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);



  return (
    <>
      <div className="px-3 lg:px-12 lg:p-3 lg:flex lg:justify-between sticky bg-white top-0 z-50">
        <div className="flex justify-between items-center">
          <Image
            src={GreenCareLogo}
            alt={"GreenCareRwanda Ltd Logo"}
            width={182}
            height={61}
          />

          <span className="lg:hidden block">
            <span
              className={`${isMenuShown ? `hidden` : `block`}`}
              onClick={() => setIsMenuShown(true)}
            >
              <Image src={MenuBar} alt="menu bar" height={40} />
            </span>
            <span
              className={`${isMenuShown ? `block` : `hidden`}`}
              onClick={() => setIsMenuShown(false)}
            >
              <Image src={CloseIcon} alt="close menu" height={40} />
            </span>
          </span>
        </div>

        <span className="lg:block hidden lg:mt-2">
          <Menu />
        </span>
        <span className={` mt-5 ${isMenuShown ? `block` : `hidden`}`}>
          <Menu />
        </span>
      </div>
    </>
  );
}

export default TopMenu;
