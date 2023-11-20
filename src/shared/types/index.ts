export type AuthType = "phone" | "email";

export type LoginValue = "id" | "password";

export type PasswordType = "password" | "newPassword" | "checkNewPassword";

export interface LoginFormType {
  id: string;
  password: string;
  isAutoLoginChecked: boolean;
}

export interface PasswordResetFormContent {
  title: string;
  subTitle: string[];
  type: string;
  value: string;
  buttonColor: string;
  buttonColorDisabled: string;
  isDisc: boolean;
}

export interface AuthFormAnswer {
  name: string;
  authOptionValue: string;
}

export interface Captcha {
  captchaValue: string;
  doneCaptcha: boolean;
}

export type LoginType = "kakao" | "naver" | "catcher";
