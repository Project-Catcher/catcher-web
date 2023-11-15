export const checkAuthNumValidation = (authNum: string) => {
  const regexAuthNum = /^[0-9]{6}$/;

  return regexAuthNum.test(authNum);
};

export const checkNameValidation = (name: string) => {
  const regexName = /^[가-힣]{2,4}$/;

  return regexName.test(name);
};

export const checkPhoneValidation = (phone: string) => {
  const regexNum = /^[0-9]{11}$/;

  return regexNum.test(phone);
};

export const checkEmailValidation = (email: string) => {
  const regexEmail = /^[a-z0-9]+(\.[a-z0-9]+)*@[a-z]+\.[a-z]{2,3}$/;

  return regexEmail.test(email);
};

export const checkIdValidation = (id: string) => {
  const regexId = /^[A-Za-z0-9]{6,15}$/;

  return regexId.test(id);
};

export const checkPasswordValidation = (
  newPassword: string,
  checkNewPassword: string,
) => {
  const regexEnglishNum =
    /^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/;
  const regexEnglishSpecial =
    /^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*[!@#$%^&*?_~])[A-Za-z!@#$%^&*?_~]{8,15}$/;
  const regexNumSpecial =
    /^(?!.*(.)\1\1)(?=.*\d)(?=.*[!@#$%^&*?_~])[\d!@#$%^&*?_~]{8,15}$/;
  const regexAll =
    /^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*?_~])[A-Za-z\d!@#$%^&*?_~]{8,15}$/;

  const result = {
    password: false,
  };

  if (newPassword === checkNewPassword) {
    if (
      regexAll.test(newPassword) ||
      regexNumSpecial.test(newPassword) ||
      regexEnglishSpecial.test(newPassword) ||
      regexEnglishNum.test(newPassword)
    ) {
      result.password = true;
    }
  }

  return result;
};
