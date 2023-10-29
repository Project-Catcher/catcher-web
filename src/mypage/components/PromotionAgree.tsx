import Image from "next/image";
import { SwitchButton } from "@shared/components";

const PromotionAgree = () => {
  return (
    <div className="text-[#333333] mb-[22px]">
      <div className="text-[18px] font-semibold mb-[7px]">
        프로모션 정보 수신 동의
      </div>
      <div className="w-[694px] h-[106px] border border-[#D9D9D9] rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] pl-[27px] pr-[19px] py-[14px]">
        <div className="flex items-center h-[39px] border-b border-[#DCDCDC] pb-[14px]">
          <Image
            src="/images/samples/phoneIcon.svg"
            alt="phoneIcon"
            width={16}
            height={16}
          />
          <div className="ml-[18px] grow">+82 10-8***-2***</div>
          <SwitchButton size="w-[60px] h-[25px]" buttonId="phoneToggle" />
        </div>
        <div className="flex items-center h-[25px] mt-[14px]">
          <Image
            src="/images/samples/emailIcon.svg"
            alt="emailIcon"
            width={16}
            height={16}
          />
          <div className="ml-[18px] grow">ms*****@naver.com</div>
          <SwitchButton size="w-[60px] h-[25px]" buttonId="emailToggle" />
        </div>
      </div>
    </div>
  );
};

export default PromotionAgree;
