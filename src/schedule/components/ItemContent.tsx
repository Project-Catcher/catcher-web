import React from "react";
import ItemCard from "./ItemCard";
import { ItemCardType } from "./Items";

interface ItemContentProps {
  itemList: ItemCardType[];
}

const ItemContent = ({ itemList }: ItemContentProps) => {
  return (
    <div className="w-3/5">
      <div className="flex justify-between h-6 mt-6">
        <div className="text-sm">
          전체 <span className="text-pink-400">{itemList.length}</span>개
        </div>
      </div>
      {/* 카드 */}
      <div className="relative flex flex-wrap mt-2.5 gap-y-12 gap-x-6">
        {itemList.map((item, i) => (
          <ItemCard key={`item-${i}`} {...item} />
        ))}
        {/* itemList가 3의 배수가 아닐 때 필요한 만큼 빈 div를 추가합니다. */}
        {[...Array(3 - (itemList.length % 3)).keys()].map((i) => (
          <div key={`empty-${i}`} className="w-[270px] h-[80px] m-auto" />
        ))}
      </div>
    </div>
  );
};

export default ItemContent;
