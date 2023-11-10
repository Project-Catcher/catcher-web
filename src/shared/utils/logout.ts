import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
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
    const response = await axios.post(
      "https://kapi.kakao.com/v1/user/logout",
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        withCredentials: true,
      },
    );

    if (response.status === 200) {
      deleteCookie("access_token_kakao", {
        path: "/",
      });
      window.location.href = "http://localhost:3000";
    }
  } catch (error) {
    console.log(error); // TODO: 에러 핸들링
  }
};

const naverLogout = async () => {
  const access_token = getCookie("access_token_naver");

  try {
    const response = await axios.post(
      "https://nid.naver.com/nidlogin.logout",
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        withCredentials: true,
      },
    );

    if (response.status === 200) {
      deleteCookie("access_token_naver", {
        path: "/",
      });
      window.location.href = "http://localhost:3000";
    }
  } catch (error) {
    console.log(error); // TODO: 에러 핸들링
  }
};
