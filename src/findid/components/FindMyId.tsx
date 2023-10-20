import { useState } from "react";
import FindIdForm from "./FindIdForm";

interface Checked {
  phone: boolean;
  email: boolean;
}

const FindMyId = () => {
  const [isChecked, setIsChecked] = useState<Checked>({
    phone: false,
    email: false,
  });

  const handleChecked = (key: string) => {
    setIsChecked({ phone: key === "phone", email: key === "email" });
  };

  return (
    <>
      <div className="py-[3px] mb-[21px]">
        <div className="font-[20px] leading-[30px]">아이디 찾기</div>
        <div className="leading-[22px] text-[#8D8D8D]">
          아이디 찾는 방법을 선택해 주세요
        </div>
      </div>
      <div>
        <div
          className={`flex flex-wrap items-center button-full button-semi-rounded text-[#2C2C2E] leading-[24px] border-2 ${
            isChecked.phone
              ? "h-fit border-[#F864A1]"
              : "h-[64px] border-[#EBEBEB]"
          } pl-[28.35px] py-[20px] mb-[11.74px]`}
        >
          <input
            readOnly
            id="phone"
            className={`w-[20px] h-[20px] mr-[6px] ${
              isChecked.phone ? "opacity-100" : "opacity-30"
            }`}
            type="radio"
            checked={isChecked.phone}
            onClick={({ target }) => {
              if (target instanceof HTMLInputElement) handleChecked(target.id);
            }}
          />
          <label htmlFor="phone" className="min-w-[200px] leading-[24px]">
            휴대전화로 인증하여 찾기
          </label>
          {isChecked.phone && (
            <FindIdForm
              type="phone"
              description="회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야
          인증번호를 받을 수 있습니다."
            />
          )}
        </div>
        <div
          className={`flex flex-wrap items-center button-full button-semi-rounded text-[#2C2C2E] leading-[24px] border-2 ${
            isChecked.email
              ? "h-fit border-[#F864A1]"
              : "h-[64px] border-[#EBEBEB]"
          } pl-[28.35px] py-[20px]`}
        >
          <input
            readOnly
            id="email"
            className={`w-[20px] h-[20px] mr-[6px] ${
              isChecked.email ? "opacity-100" : "opacity-30"
            }`}
            type="radio"
            checked={isChecked.email}
            onClick={({ target }) => {
              if (target instanceof HTMLInputElement) handleChecked(target.id);
            }}
          />
          <label htmlFor="email" className="min-w-[200px]">
            이메일로 인증하여 찾기
          </label>
          {isChecked.email && (
            <FindIdForm
              type="email"
              description="본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다."
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FindMyId;
