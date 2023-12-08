import { themeList } from "@findSchedule/const";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import CategoryTitle from "./CategoryTitle";

interface ThemeTabProps {
  theme: string;
  handleTab: (theme: string) => void;
}

const ThemeTab = ({ theme, handleTab }: ThemeTabProps) => {
  return (
    <div className="p-5 border-t">
      <CategoryTitle title="테마" />
      <div className="flex gap-x-[7px] gap-y-[6px] flex-wrap mt-2">
        {themeList.map((item, i) => (
          <button
            key={`theme-${i}`}
            className={`min-w-[71px] h-[36px] rounded-full border border-gray-200 py-2 px-3 ${
              theme === item.title
                ? "bg-pink-400 text-white"
                : "bg-white text-neutral-500"
            }`}
            onClick={() => handleTab(item.title)}
          >
            <div className="flex items-center gap-[6px]">
              <Image src={item.img} alt="category" width={20} height={20} />
              <span className="text-xs font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeTab;
