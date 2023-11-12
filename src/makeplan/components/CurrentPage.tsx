import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentPageName } from "@shared/recoil";

const CurrentPage = () => {
  const currentPage = useRecoilValue(currentPageName);

  return (
    <div className="flex items-center gap-[6px] h-[24px] mb-[32px]">
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
        {currentPage}
      </div>
    </div>
  );
};

export default CurrentPage;
