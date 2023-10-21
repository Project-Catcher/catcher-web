import { useRecoilState, useResetRecoilState } from "recoil";
import { AlertProps, alertSelector } from "../recoil/modal";

const useModal = () => {
  const [alert, setAlert] = useRecoilState(alertSelector);
  const resetAlertState = useResetRecoilState(alertSelector);

  const openAlert = (alertProps: Omit<AlertProps, "isOpen">) => {
    setAlert({
      isOpen: true,
      ...alertProps,
    });
  };

  const closeAlert = () => {
    resetAlertState();
  };

  return {
    openAlert,
    closeAlert,
    alert,
  };
};

export default useModal;
