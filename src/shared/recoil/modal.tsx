import { uniqueId } from "lodash";
import { atom, selector, useRecoilState } from "recoil";
import { ButtonVariants } from "@shared/components/CommonButton";

export interface AlertProps {
  isOpen: boolean;
  isHeaderCloseBtn?: boolean;
  title?: string;
  text?: string;
  okText?: string;
  okVariant?: ButtonVariants;
  okCallback?: VoidFunction;
}
export const alertState = atom<AlertProps>({
  key: `alertState/${uniqueId()}`,
  default: {
    isOpen: false,
  },
});

export const alertSelector = selector<AlertProps>({
  key: `alertSelector/${uniqueId()}`,
  get: ({ get }) => get(alertState),
  set: ({ set }, value) => {
    set(alertState, value);
  },
});

export interface ConfirmProps {
  isOpen: boolean;
  isHeaderCloseBtn?: boolean;
  title?: string;
  text?: string;
  okText?: string;
  okCallback?: VoidFunction;
  okVariant?: ButtonVariants;
  noText?: string;
  noCallback?: VoidFunction;
  noVariant?: ButtonVariants;
}

export const confirmState = atom<ConfirmProps>({
  key: `confirmState/${uniqueId()}`,
  default: {
    isOpen: false,
  },
});

export const confirmSelector = selector<ConfirmProps>({
  key: `confirmSelector/${uniqueId()}`,
  get: ({ get }) => get(confirmState),
  set: ({ set }, value) => {
    set(confirmState, value);
  },
});

export interface ModalProps {
  isOpen: boolean;
  isHeaderCloseBtn?: boolean;
  title?: string;
  okText?: string;
  okCallback?: Function;
  noText?: string;
  noCallback?: Function;

  contentId?: ModalContentId;
}

export const modalState = atom<ModalProps>({
  key: `modalState/${uniqueId()}`,
  default: {
    isOpen: false,
  },
});

export const modalSelector = selector({
  key: `modalSelector/${uniqueId()}`,
  get: ({ get }) => get(modalState),
  set: ({ set }, value) => {
    set(modalState, value);
  },
});

export const useAlertState = () => useRecoilState(alertState);
export const useConfirmState = () => useRecoilState(confirmState);
export const useModalState = () => useRecoilState(modalState);

export type ModalContentId =
  | "thumbnailSelector"
  | "calendarSelector_start"
  | "calendarSelector_end"
  | "RecruitManage";
