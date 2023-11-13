import { ModalContentId } from "@shared/recoil/modal";
import CalendarSelector from "./CalendarSelector";
import ThumbnailSelector, { ThumbnailSelectorProps } from "./ThumbnailSelector";

export interface ModalContentProps {
  contentId?: ModalContentId;
}

const ModalContent = <T,>(modalProps: ModalContentProps) => {
  const { contentId } = modalProps;
  switch (contentId) {
    case "thumbnailSelector":
      return <ThumbnailSelector {...(modalProps as ThumbnailSelectorProps)} />;
    case "calendarSelector":
      return <CalendarSelector />;
    default:
      return <></>;
  }
};

export default ModalContent;
