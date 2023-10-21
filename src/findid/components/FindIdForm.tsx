import { useState } from "react";
import Instructions from "./Instructions";

interface FindIdFormProps {
  description: string;
  type: "phone" | "email";
}

const FindIdForm = ({ description, type }: FindIdFormProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const currentType = type === "phone" ? true : false;

  return (
    <>
      <div className="mt-[6px]">
        <div
          className={`${
            type === "phone" ? "w-[345px]" : "w-full"
          } text-[12px] text-[#8D8D8D] pl-[26px]`}
        >
          {description}
        </div>
      </div>
      <div className="pl-[8px]">
        <div className="inline-block w-[197px] mr-[10px]">
          <label className="text-xs font-medium" htmlFor="name">
            이름
          </label>
          <div>
            <input
              id="name"
              className="w-full text-sm border border-[#BDBDBD] px-[14px] py-[8px]"
              type="text"
              placeholder="이름을 입력해 주세요."
            />
          </div>
        </div>
        <div className="inline-block w-[260px]">
          <label className="text-xs font-medium" htmlFor="phone">
            {currentType ? "휴대전화" : "이메일 주소"}
          </label>
          <div className="flex items-center relative float-right text-[10px] text-[#8D8D8D]">
            인증번호가 오지 않나요
            <button
              className="inline-block w-[22px] h-[22px] bg-question bg-no-repeat"
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            />
            {isHover && <Instructions type={type} />}
          </div>
          <div>
            <input
              id="phone"
              className="w-full text-sm border border-[#BDBDBD] px-[14px] py-[8px]"
              type="tel"
              placeholder={`${
                currentType ? "휴대전화번호 (숫자만 입력)" : "이메일 주소 입력"
              }`}
            />
          </div>
        </div>
        <div className="text-xs font-medium mt-[15px] mb-[5px]">
          개인정보 보호를 위해 아래 자동입력 방지 문자를 입력해주세요.
        </div>
        <button className="button-full button-semi-rounded text-lg text-white font-semibold bg-[#F864A1] mt-[21px]">
          인증번호 받기
        </button>
      </div>
    </>
  );
};

export default FindIdForm;
