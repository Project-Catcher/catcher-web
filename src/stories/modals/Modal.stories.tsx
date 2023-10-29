import type { Meta, StoryObj } from "@storybook/react";
import { MutableSnapshot, RecoilRoot, useRecoilState } from "recoil";
import useModal from "@shared/hook/useModal";
import Modal from "@shared/modal/Modal";
import { ModalProps, modalState } from "@shared/recoil/modal";

// storybook 내 recoil init 값 제어
const initializeState = ({ set }: MutableSnapshot) => {
  set(modalState, {
    isOpen: true,
    title: "Title!",
    okText: "확인",
    isHeaderCloseBtn: true,
    okCallback: () => {},
    contentId: "thumbnailSelector",
  });
};

const TestButton = (props: ModalProps) => {
  const { openModal } = useModal();
  const handleOpen = () => {
    openModal({
      isOpen: true,
      title: props.title ?? "New Title!",
      okText: props.okText ?? "확인",
      isHeaderCloseBtn: props.isHeaderCloseBtn ?? false,
      okCallback: props.okCallback ?? (() => {}),
      contentId: props.contentId,
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
        <RecoilRoot>
          <Story />
        </RecoilRoot>
      );
    },
  ],
} satisfies Meta<typeof Modal>;

export default meta;
const Template = (props: ModalProps) => (
  <>
    <Modal />
    <TestButton {...props} />
  </>
);
type Story = StoryObj<typeof Template>;

export const Default = Template.bind({
  title: "Title!",
  text: "text!",
  okText: "확인",
  isHeaderCloseBtn: true,
  okCallback: () => {},
}) as Story;

export const ThumbnailSelector = Template.bind({
  args: {
    isOpen: true,
    title: "Title!",
    okText: "확인",
    isHeaderCloseBtn: true,
    okCallback: () => {},
    contentId: "thumbnailSelector",
  },
}) as Story;
