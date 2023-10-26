import { useCallback, useState } from "react";
import AuthenticationBox from "./AuthenticationBox";
import { AuthType, LoginValue } from "@shared/types";

interface FindOption {
  phone: boolean;
  email: boolean;
}

interface FindAuthFormProps {
  mode: LoginValue;
  handleCurrentProgress?: () => void;
}

const FindAuthForm = ({ mode, handleCurrentProgress }: FindAuthFormProps) => {
  const [isChecked, setIsChecked] = useState<FindOption>({
    phone: false,
    email: false,
  });

  const handleChecked = useCallback((key: AuthType) => {
    setIsChecked({ phone: key === "phone", email: key === "email" });
  }, []);

  const titleContent = {
    id: {
      title: "아이디 찾기",
      subTitle: "아이디 찾는 방법을 선택해 주세요",
    },
    password: {
      title: "비밀번호 재설정",
      subTitle: "인증 방법을 선택해 주세요.",
    },
  };

  return (
    <>
      <div className="py-[3px] mb-[21px]">
        <div className="font-[20px] leading-[30px]">
          {titleContent[mode].title}
        </div>
        <div className="leading-[22px] text-[#8D8D8D]">
          {titleContent[mode].subTitle}
        </div>
      </div>
      <AuthenticationBox
        type="phone"
        isChecked={isChecked.phone}
        handleChecked={handleChecked}
        handleCurrentProgress={handleCurrentProgress}
      />
      <AuthenticationBox
        type="email"
        isChecked={isChecked.email}
        handleChecked={handleChecked}
        handleCurrentProgress={handleCurrentProgress}
      />
    </>
  );
};

export default FindAuthForm;
