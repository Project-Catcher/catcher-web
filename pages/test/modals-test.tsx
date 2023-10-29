import { ThumbnailSelectorProps } from "modalContent/ThumbnailSelector";
import { useEffect, useState } from "react";
import useModal from "../../src/shared/hook/useModal";

const AlertTest = () => {
  const { openAlert, openConfirm, openModal } = useModal();
  const [selectedId, setSelectedId] = useState<string>();
  const handleAlert = () => {
    openAlert({ text: "test", isHeaderCloseBtn: true });
  };
  const handleConfirm = () => {
    openConfirm({
      text: "test confirm!",
      isHeaderCloseBtn: true,
      okCallback: () => {
        console.log("ok");
      },
      noCallback: () => {
        console.log("no");
      },
    });
  };
  const handleModal = () => {
    openModal<ThumbnailSelectorProps>({
      contentId: "thumbnailSelector",
      isHeaderCloseBtn: true,
      okCallback: (id: string) => {
        console.log(id);
      },
    });
  };

  return (
    <div>
      Enter
      <button
        // 테스트용 버튼 스타일 클래스
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleAlert}
      >
        Alert!
      </button>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleConfirm}
      >
        Confirm!
      </button>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleModal}
      >
        Modal!
      </button>
    </div>
  );
};

export default AlertTest;
