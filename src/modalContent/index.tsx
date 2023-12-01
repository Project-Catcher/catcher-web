import { ModalContentId } from "@shared/recoil/modal";
import CalendarSelector from "./CalendarSelector";
import RecruitManage, { RecruitManageProps } from "./RecruitManage";
import ThumbnailSelector, { ThumbnailSelectorProps } from "./ThumbnailSelector";

export interface ModalContentProps {
  contentId?: ModalContentId;
}

const ModalContent = <T,>(modalProps: ModalContentProps) => {
  const { contentId } = modalProps;
  switch (contentId) {
    case "thumbnailSelector":
      return <ThumbnailSelector {...(modalProps as ThumbnailSelectorProps)} />;
    case "RecruitManage":
      return <RecruitManage {...(modalProps as RecruitManageProps)} />;
    case "calendarSelector_start":
      return <CalendarSelector type="startedAt" />;
    case "calendarSelector_end":
      return <CalendarSelector type="endedAt" />;
    default:
      return <></>;
  }
};

export default ModalContent;
