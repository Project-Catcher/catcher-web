import {
  NoticeCurrentPage,
  NoticeNavbar,
  NoticeSearch,
  NoticeTags,
  NoticeTitle,
} from "@notice/components";
import { FAQ_NAVBAR, FAQ_SUBTITLE } from "../constants";
import FAQContent from "./FAQContent";

const FAQPage = () => {
  return (
    <div className="w-full h-full pt-[102px] px-[376px]">
      <NoticeCurrentPage title="FAQ" />
      <NoticeTitle title="FAQ" subTitle={FAQ_SUBTITLE} />
      <NoticeSearch />
      <NoticeTags />
      <div className="px-[129px]">
        <NoticeNavbar items={FAQ_NAVBAR} />
        <FAQContent />
      </div>
    </div>
  );
};

export default FAQPage;
