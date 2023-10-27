// 인증번호 입력 컴포넌트
import { useState } from "react";
import { AuthTimer } from "@shared/components";
import { checkAuthNumValidation } from "@shared/utils";
import AuthErrorMessage from "./AuthErrorMessage";
import Button from "./Button";
import Input from "./Input";

interface CheckAuthProps {
  isDoneInput: boolean;
}

const CheckAuth = ({ isDoneInput }: CheckAuthProps) => {
  const [authNum, setAuthNum] = useState("");

  // TODO: 인증번호 인증 로직 구현
  const handleAuthNum = (value: string) => {
    setAuthNum(value);
  };

  const isAuthNumValidate = checkAuthNumValidation(authNum);

  return (
    <div className="flex flex-col">
      <div className="flex items-end mt-[15px] relative">
        <div>
          <Input
            maxLength={6}
            pattern="\d*"
            label="인증번호"
            fieldName="phoneAuth"
            shape="normal"
            inputStyle="w-[333px] h-[46px] text-sm px-[14px] py-[8px]"
            placeholder="인증번호 입력"
            onChange={({ target: { value } }) => handleAuthNum(value)}
          />
        </div>
        <Button
          label="재발송"
          onClick={() => {
            () =>
              alert(
                "인증번호 발송 요청이 완료되었습니다.\n인증번호가 오지 않는 경우, 입력한 이름/휴대폰번호를 확인 후 다시 요청해주세요.",
              ); // TODO: 아임포트 API와 연결하여 휴대폰 인증 로직
          }}
          buttonStyle="w-[119px] h-[48px] bg-amber-300 ml-1"
        />

        {/* 인증하기 버튼 누를 시 나오는 Timer */}
        {isDoneInput && (
          <div className="absolute -top-2 right-32">
            <AuthTimer />
          </div>
        )}
      </div>

      {/* TODO: 인증번호 인증 로직 구현 (현재는 6자리면 에러메시지 안나옴) */}
      {isDoneInput ? (
        isAuthNumValidate ? (
          <div className="h-[16px] invisible mt-[5px] mb-[12px]" />
        ) : (
          <AuthErrorMessage />
        )
      ) : (
        <div className="h-[16px] invisible mt-[5px] mb-[12px]" />
      )}
    </div>
  );
};

export default CheckAuth;
