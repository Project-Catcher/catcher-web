import { ModalContentId } from "@shared/recoil/modal";
import CalendarSelector from "./CalendarSelector";
import CustomScheduleSelector from "./CustomScheduleSelector";
import RecruitManage, { RecruitManageProps } from "./RecruitManage";
import ScheduleTimeSelector from "./ScheduleTimeSelector";
import TemplatePreview from "./TemplatePreview";
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
    case "scheduleTimeSelector":
      return <ScheduleTimeSelector />;
    case "customScheduleSelector":
      return <CustomScheduleSelector />;
    case "templatePreview":
      return <TemplatePreview />;
    default:
      return <></>;
  }
};

export default ModalContent;
