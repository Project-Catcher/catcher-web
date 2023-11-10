import Image from "next/image";
import BoxLabel from "./BoxLabel";
import MyInfoBox from "./MyInfoBox";

const MyActivities = () => {
  return (
    <>
      <BoxLabel value="나의 활동" />
      <div className="flex">
        <MyInfoBox boxStyle="flex items-center w-[343px] h-[51px] border-[#D9D9D9] mr-[8px] mb-[22px]">
          <Image
            src="/images/samples/calender.svg"
            alt="calender"
            width={16}
            height={16}
          />
          <div className="text-[#333333] border-r border-[#DCDCDC] px-[18px]">
            내 일정
          </div>
          <div className="text-[18px] font-medium pl-[18px]">25</div>
        </MyInfoBox>
        <MyInfoBox boxStyle="flex items-center w-[343px] h-[51px] border-[#D9D9D9]">
          <Image
            src="/images/samples/heart.svg"
            alt="heart"
            width={20}
            height={20}
          />
          <div className="text-[#333333] border-r border-[#DCDCDC] px-[18px]">
            내 하트
          </div>
          <div className="text-[18px] text-[#F864A1] font-medium pl-[18px]">
            185
          </div>
        </MyInfoBox>
      </div>
    </>
  );
};

export default MyActivities;
