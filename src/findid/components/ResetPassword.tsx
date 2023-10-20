import Image from "next/image";
import { useEffect, useState } from "react";
import { AnswerType } from "../../login/components/LoginForm";
import { useRegex } from "../../shared/hooks";

const ResetPassword = () => {
  const [preview, setPreview] = useState<boolean>(false);
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

  return (
    <div className="mx-[64.5px] mt-[52px]">
      <div className="text-xl">유의사항</div>
      <ul className="list-disc list-inside text-[#8D8D8D] ml-2 my-2">
        <li>8~15자 길이로 만들어주세요.</li>
        <li>영문 대/소문자, 숫자, 특수문자 2가지 이상을 조합해 주세요.</li>
        <li>3자 이상 연속/동일한 문자, 숫자는 사용할 수 없습니다.</li>
      </ul>
      <div className="h-[210px] border border-[#F864A1] rounded-[10px] mb-[28px] px-[30px] py-[25px]">
        <div className="text-xs font-medium text-[#2C2C2E] mb-[5px]">
          새 비밀번호
        </div>
        <input
          className="w-full h-[42px] text-sm leading-[17px] border border-[#BDBDBD] pl-[40px] mb-[15px] bg-pwLabel bg-no-repeat bg-[position:12px_center]"
          type={`${preview ? "text" : "password"}`}
          placeholder="새 비밀번호"
          onChange={({ target: { value } }) =>
            handlePassword({ password: value })
          }
        />
        <button className="absolute -translate-x-[35px] translate-y-[11.5px]">
          <Image
            src="/images/samples/eye.svg"
            alt="eye"
            width={22}
            height={19}
            onMouseDown={() => setPreview(true)}
            onMouseUp={() => setPreview(false)}
          />
        </button>
        <div className="text-xs font-medium text-[#2C2C2E] mb-[5px]">
          새 비밀번호 확인
        </div>
        <input
          className="w-full h-[42px] text-sm leading-[17px] border border-[#BDBDBD] pl-[40px] bg-pwLabel bg-no-repeat bg-[position:12px_center]"
          type={`${preview ? "text" : "password"}`}
          placeholder="새 비밀번호 확인"
          onChange={({ target: { value } }) =>
            handleCheckPassword({ checkPassword: value })
          }
        />
        <button className="absolute -translate-x-[35px] translate-y-[11.5px]">
          <Image
            src="/images/samples/eye.svg"
            alt="eye"
            width={22}
            height={19}
            onMouseDown={() => setPreview(true)}
            onMouseUp={() => setPreview(false)}
          />
        </button>
      </div>
      <button
        className={`button-full rounded-[10px] text-white text-lg font-semibold ${
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
