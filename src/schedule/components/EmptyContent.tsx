// 일정 없을 시 보이는 컴포넌트
import React from "react";

interface EmptyContentProps {
  title: string;
  content: string;
  link: string;
}

const EmptyContent = ({ title, content, link }: EmptyContentProps) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-[20px] border border-gray-300">
      <span className="pt-5 pb-3 text-lg">{title}</span>
      <pre className="py-1 text-sm font-normal text-center text-neutral-700">
        {content}
      </pre>
      <button className="pt-1 pb-5 text-sm font-normal text-pink-400">
        {link} {">"}
      </button>
    </div>
  );
};

export default EmptyContent;
