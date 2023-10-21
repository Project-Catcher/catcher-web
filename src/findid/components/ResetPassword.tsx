import { useEffect, useMemo, useState } from "react";
import { AnswerType } from "../../login/components/LoginForm";
import { useRegex } from "../../shared/hooks";
import PasswordInput from "./PasswordInput";

const ResetPassword = () => {
  const [answer, setAnswer] = useState<AnswerType>({});
  const { isValidate, checkValidation } = useRegex();

  const handleAnswer = (answer: AnswerType) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handlePassword = (password: AnswerType) => {
    handleAnswer({ ...password });
  };

  const handleCheckPassword = (password: AnswerType) => {
    handleAnswer({ ...password });
  };

  useEffect(() => {
    checkValidation(answer);
  }, [answer, checkValidation]);

  const precautions = useMemo(
    () => [
      "8~15자 길이로 만들어주세요.",
      "영문 대/소문자, 숫자, 특수문자 2가지 이상을 조합해 주세요.",
      "3자 이상 연속/동일한 문자, 숫자는 사용할 수 없습니다.",
    ],
    []
  );

  return (
    <div className="mx-[64.5px] mt-[52px]">
      <div className="text-xl">유의사항</div>
      <ul className="list-disc list-inside text-[#8D8D8D] ml-2 my-2">
        {precautions.map((_precautions) => (
          <li key={_precautions}>{_precautions}</li>
        ))}
      </ul>
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
      <button
        className={`button-full button-semi-rounded text-white text-lg font-semibold ${
          isValidate
            ? "bg-[#F864A1] cursor:pointer"
            : "bg-[#FFA4A475] cursor-not-allowed"
        }`}
        disabled={!isValidate}
      >
        변경하기
      </button>
    </div>
  );
};

export default ResetPassword;
