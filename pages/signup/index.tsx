import React from "react";

import Greeting from "../../src/signup/Greeting";
import Agreement from "../../src/signup/Agreement";

const index = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-pink-400 via-red-100 to-white">
      <div className="flex justify-center gap-4 pt-[100px]">
        <Greeting
          title="만나서 반갑습니다"
          content="캐쳐와 함께라면 하루를 알차게 채우는 건 어렵지 않아요"
        />
        <Agreement />
      </div>
    </div>
  );
};

export default index;
