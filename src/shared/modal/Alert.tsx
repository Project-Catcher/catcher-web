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
        <div className="relative z-50 w-fit">
          <div className="bg-white w-[300px] h-[200px] rounded-lg shadow-lg flex flex-col items-center justify-center">
            {title && <h1 className="text-lg font-bold mb-2">{title}</h1>}
            {text && <p className="text-gray-700 mb-4">{text}</p>}
            <button
              onClick={handleOk}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {okText ?? "확인"}
            </button>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default Alert;
