import Image from "next/image";

interface NotifictaionItemProps {
  time: string;
  content: string;
  onRemove: () => void;
}

const NotificationItem = ({
  time,
  content,
  onRemove,
}: NotifictaionItemProps) => {
  return (
    <div className="flex-center">
      <div className="p-2 mr-2 font-medium text-zinc-800">{time}</div>
      <div className="p-2 flex-center">
        <div className="w-[330px] rounded bg-white p-2 pr-5 relative text-zinc-800 leading-tight">
          <span>{content}</span>
          <div
            className="absolute top-0 cursor-pointer right-1"
            onClick={onRemove}
          >
            <Image
              src="/header/icon_close.svg"
              alt="close"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
