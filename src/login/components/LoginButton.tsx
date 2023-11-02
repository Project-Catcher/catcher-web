interface LoginButtonProps {
  buttonStyle: string;
  value: string;
}

const LoginButton = ({ buttonStyle, value }: LoginButtonProps) => {
  return (
    <button
      className={`${buttonStyle} button-full button-semi-rounded button-shadow`}
    >
      {value}
    </button>
  );
};

export default LoginButton;
