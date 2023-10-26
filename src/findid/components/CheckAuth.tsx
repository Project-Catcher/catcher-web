import { AuthTimer, InputWithLabel } from "@shared/components";
import AuthErrorMessage from "./AuthErrorMessage";
import ValidateButton from "./ValidateButton";
import { AuthType } from "@shared/types";
import { useState } from "react";
import { checkAuthNumValidation } from "@shared/utils";

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
      <div className="flex items-end">
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
        <button
          className="w-[95px] h-[36px] text-white bg-[#FACD49] ml-[7px] mr-[14px]"
          onClick={
            () =>
              alert(
                "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
              )
            // re-request api here
          }
        >
          재발송
        </button>
        <AuthTimer />
      </div>
      {isAuthNumValidate ? (
        <div className="h-[16px] invisible mt-[5px] mb-[12px]"></div>
      ) : (
        <AuthErrorMessage />
      )}
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
