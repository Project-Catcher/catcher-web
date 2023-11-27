import Image from "next/image";

interface SideBarMenuBoxProps {
  title: string;
  isOpen?: boolean;
  isAccordion?: boolean;
  handleToggle?: () => void;
}

const SideBarMenuBox = ({
  title,
  isOpen,
  isAccordion,
  handleToggle,
}: SideBarMenuBoxProps) => {
  return (
    <div
      className="w-full h-[63px] -tracking-[0.5px] px-[27px] py-[20px] cursor-pointer"
      onClick={handleToggle}
    >
      <p className="inline-block text-[14px] text-[#F864A1] font-bold leading-[23px]">
        {title}
      </p>
      {isAccordion && (
        <span className={`${isOpen ? "" : "rotate-180 "}float-right`}>
          <Image
            src="/images/samples/accordionMenu.svg"
            alt="fold"
            width={17.5}
            height={9.5}
          />
        </span>
      )}
    </div>
  );
};

export default SideBarMenuBox;
