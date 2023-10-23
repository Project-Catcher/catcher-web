import { AnswerType, PasswordType } from "@shared/types";
import Image from "next/image";
import { useState } from "react";

interface PasswordInputProps {
  label?: string;
  placeholder: string;
  type: PasswordType;
  shape: "semi-round" | "normal";
  extraDivStyle: string;
  extraInputStyle: string;
  handlePassword: (password: AnswerType) => void;
}

const PasswordInput = ({
  label,
  placeholder,
  type,
  shape,
  extraDivStyle,
  extraInputStyle,
  handlePassword,
}: PasswordInputProps) => {
  const [preview, setPreview] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState({
    password: false,
    newPassword: false,
    checkNewPassword: false,
  });

  const handleFocusBlur = (focus: PasswordType | null) => {
    setIsFocus({
      password: focus === "password",
      newPassword: focus === "newPassword",
      checkNewPassword: focus === "checkNewPassword",
    });
  };

  return (
    <>
      {label && (
        <div className="text-xs font-medium text-[#2C2C2E] mb-[5px]">
          {label}
        </div>
      )}
      <div
        className={`${
          shape === "semi-round" ? "rounded-[9px] " : ""
        }flex w-full items-center justify-evenly border border-solid border-[#ADADAD] focus-within:border-[#4285F4] ${extraDivStyle}`}
      >
        <label
          className={`w-[21px] h-[21px] inline-block border-box relative overflow-hidden text-[0px] leading-[0px] bg-pwLabel bg-no-repeat ${
            isFocus[type] ? "" : "invert-[0.5]"
          }`}
        >
          비밀번호
        </label>
        <input
          className={`w-full outline-0 ${extraInputStyle}`}
          type={`${preview ? "text" : "password"}`}
          placeholder={placeholder}
          onChange={({ target: { value } }) =>
            handlePassword({ [type]: value })
          }
          onFocus={() => handleFocusBlur(type)}
          onBlur={() => handleFocusBlur(null)}
        />
        <Image
          className="cursor-pointer"
          src="/images/samples/eye.svg"
          alt="eye"
          width={22}
          height={19}
          onMouseDown={() => setPreview(true)}
          onMouseUp={() => setPreview(false)}
        />
      </div>
    </>
  );
};

export default PasswordInput;
