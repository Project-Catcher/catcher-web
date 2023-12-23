import { handleImageSrc } from "@create-schedule/util";
import Image from "next/image";
import React from "react";
import { useSetRecoilState } from "recoil";
import { selectedScheduleItem } from "@shared/recoil";
import { CategoryItem, CategoryTags } from "@shared/types";

interface CategoryFrameProps {
  hasPointer?: boolean;
  itemHeight?: number;
  clickedCategory?: CategoryTags;
  category: CategoryItem[];
}

const CategoryFrame = ({
  hasPointer,
  itemHeight = 21,
  clickedCategory,
  category,
}: CategoryFrameProps) => {
  const setSelectedItem = useSetRecoilState(selectedScheduleItem);

  const onDragStart = (index: number) => {
    setSelectedItem({
      ...category[index],
      selectedTime: 0,
    });
  };

  const filteredCategory = clickedCategory
    ? category.filter(
        (_category) =>
          clickedCategory === "전체" || clickedCategory === _category.category,
      )
    : category;

  return (
    <>
      {filteredCategory.map((_category, index) => {
        const isLastIndex = index === category.length - 1;
        const imageSrc = handleImageSrc(_category.category);

        return (
          <div
            draggable={hasPointer}
            onDragStart={() => onDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            className={`${isLastIndex ? "" : "mb-2 "}${
              hasPointer ? "cursor-pointer " : ""
            }flex w-[250px]`}
            key={_category.city + _category.tagBackground}
            style={{ height: `${itemHeight}px` }}
          >
            <div
              className={`${_category.tagBackground} brightness-90 inline-block w-2 rounded-[4px_0_0_4px]`}
            >
              <div
                style={{
                  height: itemHeight ? `${itemHeight - 8}px` : "13px",
                }}
                className={`${_category.tagBackground} brightness-125 w-0.5 rounded-[1px] opacity-[40%] mx-auto my-1`}
              />
            </div>
            <div
              className={`${_category.tagBackground} flex items-center w-[234px] p-[3px]`}
            >
              {imageSrc && (
                <Image
                  draggable={false}
                  src={imageSrc}
                  alt={imageSrc}
                  width={16}
                  height={15}
                />
              )}
              <span className="text-[10px] text-[#454545] font-semibold shrink-0 ml-1 mr-2.5">
                {_category.category}
              </span>
              <span className="text-[10px] text-[#454545] font-medium grow truncate">
                {_category.title}
              </span>
              <span className="max-w-[40px] text-[11px] text-[#00000080] font-semibold truncate">
                {_category.city}
              </span>
            </div>
            <div
              className={`${_category.tagBackground} brightness-90 inline-block w-2 rounded-[0_4px_4px_0]`}
            >
              <div
                style={{
                  height: itemHeight ? `${Number(itemHeight) - 8}px` : "13px",
                }}
                className={`${_category.tagBackground} brightness-125 w-0.5 h-[13px] rounded-[1px] opacity-[40%] mx-auto my-1`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryFrame;
