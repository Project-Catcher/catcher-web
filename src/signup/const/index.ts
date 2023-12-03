import { Agreements } from "../type";

export const termsOfService = [
  {
    title: "서비스 약관",
    content: `Last Revised: December 16, 2013
        <br />
        Welcome to www.lorem-ipsum.info. This site is provided as a service to
        our visitors and may be used for informational purposes only. Because
        the Terms and Conditions contain legal obligations, please read them
        carefully.
        <br />
        1. YOUR AGREEMENT YOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR
        AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENT`,
  },
  {
    title: "개인정보 취급방침",
    content: `Last Revised: December 16, 2013
        <br />
        Welcome to www.lorem-ipsum.info. This site is provided as a service to
        our visitors and may be used for informational purposes only. Because
        the Terms and Conditions contain legal obligations, please read them
        carefully.
        <br />
        1. YOUR AGREEMENT YOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR
        AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENT`,
  },
  {
    title: "위치 정보 이용 동의",
    content: `Last Revised: December 16, 2013
        <br />
        Welcome to www.lorem-ipsum.info. This site is provided as a service to
        our visitors and may be used for informational purposes only. Because
        the Terms and Conditions contain legal obligations, please read them
        carefully.
        <br />
        1. YOUR AGREEMENT YOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR
        AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENTYOUR AGREEMENT`,
  },
];

export const checkTerms = [
  {
    label: "만 14세 이상입니다.",
    essential: true,
    value: "ageAgreement" as keyof Agreements,
  },
  {
    label: "캐처 이용약관 동의",
    essential: true,
    value: "catcherAgreement" as keyof Agreements,
  },
  {
    label: "마케팅 수신 동의",
    essential: false,
    value: "marketingAgreement" as keyof Agreements,
  },
  {
    label: "개인정보 취급 방침 동의",
    essential: true,
    value: "privacyAgreement" as keyof Agreements,
  },
  {
    label: "위치 정보 이용 동의",
    essential: true,
    value: "locationAgreement" as keyof Agreements,
  },
];
