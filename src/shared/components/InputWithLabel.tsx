import { HTMLAttributes } from "react";

interface InputWithLabelProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  inputType: string;
  labelStyle?: string;
  inputStyle?: string;
  readonly?: boolean;
}

const InputWithLabel = ({
  label,
  id,
  inputType,
  labelStyle,
  inputStyle,
  readonly,
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
        className={`border border-[#BDBDBD] ${inputStyle}`}
        type={inputType}
        readOnly={readonly}
        {...props}
      />
    </>
  );
};

export default InputWithLabel;
