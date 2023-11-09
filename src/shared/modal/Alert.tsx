import Image from "next/image";
import { useRecoilCallback, useRecoilValue } from "recoil";
import CommonButton from "@shared/components/CommonButton";
import { convertTextLineBreak } from "@shared/utils/format";
import { alertState } from "../recoil/modal";
import { ModalWrapper } from "./ModalWrapper";
import CloseButton from "/public/images/samples/closeButton.svg";
import Pin from "/public/images/samples/pin.svg";

const Alert = () => {
  const {
    isOpen,
    text,
    title,
    isHeaderCloseBtn,
    okCallback,
    okText,
    okVariant,
  } = useRecoilValue(alertState);
  const handleOk = useRecoilCallback(({ reset }) => () => {
    okCallback?.();
    reset(alertState);
  });

  if (isOpen) {
    return (
      <ModalWrapper isHeaderCloseBtn={isHeaderCloseBtn} type="alert">
        <div className="relative z-50 w-fit">
          <span className="absolute top-[-60px] left-[calc(50%-25px)]">
            <Image src={Pin} width={100} height={100} alt="pin" />
          </span>
          {isHeaderCloseBtn && (
            <span className="absolute right-4 top-4">
              <Image
                onClick={handleOk}
                className="cursor-pointer"
                src={CloseButton}
                width={24.72}
                height={24.72}
                alt="close-button"
              />
            </span>
          )}
          <div className="bg-white p-5 min-w-[423px] min-h-[229px] rounded-[20px] shadow-lg flex flex-col items-center justify-center">
            <div className="m-auto">
              {title && <h1 className="mb-2 text-lg font-bold">{title}</h1>}
              {text && (
                <p className="text-xl text-[#333333] font-bold">
                  {<>{convertTextLineBreak(text)}</>}
                </p>
              )}
            </div>

            <CommonButton variant={okVariant ?? "accept"} onClick={handleOk}>
              {okText ?? "확인"}
            </CommonButton>
          </div>
        </div>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default Alert;
