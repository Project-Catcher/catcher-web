import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { calculateNightsAndDays, stringToDate } from "@shared/utils";
import Tag from "./Tag";

export interface CardType {
  id: number;
  img: string;
  title: string;
  content: string;
  dateStart: string;
  dateEnd: string;
  expense: number;
  tags: string[];
  like: number;
  comment: number;
  scrap: number;
  participateNum: number;
  participateCapacity: number;
}

const Card = ({
  id,
  img,
  title,
  content,
  dateStart,
  dateEnd,
  expense,
  tags,
  like,
  comment,
  scrap,
  participateNum,
  participateCapacity,
}: CardType) => {
  const { push } = useRouter();

  return (
    <div
      className="w-[260px] h-[428px] relative flex-col flex box-content transition-transform hover:-translate-y-1 m-auto shadow-md hover:shadow-lg"
      onClick={() => {
        push(`/detail/${id}`);
      }}
    >
      <div className={`w-full h-[170px] bg-stone-300 border-zinc-400 relative`}>
        {img?.length !== 0 ? (
          <Image src={img} alt="sample img" width={260} height={170} />
        ) : (
          <div className="h-[170px] flex items-center justify-center text-white">
            대표 이미지가 없어요
          </div>
        )}
      </div>
      <div className="h-full px-3 py-2">
        <h1 className="w-full h-[50px] text-base font-bold text-zinc-800 truncate-text-2-wrap">
          {title}
        </h1>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-stone-500">
            {stringToDate(dateStart)}~{stringToDate(dateEnd)}
            {calculateNightsAndDays(dateStart, dateEnd)}
          </span>
          <div className="inline-block text-center">
            <span className="text-rose-600 text-[12px] font-bold">마감</span>
            <span className="text-base font-bold text-rose-600">D-10</span>
          </div>
        </div>
        <div className="w-full h-[40px] mt-1 text-xs font-medium leading-[14px] text-neutral-400 truncate-text-3-wrap">
          {content}
        </div>
        <div className="w-full mt-1">
          <span className="text-sm font-bold text-neutral-500">예상경비: </span>
          <span className="text-sm font-black text-pink-400">
            {expense.toLocaleString()}원
          </span>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1 h-[64px] overflow-hidden mt-1">
          {tags.map((tag, i) => (
            <Tag tag={tag} key={`tag-${i}`} />
          ))}
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
                {like}
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
                {comment}
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
                {scrap}
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
            <span className="text-lg font-medium text-pink-400">
              {participateNum}
            </span>
            <span className="text-lg font-medium text-neutral-400">
              /{participateCapacity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
