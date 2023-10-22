import { HTMLAttributes } from "react";

interface InputWithLabelProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  inputType: string;
  labelStyle?: string;
  inputStyle?: string;
}

const InputWithLabel = ({
  label,
  id,
  inputType,
  labelStyle,
  inputStyle,
  ...props
}: InputWithLabelProps) => {
  return (
    <>
      <div>
        <label className={`text-xs font-medium ${labelStyle}`} htmlFor={id}>
          {label}
        </label>
      </div>
      <input
        id={id}
        className={`w-full text-sm border border-[#BDBDBD] px-[14px] py-[8px] ${inputStyle}`}
        type={inputType}
        {...props}
      />
    </>
  );
};

export default InputWithLabel;
