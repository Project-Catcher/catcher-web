import { modalState } from "@shared/recoil/modal";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { ModalWrapper } from "./ModalWrapper";

const Modal = () => {
  const { title, isOpen, okCallback, noCallback, isHeaderCloseBtn } =
    useRecoilValue(modalState);

  const handleOk = useRecoilCallback(({ reset }) => () => {
    okCallback?.();
    reset(modalState);
  });
  const handleNo = useRecoilCallback(({ reset }) => () => {
    noCallback?.();
    reset(modalState);
  });

  if (isOpen) {
    return (
      <ModalWrapper isHeaderCloseBtn={isHeaderCloseBtn} type="modal">
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
              <div className="flex justify-between">
                <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                {isHeaderCloseBtn && (
                  <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                    onClick={handleNo}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="mt-4">{/* Modal Content */}</div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default Modal;
