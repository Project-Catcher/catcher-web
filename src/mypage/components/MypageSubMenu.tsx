import { CONTACT_MESSAGE, WITHDRAWAL_MESSAGE } from "@mypage/constants";
import { useRouter } from "next/router";
import { useModal } from "@shared/hook";

interface SubMenu {
  value: string;
  isEnd?: boolean;
  onClick: () => void;
}

const MypageSubMenu = () => {
  const { push } = useRouter();
  const { openAlert, openConfirm } = useModal();

  const handleContact = () => {
    openAlert({ text: CONTACT_MESSAGE.mainHeader, isHeaderCloseBtn: true });
  };

  const handleWithdrawal = () => {
    openConfirm({
      text: WITHDRAWAL_MESSAGE,
      okText: "탈퇴하기",
      isHeaderCloseBtn: true,
    });
  };

  const MENU_SUB: SubMenu[] = [
    {
      value: "문의하기",
      onClick: () => handleContact(),
    },
    {
      value: "공지사항",
      onClick: () => push("/notice"),
    },
    {
      value: "FAQ",
      onClick: () => push("/faq"),
    },
    {
      value: "회원탈퇴",
      isEnd: true,
      onClick: () => handleWithdrawal(),
    },
  ];

  return (
    <>
      {MENU_SUB.map(({ value, isEnd, onClick }) => (
        <div
          key={value}
          className={`${isEnd ? "" : "mb-[11px] "}cursor-pointer`}
          onClick={onClick}
        >
          {value}
        </div>
      ))}
    </>
  );
};

export default MypageSubMenu;
