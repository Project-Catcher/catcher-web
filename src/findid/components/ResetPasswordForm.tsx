import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AnswerType } from "../../login/components/LoginForm";
import { useRegex } from "../../shared/hooks/useRegex";

interface ChildrenProps {
  handleId: (id: AnswerType) => void;
  handlePassword: (password: AnswerType) => void;
  handleCheckPassword: (password: AnswerType) => void;
}

interface ResetPasswordFormProps {
  children(props: ChildrenProps): ReactNode;
  type: "id" | "password";
  title: string;
  subTitle: string[];
  isDisc?: boolean;
  buttonColor: string;
  buttonColorDisabled?: string;
  setCurrentProgress: Dispatch<SetStateAction<number>>;
}

const ResetPasswordForm = ({
  children,
  type,
  title,
  subTitle,
  isDisc,
  buttonColor,
  buttonColorDisabled,
  setCurrentProgress,
}: ResetPasswordFormProps) => {
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

  const currentButtonColor = !isValidate[type]
    ? `${buttonColorDisabled} cursor-not-allowed`
    : `${buttonColor} cursor:pointer`;

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
      <button
        className={`button-full button-semi-rounded text-white text-lg font-semibold ${currentButtonColor}`}
        disabled={!isValidate[type]}
        onClick={() => setCurrentProgress((prev) => prev + 1)}
      >
        변경하기
      </button>
    </div>
  );
};

export default ResetPasswordForm;
