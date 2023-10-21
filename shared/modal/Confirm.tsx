import { useRecoilCallback, useRecoilValue } from "recoil";
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
            {title && <h1 className="text-lg font-bold mb-2">{title}</h1>}
            {text && <p className="text-gray-700 mb-4">{text}</p>}
            <div className="flex">
              <button
                onClick={handleOk}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                {okText ?? "확인"}
              </button>
              <button
                onClick={handleNo}
                className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
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
