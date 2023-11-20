import Image from "next/image";
import { SwitchButton } from "@shared/components";
import BoxLabel from "./BoxLabel";
import MyInfoBox from "./MyInfoBox";

const PromotionAgree = () => {
  return (
    <>
      <BoxLabel value="프로모션 정보 수신 동의" />
      <MyInfoBox boxStyle="w-[694px] h-[106px] border-[#D9D9D9] py-[14px] mb-[22px]">
        <div className="flex items-center h-[39px] border-b border-[#DCDCDC] pb-[14px]">
          <Image
            src="/images/samples/phoneIcon.svg"
            alt="phoneIcon"
            width={16}
            height={16}
          />
          <div className="grow text-[#333333] ml-[18px]">+82 10-8***-2***</div>
          <SwitchButton size="w-[60px] h-[25px]" buttonId="phoneToggle" />
        </div>
        <div className="flex items-center h-[25px] mt-[14px]">
          <Image
            src="/images/samples/emailIcon.svg"
            alt="emailIcon"
            width={16}
            height={16}
          />
          <div className="grow text-[#333333] ml-[18px]">ms*****@naver.com</div>
          <SwitchButton size="w-[60px] h-[25px]" buttonId="emailToggle" />
        </div>
      </MyInfoBox>
    </>
  );
};

export default PromotionAgree;
