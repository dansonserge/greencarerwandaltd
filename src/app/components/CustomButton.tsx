import React from "react";
import Image from "next/image";
import RefreshIcon from "@public/assets/refresh.svg";

const CustomButton = ({
  text,
  type,
  icon,
  isLoading,
  handleOnClick,
}: {
  text: string;
  type: string;
  icon?: string;
  isLoading?: boolean;
  handleOnClick?: () => void;
}) => {
  return (
    <>
      {type === "normal" && (
        <button
          onClick={handleOnClick}
          className="customButtonOne flex items-center justify-center gap-2"
        >
          {text}

          {icon && !isLoading && <Image src={icon} alt={text} />}
        </button>
      )}
      {type === "normal-right" && (
        <button
          onClick={handleOnClick}
          className="customButtonFour flex items-center justify-center gap-2"
        >
          {text}
          {isLoading && (
            <Image
              src={RefreshIcon}
              alt="loading"
              className="motion-safe:animate-spin h-5 w-5 mr-3 text-white"
            />
          )}
          {icon && !isLoading && <Image src={icon} alt={text} />}
        </button>
      )}

      {type === "gradient" && (
        <button
          onClick={handleOnClick}
          className="customButtonTwo flex items-center justify-center gap-1"
        >
          <span className="gradient-accent-color font-bold">Contact us</span>
          {icon && !isLoading && <Image src={icon} alt={text} />}
        </button>
      )}

      {type === "gradient-right-arrow" && (
        <button
          onClick={handleOnClick}
          className="customButtonThree flex items-center justify-center gap-1"
        >
          <span className="gradient-accent-color font-bold">Contact us</span>
          {isLoading && (
            <Image
              src={RefreshIcon}
              alt="loading"
              className="motion-safe:animate-spin h-5 w-5 mr-3"
            />
          )}
          {icon && !isLoading && <Image src={icon} alt={text} />}
        </button>
      )}
    </>
  );
};

export default CustomButton;
