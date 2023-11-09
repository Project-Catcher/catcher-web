interface CommonButtonProps
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  variant: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}
export type ButtonVariants = keyof typeof BUTTON_VARIANTS;
const BUTTON_VARIANTS = {
  primary: "bg-b-primary text-white disabled:bg-b-primary-disabled",
  secondary: "bg-b-secondary text-white disabled:bg-b-secondary-disabled",
  danger: "bg-b-danger text-white disabled:bg-b-danger-disabled",
};

const CommonButton = (props: CommonButtonProps) => {
  const { children, variant } = props;
  return (
    <button
      {...props}
      className={`rounded-[7.24px] py-[10.86px] px-[21.73px] w-[132px] h-[45px] ${props.className} ${BUTTON_VARIANTS[variant]} `}
    >
      {children}
    </button>
  );
};
export default CommonButton;
