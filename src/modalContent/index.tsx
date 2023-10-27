import { ModalContentId } from "@shared/recoil/modal";
import ThumbnailSelector from "./ThumbnailSelector";

export interface ModalContentProps {
  contentId?: ModalContentId;
}

const ModalContent = ({ contentId }: ModalContentProps) => {
  switch (contentId) {
    case "thumbnailSelector":
      return <ThumbnailSelector />;
    default:
      return <></>;
  }
};

export default ModalContent;
