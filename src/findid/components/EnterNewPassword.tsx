import { Dispatch, SetStateAction, useMemo } from "react";
import PasswordResetForm from "./PasswordResetForm";
import { PasswordInput } from "@shared/components";

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
    [],
  );

  return (
    <PasswordResetForm
      isDisc
      type="password"
      title="유의사항"
      subTitle={precautions}
      value="변경하기"
      buttonColor="bg-[#F864A1]"
      buttonColorDisabled="bg-[#FFA4A475]"
      setCurrentProgress={setCurrentProgress}
    >
      {({ handlePassword, handleCheckPassword }) => (
        <div className="h-[210px] border border-[#F864A1] rounded-[10px] mb-[28px] px-[30px] py-[25px]">
          <div className="mb-[15px]">
            <PasswordInput
              label="새 비밀번호"
              placeholder="새 비밀번호"
              type="newPassword"
              shape="normal"
              extraDivStyle="h-[42px] pl-[12px] pr-[12px] py-[11px]"
              extraInputStyle="pl-[10px] text-[14px] leading-[20px]"
              handlePassword={handlePassword}
            />
          </div>
          <div>
            <PasswordInput
              label="새 비밀번호 확인"
              placeholder="새 비밀번호 확인"
              type="checkNewPassword"
              shape="normal"
              extraDivStyle="h-[42px] pl-[12px] pr-[12px] py-[11px]"
              extraInputStyle="pl-[10px] text-[14px] leading-[20px]"
              handlePassword={handleCheckPassword}
            />
          </div>
        </div>
      )}
    </PasswordResetForm>
  );
};

export default EnterNewPassword;
