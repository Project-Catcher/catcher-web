import { CONTACT_MESSAGE, WITHDRAWAL_MESSAGE } from "@mypage/constants";
import { useRouter } from "next/router";
import { useModal } from "@shared/hook";

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
    });
  };

  const handleRoute = (url: string) => {
    push(url);
  };

  return (
    <>
      <div className="mb-[11px] cursor-pointer" onClick={handleContact}>
        문의하기
      </div>
      <div
        className="mb-[11px] cursor-pointer"
        onClick={() => handleRoute("/notice")}
      >
        공지사항
      </div>
      <div
        className="mb-[11px] cursor-pointer"
        onClick={() => handleRoute("/notice/faq")}
      >
        FAQ
      </div>
      <div className="cursor-pointer" onClick={handleWithdrawal}>
        회원탈퇴
      </div>
    </>
  );
};

export default MypageSubMenu;
