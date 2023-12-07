import Image from "next/image";
import React from "react";

interface ImageWithTitle {
  img: string;
  title: string;
  createdAt: string;
}

const ImageWithTitle = ({ img, title, createdAt }: ImageWithTitle) => {
  return (
    <>
      <div className="w-full h-[150px] relative">
        {img ? (
          <Image className="rounded-2xl" src={img} alt="image" layout="fill" />
        ) : (
          <div className="bg-stone-300 border-zinc-400 relatvie rounded-2xl">
            <div className="flex items-center justify-center h-[150px] text-white">
              대표 이미지가 없어요
            </div>
          </div>
        )}
      </div>
      <div className="relative mt-8">
        <div className="text-3xl font-bold text-zinc-800">{title}</div>
        <div className="-top-6 -right-3 absolute w-[160px] text-sm font-medium text-neutral-400">
          등록일자: {createdAt}
        </div>
      </div>
    </>
  );
};

export default ImageWithTitle;
