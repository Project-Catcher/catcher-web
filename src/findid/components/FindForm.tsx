import { useState } from "react";
import { WhiteBox } from "../../shared/components";
import FindMyId from "./FindMyId";
import ResetPassword from "./ResetPassword";
import ModeButton from "./ModeButton";

const FindForm = () => {
  const [mode, setMode] = useState<string>("id");

  const handleMode = (value: string) => {
    setMode(value);
  };

  return (
    <WhiteBox
      boxWidth="w-[705px]"
      boxHeight="h-[710px]"
      paddingX="px-[69.5px]"
      paddingY="py-[33px]"
      shadow="shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]"
    >
      <div className="w-full text-center">
        <ModeButton
          type="id"
          mode={mode}
          value="아이디 찾기"
          handleMode={handleMode}
        />
        <ModeButton
          type="password"
          mode={mode}
          value="비밀번호 재설정"
          handleMode={handleMode}
        />
      </div>
      {mode === "id" && <FindMyId />}
      {mode === "password" && <ResetPassword />}
    </WhiteBox>
  );
};

export default FindForm;
