import { useState } from "react";
import IntroDotsWrapper from "@/assets/IntroDots.svg";
import Image from "next/image";
import IntroDot from "@/assets/IntroDot.svg";
import SelectedDot from "@/assets/SelectedIntroDot.svg";

const IntroCarousel = () => {

  const [selectedDot, setSelectedDot] = useState<number>(0);

  return (
    <div className="min-h-[300px] mt-12">
      <div className="relative">
        <Image
          src={IntroDotsWrapper}
          alt={"GreenCareRwanda Ltd Logo"}
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
                  alt={"GreenCareRwanda Ltd Logo"}
                  width={15}
                  height={15}
                  onClick={()=>setSelectedDot(index)}
                />
              ) : (
                <Image
                  key={index}
                  src={IntroDot}
                  alt={"GreenCareRwanda Ltd Logo"}
                  width={15}
                  height={15}
                  onClick={()=>setSelectedDot(index)}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default IntroCarousel;
