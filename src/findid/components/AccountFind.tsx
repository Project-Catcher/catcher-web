import { useCallback, useState } from "react";
import { WhiteBox } from "../../shared/components";
import FindMyId from "./FindMyId";
import ModeButton from "./ModeButton";
import PasswordResetProgress from "./PasswordResetProgress";
import { LoginType } from "../../shared/types";

const AccountFind = () => {
  const [mode, setMode] = useState<LoginType>("id");

  const handleMode = useCallback((value: LoginType) => {
    setMode(value);
  }, []);

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
          value="아이디 찾기"
          mode={mode}
          handleMode={handleMode}
        />
        <ModeButton
          type="password"
          value="비밀번호 재설정"
          mode={mode}
          handleMode={handleMode}
        />
      </div>
      {mode === "id" && <FindMyId />}
      {mode === "password" && <PasswordResetProgress />}
    </WhiteBox>
  );
};

export default AccountFind;
