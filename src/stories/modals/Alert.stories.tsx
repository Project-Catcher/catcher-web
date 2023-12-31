import type { Meta, StoryObj } from "@storybook/react";
import { MutableSnapshot, RecoilRoot, useRecoilState } from "recoil";
import Alert from "@shared/modal/Alert";
import { AlertProps, alertState } from "@shared/recoil/modal";

// storybook 내 recoil init 값 제어
const initializeState = ({ set }: MutableSnapshot) => {
  set(alertState, {
    isOpen: true,
    title: "Title!",
    okText: "확인",
    text: "text!",
    isHeaderCloseBtn: false,
    okCallback: () => {},
  });
};

const TestButton = (props: AlertProps) => {
  const [alert, setAlert] = useRecoilState(alertState);
  const handleOpen = () => {
    setAlert({
      isOpen: true,
      title: props.title ?? "New Title!",
      okText: props.okText ?? "확인",
      text: props.text ?? "New text!",
      isHeaderCloseBtn: props.isHeaderCloseBtn ?? false,
      okCallback: props.okCallback ?? (() => {}),
    });
  };
  return <button onClick={handleOpen}>Open Alert</button>;
};

const meta = {
  title: "Modals/Alert",
  component: Alert,
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
} satisfies Meta<typeof Alert>;

export default meta;
const Template = (props: AlertProps) => (
  <>
    <Alert />
    <TestButton {...props} />
  </>
);
type Story = StoryObj<typeof Template>;

export const Default = Template.bind({
  args: {
    title: "Title2!",
    text: "text!",
    okText: "확인",
    isHeaderCloseBtn: false,
    okCallback: () => {},
  },
}) as Story;
