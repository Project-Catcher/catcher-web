import { useState } from "react";
import AuthenticationBox from "./AuthenticationBox";

export interface Checked {
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
      <AuthenticationBox
        type="phone"
        isChecked={isChecked.phone}
        handleChecked={handleChecked}
      />
      <AuthenticationBox
        type="email"
        isChecked={isChecked.email}
        handleChecked={handleChecked}
      />
    </>
  );
};

export default FindMyId;
