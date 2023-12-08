import Image from "next/image";
import React, { useRef } from "react";

export interface participateInfoType {
  id: number;
  profileImg: string;
}

interface ParticipationStatusProps {
  participateNum: number;
  participateCapacity: number;
  applicantNum: number;
  participateInfos: participateInfoType[];
}

const ParticipationStatus = ({
  participateNum,
  participateCapacity,
  applicantNum,
  participateInfos,
}: ParticipationStatusProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const onClickCarousel = (dir: string) => {
    if (dir === "left") {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -62, behavior: "smooth" });
      }
    } else {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 62, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative flex items-center p-2 bg-white border rounded-lg border-zinc-300">
      <div className="flex flex-col px-2">
        <div className="text-sm font-medium text-stone-500 w-[90px]">
          참여 인원:{" "}
          <span className="text-lg font-medium text-pink-400">
            {participateNum}
          </span>
          <span className="text-lg font-medium text-neutral-400">
            /{participateCapacity}
          </span>
        </div>
        <div className="text-sm font-medium text-neutral-400">
          신청자: {applicantNum}명
        </div>
      </div>

      <div
        ref={carouselRef}
        className="w-[256px] flex items-center gap-2 px-3 border-l-4 border-dotted overflow-hidden"
      >
        <div
          className="absolute z-20 rotate-180 cursor-pointer left-[118px] top-[28px] hover:bg-slate-100 rounded-full p-1 flex items-center"
          onClick={() => onClickCarousel("left")}
        >
          <Image src="/assets/detail/right.svg" width={9} height={15} alt="" />
        </div>
        {participateInfos.map((info: any, i: number) => (
          <div
            key={`info-${i}`}
            className="cursor-pointer w-[50px] h-[50px] shrink-0"
          >
            <Image
              src={info.profileImg}
              onClick={() => {
                // TODO: 사용자 정보 모달
              }}
              alt=""
              width={50}
              height={50}
            />
          </div>
        ))}
        <div
          className="absolute right-1 z-20 top-[28px] cursor-pointer  hover:bg-slate-100 rounded-full p-1 flex items-center"
          onClick={() => onClickCarousel("right")}
        >
          <Image src="/assets/detail/right.svg" width={9} height={15} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ParticipationStatus;
