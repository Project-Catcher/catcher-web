import React from "react";

interface ItemCardProps {
  theme: string;
  name: string;
  place: string;
  content: string;
}

const ItemCard = ({ theme, name, place, content }: ItemCardProps) => {
  return (
    <div className="mt-2 w-[270px] h-[80px] bg-amber-200 flex">
      <div className="w-3 h-[80px] px-[3px] py-1 bg-orange-300 rounded-tl rounded-bl flex-col justify-center items-center flex">
        <div className="w-1 grow opacity-40 bg-white rounded-[1px]" />
      </div>
      <div className="h-[80px] flex flex-col w-full items-center">
        <div className="flex justify-between flex-1 w-full">
          <div className="ml-2 text-zinc-700 text-xs font-semibold w-[45px] text-center leading-[40px]">
            테마
          </div>
          <div className="w-[120px] text-zinc-700 text-xs font-medium leading-[40px] truncate-text">
            도서관 가서 신간 읽기
          </div>
          <div className="w-[40px] text-black text-xs text-opacity-50 leading-[40px] font-semibold">
            연남동
          </div>
        </div>
        <div className="w-[225px] border-dotted border-gray-400 border-2" />
        <div className="px-2 w-[247px] text-neutral-400 leading-[40px] text-xs font-medium flex-1 truncate-text">
          코엑스 별마당 도서관을 가서 신간을 찾아가보자아아
        </div>
      </div>
      <div className="w-3 h-[80px] px-[3px] py-1 bg-orange-300 rounded-tr rounded-br flex-col justify-center items-center flex">
        <div className="w-1 grow opacity-40 bg-white rounded-[1px]" />
      </div>
    </div>
  );
};

export default ItemCard;
