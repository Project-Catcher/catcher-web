import { uniqueId } from "lodash";
import { atom } from "recoil";

// 회원가입 내부 페이지 관리
export const signupPageState = atom({
  key: `signupPageState/${uniqueId()}`,
  default: 1,
});
