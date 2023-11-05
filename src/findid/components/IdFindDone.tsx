import { useRouter } from "next/router";

interface IdFindDoneProps {}

const IdFindDone = ({}: IdFindDoneProps) => {
  const { push } = useRouter();
  return (
    <div className="px-[49.5px] pt-[156px] text-center">
      <div className="text-[20px] leading-[30px] -tracking-[0.035em] mb-[15px]">
        마 승 연 님의 정보와 일치하는 아이디는
      </div>
      <div className="w-[343px] h-[64px] border-2 border-[#EBEBEB] rounded-[10px] text-[25px] text-[#00D179] leading-[37.5px] py-[11.25px] mx-auto mb-[8px]">
        mso2736
      </div>
      <div className="text-[#8D8D8D] mb-[39px]">가입일 : 2023.10.12</div>
      <button
        className="button-full button-semi-rounded text-[18px] text-white font-semibold bg-[#F864A1]"
        onClick={() => push("/login")}
      >
        로그인 하러 가기
      </button>
    </div>
  );
};

export default IdFindDone;
