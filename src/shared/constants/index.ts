export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY_KAKAO}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_KAKAO}`;
export const NAVER_LOGIN_URL = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY_NAVER}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET_NAVER}`;

export const KAKAO_CODE_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY_KAKAO}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_KAKAO}&response_type=code`;
export const NAVER_CODE_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY_NAVER}&state=test&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI_NAVER}`;

export const KAKAO_LOGOUT_URL = "https://kapi.kakao.com/v1/user/logout";
export const NAVER_LOGOUT_URL = "https://nid.naver.com/nidlogin.logout";

export const DEFAULT_URL = "http://localhost:3000";
