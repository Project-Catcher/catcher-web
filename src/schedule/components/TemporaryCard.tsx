// 임시저장 카드
import Image from "next/image";
import React from "react";
import { scheduleType } from "./ScheduleContent";

interface TemporaryCardProps {
  id: number;
  scheduleType: scheduleType;
  theme: string;
  img: string;
  title: string;
  location: string;
  content: string;
  durationStart: string;
  durationEnd: string;
  isDeleteToggle: boolean;
  handleDeleteToggle: VoidFunction;
  onClickDelete: (i: number) => void;
}

const TemporaryCard = ({
  id,
  scheduleType,
  theme,
  img,
  title,
  location,
  content,
  durationStart,
  durationEnd,
  isDeleteToggle,
  handleDeleteToggle,
  onClickDelete,
}: TemporaryCardProps) => {
  return (
    <div
      className={`w-[260px] relative border-gray-300 border box-content transition-transform hover:-translate-y-1 ${
        scheduleType !== "main" ? "m-auto" : ""
      } ${isDeleteToggle ? "" : "cursor-pointer"}`}
    >
      {isDeleteToggle && (
        <div className="w-[260px] top-0 bottom-0 bg-black bg-opacity-60 absolute z-20">
          <div className="flex">
            <div
              className="relative left-2 mt-4 w-[67px] h-[25px] bg-white rounded-[3px] cursor-pointer"
              onClick={handleDeleteToggle}
            >
              <div className="p-1 text-[12px] font-semibold text-center text-zinc-800">
                취소
              </div>
            </div>
            <div
              className="relative -right-28 mt-4 w-[67px] h-[25px] bg-white rounded-[3px] cursor-pointer"
              onClick={() => {
                handleDeleteToggle();
                onClickDelete(id);
              }}
            >
              <div className="p-1 text-[12px] font-semibold text-center text-zinc-800">
                삭제하기
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-[260px] h-[227px] bg-stone-300 border-b border-zinc-400 relatvie`}
      >
        <div className="absolute w-[260px] top-0 flex justify-between z-10">
          <div className="px-[6px] py-1 font-semibold text-center text-base text-white bg-emerald-400">
            {theme}
          </div>
          <div
            className="px-2 py-1 cursor-pointer"
            onClick={handleDeleteToggle}
          >
            <Image
              src="/assets/schedule/delete_icon.svg"
              alt="delete icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        {img.length !== 0 ? (
          <Image src={img} alt="sample img" width={270} height={235} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            대표 이미지가 없어요
          </div>
        )}
      </div>

      <div className="flex flex-col border-b-[1px] border-zinc-200 px-6 py-4 bg-white h-[175px]">
        <div className="text-base font-medium truncate-text">
          {title.length !== 0 ? title : "제목을 입력해주세요."}
        </div>
        <div className="flex items-start mt-1.5">
          <Image
            src="/assets/schedule/location.svg"
            alt="location"
            width={17}
            height={17}
          />
          <span className="ml-1 text-sm text-neutral-400">
            {location.length !== 0 ? location : "위치를 입력해주세요."}
          </span>
        </div>
        <div className="mt-1.5 text-neutral-400 text-xs font-medium w-[210px] h-[50px] truncate-text-wrap">
          {content.length !== 0 ? content : "내용을 입력해주세요."}
        </div>
        <div className="mt-1 text-sm font-medium text-pink-400">
          {durationStart.length !== 0 ? durationStart : "미정"}~
          {durationEnd.length !== 0 ? durationEnd : "미정"}
        </div>
      </div>
      {/* TODO: 일정 만들기로 라우팅 */}
      <div className="py-4 text-sm font-medium text-center bg-white text-zinc-500">
        일정 만들기 바로가기
      </div>
    </div>
  );
};

export default TemporaryCard;
