import { useRouter } from "next/router";

const PasswordResetDone = () => {
  const { push } = useRouter();

  return (
    <div className="text-center mx-[64.5px] mt-[30px]">
      <div className="relative w-[177px] h-[177px] bg-check bg-no-repeat left-1/2 -translate-x-1/2"></div>
      <div className="text-[28px]">비밀번호 변경 완료!</div>
      <div className="text-[#8D8D8D]">비밀번호 변경이 완료 되었습니다</div>
      <div className="text-[#8D8D8D] mb-[90px]">지금 로그인 하시겠습니까?</div>
      <button
        className="button-full button-semi-rounded bg-[#00D179] text-white"
        onClick={() => push("/login")}
      >
        로그인
      </button>
    </div>
  );
};

export default PasswordResetDone;
