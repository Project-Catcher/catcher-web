import exp from "constants";
import { useState } from "react";
import { checkAuthNumValidation } from "@shared/utils";
import InputWithLabel from "./InputWithLabel";
import TimerWithButton from "./TimerWithButton";

interface AuthNumberInputProps {
  inputContainerStyle: string;
  isDonePhoneInput: boolean;
  callType: "signup" | "findidpw";
  inputStyle: string;
  labelStyle: string;
  buttonStyle: string;
}

const AuthNumberInput = ({
  inputContainerStyle,
  isDonePhoneInput,
  callType,
  inputStyle,
  labelStyle,
  buttonStyle,
}: AuthNumberInputProps) => {
  const [value, setValue] = useState("");
  const isValidate = checkAuthNumValidation(value);

  return (
    <>
      <div className={`${inputContainerStyle}`}>
        <InputWithLabel
          maxLength={6}
          pattern="\d*"
          label="휴대폰으로 전송된 인증코드를 입력해주세요."
          id="authNum"
          inputType="text"
          labelStyle={`${labelStyle}`}
          inputStyle={`w-full ${inputStyle}`}
          placeholder="인증번호 6자리 입력"
          onChange={({ target: { value } }) => setValue(value)}
        />
      </div>
      <TimerWithButton
        isDonePhoneInput={isDonePhoneInput}
        isAuthNumValidate={isValidate}
        callType={callType}
        buttonStyle={buttonStyle}
      />
    </>
  );
};

export default AuthNumberInput;
