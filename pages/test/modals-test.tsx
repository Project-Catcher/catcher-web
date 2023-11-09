import { ThumbnailSelectorProps } from "modalContent/ThumbnailSelector";
import Image from "next/image";
import { useState } from "react";
import { Button } from "signup";
import CommonButton from "@shared/components/CommonButton";
import useModal from "../../src/shared/hook/useModal";

const AlertTest = () => {
  const { openAlert, openConfirm, openModal } = useModal();
  const [selectedId, setSelectedId] = useState<string>();
  const handleAlert = () => {
    openAlert({ text: "testasdf", isHeaderCloseBtn: true });
  };
  const handleConfirm = () => {
    openConfirm({
      text: "test confirm!",
      isHeaderCloseBtn: true,
      okCallback: () => {
        console.log("ok");
      },
      noCallback: () => {
        console.log("no");
      },
    });
  };
  const handleModal = () => {
    openModal<ThumbnailSelectorProps>({
      contentId: "thumbnailSelector",
      isHeaderCloseBtn: true,
      okCallback: (id: string) => {
        setSelectedId(id);
      },
    });
  };

  return (
    <div>
      Enter
      <CommonButton variant={"accept"} onClick={handleAlert}>
        Alert!
      </CommonButton>
      <CommonButton variant={"purple"} onClick={handleConfirm}>
        Confirm!
      </CommonButton>
      <CommonButton variant={"accept"} onClick={handleModal}>
        Modal!
      </CommonButton>
      <p>and selected image : </p>
      {selectedId && (
        <Image
          src={`https://images.pexels.com/photos/${selectedId}/pexels-photo-${selectedId}.jpeg`}
          width={350}
          height={350}
          objectFit="cover"
          alt="selected image"
        />
      )}
    </div>
  );
};

export default AlertTest;
