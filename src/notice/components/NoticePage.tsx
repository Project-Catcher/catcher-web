import NoticeContent from "./NoticeContent";
import NoticeCurrentPage from "./NoticeCurrentPage";
import NoticeNavbar from "./NoticeNavbar";
import NoticeSearch from "./NoticeSearch";
import NoticeTags from "./NoticeTags";
import NoticeTitle from "./NoticeTitle";

const NoticePage = () => {
  return (
    <div className="w-full h-full pt-[102px] px-[376px]">
      <NoticeCurrentPage />
      <NoticeTitle />
      <NoticeSearch />
      <NoticeTags />
      <div className="px-[129px]">
        <NoticeNavbar />
        <NoticeContent />
      </div>
    </div>
  );
};

export default NoticePage;
