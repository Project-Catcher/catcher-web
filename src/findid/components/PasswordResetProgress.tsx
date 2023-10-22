import { useRouter } from "next/router";
import EnterNewPassword from "./EnterNewPassword";
import IdCheck from "./IdCheck";
import PasswordResetDone from "./PasswordResetDone";
import { useState } from "react";

const PasswordResetProgress = () => {
  const { query } = useRouter();
  const [currentProgress, setCurrentProgress] = useState<number>(
    Number(query.progress) || 1,
  );

  return (
    <>
      {currentProgress === 1 && (
        <IdCheck setCurrentProgress={setCurrentProgress} />
      )}
      {currentProgress === 2 && (
        <EnterNewPassword setCurrentProgress={setCurrentProgress} />
      )}
      {currentProgress === 3 && <PasswordResetDone />}
    </>
  );
};

export default PasswordResetProgress;
