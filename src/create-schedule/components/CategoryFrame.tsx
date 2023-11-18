import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";
import { selectedScheduleItem } from "@shared/recoil";
import { CategoryItem } from "@shared/types";

interface CategoryFrameProps {
  hasPointer?: boolean;
  itemHeight?: number;
  category: CategoryItem[];
}

const CategoryFrame = ({
  hasPointer,
  itemHeight = 21,
  category,
}: CategoryFrameProps) => {
  const setSelectedItem = useSetRecoilState(selectedScheduleItem);

  const onDragStart = (index: number) => {
    setSelectedItem({
      ...category[index],
      selectedTime: 0,
    });
  };

  return (
    <>
      {category.map((_category, index) => (
        <div
          draggable={hasPointer}
          onDragStart={() => onDragStart!(index)}
          onDragOver={(e) => e.preventDefault()}
          className={`${index === category.length - 1 ? "" : "mb-[8px] "}${
            hasPointer ? "cursor-pointer " : ""
          }flex`}
          key={_category.city + _category.tagBackground}
          style={{ height: `${itemHeight}px` }}
        >
          <div
            className={`${_category.tagBackground} brightness-90 inline-block w-[8px] rounded-[4px_0_0_4px]`}
          >
            <div
              style={{
                height: itemHeight ? `${itemHeight - 8}px` : "13px",
              }}
              className={`${_category.tagBackground} brightness-125 w-[2px] rounded-[1px] opacity-[40%] mx-auto my-[4px]`}
            />
          </div>
          <div
            className={`${_category.tagBackground} flex items-center w-[234px] p-[3px]`}
          >
            <Image
              draggable={false}
              src="/images/samples/palette.svg"
              alt="palette"
              width={16}
              height={15}
            />
            <span className="text-[10px] text-[#454545] font-semibold ml-[4px] mr-[10px]">
              {_category.category}
            </span>
            <span className="text-[10px] text-[#454545] font-medium grow">
              {_category.title}
            </span>
            <span className="text-[11px] text-[#00000080] font-semibold">
              {_category.city}
            </span>
          </div>
          <div
            className={`${_category.tagBackground} brightness-90 inline-block w-[8px] rounded-[0_4px_4px_0]  `}
          >
            <div
              style={{
                height: itemHeight ? `${Number(itemHeight) - 8}px` : "13px",
              }}
              className={`${_category.tagBackground} brightness-125 w-[2px] h-[13px] rounded-[1px] opacity-[40%] mx-auto my-[4px]`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryFrame;
