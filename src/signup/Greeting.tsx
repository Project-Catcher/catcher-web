/**
 * 페이지 좌측에 환영인사, 에셋이 들어간 컴포넌트
 */
import Image, { StaticImageData } from "next/image";
import React from "react";
import calender from "/public/assets/signup/calender.png";

interface GreetingProps {
  title?: string;
  content?: string;
  img: StaticImageData;
  imgWidth: number;
  imgHeight: number;
  textColor?: string;
}

const Greeting = ({
  title,
  content,
  img,
  imgWidth,
  imgHeight,
  textColor = "text-white",
}: GreetingProps) => {
  return (
    <div className="pt-[100px]">
      <div
        className={`w-[413px] h-[68px] text-[50px] font-semibold font-['Poppins'] ${textColor}`}
      >
        {title}
      </div>

      <div
        className={`w-[563px] h-12 text-2xl font-normal font-['Poppins']  ${textColor}`}
      >
        {content}
        {/* <div className="relative top-4 -left-20">
          <Image src={calender} alt="img" width={140} height={140} />
        </div> */}
      </div>

      <Image src={img} alt="img" width={imgWidth} height={imgHeight} />
    </div>
  );
};

export default Greeting;
