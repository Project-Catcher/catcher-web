import EnterNewPassword from "./EnterNewPassword";
import IdCheck from "./IdCheck";
import { useState } from "react";
import PasswordResetDone from "./PasswordResetDone";

const PasswordResetProgress = () => {
  const [currentProgress, setCurrentProgress] = useState<number>(1);

  return (
    <>
      {currentProgress === 1 && (
        <EnterNewPassword setCurrentProgress={setCurrentProgress} />
      )}
      {currentProgress === 2 && (
        <IdCheck setCurrentProgress={setCurrentProgress} />
      )}
      {currentProgress === 3 && <PasswordResetDone />}
    </>
  );
};

export default PasswordResetProgress;
