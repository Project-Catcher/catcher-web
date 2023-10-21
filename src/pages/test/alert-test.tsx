import useModal from "../../../shared/hook/modal";

const AlertTest = () => {
  const { Alert } = useModal();
  const handleAlert = () => {
    Alert({ body: "test" });
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
