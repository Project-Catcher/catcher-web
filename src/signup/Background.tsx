// 회원가입 페이지에서 사용되는 Background
import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-pink-400 via-red-100 to-white">
      {children}
    </div>
  );
};

export default Background;
