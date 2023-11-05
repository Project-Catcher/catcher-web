import { PasswordInput } from "@shared/components";

interface EnterNewPasswordProps {
  handleNewPassword: (password: string) => void;
  handleCheckNewPassword: (password: string) => void;
}

const EnterNewPassword = ({
  handleNewPassword,
  handleCheckNewPassword,
}: EnterNewPasswordProps) => {
  return (
    <div className="h-[210px] border border-[#F864A1] rounded-[10px] mb-[28px] px-[30px] py-[25px]">
      <div className="mb-[15px]">
        <PasswordInput
          label="새 비밀번호"
          placeholder="새 비밀번호"
          type="newPassword"
          shape="normal"
          extraDivStyle="h-[42px] pl-[12px] pr-[12px] py-[11px]"
          extraInputStyle="pl-[10px] text-[14px] leading-[20px]"
          handlePassword={handleNewPassword}
        />
      </div>
      <div>
        <PasswordInput
          label="새 비밀번호 확인"
          placeholder="새 비밀번호 확인"
          type="checkNewPassword"
          shape="normal"
          extraDivStyle="h-[42px] pl-[12px] pr-[12px] py-[11px]"
          extraInputStyle="pl-[10px] text-[14px] leading-[20px]"
          handlePassword={handleCheckNewPassword}
        />
      </div>
    </div>
  );
};

export default EnterNewPassword;
