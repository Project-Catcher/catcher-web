import { useRouter } from "next/router";
import { useModal } from "@shared/hook";

interface MainMenu {
  value: string;
  style: string;
  onClick?: () => void;
}

const MypageMainMenu = () => {
  const { push } = useRouter();
  const { openConfirm } = useModal();

  const handlePolicy = () => {
    push("/policy");
  };

  const handleLogOut = () => {
    openConfirm({
      text: "로그아웃 하시겠습니까?",
      isHeaderCloseBtn: true,
      okCallback: () => {
        // TODO: logout call
        push("/");
      },
    });
  };

  const MENU_MAIN: MainMenu[] = [
    {
      value: "내 프로필",
      style: "border-[#F864A1]",
    },
    {
      value: "약관 및 정책",
      style: "border-transparent hover:border-[#FFA4A475]",
      onClick: () => handlePolicy(),
    },
    {
      value: "로그아웃",
      style: "border-transparent hover:border-[#FFA4A475]",
      onClick: () => handleLogOut(),
    },
  ];

  return (
    <div className="text-[18px] font-bold">
      {MENU_MAIN.map(({ value, style, onClick }) => (
        <div
          key={value}
          className={`${style} w-fit leading-[26px] border-b-2 pb-[4px] mb-[17px] cursor-pointer`}
          onClick={onClick}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default MypageMainMenu;
