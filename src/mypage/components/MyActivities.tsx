import Image from "next/image";

const MyActivities = () => {
  return (
    <div className="w-[694px] mb-[22px]">
      <div className="text-[18px] text-[#333333] font-semibold mb-[7px]">
        나의 활동
      </div>
      <div className="flex">
        <div className="inline-block flex items-center w-[343px] h-[51px] border border-[#D9D9D9] rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] pl-[27px] mr-[8px]">
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
        </div>
        <div className="inline-block flex items-center w-[343px] h-[51px] border border-[#D9D9D9] rounded-[9px] bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] pl-[27px]">
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
        </div>
      </div>
    </div>
  );
};

export default MyActivities;
