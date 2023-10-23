import { useCallback, useState } from "react";
import { LoginType } from "@shared/types";
import { WhiteBox } from "@shared/components";
import ModeButton from "./ModeButton";
import FindMyId from "./FindMyId";
import PasswordResetProgress from "./PasswordResetProgress";
import { useRouter } from "next/router";

const AccountFind = () => {
  const { query, push } = useRouter();
  const [mode, setMode] = useState<LoginType>(
    (query.type as LoginType) || "id",
  );

  const handleMode = useCallback(
    (value: LoginType) => {
      if (query.progress) push("/findid", undefined, { shallow: true });
      setMode(value);
    },
    [push, query.progress],
  );

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
