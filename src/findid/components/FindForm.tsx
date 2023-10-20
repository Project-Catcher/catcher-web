import { useState } from "react";
import { WhiteBox } from "../../shared/components";
import FindMyId from "./FindMyId";
import ResetPassword from "./ResetPassword";

const FindForm = () => {
  const [mode, setMode] = useState<"id" | "password">("id");

  return (
    <WhiteBox
      boxWidth="w-[705px]"
      boxHeight="h-[710px]"
      paddingX="px-[69.5px]"
      paddingY="py-[33px]"
      shadow="shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]"
    >
      <div className="w-full text-center">
        <button
          id="id"
          className={`w-1/2 font-[22px] leading-[33px] border-b-4 border-[#E2E2E2] py-[15px] mb-[21px] ${
            mode === "id" ? "border-[#F968A5]" : "border-[#E2E2E2]"
          }`}
          onClick={() => setMode("id")}
        >
          아이디 찾기
        </button>
        <button
          id="password"
          className={`w-1/2 font-[22px] leading-[33px] border-b-4 border-[#E2E2E2] py-[15px] mb-[21px] ${
            mode === "password" ? "border-[#F968A5]" : "border-[#E2E2E2]"
          }`}
          onClick={() => setMode("password")}
        >
          비밀번호 재설정
        </button>
      </div>
      {mode === "id" && <FindMyId />}
      {mode === "password" && <ResetPassword />}
    </WhiteBox>
  );
};

export default FindForm;
