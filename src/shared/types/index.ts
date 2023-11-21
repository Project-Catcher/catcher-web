export type AuthType = "phone" | "email";

export type LoginValue = "id" | "password";

export type PasswordType = "password" | "newPassword" | "checkNewPassword";

export interface LoginFormType {
  id: string;
  password: string;
  isChecked: boolean;
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
  items: [
    {
      tag: string;
      title: string;
      background: string;
      city: string;
    },
  ];
}

export type CalendarSelectorType = "startedAt" | "endedAt";

export interface CategoryItem {
  category: CategoryTags;
  title: string;
  city: string;
  tagBackground: string;
}

export interface SelectedCategoryItem extends CategoryItem {
  selectedTime: number;
}

export interface AppliedItem extends CategoryItem {
  startTime: {
    hour: number;
    minute: number;
  };
  endTime: {
    hour: number;
    minute: number;
  };
}

export interface Start2EndTime {
  start: {
    hour: string;
    minute: string;
  };
  end: {
    hour: string;
    minute: string;
  };
}

export type CategoryTags =
  | "전체"
  | "영화"
  | "축제"
  | "캠핑"
  | "관광"
  | "쇼핑"
  | "음식점"
  | "문화생활"
  | "등산";
