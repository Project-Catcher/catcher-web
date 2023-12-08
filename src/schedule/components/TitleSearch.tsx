import React, { Dispatch, SetStateAction } from "react";

interface TitleSearchProps {
  itemTitle: string;
  itemPlaceholder: string;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  onClickSearch: () => void;
}

const TitleSearch = ({
  itemTitle,
  itemPlaceholder,
  title,
  setTitle,
  onClickSearch,
}: TitleSearchProps) => {
  return (
    <div className="flex justify-center w-full py-3 bg-white">
      <div className="inline-flex items-center w-3/5 ml-3">
        <div className="mr-2 text-sm font-light text-zinc-800">{itemTitle}</div>
        <div className="w-[280px] h-[38px] bg-white rounded-[5px] border border-neutral-200 flex items-center mr-6">
          <input
            className="w-full px-2 py-1 text-sm font-normal text-zinc-500 focus:outline-none"
            placeholder={itemPlaceholder}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button
          className="ml-3 w-[90px] h-10 bg-pink-400 rounded-[5px] text-white text-sm font-bold"
          onClick={onClickSearch}
        >
          찾기
        </button>
      </div>
    </div>
  );
};

export default TitleSearch;
