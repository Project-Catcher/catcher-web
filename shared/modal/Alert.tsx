import { useRecoilState, useRecoilValue } from "recoil";
import { alertState } from "../recoil/modal";

const Alert = () => {
  const { isOpen, body, header, isHeaderCloseBtn } = useRecoilValue(alertState);
  if (isOpen) {
    return (
      <div className="bg-blue-500 opacity-50 w-[300px] h-[200px]">{body}</div>
    );
  }
  return <></>;
};

export default Alert;
