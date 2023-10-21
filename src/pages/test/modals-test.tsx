import useModal from "../../../shared/hook/useModal";

const AlertTest = () => {
  const { openAlert } = useModal();
  const handleAlert = () => {
    openAlert({ text: "test", isHeaderCloseBtn: true });
  };
  return (
    <div>
      Enter
      <button
        // 테스트용 버튼 스타일 클래스
        className="
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={handleAlert}
      >
        Alert!
      </button>
      <button
        className="
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        disabled
      >
        Confirm!
      </button>
      <button
        className="
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
        disabled
      >
        Modal!
      </button>
    </div>
  );
};

export default AlertTest;
