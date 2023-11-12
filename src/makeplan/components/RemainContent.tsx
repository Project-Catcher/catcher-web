import React from "react";

const RemainContent = () => {
  const content = [
    {
      id: 1,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      createdAt: "23.10.23",
    },
    {
      id: 2,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      createdAt: "23.10.24",
    },
    {
      id: 3,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      createdAt: "23.10.25",
    },
  ];

  return (
    <>
      {content.map((_content) => (
        <div
          key={_content.id}
          className="w-[151px] h-[196px] border border-[#E0E0E0] rounded-[5px]"
        >
          <div className="w-[149px] h-[113px] bg-black rounded-t-[5px]">
            {_content.imageSrc}
          </div>
          <div className="relative h-[83px] px-[8px] py-[8px]">
            <div className="text-[12px] text-[#333333] font-semibold -tracking-[0.02em]">
              {_content.title}
            </div>
            <div className="text-[10px] text-[#959CA1] font-medium -tracking-[0.02em]">
              {_content.position}
            </div>
            <div className="absolute bottom-[8px] text-[10px] text-[#757575] font-semibold -tracking-[0.02em] float-bottom">
              {`${_content.createdAt} 작성`}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RemainContent;
