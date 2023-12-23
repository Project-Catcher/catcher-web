import Image from "next/image";
import React from "react";

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle = ({ title }: CategoryTitleProps) => {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/findSchedule/category.svg"
        alt="category"
        width={24}
        height={24}
      />
      <span className="ml-2 text-base font-bold text-zinc-800">{title}</span>
    </div>
  );
};

export default CategoryTitle;
