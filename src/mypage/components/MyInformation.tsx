import Image from "next/image";
import { SwitchButton } from "@shared/components";

const MyInformation = () => {
  return (
    <div className="w-full pt-[102px] pl-[62px] bg-[#FFF9FC]">
      <div className="w-[694px] h-[203px] px-[16px] py-[12px] mb-[48px] border border-[#22AFFF] rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
        <div className="inline-block text-[14px] text-[#666666] font-semibold">
          기본정보
        </div>
        <button className="float-right w-[76px] h-[33px] border border-[#D4D8E5] rounded-[5px] text-[14px] text-[#666666] bg-[#F4F5F8]">
          정보수정
        </button>
        <div className="w-full mt-[4px] pb-[16px] border-b border-[#DCDCDC]">
          <div className="w-[60px] h-[60px] text-white bg-black rounded-[50%]">
            image
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
            <div className="ml-[18px]">phone</div>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/samples/emailIcon.svg"
              alt="emailIcon"
              width={16}
              height={16}
            />
            <div className="ml-[18px]">email</div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default MyInformation;
