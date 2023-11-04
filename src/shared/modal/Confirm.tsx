import { useRecoilCallback, useRecoilValue } from "recoil";
import { convertTextLineBreak } from "@shared/utils/format";
import { confirmState } from "../recoil/modal";
import { ModalWrapper } from "./ModalWrapper";

const Confirm = () => {
  const {
    isOpen,
    text,
    title,
    isHeaderCloseBtn,
    okCallback,
    okText,
    noCallback,
    noText,
  } = useRecoilValue(confirmState);
  const handleOk = useRecoilCallback(({ reset }) => () => {
    okCallback?.();
    reset(confirmState);
  });
  const handleNo = useRecoilCallback(({ reset }) => () => {
    noCallback?.();
    reset(confirmState);
  });

  if (isOpen) {
    return (
      <ModalWrapper isHeaderCloseBtn={isHeaderCloseBtn} type="confirm">
        <div className="relative z-50 w-fit">
          <div className="bg-white w-[300px] h-[200px] rounded-lg shadow-lg flex flex-col items-center justify-center">
            {title && <h1 className="mb-2 text-lg font-bold">{title}</h1>}
            {text && (
              <p className="mb-4 text-gray-700">{convertTextLineBreak(text)}</p>
            )}
            <div className="flex">
              <button
                onClick={handleOk}
                className="px-4 py-2 mr-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                {okText ?? "확인"}
              </button>
              <button
                onClick={handleNo}
                className="px-4 py-2 font-bold text-white rounded bg-slate-500 hover:bg-slate-700"
              >
                {noText ?? "취소"}
              </button>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default Confirm;
