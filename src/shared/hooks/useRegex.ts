import { useCallback, useState } from "react";
import { AnswerType } from "../types";

export const useRegex = () => {
  const [isValidate, setIsValidate] = useState({ id: false, password: false });

  const checkIdValidation = useCallback((answer: AnswerType) => {
    const { id } = answer;

    const regexEnglishNum = /^[A-Za-z0-9]{6,15}$/;

    id && regexEnglishNum.test(id as string)
      ? setIsValidate((prev) => ({ ...prev, id: true }))
      : setIsValidate((prev) => ({ ...prev, id: false }));
  }, []);

  const checkPasswordValidation = useCallback((answer: AnswerType) => {
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
      if (regexAll.test(newPassword as string))
        setIsValidate((prev) => ({ ...prev, password: true }));
      else if (regexNumSpecial.test(newPassword as string))
        setIsValidate((prev) => ({ ...prev, password: true }));
      else if (regexEnglishSpecial.test(newPassword as string))
        setIsValidate((prev) => ({ ...prev, password: true }));
      else if (regexEnglishNum.test(newPassword as string))
        setIsValidate((prev) => ({ ...prev, password: true }));
      else setIsValidate((prev) => ({ ...prev, password: false }));
    } else setIsValidate((prev) => ({ ...prev, password: false }));
  }, []);

  return { isValidate, checkIdValidation, checkPasswordValidation };
};
