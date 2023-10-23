export type AuthType = "phone" | "email";

export type LoginType = "id" | "password";

export type PasswordType = "password" | "newPassword" | "checkNewPassword";

export interface Checked {
  phone: boolean;
  email: boolean;
}

export interface AnswerType {
  [key: string]: string | number | boolean;
}
