import Link from "next/link";
import React from "react";
import Image from "next/image";

const CustomButton = ({
  text,
  type,
  icon,
}: {
  text: string;
  type: string;
  icon?: string;
}) => {
  return (
    <>
      {type === "normal" && (
        <Link
          href={""}
          className="customButtonOne flex items-center justify-center gap-2"
        >
          {text}
          {icon && <Image src={icon} alt={text} />}
        </Link>
      )}
      {type === "normal-right" && (
        <Link
          href={""}
          className="customButtonFour flex items-center justify-center gap-2"
        >
          {text}
          {icon && <Image src={icon} alt={text} />}
        </Link>
      )}

      {type === "gradient" && (
        <Link
          href={""}
          className="customButtonTwo flex items-center justify-center gap-1"
        >
          <span className="gradient-accent-color font-bold">Contact us</span>
          {icon && <Image src={icon} alt={text} />}
        </Link>
      )}

      {type === "gradient-right-arrow" && (
        <Link
          href={""}
          className="customButtonThree flex items-center justify-center gap-1"
        >
          <span className="gradient-accent-color font-bold">Contact us</span>
          {icon && <Image src={icon} alt={text} />}
        </Link>
      )}
    </>
  );
};

export default CustomButton;
