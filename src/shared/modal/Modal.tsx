import ModalContent from "modalContent";
import { useRecoilValue } from "recoil";
import useModal from "@shared/hook/useModal";
import { modalState } from "@shared/recoil/modal";
import { ModalWrapper } from "./ModalWrapper";

const Modal = () => {
  const { closeModal } = useModal();
  const modalProps = useRecoilValue(modalState);
  const {
    title,
    isOpen,
    noCallback: _noCallback,
    isHeaderCloseBtn,
    okCallback: _okCallback,
  } = modalProps;

  const okCallback = (props: unknown) => {
    _okCallback?.(props);
    closeModal();
  };
  const noCallback = (props: unknown) => {
    _noCallback?.(props);
    closeModal();
  };

  if (isOpen) {
    return (
      <ModalWrapper isHeaderCloseBtn={isHeaderCloseBtn} type="modal">
        <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium text-gray-900">{title}</h2>
            {isHeaderCloseBtn && (
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                onClick={noCallback}
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
          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            <ModalContent {...modalProps} {...{ okCallback, noCallback }} />
          </div>
        </div>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default Modal;
