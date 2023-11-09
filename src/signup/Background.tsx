// 회원가입 페이지에서 사용되는 Background
import React from "react";
import { useRecoilValue } from "recoil";
import { signupPageState } from "@shared/recoil/signup";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  const currentPage = useRecoilValue(signupPageState);

  return (
    <div
      className={`w-full h-screen bg-gradient-to-b ${
        currentPage === 2 || currentPage === 3 || currentPage === 4
          ? "bg-orange-50"
          : "from-pink-400 via-red-100 to-white"
      }`}
    >
      {children}
    </div>
  );
};

export default Background;
