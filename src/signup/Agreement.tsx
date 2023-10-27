// 회원가입 페이지 우측에 들어갈 약관동의 컴포넌트
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import useModal from "@shared/hook/useModal";
import { signupPageState } from "@shared/recoil/signup";
import Button from "./Button";
import Checkbox from "./Checkbox";
import ScrollContent from "./ScrollContent";
import { checkTerms, termsOfService } from "./const";
import { Agreements } from "./type";

interface CheckboxProps {
  label: string;
  essential: boolean;
  value: keyof Agreements;
}

const Agreement = () => {
  const { openAlert } = useModal();
  const handleAlert = () => {
    openAlert({ text: "필수 항목에 동의해주세요", isHeaderCloseBtn: true });
  };
  const setCurrentPage = useSetRecoilState(signupPageState);

  const [allAgreements, setAllAgreements] = useState(false);
  const [agreements, setAgreements] = useState({
    ageAgreement: { essential: true, checked: false },
    catcherAgreement: { essential: true, checked: false },
    marketingAgreement: { essential: false, checked: false },
    privacyAgreement: { essential: true, checked: false },
    locationAgreement: { essential: true, checked: false },
  });

  // 전체 약관 동의
  const handleAllAgreementsChange = () => {
    const checked = !allAgreements;
    setAllAgreements(checked);
    setAgreements({
      ageAgreement: { ...agreements.ageAgreement, checked },
      catcherAgreement: { ...agreements.catcherAgreement, checked },
      marketingAgreement: { ...agreements.marketingAgreement, checked },
      privacyAgreement: { ...agreements.privacyAgreement, checked },
      locationAgreement: { ...agreements.locationAgreement, checked },
    });
  };

  // 개별 약관 동의
  const handleAgreementChange = (agreementName: keyof typeof agreements) => {
    setAgreements((prevAgreements) => {
      // 개별 약관을 변경
      const updatedAgreements = {
        ...prevAgreements,
        [agreementName]: {
          ...prevAgreements[agreementName],
          checked: !prevAgreements[agreementName].checked,
        },
      };

      const allChecked = areAllAgreementsChecked(updatedAgreements);

      // 모든 항목이 체크되어 있으면 allAgreements를 체크
      if (allChecked) {
        setAllAgreements(true);
      } else {
        setAllAgreements(false);
      }

      return updatedAgreements;
    });
  };

  // 모든 항목이 체크되어 있는지 확인하는 함수
  const areAllAgreementsChecked = (agreements: Agreements) => {
    return Object.values(agreements).every((agreement) => agreement.checked);
  };

  const handleFormSubmit = () => {
    if (
      Object.values(agreements).every(({ essential, checked }) =>
        essential ? checked : true,
      )
    ) {
      setCurrentPage((prev) => prev + 1);
    } else {
      handleAlert();
    }
  };

  return (
    <div>
      <div className="w-[844.67px] h-[988px] bg-white rounded-[40px] shadow flex flex-col p-8">
        <div className="text-amber-500 text-2xl font-bold font-['Roboto'] leading-9">
          서비스 약관 동의
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          {termsOfService.map((service, i) => (
            <div key={`service-${i}`}>
              <div className="text-cyan-950 text-base font-bold font-['Roboto Flex'] leading-normal inline-block mb-1">
                {service.title}
              </div>
              <ScrollContent content={service.content} />
            </div>
          ))}
        </div>

        <div className="mt-8 ml-2">
          <Checkbox
            label="전체약관 동의"
            checked={allAgreements}
            onChange={handleAllAgreementsChange}
            labelStyle="text-base"
          />

          <div className="flex flex-wrap mt-6 gap-x-20">
            {checkTerms.map((checkbox: CheckboxProps, i: number) => (
              <Checkbox
                key={`checkbox-${i}`}
                label={checkbox.label}
                essential={checkbox.essential}
                checked={agreements[checkbox.value].checked}
                onChange={() => handleAgreementChange(checkbox.value)}
              />
            ))}
          </div>
        </div>

        {/* 다음버튼 */}
        <div className="flex justify-center mt-5">
          <Button
            label="다음"
            onClick={handleFormSubmit}
            buttonStyle="w-[380px] h-[45.73px] px-[21.73px] py-[10.86px] bg-amber-500 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Agreement;
