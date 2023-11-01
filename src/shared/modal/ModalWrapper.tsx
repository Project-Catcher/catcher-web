import { MouseEvent } from "react";
import { useRecoilCallback } from "recoil";
import { alertState, confirmState, modalState } from "../recoil/modal";

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
        reset(confirmState);
        return;
      case "modal":
        reset(modalState);
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

  return (
    <div className="fixed top-0 right-0 flex items-center justify-center w-full h-full">
      <div
        className="absolute top-0 right-0 z-10 w-full h-full bg-black opacity-50 "
        onClick={handleClickOutside}
      ></div>
      {children}
    </div>
  );
};
