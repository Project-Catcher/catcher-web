const AuthTimer = ({ formattedMin, formattedSec }: any) => {
  return (
    <div className="inline-block mb-[7px] text-base text-[#00D179] leading-[22px]">
      {formattedMin}분 {formattedSec}초
    </div>
  );
};

export default AuthTimer;
