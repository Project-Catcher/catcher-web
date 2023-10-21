import { MouseEvent } from "react";
import { useRecoilCallback } from "recoil";
import { alertState } from "../recoil/modal";

export interface ModalWrapperProps {
  children: React.ReactNode;
  isHeaderCloseBtn?: boolean;
  handleClose?: VoidFunction;
  type: "alert" | "confirm" | "modal";
}
export const ModalWrapper = ({
  children,
  isHeaderCloseBtn,
  handleClose,
  type,
}: ModalWrapperProps) => {
  const closeModal = useRecoilCallback(({ reset }) => () => {
    switch (type) {
      case "confirm":
        return;
      case "modal":
        return;
      case "alert":
        reset(alertState);
        return;
      default:
        return;
    }
  });

  const handleClickOutside = (e: MouseEvent) => {
    e.stopPropagation();
    if (isHeaderCloseBtn) {
      handleClose?.();
      closeModal();
    }
  };

  const handleClickInside = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute top-0 right-0 w-full h-full bg-black opacity-50 flex justify-center items-center"
      onClick={handleClickOutside}
    >
      <div onClick={handleClickInside}>{children}</div>
    </div>
  );
};
