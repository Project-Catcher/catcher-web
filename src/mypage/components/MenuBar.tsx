const MenuBar = () => {
  return (
    <div className="relative w-[392.5px] h-full border-l border-[#DCDCDC] px-[40.5px] py-[102px] ml-[360.5px] shadow-[5px_0_10px_0_rgba(0,0,0,0.1)] z-10">
      <section className="pb-[13px] border-b border-[#DCDCDC]">
        <div className="text-center mb-[40px]">
          <div className="w-[143px] h-[143px] text-center text-white bg-black rounded-[50%] mx-auto mb-[7px]">
            image
          </div>
          <div className="">닉네임</div>
        </div>
        <div className="w-full h-[50px] rounded-[9px] bg-[#E2FEFC] border border-[#22AFFF] text-[#22AFFF] text-center font-semibold leading-[50px] mb-[35px]">
          인증된 사용자
        </div>
        <div className="text-[18px] font-bold">
          <div className="w-fit leading-[26px] border-b-2 border-[#F864A1] pb-[4px] mb-[17px]">
            내 프로필
          </div>
          <div className="w-fit leading-[26px] pb-[4px] mb-[17px]">
            약관 및 정책
          </div>
          <div className="w-fit leading-[26px] pb-[4px] mb-[17px]">
            로그아웃
          </div>
        </div>
      </section>
      <section className="py-[30px] text-[#999999] font-bold border-b border-[#DCDCDC]">
        <div className="mb-[11px]">문의하기</div>
        <div className="mb-[11px]">공지사항</div>
        <div className="mb-[11px]">FAQ</div>
        <div className="">회원탈퇴</div>
      </section>
      <div className="w-full h-[71px] bg-mypageMenu mt-[30px]"></div>
    </div>
  );
};

export default MenuBar;
