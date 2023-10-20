import Image from "next/image";
import { AnswerType } from "../../login/components/LoginForm";
import { useState } from "react";

interface PasswordInputProps {
  type: "newPassword" | "checkNewPassword";
  handlePassword: (password: AnswerType) => void;
}

const PasswordInput = ({ type, handlePassword }: PasswordInputProps) => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <>
      <div className="text-xs font-medium text-[#2C2C2E] mb-[5px]">
        {`${type === "newPassword" ? "새 비밀번호" : "새 비밀번호 확인"}`}
      </div>
      <input
        className="w-full h-[42px] text-sm leading-[17px] border border-[#BDBDBD] pl-[40px] mb-[15px] bg-pwLabel bg-no-repeat bg-[position:12px_center]"
        type={`${preview ? "text" : "password"}`}
        placeholder="새 비밀번호"
        onChange={({ target: { value } }) => handlePassword({ [type]: value })}
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
    </>
  );
};

export default PasswordInput;
