import { PasswordResetFormContent } from "@shared/types";
import { ReactNode, useCallback, useState } from "react";
import ValidateButton from "./ValidateButton";
import PasswordResetBox from "./PasswordResetBox";
import { checkIdValidation, checkPasswordValidation } from "@shared/utils";
import FindAuthForm from "./FindAuthForm";

interface NewPasswordAnswerType {
  id: string;
  newPassword: string;
  checkNewPassword: string;
}
interface ChildrenProps {
  handleId: (id: string) => void;
  handleNewPassword: (password: string) => void;
  handleCheckNewPassword: (password: string) => void;
}

interface PasswordResetFormProps extends PasswordResetFormContent {
  children(props: ChildrenProps): ReactNode;
  currentProgress: number;
  handleCurrentProgress: () => void;
}

const PasswordResetForm = ({
  children,
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
      {currentProgress !== 2 && (
        <div className="mx-[64.5px] mt-[52px]">
          <PasswordResetBox title={title} subTitle={subTitle} isDisc={isDisc} />
          {children({ handleId, handleNewPassword, handleCheckNewPassword })}
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
      )}
      {currentProgress === 2 && (
        <FindAuthForm
          mode="password"
          handleCurrentProgress={handleCurrentProgress}
        />
      )}
    </>
  );
};

export default PasswordResetForm;
