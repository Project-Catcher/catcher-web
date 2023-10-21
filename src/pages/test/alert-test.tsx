import useModal from "../../../shared/hook/useModal";

const AlertTest = () => {
  const { openAlert } = useModal();
  const handleAlert = () => {
    openAlert({ text: "test", isHeaderCloseBtn: true });
  };
  return (
    <div>
      Enter
      <button onClick={handleAlert}>Alert!</button>
      <button>Confirm!</button>
      <button>Modal!</button>
    </div>
  );
};

export default AlertTest;
