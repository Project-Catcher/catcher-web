import type { Meta, StoryObj } from "@storybook/react";
import { MutableSnapshot, RecoilRoot, useRecoilState } from "recoil";
import Modal from "@shared/modal/Modal";
import { modalState } from "@shared/recoil/modal";

// storybook 내 recoil init 값 제어
const initializeState = ({ set }: MutableSnapshot) => {
  set(modalState, {
    isOpen: true,
    title: "Title!",
    okText: "확인",
    isHeaderCloseBtn: true,
    okCallback: () => {},
  });
};
interface TestProps {
  title?: string;
  text?: string;
  okText?: string;
  isHeaderCloseBtn?: boolean;
  okCallback?: () => void;
}
const TestButton = (props: TestProps) => {
  const [modal, setModal] = useRecoilState(modalState);
  const handleOpen = () => {
    setModal({
      isOpen: true,
      title: props.title ?? "New Title!",
      okText: props.okText ?? "확인",
      isHeaderCloseBtn: props.isHeaderCloseBtn ?? false,
      okCallback: props.okCallback ?? (() => {}),
    });
  };
  return <button onClick={handleOpen}>Open Modal</button>;
};

const meta = {
  title: "Modals/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    okText: { control: "text" },
    isHeaderCloseBtn: { control: "boolean" },
    okCallback: { control: "function" },
  },
  decorators: [
    (Story) => {
      return (
        <RecoilRoot {...{ initializeState }}>
          <Story />
        </RecoilRoot>
      );
    },
  ],
} satisfies Meta<typeof Modal>;

export default meta;
const Template = (props: TestProps) => (
  <>
    <Modal />
    <TestButton {...props} />
  </>
);
type Story = StoryObj<typeof Template>;

export const Default = Template.bind({
  args: {
    title: "Title!",
    text: "text!",
    okText: "확인",
    isHeaderCloseBtn: true,
    okCallback: () => {},
  },
}) as Story;
