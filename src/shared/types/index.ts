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

export type CurrentPageType =
  | "작성 중인 일정"
  | "기본정보"
  | "태그 및 일정 템플릿"
  | "일정 채우기"
  | "작성 마무리";

export interface PlanTitle {
  remains: string;
  nthPlan: (nickname: string, number: number) => string;
  tag: string;
  fill: string;
  finish: string;
}

export interface PlanSubTitle {
  fighting: (nickname: string) => string;
  withyou: string;
  fillyourplan: (nickname: string) => string;
}

export interface ScheduleAnswerType {
  title: string;
  imageSrc: string;
  startedAt: string;
  endedAt: string;
  city: string;
  tag: string[];
}

export type CalendarSelectorType = "startedAt" | "endedAt";
export type LoginType = "kakao" | "naver" | "catcher";

// TODO: 일정 타입 지정
export interface ScheduleCardSection {
  id: number;
  imageSrc: string;
  title: string;
  position: string;
  createdAt?: string;
  requiredTime?: string;
}
