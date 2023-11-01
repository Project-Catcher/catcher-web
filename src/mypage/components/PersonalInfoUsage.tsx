import Image from "next/image";

const PersonalInfoUsage = () => {
  return (
    <div className="text-[#333333]">
      <div className="text-[18px] font-semibol mb-[7px]">약관 및 정책</div>
      <div className="w-[694px] h-[51px] border border-[#D9D9D9] rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] pl-[27px] pr-[14px] py-[9px]">
        <div className="flex flex-wrap items-center h-full">
          <Image
            src="/images/samples/personalInfoUsage.svg"
            alt="personalInfoUsage"
            width={18}
            height={18}
          />
          <div className="ml-[18px] grow">개인정보 이용내역</div>
          <button className="w-[54px] h-[33px] text-[14px] text-[#666666] border border-[#D4D8E5] rounded-[5px] bg-[#F4F5F8]">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoUsage;
