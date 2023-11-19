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
          <ItemCard
            key={`item-${i}`}
            theme={item.theme}
            name={item.name}
            place={item.place}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemContent;
