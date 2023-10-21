import { uniqueId } from "lodash";
import { atom, selector, useRecoilState } from "recoil";

export interface AlertProps {
  isOpen: boolean;
  isHeaderCloseBtn?: boolean;
  title?: string;
  text?: string;
  okText?: string;
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

export const useAlertState = () => useRecoilState(alertState);
