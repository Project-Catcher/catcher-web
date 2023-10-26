import { useCallback, useState } from "react";
import { LoginValue } from "@shared/types";
import FindAuthForm from "./FindAuthForm";
import IdFindDone from "./IdFindDone";

interface IdFindProgressProps {
  mode: LoginValue;
}

const IdFindProgress = ({ mode }: IdFindProgressProps) => {
  const [currentProgress, setCurrentProgress] = useState(1);

  const handleCurrentProgress = useCallback(() => {
    setCurrentProgress((prev) => prev + 1);
  }, []);

  return (
    <>
      {currentProgress === 1 && (
        <FindAuthForm
          mode={mode}
          handleCurrentProgress={handleCurrentProgress}
        />
      )}
      {currentProgress === 2 && <IdFindDone />}
    </>
  );
};

export default IdFindProgress;
