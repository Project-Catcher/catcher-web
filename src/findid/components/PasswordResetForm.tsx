import { useCallback, useState } from "react";
import { PasswordResetFormContent } from "@shared/types";
import { checkIdValidation, checkPasswordValidation } from "@shared/utils";
import EnterNewPassword from "./EnterNewPassword";
import FindAuthForm from "./FindAuthForm";
import IdCheck from "./IdCheck";
import PasswordResetBox from "./PasswordResetBox";
import PasswordResetDone from "./PasswordResetDone";
import ValidateButton from "./ValidateButton";

interface NewPasswordAnswerType {
  id: string;
  newPassword: string;
  checkNewPassword: string;
}
interface PasswordResetFormProps extends PasswordResetFormContent {
  currentProgress: number;
  handleCurrentProgress: () => void;
}

const PasswordResetForm = ({
  title,
  subTitle,
  type,
  value,
  buttonColor,
  buttonColorDisabled,
  isDisc,
  currentProgress,
  handleCurrentProgress,
}: PasswordResetFormProps) => {
  const [answer, setAnswer] = useState<NewPasswordAnswerType>({
    id: "",
    newPassword: "",
    checkNewPassword: "",
  });

  const isIdValidate = checkIdValidation(answer.id);
  const isPasswordValidate = checkPasswordValidation(
    answer.newPassword,
    answer.checkNewPassword,
  );

  const handleAnswer = (answer: Partial<NewPasswordAnswerType>) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleId = useCallback((id: string) => {
    handleAnswer({ id });
  }, []);

  const handleNewPassword = useCallback((newPassword: string) => {
    handleAnswer({ newPassword });
  }, []);

  const handleCheckNewPassword = useCallback((checkNewPassword: string) => {
    handleAnswer({ checkNewPassword });
  }, []);

  return (
    <>
      {currentProgress !== 2 ? (
        <>
          {currentProgress !== 4 ? (
            <div className="mx-[64.5px] mt-[52px]">
              <PasswordResetBox
                title={title}
                subTitle={subTitle}
                isDisc={isDisc}
              />
              {currentProgress === 1 && <IdCheck handleId={handleId} />}
              {currentProgress === 3 && (
                <EnterNewPassword
                  handleNewPassword={handleNewPassword}
                  handleCheckNewPassword={handleCheckNewPassword}
                />
              )}
              <ValidateButton
                type={type}
                value={value}
                isValidate={
                  type === "id" ? isIdValidate : isPasswordValidate.password
                }
                buttonColor={buttonColor}
                buttonColorDisabled={buttonColorDisabled}
                onClick={() => handleCurrentProgress()}
              />
            </div>
          ) : (
            <PasswordResetDone />
          )}
        </>
      ) : (
        <FindAuthForm
          mode="password"
          handleCurrentProgress={handleCurrentProgress}
        />
      )}
    </>
  );
};

export default PasswordResetForm;
