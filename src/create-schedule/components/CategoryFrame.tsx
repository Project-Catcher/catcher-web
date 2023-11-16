import Image from "next/image";
import React from "react";
import { CategoryItem } from "./DragnDropContainer";

interface CategoryFrameProps {
  category: CategoryItem[];
  onDragStart: (index: number) => void;
}

const CategoryFrame = ({ category, onDragStart }: CategoryFrameProps) => {
  return (
    <>
      {category.map((_category, index) => (
        <div
          draggable
          onDragStart={() => onDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          className={`${
            index === category.length - 1 ? "" : "mb-[8px]"
          } flex h-[21px] cursor-pointer`}
          key={_category.city + _category.tagBackground}
        >
          <div
            className={`${_category.tagBackground} brightness-90 inline-block w-[8px] rounded-[4px_0_0_4px]`}
          >
            <div
              className={`${_category.tagBackground} brightness-125 w-[2px] h-[13px] rounded-[1px] opacity-[40%] mx-auto my-[4px]`}
            />
          </div>
          <div
            className={`${_category.tagBackground} flex items-center w-[234px] p-[3px]`}
          >
            <Image
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
              className={`${_category.tagBackground} brightness-125 w-[2px] h-[13px] rounded-[1px] opacity-[40%] mx-auto my-[4px]`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryFrame;
