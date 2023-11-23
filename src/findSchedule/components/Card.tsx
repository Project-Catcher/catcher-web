import Image from "next/image";
import React from "react";
import Tag from "./Tag";

const Card = () => {
  const img = "";
  return (
    <div className="w-[260px] h-[420px] relative flex-col flex box-content transition-transform hover:-translate-y-1 m-auto">
      <div className={`w-full h-[170px] bg-stone-300 border-zinc-400 relatvie`}>
        {img?.length !== 0 ? (
          <Image src={img} alt="sample img" width={260} height={170} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            대표 이미지가 없어요
          </div>
        )}
      </div>
      <div className="p-2 pb-0.5">
        <h1 className="w-full h-[50px] text-base font-bold text-zinc-800 truncate-text-2-wrap">
          단풍구경 관악산 등반 하실 분? 연주암 45분 코스 - 등산 중급자
        </h1>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-stone-500">
            23.10.28~23.10.30(2박 3일)
          </span>
          <div className="inline-block text-center">
            <span className="text-rose-600 text-[12px] font-bold">마감</span>
            <span className="text-base font-bold text-rose-600">D-10</span>
          </div>
        </div>
        <div className="w-full h-[40px] mt-1 text-xs font-medium leading-[14px] text-neutral-400 truncate-text-3-wrap">
          관악산으로 토요일 오전 10시에 등산 일정
          <br />
          연주대 12시 도착 및 12시부터 30분간 사진촬영 예정 / 2시에 서울대
          방향으로 하산
        </div>
        <div className="w-full mt-1">
          <span className="text-sm font-bold text-neutral-500">예상경비 :</span>
          <span className="text-sm font-black text-pink-400"> 25,000원</span>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1 h-[64px] overflow-hidden mt-1">
          <Tag />
          <Tag />
          <Tag />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="flex items-center">
              <Image
                src="/assets/findSchedule/like.png"
                alt="like"
                width={18}
                height={18}
              />
              <span className="ml-0.5 text-neutral-400 text-sm font-medium">
                18
              </span>
            </div>
            <div className="flex items-center">
              <Image
                src="/assets/findSchedule/comment.svg"
                alt="like"
                width={18}
                height={18}
              />
              <span className="ml-0.5 text-neutral-400 text-sm font-medium ">
                18
              </span>
            </div>
            <div className="flex items-center">
              <Image
                src="/assets/findSchedule/bookmark.svg"
                alt="like"
                width={18}
                height={18}
              />
              <span className="ml-0.5 text-neutral-400 text-sm font-medium ">
                18
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/assets/findSchedule/party.svg"
              alt="like"
              width={18}
              height={18}
            />
            <span className="text-lg font-medium text-pink-400">9</span>
            <span className="text-lg font-medium text-neutral-400">/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
