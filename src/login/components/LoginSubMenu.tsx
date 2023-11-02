import { useRouter } from "next/router";
import { LoginValue } from "@shared/types";

interface LoginSubMenuProps {
  isChecked: boolean;
  handleLoginPersistence: (isChecked: boolean) => void;
}

const LoginSubMenu = ({
  isChecked,
  handleLoginPersistence,
}: LoginSubMenuProps) => {
  const { push } = useRouter();

  const handleRouting = (type: LoginValue) => {
    push(
      {
        pathname: "/findidpw",
        query: { type },
      },
      "/findidpw",
    );
  };

  return (
    <div className="flex w-full h-[22px] items-center justify-between mt-[3px] mb-[12px]">
      <div className="flex items-center">
        <label
          className={`${
            isChecked ? "bg-blue-400 " : "" // TODO: 체크에 따른 이미지 관리 추가
          }inline-block w-[18px] h-[18px] rounded-[50%] bg-stayLoggedIn bg-no-repeat cursor-pointer`}
        >
          <input
            className="hidden"
            type="checkbox"
            onClick={({ currentTarget: { checked } }) =>
              handleLoginPersistence(checked)
            }
          />
        </label>
        <div className="inline-block text-[15px] font-light ml-[6px]">
          로그인 상태 유지
        </div>
      </div>
      <div className="leading-[13px]">
        <div
          className="inline-block text-[13px] border-r border-[#BCBBBB] pr-2 cursor-pointer"
          onClick={() => handleRouting("id")}
        >
          아이디 찾기
        </div>
        <div
          className="inline-block text-[13px] pl-2 cursor-pointer"
          onClick={() => handleRouting("password")}
        >
          비밀번호 재설정
        </div>
      </div>
    </div>
  );
};

export default LoginSubMenu;
