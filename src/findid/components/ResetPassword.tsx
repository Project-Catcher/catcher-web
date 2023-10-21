import EnterNewPassword from "./EnterNewPassword";
import CheckId from "./CheckId";
import { useState } from "react";
import DoneResetPassword from "./DoneResetPassword";

const ResetPassword = () => {
  const [currentProgress, setCurrentProgress] = useState<number>(1);

  return (
    <>
      {currentProgress === 1 && (
        <EnterNewPassword setCurrentProgress={setCurrentProgress} />
      )}
      {currentProgress === 2 && (
        <CheckId setCurrentProgress={setCurrentProgress} />
      )}
      {currentProgress === 3 && <DoneResetPassword />}
    </>
  );
};

export default ResetPassword;
