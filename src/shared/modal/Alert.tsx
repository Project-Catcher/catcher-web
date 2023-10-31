import { useRecoilCallback, useRecoilValue } from "recoil";
import { convertTextLineBreak } from "@shared/utils/format";
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
            {title && <h1 className="mb-2 text-lg font-bold">{title}</h1>}
            {text && (
              <p className="mb-4 text-gray-700">
                {<>{convertTextLineBreak(text)}</>}
              </p>
            )}
            <button
              onClick={handleOk}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
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
