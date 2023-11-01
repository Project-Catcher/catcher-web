import { useRouter } from "next/router";
import { useModal } from "@shared/hook";

const MypageMainMenu = () => {
  const { push } = useRouter();
  const { openConfirm } = useModal();

  const handlePolicy = () => {
    push("/policy");
  };

  const handleLogOut = () => {
    openConfirm({ text: "로그아웃 하시겠습니까?", isHeaderCloseBtn: true });
  };

  return (
    <div className="text-[18px] font-bold">
      <div className="w-fit leading-[26px] border-b-2 border-[#F864A1] pb-[4px] mb-[17px] cursor-pointer">
        내 프로필
      </div>
      <div
        className="w-fit leading-[26px] pb-[4px] mb-[17px] cursor-pointer border-b-2 border-transparent hover:border-[#FFA4A475]"
        onClick={handlePolicy}
      >
        약관 및 정책
      </div>
      <div
        className="w-fit leading-[26px] pb-[4px] mb-[17px] cursor-pointer border-b-2 border-transparent hover:border-[#FFA4A475]"
        onClick={handleLogOut}
      >
        로그아웃
      </div>
    </div>
  );
};

export default MypageMainMenu;
