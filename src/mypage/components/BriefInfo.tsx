import ImageWithNickname from "./ImageWithNickname";

const BriefInfo = () => {
  return (
    <>
      <ImageWithNickname />
      <div className="w-full h-[50px] rounded-[9px] bg-[#E2FEFC] border border-[#22AFFF] text-[#22AFFF] text-center font-semibold leading-[50px] mb-[35px]">
        인증된 사용자
      </div>
    </>
  );
};

export default BriefInfo;
