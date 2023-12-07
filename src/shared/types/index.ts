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
  temporary: string;
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

export interface ScheduleCardSection {
  id: number;
  thumbnailUrl: string;
  title: string;
  location: string;
}

export interface ScheduleBasicInfo extends ScheduleCardSection {
  startAt: Date;
  endAt: Date;
}

export interface TemporarySchedule extends ScheduleCardSection {
  createdAt: Date;
}

export interface TemplateSchedule extends ScheduleCardSection {
  days: string;
  schedules: TemplateDetail[];
}

export interface TemplateDetail {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  color: string;
  startAt: Date;
  endAt: Date;
}
