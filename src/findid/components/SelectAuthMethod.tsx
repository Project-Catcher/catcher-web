import { AuthType } from "@shared/types";

interface SelectAuthMethodProps {
  type: AuthType;
  isChecked: boolean;
  handleChecked: (key: AuthType) => void;
}

const SelectAuthMethod = ({
  type,
  isChecked,
  handleChecked,
}: SelectAuthMethodProps) => {
  const isPhone = type === "phone";

  return (
    <>
      <input
        readOnly
        id={type}
        className={`w-[20px] h-[20px] mr-[6px] ${
          isChecked ? "opacity-100" : "opacity-30"
        }`}
        type="radio"
        checked={isChecked}
        onClick={({ target }) => {
          if (target instanceof HTMLInputElement)
            handleChecked(target.id as AuthType);
        }}
      />
      <label htmlFor={type} className="w-4/5">
        {`${isPhone ? "휴대전화로 인증하여 찾기" : "이메일로 인증하여 찾기"}`}
      </label>
    </>
  );
};

export default SelectAuthMethod;
