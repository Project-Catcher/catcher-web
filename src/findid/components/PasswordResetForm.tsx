import { useRegex } from "@shared/hooks/useRegex";
import { PasswordResetFormContent } from "@shared/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import ValidateButton from "./ValidateButton";
import PasswordResetBox from "./PasswordResetBox";

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
  setCurrentProgress: Dispatch<SetStateAction<number>>;
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
  setCurrentProgress,
}: PasswordResetFormProps) => {
  const [answer, setAnswer] = useState<NewPasswordAnswerType>({
    id: "",
    newPassword: "",
    checkNewPassword: "",
  });
  console.log(answer);

  const { isValidate, checkIdValidation, checkPasswordValidation } = useRegex();

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

  useEffect(() => {
    if (type === "id") checkIdValidation(answer.id);
    else if (type === "password")
      checkPasswordValidation(answer.newPassword, answer.checkNewPassword);
  }, [answer, checkIdValidation, checkPasswordValidation, type]);

  return (
    <div className="mx-[64.5px] mt-[52px]">
      <PasswordResetBox title={title} subTitle={subTitle} isDisc={isDisc} />
      {children({ handleId, handleNewPassword, handleCheckNewPassword })}
      <ValidateButton
        type={type}
        value={value}
        isValidate={isValidate[type]}
        buttonColor={buttonColor}
        buttonColorDisabled={buttonColorDisabled}
        onClick={() => setCurrentProgress((prev) => prev + 1)}
      />
    </div>
  );
};

export default PasswordResetForm;
