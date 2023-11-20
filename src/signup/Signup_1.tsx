// 회원가입 내부 첫 번째 페이지 (계정 정보)
import React from "react";
import AccountInfo from "./AccountInfo";
import Greeting from "./Greeting";
import saly2 from "/public/assets/signup/Saly-2.png";

const Signup_1 = () => {
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
      <AccountInfo />
    </>
  );
};

export default Signup_1;
