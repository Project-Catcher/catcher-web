import Image from "next/image";

const DateMoveButton = () => {
  return (
    <div className="flex gap-[8px] float-right">
      <div className="flex justify-center w-[33px] h-[33px] border border-[#1918251A] rounded-[100px]">
        <Image
          className="rotate-180 invert"
          src="/images/samples/arrow.svg"
          alt="arrow"
          width={14}
          height={14}
        />
      </div>
      <div className="flex justify-center w-[33px] h-[33px] border border-[#1918251A] rounded-[100px] bg-[#404040]">
        <Image
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
