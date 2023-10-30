import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fontSize: string;
  backgroundColor: string;
  shadow?: boolean;
  extraClass?: string;
  size?: "full" | "xlarge" | "large" | "medium";
  shape?: "rounded" | "semi-rounded";
}

const Button = ({
  children,
  fontSize,
  backgroundColor,
  shadow,
  extraClass,
  size = "full",
  shape = "semi-rounded",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        shadow ? `button-${shadow}` : ""
      } button-${size} button-${shape} ${fontSize} ${extraClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
