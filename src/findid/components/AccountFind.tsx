import { useRouter } from "next/router";
import { useState } from "react";
import { WhiteBox } from "@shared/components";
import { LoginValue } from "@shared/types";
import IdFindProgress from "./IdFindProgress";
import ModeButton from "./ModeButton";
import PasswordResetProgress from "./PasswordResetProgress";

const AccountFind = () => {
  const { query, push } = useRouter();
  const [mode, setMode] = useState<LoginValue>(
    (query.type as LoginValue) ?? "id",
  );

  const handleMode = (value: LoginValue) => {
    if (query.progress) push("/findidpw", undefined, { shallow: true });
    setMode(value);
  };

  return (
    <WhiteBox boxStyle="w-[705px] h-[710px] px-[69.5px] py-[33px] shadow-[0_4px_35px_0_rgba(0,0,0,0.08)]">
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
      {mode === "id" && <IdFindProgress mode={mode} />}
      {mode === "password" && <PasswordResetProgress />}
    </WhiteBox>
  );
};

export default AccountFind;
