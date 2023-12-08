const SideBarIntro = () => {
  return (
    <div className="w-full h-[153px] bg-[linear-gradient(180deg,_#F864A1_0%,_rgba(255,_164,_164,_0.46)_100%)] px-[24px] py-[24px]">
      <div className="w-[76px] h-[21px] border border-white rounded-[3px] text-center text-white text-[12px] leading-[20px] -tracking-[0.5px] mb-[5px]">
        일정 작성 중
      </div>
      <div className="text-[18px] text-white font-bold -tracking-[0.5px] mb-[7px]">
        {/* TODO: Nickname */}
        명란마요 누구누구누구누구누구누구 님의 멋진 일정
      </div>
      <div className="text-[14px] text-white -tracking-[0.5px]">
        {/* TODO: nth plan */}
        일정 번호 No.5
      </div>
    </div>
  );
};

export default SideBarIntro;
