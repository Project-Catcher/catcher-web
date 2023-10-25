import { AuthType } from "@shared/types";

interface SelectAuthMethodProps {
  label: string;
  type: AuthType;
  isChecked: boolean;
  handleChecked: (key: AuthType) => void;
}

const SelectAuthMethod = ({
  label,
  type,
  isChecked,
  handleChecked,
}: SelectAuthMethodProps) => {
  return (
    <>
      <input
        readOnly
        id={type}
        className={`${
          isChecked ? "opacity-100" : "opacity-30"
        } w-[20px] h-[20px] mr-[6px]`}
        type="radio"
        checked={isChecked}
        onClick={({ currentTarget: { id } }) => handleChecked(id as AuthType)}
      />
      <label htmlFor={type} className="w-4/5">
        {label}
      </label>
    </>
  );
};

export default SelectAuthMethod;
