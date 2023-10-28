// 태그 컴포넌트
import Image from "next/image";
import React from "react";

interface TagProps {
  tag: string;
  onRemove: () => void;
}

const Tag = ({ tag, onRemove }: TagProps) => (
  <li className="h-9 bg-red-300 bg-opacity-50 rounded-[9px] relative p-2 flex-center m-2">
    <span className="text-zinc-800 text-sm font-normal font-['Poppins'] h-full">
      {tag}
    </span>
    <div
      className="absolute cursor-pointer -right-2 -top-2 solid-pink-400"
      onClick={onRemove}
    >
      <Image src="/assets/signup/x-icon.svg" width={16} height={16} alt="x" />
    </div>
  </li>
);

export default Tag;
