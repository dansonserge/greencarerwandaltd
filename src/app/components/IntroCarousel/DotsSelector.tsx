import { useState } from "react";
import IntroDotsWrapper from "@public/assets/IntroDots.svg";
import Image from "next/image";
import IntroDot from "@public/assets/IntroDot.svg";
import SelectedDot from "@public/assets/SelectedIntroDot.svg";

const DotsSelector = () => {
  const [selectedDot, setSelectedDot] = useState<number>(0);
  return (
    <div className="min-h-[300px] mt-60">
      <div>
        <Image
          src={IntroDotsWrapper}
          alt={""}
          width={70}
          height={60}
          className="absolute"
        />

        <div className="flex flex-col gap-5 absolute mt-20 ml-5">
          {Array(3)
            .fill("")
            .map((item, index) =>
              index === selectedDot ? (
                <Image
                  key={index}
                  src={SelectedDot}
                  alt={""}
                  width={15}
                  height={15}
                  onClick={() => setSelectedDot(index)}
                />
              ) : (
                <Image
                  key={index}
                  src={IntroDot}
                  alt={""}
                  width={15}
                  height={15}
                  onClick={() => setSelectedDot(index)}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default DotsSelector;
