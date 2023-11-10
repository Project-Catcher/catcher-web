// 회원가입 내부 두 번째 페이지 (추가 정보)
import React from "react";
import AdditionalInfo from "./AdditionalInfo";
import Greeting from "./Greeting";
import saly2 from "/public/assets/signup/Saly-2.png";

const Signup_2 = () => {
  return (
    <>
      <Greeting
        title="만나서 반갑습니다"
        content="캐쳐와 함께라면 하루를 알차게 채우는 건 어렵지 않아요"
        img={saly2}
        imgWidth={512}
        imgHeight={512}
        textColor="text-amber-500"
      />
      <AdditionalInfo />
    </>
  );
};

export default Signup_2;
