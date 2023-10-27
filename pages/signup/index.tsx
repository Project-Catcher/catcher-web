// 회원가입 - 서비스 약관 동의 페이지
import React from "react";
import { useRecoilValue } from "recoil";
import { Background } from "signup";
import ConsentToService from "signup/ConsentToService";
import Signup_1 from "signup/Signup_1";
import Signup_2 from "signup/Signup_2";
import { signupPageState } from "@shared/recoil/signup";

const Signup = () => {
  const currentPage = useRecoilValue(signupPageState);

  return (
    <Background>
      <div className="flex justify-center gap-4 pt-[100px]">
        {currentPage === 1 && <ConsentToService />}
        {currentPage === 2 && <Signup_1 />}
        {currentPage === 3 && <Signup_2 />}
      </div>
    </Background>
  );
};

export default Signup;
