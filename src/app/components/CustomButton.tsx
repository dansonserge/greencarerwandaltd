import React from "react";
import Image from "next/image";

const CustomButton = ({
  text,
  type,
  icon,
  handleOnClick,
}: {
  text: string;
  type: string;
  icon?: string;
  handleOnClick?: () => void;
}) => {
  return (
    <>
      {type === "normal" && (
        <button
          onClick={() => handleOnClick}
          className="customButtonOne flex items-center justify-center gap-2"
        >
          {text}
          {icon && <Image src={icon} alt={text} />}
        </button>
      )}
      {type === "normal-right" && (
        <button
          onClick={() => handleOnClick}
          className="customButtonFour flex items-center justify-center gap-2"
        >
          {text}
          {icon && <Image src={icon} alt={text} />}
        </button>
      )}

      {type === "gradient" && (
        <button

          onClick={() => handleOnClick}
          className="customButtonTwo flex items-center justify-center gap-1"
        >
          <span className="gradient-accent-color font-bold">Contact us</span>
          {icon && <Image src={icon} alt={text} />}
        </button>
      )}

      {type === "gradient-right-arrow" && (
        <button
          onClick={handleOnClick}
          className="customButtonThree flex items-center justify-center gap-1"
        >
          <span className="gradient-accent-color font-bold">Contact us</span>
          {icon && <Image src={icon} alt={text} />}
        </button>
      )}
    </>
  );
};

export default CustomButton;
