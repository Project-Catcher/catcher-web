import { themeList } from "@findSchedule/const";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface ThemeTabProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeTab = ({ theme, setTheme }: ThemeTabProps) => {
  const handleTab = (value: string) => {
    setTheme(value);
  };

  return (
    <div className="p-5 border-t">
      <div className="flex items-center">
        <Image
          src="/assets/findSchedule/category.svg"
          alt="category"
          width={24}
          height={24}
        />
        <span className="ml-2 text-base font-bold text-zinc-800">테마</span>
      </div>
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
