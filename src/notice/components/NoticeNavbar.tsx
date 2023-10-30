const NoticeNavbar = () => {
  return (
    <div className="relative text-[0px] text-[#333333] font-medium mt-[18px] after:content-[''] after:inline-block after:absolute after:w-full after:left-0 after:bottom-0 after:border-b-2 after:border-[#E8E8E8] after:z-[-1]">
      <span className="inline-block text-[16px] font-bold border-b-[3px] border-[#F864A1] py-[10px] mr-[37px]">
        전체
      </span>
      <span className="inline-block text-[16px] py-[10px] mr-[37px]">공지</span>
      <span className="inline-block text-[16px] py-[10px] mr-[37px]">
        이벤트
      </span>
      <span className="inline-block text-[16px] py-[10px]">일반</span>
    </div>
  );
};

export default NoticeNavbar;
