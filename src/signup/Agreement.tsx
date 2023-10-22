// 회원가입 페이지 우측에 들어갈 약관동의 컴포넌트

import React, { useState } from "react";

import ScrollContent from "./ScrollContent";
import Button from "./Button";
import Checkbox from "./Checkbox";

interface Agreements {
  ageAgreement: boolean;
  catcherAgreement: boolean;
  marketingAgreement: boolean;
  privacyAgreement: boolean;
  locationAgreement: boolean;
}

interface CheckboxProps {
  label: string;
  essential: boolean;
  value: keyof Agreements;
}

const Agreement = () => {
  const [allAgreements, setAllAgreements] = useState(false);
  const [agreements, setAgreements] = useState<Agreements>({
    ageAgreement: false,
    catcherAgreement: false,
    marketingAgreement: false,
    privacyAgreement: false,
    locationAgreement: false,
  });

  // 전체 약관 동의
  const handleAllAgreementsChange = () => {
    const checked = !allAgreements;
    setAllAgreements(checked);
    setAgreements({
      ageAgreement: checked,
      catcherAgreement: checked,
      marketingAgreement: checked,
      privacyAgreement: checked,
      locationAgreement: checked,
    });
  };

  // 개별 약관 동의
  const handleAgreementChange = (agreementName: keyof Agreements) => {
    setAgreements((prevAgreements) => ({
      ...prevAgreements,
      [agreementName]: !prevAgreements[agreementName],
    }));
  };

  const handleFormSubmit = () => {
    // TODO: 공통 컴포넌트의 모달로 변경
    if (
      agreements["ageAgreement"] &&
      agreements["catcherAgreement"] &&
      agreements["privacyAgreement"] &&
      agreements["locationAgreement"]
    ) {
      alert("다음으로 넘어갑니다!");
    } else {
      alert("필수 항목에 동의해주세요!");
    }
  };

  return (
    <div>
      <div className="w-[844.67px] h-[988px] bg-white rounded-[40px] shadow flex flex-col p-8">
        <div className="text-amber-500 text-2xl font-bold font-['Roboto'] leading-9">
          서비스 약관 동의
        </div>

        <div className="flex flex-col items-center gap-4">
          {termsOfService.map((service, i) => (
            <div key={`service-${i}`}>
              <div className="text-cyan-950 text-base font-bold font-['Roboto Flex'] leading-normal inline-block">
                {service.title}
              </div>
              <ScrollContent content={service.content} />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Checkbox
            label="전체약관 동의"
            checked={allAgreements}
            onChange={handleAllAgreementsChange}
          />

          <div className="flex flex-wrap mt-6 gap-x-8">
            {checkTerms.map((checkbox: CheckboxProps, i: number) => (
              <Checkbox
                key={`checkbox-${i}`}
                label={checkbox.label}
                essential={checkbox.essential}
                checked={agreements[checkbox.value]}
                onChange={() => handleAgreementChange(checkbox.value)}
              />
            ))}
          </div>
        </div>

        {/* 다음버튼 */}
        <div className="flex justify-center mt-5">
          <Button label="다음" onClick={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Agreement;

const termsOfService = [
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

const checkTerms = [
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
