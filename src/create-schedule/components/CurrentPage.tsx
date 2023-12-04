import Image from "next/image";
import { useEffect, useState } from "react";
import { CurrentPageType } from "@shared/types";

interface CurrentPageProps {
  currentProgress: number;
}

const CurrentPage = ({ currentProgress }: CurrentPageProps) => {
  const [pageName, setPageName] = useState<CurrentPageType>("작성 중인 일정");

  useEffect(() => {
    switch (currentProgress) {
      case 1:
        return setPageName("작성 중인 일정");
      case 2:
        return setPageName("기본정보");
      case 3:
        return setPageName("태그 및 일정 템플릿");
      case 4:
        return setPageName("일정 채우기");
      case 5:
        return setPageName("작성 마무리");
    }
  }, [currentProgress]);

  return (
    <div className="flex w-fit items-center gap-[6px] h-[24px] mb-[32px]">
      <Image
        src="/images/samples/noticeHome.svg"
        alt="home"
        width={24}
        height={24}
      />
      <Image
        className="opacity-[0.5]"
        src="/images/samples/currentPageInequal.svg"
        alt="next"
        width={7.5}
        height={12.5}
      />
      <div className="text-[12px] text-[#757575] font-medium -tracking-[0.5px]">
        일정 만들기
      </div>
      <Image
        className="opacity-[0.5]"
        src="/images/samples/currentPageInequal.svg"
        alt="next"
        width={7.5}
        height={12.5}
      />
      <div className="text-[12px] text-[#757575] font-medium -tracking-[0.5px]">
        {pageName}
      </div>
    </div>
  );
};

export default CurrentPage;
