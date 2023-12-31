import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { PasswordResetFormContent } from "@shared/types";
import PasswordResetForm from "./PasswordResetForm";

const PasswordResetProgress = () => {
  const { query } = useRouter();
  const [currentProgress, setCurrentProgress] = useState(1);
  const progressFromQuery = query.progress;

  const handleCurrentProgress = useCallback(() => {
    setCurrentProgress((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (
      typeof progressFromQuery === "string" &&
      !Array.isArray(progressFromQuery)
    ) {
      const parsedProgress = parseInt(progressFromQuery, 10);
      if (!isNaN(parsedProgress)) setCurrentProgress(parsedProgress);
    }
  }, [progressFromQuery]);

  const formContent: PasswordResetFormContent =
    currentProgress === 1
      ? {
          title: "아이디 확인",
          subTitle: [
            "아이디를 입력해 주세요.",
            "아이디 확인 후 비밀번호를 재설정 할 수 있습니다.",
          ],
          type: "id",
          value: "다음",
          buttonColor: "bg-[#FACD49]",
          buttonColorDisabled: "bg-[#FACD4975]",
          isDisc: false,
        }
      : {
          title: "유의사항",
          subTitle: [
            "8~15자 길이로 만들어주세요.",
            "영문 대/소문자, 숫자, 특수문자 2가지 이상을 조합해 주세요.",
            "3자 이상 연속/동일한 문자, 숫자는 사용할 수 없습니다.",
          ],
          type: "password",
          value: "변경하기",
          buttonColor: "bg-[#F864A1]",
          buttonColorDisabled: "bg-[#FFA4A475]",
          isDisc: true,
        };

  return (
    <PasswordResetForm
      title={formContent.title}
      subTitle={formContent.subTitle}
      type={formContent.type}
      value={formContent.value}
      buttonColor={formContent.buttonColor}
      buttonColorDisabled={formContent.buttonColorDisabled}
      isDisc={formContent.isDisc}
      currentProgress={currentProgress}
      handleCurrentProgress={handleCurrentProgress}
    />
  );
};

export default PasswordResetProgress;
