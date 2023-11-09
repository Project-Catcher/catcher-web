import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const code = query.code;

  if (method === "GET" && code) {
    // TODO: axios, 백엔드 api 연결
    try {
      fetch(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY_KAKAO}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_KAKAO}&code=${code}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      )
        .then((_res) => {
          return _res.json();
        })
        .then((data) => {
          const max_age = 3600000; // TODO: 시간 설정
          // TODO: cookie name
          setCookie("access_token_kakao", data.access_token, {
            req,
            res,
            maxAge: max_age,
          });
          res.redirect(302, "/mypage"); // TODO: 로그인 요청한 페이지로
        });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
