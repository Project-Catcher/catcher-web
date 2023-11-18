import { ModalContentId } from "@shared/recoil/modal";
import CalendarSelector from "./CalendarSelector";
import ScheduleTimeSelector from "./ScheduleTimeSelector";
import ThumbnailSelector, { ThumbnailSelectorProps } from "./ThumbnailSelector";

export interface ModalContentProps {
  contentId?: ModalContentId;
}

const ModalContent = <T,>(modalProps: ModalContentProps) => {
  const { contentId } = modalProps;
  switch (contentId) {
    case "thumbnailSelector":
      return <ThumbnailSelector {...(modalProps as ThumbnailSelectorProps)} />;
    case "calendarSelector_start":
      return <CalendarSelector type="startedAt" />;
    case "calendarSelector_end":
      return <CalendarSelector type="endedAt" />;
    case "scheduleTimeSelector":
      return <ScheduleTimeSelector />;
    default:
      return <></>;
  }
};

export default ModalContent;
