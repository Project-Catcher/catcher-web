// 페이지 좌측에 환영인사, 에셋이 들어간 컴포넌트

import Image from "next/image";
import React from "react";

import saly from "/public/assets/signup/Saly-1.png";
import calender from "/public/assets/signup/calender.png";

interface GreetingProps {
  title?: string;
  content?: string;
}

const Greeting = ({ title, content }: GreetingProps) => {
  return (
    <div className="pt-[100px]">
      <div className="w-[413px] h-[68px] text-white text-[50px] font-semibold font-['Poppins']">
        {title}
      </div>

      <div className="w-[563px] h-12 text-white text-2xl font-normal font-['Poppins']">
        {content}
        <div className="relative top-4 -left-20">
          <Image src={calender} alt="img" width={140} height={140} />
        </div>
      </div>

      <Image src={saly} alt="img" width={603} height={603} />
    </div>
  );
};

export default Greeting;
