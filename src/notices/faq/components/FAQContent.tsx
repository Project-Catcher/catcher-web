import Image from "next/image";
import React, { useState } from "react";

const FAQContent = () => {
  const [isOpen, setIsOpen] = useState(["q-1"]);
  const faqContents = [
    {
      question: {
        id: "q-1",
        title: "캐쳐란?",
      },
      answer: {
        id: "a-1",
        content: `캐쳐는 여러분들의 소중한 일상을 채워나갈 일정 만들기를 도와주는 시스템입니다.
            자세한 사항은 영상으로 확인해보세요!
            유튜브 소개영상 바로가기 https://youtube...`,
      },
    },
    {
      question: {
        id: "q-2",
        title: "회원가입 하는 방법?",
      },
      answer: {
        id: "a-2",
        content: `캐쳐는 여러분들의 소중한 일상을 채워나갈 일정 만들기를 도와주는 시스템입니다.
            자세한 사항은 영상으로 확인해보세요!
            유튜브 소개영상 바로가기 https://youtube...`,
      },
    },
    {
      question: {
        id: "q-3",
        title: "일정만들기는 어떻게 하나요?",
      },
      answer: {
        id: "a-3",
        content: `캐쳐는 여러분들의 소중한 일상을 채워나갈 일정 만들기를 도와주는 시스템입니다.
            자세한 사항은 영상으로 확인해보세요!
            유튜브 소개영상 바로가기 https://youtube...`,
      },
    },
    {
      question: {
        id: "q-4",
        title: "캐쳐 일정 공유 방법?",
      },
      answer: {
        id: "a-4",
        content: `캐쳐는 여러분들의 소중한 일상을 채워나갈 일정 만들기를 도와주는 시스템입니다.
            자세한 사항은 영상으로 확인해보세요!
            유튜브 소개영상 바로가기 https://youtube...`,
      },
    },
    {
      question: {
        id: "q-5",
        title: "회원정보 수정은 어떻게 하나요?",
      },
      answer: {
        id: "a-5",
        content: `캐쳐는 여러분들의 소중한 일상을 채워나갈 일정 만들기를 도와주는 시스템입니다.
            자세한 사항은 영상으로 확인해보세요!
            유튜브 소개영상 바로가기 https://youtube...`,
      },
    },
  ];

  const handleToggle = (id: string) => {
    if (isOpen.includes(id)) setIsOpen(isOpen.filter((item) => item !== id));
    else setIsOpen((prev) => [...prev, id]);
  };

  return (
    <div className="w-full max-h-[320px] overflow-FAQ">
      {faqContents.map(({ question, answer }) => (
        <React.Fragment key={question.id}>
          <div
            className="flex items-center h-fit pl-[28px] py-[19px] hover:bg-[#F5F6F8]"
            onClick={() => handleToggle(question.id)}
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
              className={`${
                isOpen.includes(question.id) ? "-rotate-90" : "rotate-90"
              }`}
              src="/images/samples/inequalRight.svg"
              alt="inequal"
              width={26}
              height={26}
            />
          </div>
          {isOpen.includes(question.id) && (
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
  );
};

export default FAQContent;
