import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  handleModal: () => void;
}

const Modal = ({ children, handleModal }: ModalProps) => {
  return (
    <div
      id="dimmed"
      className="w-full h-full fixed flex left-0 top-0 bg-[rgba(0,0,0,0.4)] justify-center items-center z-100"
      onClick={({ target }) => {
        const id = (target as HTMLElement).id;
        if (id === "dimmed") handleModal();
      }}
    >
      <div className="w-[500px] h-[500px] flex flex-row gap-4 bg-white rounded-md justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
