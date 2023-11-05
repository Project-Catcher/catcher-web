import Image from "next/image";
import React, { useMemo, useState } from "react";
import { FAQ_CONTENTS } from "../constants";

const FAQContent = () => {
  const CONTENT_COUNT = 5; // 임시
  const [currentPage, setCurrentPage] = useState(1);
  const [openState, setOpenState] = useState(Array(CONTENT_COUNT).fill(false));

  const handleToggle = (index: number) => {
    setOpenState((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const maxLength = (FAQ_CONTENTS.length % CONTENT_COUNT) + 2; // 임시
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
      <div className="w-full max-h-[320px] overflow-FAQ mb-[12px]">
        {FAQ_CONTENTS.map(({ question, answer }, index) => (
          <React.Fragment key={question.id}>
            <div
              className="flex items-center h-fit pl-[28px] py-[19px] hover:bg-[#F5F6F8]"
              onClick={() => handleToggle(index)}
            >
              <Image
                src="/images/samples/noticeQuestion.svg"
                alt="question"
                width={20}
                height={22}
              />
              <div className="grow text-[#333333] pl-[37px]">
                {question.title}
              </div>
              <Image
                className={`${openState[index] ? "-rotate-90" : "rotate-90"}`}
                src="/images/samples/inequalRight.svg"
                alt="inequal"
                width={26}
                height={26}
              />
            </div>
            {openState[index] && (
              <div className="h-fit bg-[#FFF6FB] pl-[28px] py-[19px]">
                <div className="inline-block min-h-full align-top">
                  <Image
                    src="/images/samples/noticeAnswer.svg"
                    alt="answer"
                    width={16}
                    height={20}
                  />
                </div>
                <div className="inline-block w-full-30">
                  {answer.content.split("\n").map((content, index) => (
                    <div
                      key={answer.id + index}
                      className="text-[#333333] px-[39px]"
                    >
                      {content}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
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

export default FAQContent;
