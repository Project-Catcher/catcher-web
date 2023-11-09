import Image from "next/image";
import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  essential?: boolean;
  fieldName: string;
  placeholder?: string;
  type?: string;
  shape: "semi-round" | "normal";
  labelStyle?: string;
  divStyle?: string;
  inputStyle?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const Input = ({
  label,
  type,
  fieldName,
  essential = false,
  placeholder,
  shape,
  labelStyle,
  divStyle,
  inputStyle,
  onChange,
  ...props
}: InputProps) => {
  const [preview, setPreview] = useState(type === "password" ? false : true);

  return (
    <>
      {label && (
        <div
          className={`text-xs font-medium text-[#2C2C2E] mb-[5px] ${labelStyle}"`}
        >
          {label}
          {essential && (
            <span className="w-[11px] h-[22px] text-red-600 text-xl font-light">
              *
            </span>
          )}
        </div>
      )}
      <div
        className={`${
          shape === "semi-round" ? "rounded-[9px] " : ""
        }flex items-center justify-evenly border border-solid border-[#ADADAD] focus-within:border-[ #4285F4] ${divStyle} box-border`}
      >
        <input
          name={fieldName}
          className={`${
            shape === "semi-round" ? "rounded-[9px] " : ""
          } ${inputStyle} `}
          type={`${preview ? "text" : "password"}`}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
          }}
          {...(props.readOnly ? { disabled: true } : {})}
          {...props}
        />

        {/* type이 password인 경우에만 preview 기능 */}
        {type === "password" && (
          <div className="pr-5">
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
        )}
      </div>
    </>
  );
};

export default Input;
