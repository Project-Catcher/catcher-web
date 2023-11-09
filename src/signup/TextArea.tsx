import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  essential?: boolean;
  fieldName: string;
  placeholder?: string;
  shape: "semi-round" | "normal";
  labelStyle?: string;
  divStyle?: string;
  textAreaStyle?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

const TextArea = ({
  label,
  fieldName,
  essential = false,
  placeholder,
  shape,
  labelStyle,
  divStyle,
  textAreaStyle,
  onChange,
  ...props
}: TextAreaProps) => {
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
        }flex w-full items-center justify-evenly border border-solid border-[#ADADAD] focus-within:border-[#4285F4] ${divStyle}`}
      >
        <textarea
          name={fieldName}
          className={`${textAreaStyle}`}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
};

export default TextArea;
