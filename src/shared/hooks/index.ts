import { useState } from "react";
import { AnswerType } from "../../login/components/LoginForm";

export const useRegex = () => {
  const [isValidate, setIsValidate] = useState<boolean>(false);

  const checkValidation = (answer: AnswerType) => {
    const { newPassword, checkNewPassword } = answer;
    const regexEnglishNum =
      /^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    const regexEnglishSpecial =
      /^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*[!@#$%^&*()+=-_])[A-Za-z!@#$%^&*()+=-_]{8,15}$/;
    const regexNumSpecial =
      /^(?!.*(.)\1\1)(?=.*\d)(?=.*[!@#$%^&*()+=-_])[\d!@#$%^&*()+=-_]{8,15}$/;
    const regexAll =
      /^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()+=-_])[A-Za-z\d!@#$%^&*()+=-_]{8,15}$/;

    if (newPassword === checkNewPassword) {
      if (regexAll.test(newPassword as string)) setIsValidate(true);
      else if (regexNumSpecial.test(newPassword as string)) setIsValidate(true);
      else if (regexEnglishSpecial.test(newPassword as string))
        setIsValidate(true);
      else if (regexEnglishNum.test(newPassword as string)) setIsValidate(true);
      else setIsValidate(false);
    } else setIsValidate(false);
  };

  return { isValidate, checkValidation };
};
