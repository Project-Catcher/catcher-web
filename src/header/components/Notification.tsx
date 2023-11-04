// 알림(시간 + 내용)이 들어간 카드 컴포넌트
import NotificationItem from "./NotificationItem";

const Notification = () => {
  return (
    <>
      <div
        className="absolute top-4 w-0 h-0 border-[12px] border-solid"
        style={{
          borderColor: "transparent transparent white transparent",
        }}
      />
      <div className="absolute top-10 -right-10 min-w-[427px] bg-white rounded-[15px] shadow flex flex-col">
        <div className="p-3 text-lg font-medium text-black border-b-2 p">
          알림
        </div>
        <div className="flex flex-col bg-neutral-100">
          {notis.map((noti, i) => (
            <NotificationItem
              key={`noti-${i}`}
              time={noti.time}
              content={noti.content}
              // TODO: notification 삭제 로직 추가
              onRemove={() => {
                console.log(`noti-${i}`);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;

// TODO: DB에서 polling? 후 수정하기
const notis = [
  {
    time: "0분전",
    content: "@000님 외 11명이1233 회원님의 일정에 좋아요를 눌렀습니다.",
  },
  {
    time: "10분전",
    content: "@000님 외 11명이1233 회원님의 일정에 좋아요를 눌렀습니다.",
  },
  {
    time: "4시간전",
    content: "@000님 외 11명이1233 회원님의 일정에 좋아요를 눌렀습니다.",
  },
];
