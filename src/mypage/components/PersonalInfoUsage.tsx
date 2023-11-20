import Image from "next/image";
import BoxLabel from "./BoxLabel";
import MyInfoBox from "./MyInfoBox";

const PersonalInfoUsage = () => {
  return (
    <>
      <BoxLabel value="약관 및 정책" />
      <MyInfoBox boxStyle="w-[694px] h-[51px] border-[#D9D9D9]">
        <div className="flex flex-wrap items-center h-full">
          <Image
            src="/images/samples/personalInfoUsage.svg"
            alt="personalInfoUsage"
            width={18}
            height={18}
          />
          <div className="grow text-[#333333] ml-[18px]">개인정보 이용내역</div>
          <button className="w-[54px] h-[33px] text-[14px] text-[#666666] border border-[#D4D8E5] rounded-[5px] bg-[#F4F5F8]">
            확인
          </button>
        </div>
      </MyInfoBox>
    </>
  );
};

export default PersonalInfoUsage;
