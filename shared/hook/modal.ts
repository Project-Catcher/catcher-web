import { AlertProps, useAlertState } from "../recoil/modal";

const useModal = () => {
  const [alert, setAlert] = useAlertState();

  const Alert = (alertProps: Omit<AlertProps, "isOpen">) => {
    setAlert({
      isOpen: true,
      ...alertProps,
    });
  };

  return {
    Alert,
  };
};

export default useModal;
