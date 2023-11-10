// 회원가입 완료 시, 마지막에 나타나는 컴포넌트
import Image from "next/image";
import React from "react";
import Button from "./Button";
import thumb from "/public/assets/signup/thumb.png";

const Complete = () => {
  // TODO: 회원가입 완료시 라우팅 구현
  const onClick = () => {
    console.log("회원가입이 완료되었습니다.");
  };

  return (
    <div className="w-[727px] h-[429px] bg-white rounded-[15px] border border-sky-100 flex flex-col items-center relative">
      <div className="absolute -top-[130px]">
        <Image src={thumb} alt="thumb" width={206} height={206} />
      </div>
      <div className="text-cyan-950 text-2xl font-bold font-['Roboto'] leading-9 mt-20">
        Form Submitted Successfully!
      </div>
      <div className="w-[483px] h-[118px] text-center">
        <span className="text-cyan-950 text-lg font-bold font-['Roboto Flex'] leading-[27px]">
          It is a long established fact that a reader will be distracted by the
          readable.
          <br />
        </span>
        <span className="text-cyan-950 text-[17px] font-normal font-['Roboto Flex'] leading-relaxed">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using
        </span>
      </div>
      <div className="w-[617px] h-8 text-center text-cyan-950 text-[17px] font-normal font-['Roboto Flex'] leading-relaxed">
        The standard chunk of Lorem Ipsum used since the 1500s
      </div>
      <div className="flex justify-center mt-5">
        <Button
          label={"완료"}
          onClick={onClick}
          buttonStyle="w-[380px] h-[45.73px] px-[21.73px] py-[10.86px] bg-amber-500 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Complete;
