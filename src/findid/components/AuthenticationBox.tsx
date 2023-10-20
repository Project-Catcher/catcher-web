import FindIdForm from "./FindIdForm";
import { Checked } from "./FindMyId";

interface AuthenticationBoxProps {
  type: "phone" | "email";
  isChecked: boolean;
  handleChecked: (key: string) => void;
}

const AuthenticationBox = ({
  type,
  isChecked,
  handleChecked,
}: AuthenticationBoxProps) => {
  return (
    <div
      className={`flex flex-wrap items-center button-full button-semi-rounded text-[#2C2C2E] leading-[24px] border-2 ${
        isChecked ? "h-fit border-[#F864A1]" : "h-[64px] border-[#EBEBEB]"
      } pl-[28.35px] py-[20px] mb-[11.74px]`}
    >
      <input
        readOnly
        id={`${type === "phone" ? "phone" : "email"}`}
        className={`w-[20px] h-[20px] mr-[6px] ${
          isChecked ? "opacity-100" : "opacity-30"
        }`}
        type="radio"
        checked={isChecked}
        onClick={({ target }) => {
          if (target instanceof HTMLInputElement) handleChecked(target.id);
        }}
      />
      <label
        htmlFor={`${type === "phone" ? "phone" : "email"}`}
        className="w-4/5"
      >
        {`${
          type === "phone"
            ? "휴대전화로 인증하여 찾기"
            : "이메일로 인증하여 찾기"
        }`}
      </label>
      {isChecked && (
        <FindIdForm
          type={type}
          description={`${
            type === "phone"
              ? "회원정보에 등록한 휴대전화 번호와 입력한 휴대전화 번호가 같아야 인증번호를 받을 수 있습니다."
              : "본인확인 이메일 주소와 입력한 이메일 주소가 같아야, 인증번호를 받을 수 있습니다."
          }`}
        />
      )}
    </div>
  );
};

export default AuthenticationBox;
