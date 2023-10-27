// 회원가입 - 회원가입 완료 페이지

import React from "react";

import { Background, Complete, Greeting } from "signup";

const complete = () => {
  return (
    <Background>
      <div className="flex justify-center gap-4 pt-[100px]">
        <Greeting
          title="환영합니다!"
          content="지금부터 캐쳐와 함께 인생을 하나하나 채워 가볼까요?"
        />
        <div className="pt-[150px]">
          <Complete />
        </div>
      </div>
    </Background>
  );
};

export default complete;
