import { ModalContentId } from "@shared/recoil/modal";

export interface ModalContentProps {
  contentId?: ModalContentId;
}

const ModalContent = ({ contentId }: ModalContentProps) => {
  switch (contentId) {
    default:
      return <></>;
  }
};

export default ModalContent;
