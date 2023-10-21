import { useRecoilCallback, useRecoilValue } from "recoil";
import { alertState } from "../recoil/modal";
import { ModalWrapper } from "./ModalWrapper";

const Alert = () => {
  const { isOpen, text, title, isHeaderCloseBtn, okCallback, okText } =
    useRecoilValue(alertState);
  const handleOk = useRecoilCallback(({ reset }) => () => {
    okCallback?.();
    reset(alertState);
  });

  if (isOpen) {
    return (
      <ModalWrapper isHeaderCloseBtn={isHeaderCloseBtn} type="alert">
        <div className="bg-blue-500 opacity-50 w-[300px] h-[200px]">
          {title && <h1>{title}</h1>}
          {text && <p>{text}</p>}
          <button onClick={handleOk}>{okText ?? "확인"}</button>
        </div>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default Alert;
