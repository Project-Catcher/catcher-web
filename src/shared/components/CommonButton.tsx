interface CommonButtonProps
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  variant:
    | "accept"
    | "warn"
    | "danger"
    | "pink"
    | "orange"
    | "yellow"
    | "purple"
    | "gray"
    | "black";

  children: React.ReactNode;
}
export type ButtonVariants = keyof typeof BUTTON_VARIANTS;
const BUTTON_VARIANTS = {
  accept: "bg-c-accept text-white disabled:bg-c-accept-disabled",
  warn: "bg-c-warn text-white disabled:bg-c-warn-disabled",
  danger: "bg-c-danger text-white disabled:bg-c-danger-disabled",
  pink: "bg-c-pink text-white disabled:bg-c-pink-disabled",
  orange: "bg-c-orange text-white disabled:bg-c-orange-disabled",
  yellow: "bg-c-yellow text-white disabled:bg-c-yellow-disabled",
  purple: "bg-c-purple text-white disabled:bg-c-purple-disabled",
  gray: "bg-c-gray text-white disabled:bg-c-gray-disabled",
  black: "bg-c-black text-white",
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
