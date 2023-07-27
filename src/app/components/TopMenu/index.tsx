import React from "react";

import Image from "next/image";
import GreenCareLogo from "@/assets/GreenCareLogo.svg";

import Menu from "./Menu";

function TopMenu() {
  return (
    <>
      <div className="mx-12 m-3 flex justify-between items-center">
        <Image
          src={GreenCareLogo}
          alt={"GreenCareRwanda Ltd Logo"}
          width={182}
          height={61}
        />
        <Menu />
      </div>
    </>
  );
}

export default TopMenu;
