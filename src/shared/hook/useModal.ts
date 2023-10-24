import { useRecoilState, useResetRecoilState } from "recoil";
import {
  AlertProps,
  ConfirmProps,
  alertSelector,
  confirmSelector,
} from "../recoil/modal";

const useModal = () => {
  const [alert, setAlert] = useRecoilState(alertSelector);
  const resetAlertState = useResetRecoilState(alertSelector);
  const [confirm, setConfirm] = useRecoilState(confirmSelector);
  const resetConfirmState = useResetRecoilState(confirmSelector);

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

  return {
    openAlert,
    closeAlert,
    alert,
    openConfirm,
    closeConfirm,
    confirm,
  };
};

export default useModal;
