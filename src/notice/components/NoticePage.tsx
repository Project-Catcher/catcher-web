import { NOTICE_NAVBAR, NOTICE_SUBTITLE } from "../constants";
import NoticeContent from "./NoticeContent";
import NoticeCurrentPage from "./NoticeCurrentPage";
import NoticeNavbar from "./NoticeNavbar";
import NoticeSearch from "./NoticeSearch";
import NoticeTags from "./NoticeTags";
import NoticeTitle from "./NoticeTitle";

const NoticePage = () => {
  return (
    <div className="w-full h-full pt-[102px] px-[376px]">
      <NoticeCurrentPage title="공지사항" />
      <NoticeTitle title="공지사항" subTitle={NOTICE_SUBTITLE} />
      <NoticeSearch />
      <NoticeTags />
      <div className="px-[129px]">
        <NoticeNavbar items={NOTICE_NAVBAR} />
        <NoticeContent />
      </div>
    </div>
  );
};

export default NoticePage;
