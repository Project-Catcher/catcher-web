import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NaverLogin = () => {
  const [userInfo, setUserInfo] = useState<any>({}); // TODO: recoil
  const router = useRouter();
  const NAVER_CODE = router.query.code;
  const ERROR_MESSAGE = router.query.error_description;
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);
  console.log("NAVER_CODE:", NAVER_CODE);

  const getAccessToken = async () => {
    if (accessTokenFetching) return;

    try {
      setAccessTokenFetching(true);

      const response = await fetch("API_CALL_HERE", {
        method: "POST", // TODO: code 넘겨주기
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.accessToken;
          console.log("accessToken: ", accessToken);

          setUserInfo({ ...userInfo, accessToken });
        });

      setAccessTokenFetching(false);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      setAccessTokenFetching(false);
    }
  };

  useEffect(() => {
    if (!ERROR_MESSAGE && NAVER_CODE && !userInfo.accessToken) {
      getAccessToken();
    } else if (ERROR_MESSAGE) {
      const timeout = setTimeout(() => {
        router.push("/login");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [ERROR_MESSAGE]);

  return (
    <>
      {ERROR_MESSAGE ? (
        <div>로그인 취소하셨어요. 3초 뒤 자동으로 돌아가요</div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default NaverLogin;
