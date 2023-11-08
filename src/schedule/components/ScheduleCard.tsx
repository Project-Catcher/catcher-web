// 일정 카드 컴포넌트
import Image from "next/image";
import { useState } from "react";

interface ScheduleCardProps {
  idx: number;
  theme: string;
  img?: string;
  title: string;
  content?: string;
  writer: string;
  status: boolean;
  location: string;
  durationStart: string;
  durationEnd: string;
  createdAt: string;
  like: number;
  comment: number;
  marked: number;
  onClickDelete: (i: number) => void;
}

const ScheduleCard = ({
  idx,
  theme,
  img,
  title,
  content,
  writer,
  status,
  location,
  durationStart,
  durationEnd,
  createdAt,
  like,
  comment,
  marked,
  onClickDelete,
}: ScheduleCardProps) => {
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => {
    setIsDelete((prev) => !prev);
  };

  return (
    <div
      className={`w-[260px] relative border-gray-300 border box-content transition-transform hover:-translate-y-1 ${
        isDelete ? "" : "cursor-pointer"
      }`}
    >
      {isDelete && (
        <div className="w-[260px] top-0 bottom-0 bg-black bg-opacity-60 absolute z-20">
          <div className="flex">
            <div
              className="relative left-2 mt-4 w-[67px] h-[25px] bg-white rounded-[3px] cursor-pointer"
              onClick={handleDelete}
            >
              <div className="p-1 text-[12px] font-semibold text-center text-zinc-800">
                취소
              </div>
            </div>
            <div
              className="relative -right-28 mt-4 w-[67px] h-[25px] bg-white rounded-[3px] cursor-pointer"
              onClick={() => {
                handleDelete();
                onClickDelete(idx);
              }}
            >
              <div className="p-1 text-[12px] font-semibold text-center text-zinc-800">
                삭제하기
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 사진 및 테마 */}
      <div
        className={`w-[260px] h-[225px] bg-stone-300 border-b border-zinc-400 relatvie`}
      >
        <div className="absolute w-[260px] top-0 flex justify-between z-10">
          <div className="px-[6px] py-1 font-semibold text-center text-base text-white bg-emerald-400">
            {theme}
          </div>
          <div className="p-1 cursor-pointer" onClick={handleDelete}>
            <Image
              src="/assets/schedule/delete_icon.svg"
              alt="delete icon"
              width={20}
              height={20}
            />
          </div>
        </div>

        {img ? (
          <Image src={img} alt="sample img" width={270} height={235} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            대표 이미지가 없어요
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col border-b-[1px] border-zinc-200 px-6 py-4 bg-white">
        <div className="text-base font-medium">{title}</div>
        <div className="mt-1 text-sm font-medium text-pink-400">
          {durationStart}~{durationEnd}
        </div>
        <div className="flex items-start mt-1.5">
          <Image
            src="/assets/schedule/location.svg"
            alt="location"
            width={17}
            height={17}
          />
          <span className="ml-1 text-sm text-neutral-400">{location}</span>
        </div>
        <div className="mt-1 text-xs text-neutral-400">작성일: {createdAt}</div>
        <div className="flex mt-6">
          <Image
            src="/assets/schedule/like.png"
            alt="like"
            width={18}
            height={18}
          />
          <span className="ml-1 mr-2 text-sm text-neutral-400">{like}</span>
          <Image
            src="/assets/schedule/comment.svg"
            alt="like"
            width={16}
            height={14}
          />
          <span className="ml-1 mr-2 text-sm text-neutral-400">{comment}</span>
          <Image
            src="/assets/schedule/marked.svg"
            alt="like"
            width={10}
            height={14}
          />
          <span className="ml-1 text-sm text-neutral-400">{marked}</span>
        </div>
      </div>
      {/* TODO: 일정 만들기로 라우팅 */}
      <div className="py-4 text-sm font-medium text-center bg-white text-zinc-500">
        일정 만들기 바로가기
      </div>
    </div>
  );
};

export default ScheduleCard;
