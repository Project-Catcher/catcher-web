import type { Meta, StoryObj } from "@storybook/react";
import { MutableSnapshot, RecoilRoot, useRecoilState } from "recoil";
import Confirm from "@shared/modal/Confirm";
import { ConfirmProps, confirmState } from "@shared/recoil/modal";

// storybook 내 recoil init 값 제어
const initializeState = ({ set }: MutableSnapshot) => {
  set(confirmState, {
    isOpen: true,
    title: "Title!",
    okText: "확인",
    text: "text!",
    isHeaderCloseBtn: false,
    okCallback: () => {},
  });
};
const TestButton = (props: ConfirmProps) => {
  const [_, setConfirm] = useRecoilState(confirmState);
  const handleOpen = () => {
    setConfirm({
      isOpen: true,
      title: props.title ?? "New Title!",
      text: props.text ?? "New text!",
      okText: props.okText,
      noText: props.noText,
      isHeaderCloseBtn: props.isHeaderCloseBtn,
      okCallback: props.okCallback,
      noCallback: props.noCallback,
    });
  };
  return <button onClick={handleOpen}>Open Confirm</button>;
};

const meta = {
  title: "Modals/Confirm",
  component: Confirm,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    okText: { control: "text" },
    noText: { control: "text" },
    isHeaderCloseBtn: { control: "boolean" },
    okCallback: { control: "function" },
    noCallback: { control: "function" },
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
} satisfies Meta<typeof Confirm>;

export default meta;
const Template = (props: ConfirmProps) => (
  <>
    <Confirm />
    <TestButton {...props} />
  </>
);
type Story = StoryObj<typeof Template>;

export const Default = Template.bind({
  args: {
    title: "Title!",
    text: "text!",
    okText: "확인",
    isHeaderCloseBtn: false,
    okCallback: () => {},
  },
}) as Story;
