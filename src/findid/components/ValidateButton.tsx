import { HTMLAttributes } from "react";

interface ValidateButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: string;
  value: string;
  isValidate: boolean;
  buttonColor: string;
  buttonColorDisabled?: string;
  extraClass?: string;
}

const ValidateButton = ({
  type,
  value,
  isValidate,
  buttonColor,
  buttonColorDisabled,
  extraClass,
  ...props
}: ValidateButtonProps) => {
  const currentButtonColor = !isValidate
    ? `${buttonColorDisabled} cursor-not-allowed`
    : `${buttonColor} cursor:pointer`;

  return (
    <button
      className={`button-full button-semi-rounded text-white text-lg font-semibold ${currentButtonColor} ${extraClass}`}
      disabled={!isValidate}
      {...props}
    >
      {value}
    </button>
  );
};

export default ValidateButton;
