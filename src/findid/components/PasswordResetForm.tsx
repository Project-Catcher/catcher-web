import { PasswordResetFormContent } from "@shared/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import ValidateButton from "./ValidateButton";
import PasswordResetBox from "./PasswordResetBox";
import { checkIdValidation, checkPasswordValidation } from "@shared/utils";

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
    <div className="mx-[64.5px] mt-[52px]">
      <PasswordResetBox title={title} subTitle={subTitle} isDisc={isDisc} />
      {children({ handleId, handleNewPassword, handleCheckNewPassword })}
      <ValidateButton
        type={type}
        value={value}
        isValidate={type === "id" ? isIdValidate : isPasswordValidate.password}
        buttonColor={buttonColor}
        buttonColorDisabled={buttonColorDisabled}
        onClick={() => setCurrentProgress((prev) => prev + 1)}
      />
    </div>
  );
};

export default PasswordResetForm;
