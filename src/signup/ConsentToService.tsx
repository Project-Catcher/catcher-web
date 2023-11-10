import React from "react";
import Agreement from "./Agreement";
import Greeting from "./Greeting";
import saly1 from "/public/assets/signup/Saly-1.png";

const ConsentToService = () => {
  return (
    <>
      <Greeting
        title="만나서 반갑습니다"
        content="캐쳐와 함께라면 하루를 알차게 채우는 건 어렵지 않아요"
        img={saly1}
        imgWidth={603}
        imgHeight={603}
      />
      <Agreement />
    </>
  );
};

export default ConsentToService;
