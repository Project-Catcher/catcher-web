interface ModeButtonProps {
  type: "id" | "password";
  mode: string;
  value: string;
  handleMode: (value: string) => void;
}

const ModeButton = ({ type, mode, value, handleMode }: ModeButtonProps) => {
  return (
    <button
      id={type}
      className={`w-1/2 font-[22px] leading-[33px] border-b-4 border-[#E2E2E2] py-[15px] mb-[21px] ${
        mode === type ? "border-[#F968A5]" : "border-[#E2E2E2]"
      }`}
      onClick={({ target }) => {
        if (target instanceof HTMLButtonElement) handleMode(target.id);
      }}
    >
      {value}
    </button>
  );
};

export default ModeButton;
