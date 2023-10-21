import Image from "next/image";
import { useState } from "react";
import { AnswerType, CheckPasswordType } from "../../shared/types";

interface PasswordInputProps {
  type: CheckPasswordType;
  label: string;
  handlePassword: (password: AnswerType) => void;
}

const PasswordInput = ({ type, label, handlePassword }: PasswordInputProps) => {
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <>
      <div className="text-xs font-medium text-[#2C2C2E] mb-[5px]">{label}</div>
      <input
        className="w-full h-[42px] text-sm leading-[17px] border border-[#BDBDBD] pl-[40px] mb-[15px] bg-pwLabel bg-no-repeat bg-[position:12px_center]"
        type={`${preview ? "text" : "password"}`}
        placeholder={label}
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
