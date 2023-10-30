import Image from "next/image";

const NoticeCurrentPage = () => {
  return (
    <div className="flex items-center h-[24px]">
      <Image
        src="/images/samples/noticeHome.svg"
        alt="Home"
        width={24}
        height={24}
      />
      <div className="mx-[7px]">
        <Image
          className=""
          src="/images/samples/currentPageInequal.svg"
          alt="inequality"
          width={7.5}
          height={12}
        />
      </div>
      <div className="text-[12px] text-[#757575] font-medium tracking-[-0.5px]">
        공지사항
      </div>
    </div>
  );
};

export default NoticeCurrentPage;
