// 회원가입 내부 세 번째 페이지 (프로필 정보)
import React from "react";
import Greeting from "./Greeting";
import ProfileInfo from "./ProfileInfo";
import saly25 from "/public/assets/signup/Saly-25.png";

const Signup_3 = () => {
  return (
    <>
      <Greeting
        img={saly25}
        imgWidth={600}
        imgHeight={322}
        textColor="text-amber-500"
      />
      <ProfileInfo />
    </>
  );
};

export default Signup_3;
