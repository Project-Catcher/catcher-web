import BriefInfo from "./BriefInfo";
import MypageMainMenu from "./MypageMainMenu";
import MypageSubMenu from "./MypageSubMenu";

const MenuBar = () => {
  return (
    <div className="relative w-[396px] h-full border-l border-[#DCDCDC] px-[42px] py-[102px] ml-[360.5px] shadow-[5px_0_10px_0_rgba(0,0,0,0.1)] z-10">
      <section className="pb-[13px] border-b border-[#DCDCDC]">
        <BriefInfo />
        <MypageMainMenu />
      </section>
      <section className="py-[30px] text-[#999999] font-bold border-b border-[#DCDCDC]">
        <MypageSubMenu />
      </section>
      <div className="w-[312px] h-[71px] bg-mypageMenu bg-no-repeat mt-[30px]"></div>
    </div>
  );
};

export default MenuBar;
