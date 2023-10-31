import { useState } from "react";
import { InputWithLabel } from "@shared/components";
import { AuthType } from "@shared/types";
import { checkAuthNumValidation } from "@shared/utils";
import TimerWithButton from "./TimerWithButton";
import ValidateButton from "./ValidateButton";

interface CheckAuthProps {
  type: AuthType;
  handleDoneCaptcha: () => void; // 캡차 추가 후 삭제
  handleCurrentProgress: () => void;
}

const CheckAuth = ({
  type,
  handleDoneCaptcha,
  handleCurrentProgress,
}: CheckAuthProps) => {
  const [authNum, setAuthNum] = useState("");

  const handleAuthNum = (value: string) => {
    setAuthNum(value);
  };

  const isAuthNumValidate = checkAuthNumValidation(authNum);

  return (
    <div className="text-xs font-medium mt-[15px] mb-[5px]">
      <div className="flex flex-wrap items-end">
        <InputWithLabel
          maxLength={6}
          pattern="\d*"
          label="인증번호"
          id="phoneAuth"
          inputType="text"
          inputStyle="w-[281px] h-[36px] text-xs leading-[24px] px-[14px] py-[6px]"
          placeholder="인증번호 입력"
          onChange={({ target: { value } }) => handleAuthNum(value)}
        />
        <TimerWithButton isAuthNumValidate={isAuthNumValidate} />
      </div>
      <ValidateButton
        type="beforePhoneAuth"
        value="아이디 찾기"
        isValidate={isAuthNumValidate}
        buttonColor="bg-[#A564F8]"
        buttonColorDisabled="bg-[#A564F875]"
        extraClass="mt-[21px]"
        onClick={() => {
          if (type === "phone") {
            handleDoneCaptcha(); // 아임포트 api
          } else handleDoneCaptcha(); // 이메일 인증 api
          handleCurrentProgress();
        }}
      />
    </div>
  );
};

export default CheckAuth;
