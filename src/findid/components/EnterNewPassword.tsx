import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import PasswordInput from "./PasswordInput";
import ResetPasswordForm from "./ResetPasswordForm";

interface EnterNewPasswordProps {
  setCurrentProgress: Dispatch<SetStateAction<number>>;
}

const EnterNewPassword = ({ setCurrentProgress }: EnterNewPasswordProps) => {
  const precautions = useMemo(
    () => [
      "8~15자 길이로 만들어주세요.",
      "영문 대/소문자, 숫자, 특수문자 2가지 이상을 조합해 주세요.",
      "3자 이상 연속/동일한 문자, 숫자는 사용할 수 없습니다.",
    ],
    []
  );

  return (
    <ResetPasswordForm
      isDisc
      type="password"
      title="유의사항"
      subTitle={precautions}
      buttonColor="bg-[#F864A1]"
      buttonColorDisabled="bg-[#FFA4A475]"
      setCurrentProgress={setCurrentProgress}
    >
      {({ handlePassword, handleCheckPassword }) => (
        <div className="h-[210px] border border-[#F864A1] rounded-[10px] mb-[28px] px-[30px] py-[25px]">
          <PasswordInput
            type="newPassword"
            label="새 비밀번호"
            handlePassword={handlePassword}
          />
          <PasswordInput
            type="checkNewPassword"
            label="새 비밀번호 확인"
            handlePassword={handleCheckPassword}
          />
        </div>
      )}
    </ResetPasswordForm>
  );
};

export default EnterNewPassword;
