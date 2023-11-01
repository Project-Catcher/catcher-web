import { useRecoilState, useResetRecoilState } from "recoil";
import {
  AlertProps,
  ConfirmProps,
  ModalProps,
  alertSelector,
  confirmSelector,
  modalSelector,
} from "../recoil/modal";

const useModal = () => {
  const [alert, setAlert] = useRecoilState(alertSelector);
  const resetAlertState = useResetRecoilState(alertSelector);
  const [confirm, setConfirm] = useRecoilState(confirmSelector);
  const resetConfirmState = useResetRecoilState(confirmSelector);
  const [modal, setModal] = useRecoilState(modalSelector);
  const resetModalState = useResetRecoilState(modalSelector);

  const openAlert = (alertProps: Omit<AlertProps, "isOpen">) => {
    setAlert({
      isOpen: true,
      ...alertProps,
    });
  };

  const closeAlert = () => {
    resetAlertState();
  };

  const openConfirm = (confirmProps: Omit<ConfirmProps, "isOpen">) => {
    setConfirm({
      isOpen: true,
      ...confirmProps,
    });
  };

  const closeConfirm = () => {
    resetConfirmState();
  };

  const openModal = (modalProps: Omit<ModalProps, "isOpen">) => {
    setModal({
      isOpen: true,
      ...modalProps,
    });
  };

  const closeModal = () => {
    resetModalState();
  };

  return {
    openAlert,
    closeAlert,
    alert,
    openConfirm,
    closeConfirm,
    confirm,
    openModal,
    closeModal,
    modal,
  };
};

export default useModal;
