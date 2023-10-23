import { useCallback, useState } from "react";
import { AnswerType } from "../types";

export const useRegex = () => {
  const [isValidate, setIsValidate] = useState<AnswerType>({});

  const checkAuthNumValidation = useCallback((authNum: string) => {
    const regexAuthNum = /^[0-9]{6}$/;

    regexAuthNum.test(authNum)
      ? setIsValidate((prev) => ({ ...prev, authNum: true }))
      : setIsValidate((prev) => ({ ...prev, authNum: false }));
  }, []);

  const checkNameValidation = useCallback((name: string) => {
    const regexName = /^[가-힣]{2,4}$/;

    regexName.test(name)
      ? setIsValidate((prev) => ({ ...prev, name: true }))
      : setIsValidate((prev) => ({ ...prev, name: false }));
  }, []);

  const checkPhoneValidation = useCallback((phone: string) => {
    const regexNum = /^[0-9]{11}$/;

    regexNum.test(phone)
      ? setIsValidate((prev) => ({ ...prev, phone: true }))
      : setIsValidate((prev) => ({ ...prev, phone: false }));
  }, []);

  const checkEmailValidation = useCallback((email: string) => {
    const regexEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    regexEmail.test(email)
      ? setIsValidate((prev) => ({ ...prev, email: true }))
      : setIsValidate((prev) => ({ ...prev, email: false }));
  }, []);

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

  return {
    isValidate,
    checkAuthNumValidation,
    checkNameValidation,
    checkPhoneValidation,
    checkEmailValidation,
    checkIdValidation,
    checkPasswordValidation,
  };
};
