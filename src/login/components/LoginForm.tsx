import Image from "next/image";

const LoginForm = () => {
  return (
    <section className="flex w-screen h-screen items-center justify-center">
      <div className="w-[539px] h-[692px] rounded-[40px] px-[44px] py-[42px] shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]">
        <div className="mb-[41px]">
          <div className="float-right text-right text-[#8D8D8D]">
            아직 캐쳐 회원이 <br /> 아니라면?
            <div className="text-[#F864A1]">Sign Up</div>
          </div>
          <p className="text-xl">Welcome to Catcher</p>
          <p className="text-[55px] font-medium">Log In</p>
        </div>
        <input
          className="w-full h-[57px] rounded-[9px] input-login mb-[12px] bg-idLabel bg-no-repeat bg-[position:21px_center]"
          type="text"
          placeholder="아이디"
        />
        <input
          className="w-full h-[57px] rounded-[9px] input-login mb-[15px] bg-pwLabel bg-no-repeat bg-[position:21px_center]"
          type="password"
          placeholder="비밀번호"
        />
        <button className="absolute -translate-x-[35px] translate-y-[20px]">
          <Image
            src="/images/samples/eye.svg"
            alt="eye"
            width={22}
            height={19}
          />
        </button>
        <div className="flex w-full h-[22px] items-center justify-between mb-[41px]">
          <div className="flex items-center">
            <label className="inline-block bg-stayLoggedIn bg-no-repeat w-[18px] h-[18px]">
              <input className="hidden" type="checkbox" />
            </label>
            <div className="inline-block text-[15px] font-light ml-[6px]">
              로그인 상태 유지
            </div>
          </div>
          <div className="leading-[13px]">
            <div className="inline-block text-[13px] border-r border-[#BCBBBB] pr-2">
              아이디 찾기
            </div>
            <div className="inline-block text-[13px] pl-2">비밀번호 재설정</div>
          </div>
        </div>
        <div className="text-center">
          <button className="button-full button-semi-rounded button-shadow bg-[#F864A1] text-lg text-white font-semibold mb-[14px]">
            로그인
          </button>
          <div className="text-[#ABABAB] mb-[9px]">OR</div>
          <button className="button-full button-semi-rounded button-shadow bg-[#FEE500] text-[#000000D9] font-medium mb-[12px]">
            카카오 로그인
          </button>
          <button className="button-full button-semi-rounded button-shadow bg-[#03C75A] text-white font-medium">
            네이버 로그인
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
