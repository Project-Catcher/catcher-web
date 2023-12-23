import Image from "next/image";

interface DateMoveButtonProps {
  onClick: (type: "next" | "prev") => void;
}

const DateMoveButton = ({ onClick }: DateMoveButtonProps) => {
  return (
    <div className="flex float-right gap-2">
      <div
        className="flex justify-center w-[33px] h-[33px] border border-[#1918251A] rounded-[100px] cursor-pointer group hover:bg-[#404040]"
        onClick={() => onClick("prev")}
      >
        <Image
          className="rotate-180 invert group-hover:invert-0"
          src="/images/samples/arrow.svg"
          alt="arrow"
          width={14}
          height={14}
        />
      </div>
      <div
        className="flex justify-center w-[33px] h-[33px] border border-[#1918251A] rounded-[100px] cursor-pointer group hover:bg-[#404040]"
        onClick={() => onClick("next")}
      >
        <Image
          className="invert group-hover:invert-0"
          src="/images/samples/arrow.svg"
          alt="arrow"
          width={14}
          height={14}
        />
      </div>
    </div>
  );
};

export default DateMoveButton;
