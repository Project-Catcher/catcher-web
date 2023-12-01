import React, { useState } from "react";

interface ItemCardProps {
  theme: string;
  title: string;
  place: string;
  content: string;
}

const ItemCard = ({ theme, title, place, content }: ItemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="mt-2 w-[270px] h-[80px] bg-amber-200 flex relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 flex items-center h-full text-black bg-black bg-opacity-60 justify-evenly">
          <button className="px-3 py-2 bg-white rounded-[3px]">수정하기</button>
          <button className="px-3 py-2 bg-white rounded-[3px]">삭제하기</button>
        </div>
      )}
      <div className="w-3 h-[80px] px-[3px] py-1 bg-orange-300 rounded-tl rounded-bl flex-col justify-center items-center flex">
        <div className="w-1 grow opacity-40 bg-white rounded-[1px]" />
      </div>
      <div className="h-[80px] flex flex-col w-full items-center">
        <div className="flex justify-between flex-1 w-full">
          <div className="ml-2 text-zinc-700 text-xs font-semibold w-[45px] text-center leading-[40px]">
            {theme}
          </div>
          <div className="w-[120px] text-zinc-700 text-xs font-medium leading-[40px] truncate-text">
            {title}
          </div>
          <div className="w-[40px] text-black text-xs text-opacity-50 leading-[40px] font-semibold">
            {place}
          </div>
        </div>
        <div className="w-[225px] border-dotted border-gray-400 border-2" />
        <div className="px-2 w-[247px] text-neutral-400 leading-[40px] text-xs font-medium flex-1 truncate-text">
          {content}
        </div>
      </div>
      <div className="w-3 h-[80px] px-[3px] py-1 bg-orange-300 rounded-tr rounded-br flex-col justify-center items-center flex">
        <div className="w-1 grow opacity-40 bg-white rounded-[1px]" />
      </div>
    </div>
  );
};

export default ItemCard;
