// 약관동의 페이지에 있는 내부 스크롤 컴포넌트

import React from "react";

interface ScrollContentProps {
  content: string;
}

const ScrollContent = ({ content }: ScrollContentProps) => {
  // TODO: 내부 스크롤 시 우측 스크롤 색 변경
  return (
    <div className="w-[773px] h-[163px] bg-white rounded-[15px] border border-zinc-300 flex justify-center items-center">
      <div className="w-[729px] h-[133.02px] text-neutral-500 text-lg font-medium font-['Roboto Flex'] leading-[27px] overflow-y-auto px-3">
        {content}
      </div>
    </div>
  );
};

export default ScrollContent;
