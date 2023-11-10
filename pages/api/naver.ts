import axios from "axios";
import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import { NAVER_LOGIN_URL } from "@shared/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const code = query.code;

  if (method === "GET" && code) {
    // TODO: 백엔드 api 연결
    try {
      const response = await axios.post(
        `${NAVER_LOGIN_URL}&code=${code}`,
        null,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        const data = response.data;
        const MAX_AGE = 1000 * 60 * 60; // TODO: 시간 설정
        // TODO: cookie name
        setCookie("access_token_naver", data.access_token, {
          // TODO: httponly, secure, expires
          req,
          res,
          maxAge: MAX_AGE,
          path: "/",
        });
        res.redirect(302, "/login"); // TODO: 로그인 요청한 페이지로
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
