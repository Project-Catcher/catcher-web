const NoticeSearch = () => {
  return (
    <div className="w-[762px] h-[82px] mx-auto">
      <div className="h-full border border-[#E8E8E8] rounded-[45px] focus-within:border-[#4285F4] pl-[47px] pr-[12px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
        <input
          className="relative w-[640px] text-[22px] outline-0 top-1/2 -translate-y-1/2"
          type="text"
          placeholder="검색어를 입력하세요"
        />
        <div className="relative w-[60px] h-[60px] float-right -translate-y-1/2 top-1/2 bg-[#F864A1] bg-searchIcon bg-no-repeat bg-center rounded-[50%] cursor-pointer"></div>
      </div>
    </div>
  );
};

export default NoticeSearch;
