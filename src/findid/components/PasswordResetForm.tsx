import { useRegex } from "@shared/hooks/useRegex";
import { AnswerType, LoginType } from "@shared/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import ValidateButton from "./ValidateButton";

interface ChildrenProps {
  handleId: (id: AnswerType) => void;
  handlePassword: (password: AnswerType) => void;
  handleCheckPassword: (password: AnswerType) => void;
}

interface PasswordResetFormProps {
  children(props: ChildrenProps): ReactNode;
  type: LoginType;
  title: string;
  subTitle: string[];
  value: string;
  isDisc?: boolean;
  buttonColor: string;
  buttonColorDisabled?: string;
  setCurrentProgress: Dispatch<SetStateAction<number>>;
}

const PasswordResetForm = ({
  children,
  type,
  title,
  subTitle,
  value,
  isDisc,
  buttonColor,
  buttonColorDisabled,
  setCurrentProgress,
}: PasswordResetFormProps) => {
  const [answer, setAnswer] = useState<AnswerType>({});
  const { isValidate, checkIdValidation, checkPasswordValidation } = useRegex();

  const handleAnswer = (answer: AnswerType) => {
    setAnswer((prev) => ({ ...prev, ...answer }));
  };

  const handleId = (id: AnswerType) => {
    handleAnswer({ ...id });
  };

  const handlePassword = (password: AnswerType) => {
    handleAnswer({ ...password });
  };

  const handleCheckPassword = (password: AnswerType) => {
    handleAnswer({ ...password });
  };

  useEffect(() => {
    if (type === "id") checkIdValidation(answer);
    else if (type === "password") checkPasswordValidation(answer);
  }, [answer, checkIdValidation, checkPasswordValidation, type]);

  return (
    <div className="mx-[64.5px] mt-[52px]">
      <div className="text-xl">{title}</div>
      <ul
        className={`${
          isDisc ? "list-disc list-inside ml-2 " : ""
        }text-[#8D8D8D] my-2`}
      >
        {subTitle.map((_subTitle) => (
          <li key={_subTitle}>{_subTitle}</li>
        ))}
      </ul>
      {children({ handleId, handlePassword, handleCheckPassword })}
      <ValidateButton
        type={type}
        value={value}
        isValidate={isValidate}
        buttonColor={buttonColor}
        buttonColorDisabled={buttonColorDisabled}
        onClick={() => setCurrentProgress((prev) => prev + 1)}
      />
    </div>
  );
};

export default PasswordResetForm;
