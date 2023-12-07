import Tag from "@findSchedule/components/Tag";
import Image from "next/image";
import React from "react";

interface InfoMiddleProps {
  profileImg: string;
  nickName: string;
  introduce: string;
  tags: string[];
  like: number;
  scheduleCount: number;
}

const InfoMiddle = ({
  profileImg,
  nickName,
  introduce,
  tags,
  like,
  scheduleCount,
}: InfoMiddleProps) => {
  return (
    <div className="mt-4 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <Image src={profileImg} width={54} height={54} alt="host img" />
          </div>
          <span className="ml-3 text-lg font-bold text-gray-500 capitalize">
            {nickName}
          </span>
        </div>
        <div className="flex items-center text-sm font-medium text-neutral-400">
          <div className="flex items-center">
            <Image
              src="/assets/findSchedule/like.png"
              width={18}
              height={18}
              alt="like"
            />
            <span className="ml-1">{like}</span>
          </div>
          <div className="flex items-center ml-2">
            <Image
              src="/assets/detail/list.svg"
              width={19}
              height={20}
              alt="like"
            />
            <span className="ml-1">{scheduleCount}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 min-h-[30px] text-stone-500 text-sm font-medium">
        {introduce}
      </div>

      <div className="flex flex-wrap gap-2 py-6 overflow-hidden">
        {tags.map((tag: string, i: number) => (
          <Tag tag={tag} key={`tag-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default InfoMiddle;
