import { Dispatch, SetStateAction, useMemo } from "react";
import PasswordResetForm from "./PasswordResetForm";
import { IdInput } from "@shared/components";

interface IdCheckProps {
  setCurrentProgress: Dispatch<SetStateAction<number>>;
}

const IdCheck = ({ setCurrentProgress }: IdCheckProps) => {
  const description = useMemo(
    () => [
      "아이디를 입력해 주세요.",
      "아이디 확인 후 비밀번호를 재설정 할 수 있습니다.",
    ],
    [],
  );

  return (
    <PasswordResetForm
      title="아이디 확인"
      type="id"
      subTitle={description}
      value="다음"
      buttonColor="bg-[#FACD49]"
      buttonColorDisabled="bg-[#FACD4975]"
      setCurrentProgress={setCurrentProgress}
    >
      {({ handleId }) => (
        <div className="mt-[28px] mb-[24px]">
          <IdInput handleId={handleId} />
        </div>
      )}
    </PasswordResetForm>
  );
};

export default IdCheck;
