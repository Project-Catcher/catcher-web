import Image from "next/image";
import { useMemo, useState } from "react";

const NoticeContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const CONTENT_COUNT = 7;

  const content = [
    {
      id: "1",
      tag: "alert",
      title: "캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
    {
      id: "2",
      tag: "alert",
      title: "캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
    {
      id: "3",
      tag: "alert",
      title: "캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
    {
      id: "4",
      tag: "alert",
      title: "캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
    {
      id: "5",
      tag: "event",
      title: "캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
    {
      id: "6",
      tag: "event",
      title: "캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
    {
      id: "7",
      tag: "event",
      title:
        "캐쳐 일정 만들기 업데이트 ver 3 출시캐쳐 일정 만들기 업데이트 ver 3 출시캐쳐 일정 만들기 업데이트 ver 3 출시캐쳐 일정 만들기 업데이트 ver 3 출시",
      createdAt: "2023. 10. 27",
    },
  ];

  const maxLength = (content.length % CONTENT_COUNT) + 2;
  const pages = useMemo(() => {
    return Array.from({ length: maxLength }, (_, i) => i + 1);
  }, [maxLength]);

  const handleNext = () => {
    if (currentPage === maxLength) return;
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <div className="w-full h-[378px] mb-[12px]">
        {content.map(({ id, tag, title, createdAt }) => (
          <div
            key={id}
            className="flex items-center w-full h-[54px] px-[13px] py-[13px] hover:bg-[#F5F6F8]"
          >
            <div
              className={`${
                tag === "alert" ? "bg-[#40DC9A]" : "bg-[#F864A1]"
              } inline-block w-[53px] h-[28px] text-[14px] text-white text-center leading-[28px] rounded-[14.5px]`}
            >
              {tag === "alert" ? "알림" : "이벤트"}
            </div>
            <div className="inline-block grow w-full-177 text-[#333333] px-[17px] truncate">
              {title}
            </div>
            <div className="inline-block w-[90px] text-[#8D8D8D] float-right">
              {createdAt}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Image
          className={`${
            currentPage === 1
              ? "cursor-not-allowed opacity-[0.5]"
              : "cursor-pointer"
          }`}
          src="/images/samples/inequalLeft.svg"
          alt="left"
          width={24}
          height={24}
          onClick={handlePrev}
        />
        {pages.map((el) => (
          <div
            key={el}
            className={`${
              currentPage === el
                ? "text-[#F864A1] font-semibold border-[1.5px] border-[#F864A1] "
                : "cursor-pointer py-[1px] "
            }w-[27px] h-[27px] text-[14px] text-[#757575] text-center leading-[27px] rounded-[50%]`}
            onClick={() => setCurrentPage(el)}
          >
            {el}
          </div>
        ))}
        <Image
          className={`${
            currentPage === maxLength
              ? "cursor-not-allowed opacity-[0.5]"
              : "cursor-pointer"
          }`}
          src="/images/samples/inequalRight.svg"
          alt="right"
          width={24}
          height={24}
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default NoticeContent;
