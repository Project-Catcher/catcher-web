import Image from "next/image";

const BasicInfo = () => {
  return (
    <div className="w-[694px] h-[203px] px-[16px] py-[12px] mb-[48px] border border-[#22AFFF] rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
      <div className="inline-block text-[14px] text-[#666666] font-semibold">
        기본정보
      </div>
      <button className="float-right w-[76px] h-[33px] border border-[#D4D8E5] rounded-[5px] text-[14px] text-[#666666] bg-[#F4F5F8]">
        정보수정
      </button>
      <div className="flex w-full mt-[4px] pb-[16px] border-b border-[#DCDCDC]">
        <div className="inline-block w-[60px] h-[60px] text-white bg-black rounded-[50%]">
          image
        </div>
        <div className="inline-block pl-[13px]">
          <div className="text-[22px] text-[#333333] font-bold">마승연</div>
          <div className="text-[14px] text-[#666666] font-medium">명란마요</div>
        </div>
      </div>
      <div className="px-[11px] py-[13px]">
        <div className="flex items-center mb-[8px]">
          <Image
            src="/images/samples/phoneIcon.svg"
            alt="phoneIcon"
            width={16}
            height={16}
          />
          <div className="ml-[18px]">+82 10-8***-2***</div>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/samples/emailIcon.svg"
            alt="emailIcon"
            width={16}
            height={16}
          />
          <div className="ml-[18px]">ms*****@naver.com</div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;