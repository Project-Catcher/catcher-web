import { LoginValue } from "@shared/types";

interface ModeButtonProps {
  type: LoginValue;
  value: string;
  mode: string;
  handleMode: (value: LoginValue) => void;
}

const ModeButton = ({ type, mode, value, handleMode }: ModeButtonProps) => {
  return (
    <button
      id={type}
      className={`${
        mode === type ? "border-[#F968A5]" : "border-[#E2E2E2]"
      } w-1/2 font-[22px] leading-[33px] border-b-4 border-[#E2E2E2] py-[15px] mb-[21px]`}
      onClick={({ currentTarget: { id } }) => handleMode(id as LoginValue)}
    >
      {value}
    </button>
  );
};

export default ModeButton;
