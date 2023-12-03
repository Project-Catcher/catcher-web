import MenuBar from "./MenuBar";
import MyInformation from "./MyInformation";

const MypageContent = () => {
  // TODO: 로그아웃 시 접근 못함
  return (
    <div className="flex h-screen">
      <MenuBar />
      <MyInformation />
    </div>
  );
};

export default MypageContent;
