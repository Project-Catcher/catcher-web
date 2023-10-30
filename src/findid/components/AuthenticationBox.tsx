import { AuthType } from "@shared/types";
import AuthenticationForm from "./AuthenticationForm";
import SelectAuthMethod from "./SelectAuthMethod";

interface AuthenticationBoxProps {
  type: AuthType;
  isChecked: boolean;
  handleChecked: (key: AuthType) => void;
  handleCurrentProgress: () => void;
}

const AuthenticationBox = ({
  type,
  isChecked,
  handleChecked,
  handleCurrentProgress,
}: AuthenticationBoxProps) => {
  const messages = {
    phone: {
      authMethodLabel: "휴대전화로 인증하여 찾기",
      authFormDescription:
        "회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야 인증번호를 받을 수 있습니다.",
    },
    email: {
      authMethodLabel: "이메일로 인증하여 찾기",
      authFormDescription:
        "본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다.",
    },
  };

  return (
    <div
      className={`${
        isChecked ? "h-fit border-[#F864A1]" : "h-[64px] border-[#EBEBEB]"
      } flex flex-wrap items-center w-[542px] button-semi-rounded text-[#2C2C2E] leading-[24px] border-2 px-[28.35px] py-[20px] mx-auto mb-[11.74px]`}
    >
      <SelectAuthMethod
        label={messages[type].authMethodLabel}
        type={type}
        isChecked={isChecked}
        handleChecked={handleChecked}
      />
      {isChecked && (
        <AuthenticationForm
          type={type}
          description={messages[type].authFormDescription}
          handleCurrentProgress={handleCurrentProgress}
        />
      )}
    </div>
  );
};

export default AuthenticationBox;
