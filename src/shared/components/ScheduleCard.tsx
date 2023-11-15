// TODO: 일정 타입 지정
export interface Schedule {
  id: number;
  imageSrc: string;
  title: string;
  position: string;
  createdAt?: string;
  requiredTime?: string;
}

interface ScheduleCardProps {
  content: Schedule[];
  callType: "remain" | "template";
}

const ScheduleCard = ({ content, callType }: ScheduleCardProps) => {
  return (
    <>
      {content.map((_content) => (
        <div
          key={_content.id}
          className="w-[151px] h-[196px] border border-[#E0E0E0] rounded-[5px]"
        >
          <div className="w-[149px] h-[113px] bg-black rounded-t-[5px]">
            {_content.imageSrc}
          </div>
          <div className="relative h-[83px] px-[8px] py-[8px]">
            <div className="text-[12px] text-[#333333] font-semibold -tracking-[0.02em]">
              {_content.title}
            </div>
            <div className="text-[10px] text-[#959CA1] font-medium -tracking-[0.02em]">
              {_content.position}
            </div>
            <div
              className={`${
                callType === "remain" ? "text-[#757575] " : "text-[#F864A1] "
              }absolute bottom-[8px] text-[10px] font-semibold -tracking-[0.02em] float-bottom`}
            >
              {`${
                callType === "remain"
                  ? `${_content.createdAt} 작성`
                  : `${_content.requiredTime}`
              }`}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScheduleCard;
