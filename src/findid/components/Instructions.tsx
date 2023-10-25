import { AuthType } from "@shared/types";
import { useState } from "react";

interface InstructionsProps {
  type: AuthType;
}

const Instructions = ({ type }: InstructionsProps) => {
  const [isHover, setIsHover] = useState(false);

  const instruction =
    type === "phone"
      ? "1588 번호가 스팸 문자로 등록되어 있는 것은 아닌지 확인해주세요.\n 스팸 문자로 등록되어 있지 않다면,\n 다시 한 번 ‘인증번호 받기’를 눌러주세요."
      : "Catcher가 발송한 메일이 스팸 메일로 분류된 것은 아닌지\n 확인해 주세요. 스팸 메일함에도 메일이 없다면,\n 다시 한 번 '인증번호 받기'를 눌러주세요.";

  return (
    <>
      <div className="flex items-center relative float-right text-[10px] text-[#8D8D8D]">
        인증번호가 오지 않나요
        <div
          className="inline-block w-[22px] h-[22px] bg-question bg-no-repeat cursor-pointer"
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        />
        {isHover && (
          <div className="absolute w-[250px] h-[57px] text-[9px] leading-[13px] text-[#777777] -tracking-[.065em] font-medium top-[22px] bg-white border border-[#BCBBBB] shadow-[0_2px_5px_0_rgba(0,0,0,0.15)] pl-[12px] py-[7px] before:absolute before:-top-[9px] before:left-[110px] before:border-b-[8px] before:border-r-[8px] before:border-b-[#BCBBBB] before:border-r-transparent after:absolute after:-top-[6.3px] after:left-[111px] after:border-r-[7px] after:border-b-[7px] after:border-b-[#FFFFFF] after:border-r-transparent">
            {instruction.split("\n").map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Instructions;
