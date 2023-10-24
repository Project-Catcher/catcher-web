import React from "react";

import Background from "../../src/signup/Background";
import Greeting from "../../src/signup/Greeting";
import Agreement from "../../src/signup/Agreement";

const index = () => {
  return (
    <Background>
      <div className="flex justify-center gap-4 pt-[100px]">
        <Greeting
          title="만나서 반갑습니다"
          content="캐쳐와 함께라면 하루를 알차게 채우는 건 어렵지 않아요"
        />
        <Agreement />
      </div>
    </Background>
  );
};

export default index;
