import React from "react";

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <div className="h-[28px] p-1 text-sm font-normal rounded-md bg-sky-100 text-stone-500">
      {tag}
    </div>
  );
};

export default Tag;
