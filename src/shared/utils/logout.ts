import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import {
  DEFAULT_URL,
  KAKAO_LOGOUT_URL,
  NAVER_LOGOUT_URL,
} from "@shared/constants";
import { LoginType } from "@shared/types";

export const logout = (type: LoginType) => {
  if (type === "catcher") catcherLogout();
  else if (type === "kakao") kakaoLogout();
  else if (type === "naver") naverLogout();
};

const catcherLogout = () => {};

const kakaoLogout = async () => {
  const access_token = getCookie("access_token_kakao");

  try {
    const response = await axios.post(KAKAO_LOGOUT_URL, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    handleLogoutDone(response.status, "kakao");
  } catch (error) {
    console.log(error); // TODO: 에러 핸들링
  }
};

const naverLogout = async () => {
  const access_token = getCookie("access_token_naver");

  try {
    const response = await axios.post(NAVER_LOGOUT_URL, null, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    handleLogoutDone(response.status, "naver");
  } catch (error) {
    console.log(error); // TODO: 에러 핸들링
  }
};

const handleLogoutDone = (status: number, type: LoginType) => {
  if (status === 200) {
    deleteCookie(`access_token_${type}`, {
      path: "/",
    });
    window.location.href = DEFAULT_URL;
  }
};
