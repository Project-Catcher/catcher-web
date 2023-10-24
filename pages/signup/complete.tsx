// 회원가입 - 회원가입 완료 페이지

import React from "react";

import { Background, Complete, Greeting } from "signup";

const complete = () => {
  return (
    <Background>
      <div className="flex justify-center gap-4 pt-[100px]">
        <Greeting
          title="만나서 반갑습니다"
          content="캐쳐와 함께라면 하루를 알차게 채우는 건 어렵지 않아요"
        />
        <div className="pt-[150px]">
          <Complete />
        </div>
      </div>
    </Background>
  );
};

export default complete;
