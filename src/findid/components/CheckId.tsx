import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import ResetPasswordForm from "./ResetPasswordForm";

interface CheckIdProps {
  setCurrentProgress: Dispatch<SetStateAction<number>>;
}

const CheckId = ({ setCurrentProgress }: CheckIdProps) => {
  const description = useMemo(
    () => [
      "아이디를 입력해 주세요.",
      "아이디 확인 후 비밀번호를 재설정 할 수 있습니다.",
    ],
    []
  );

  return (
    <ResetPasswordForm
      title="아이디 확인"
      type="id"
      subTitle={description}
      buttonColor="bg-[#FACD49]"
      buttonColorDisabled="bg-[#f7e4ad]"
      setCurrentProgress={setCurrentProgress}
    >
      {({ handleId }) => (
        <div className="mt-[28px] mb-[24px]">
          <input
            className="w-full h-[57px] rounded-[9px] input-login bg-idLabel bg-no-repeat bg-[position:21px_center]"
            type="text"
            placeholder="아이디"
            onChange={({ target: { value } }) => handleId({ id: value })}
          />
        </div>
      )}
    </ResetPasswordForm>
  );
};

export default CheckId;
