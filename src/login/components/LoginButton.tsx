import { HTMLAttributes } from "react";

interface LoginButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonStyle: string;
  value: string;
}

const LoginButton = ({ buttonStyle, value, ...props }: LoginButtonProps) => {
  return (
    <button
      className={`${buttonStyle} button-full button-semi-rounded button-shadow`}
      {...props}
    >
      {value}
    </button>
  );
};

export default LoginButton;
