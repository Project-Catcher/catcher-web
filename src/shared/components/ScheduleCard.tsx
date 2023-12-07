import { Continue, TemplateButton } from "@create-schedule/components";
import { useState } from "react";
import { TemplateSchedule, TemporarySchedule } from "@shared/types";

interface ScheduleCardProps {
  content: TemporarySchedule[] | TemplateSchedule[];
  callType: "temporary" | "template";
}

const ScheduleCard = ({ content, callType }: ScheduleCardProps) => {
  const [clickedContent, setClickedContent] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedContent(index);
  };

  return (
    <>
      <div className="flex flex-nowrap gap-[8px] w-full">
        {content.map((_content, index) => (
          <div
            key={_content.id}
            className={`${
              clickedContent === index ? "border-[#22AFFF]" : "border-[#E0E0E0]"
            } w-[151px] h-[196px] border  rounded-[5px] cursor-pointer`}
            onClick={() => handleClick(index)}
          >
            <div className="w-[149px] h-[113px] bg-black rounded-t-[5px]">
              {_content.thumbnailUrl}
            </div>
            <div className="relative h-[83px] px-[8px] py-[8px]">
              <div className="text-[12px] text-[#333333] font-semibold -tracking-[0.02em]">
                {_content.title}
              </div>
              <div className="text-[10px] text-[#959CA1] font-medium -tracking-[0.02em]">
                {_content.location}
              </div>
              <div
                className={`${
                  callType === "temporary"
                    ? "text-[#757575] "
                    : "text-[#F864A1] "
                }absolute bottom-[8px] text-[10px] font-semibold -tracking-[0.02em] float-bottom`}
              >
                {`${
                  callType === "temporary"
                    ? `${(_content as TemporarySchedule).createdAt} 작성` // TODO: Date format handling
                    : `${(_content as TemplateSchedule).days}`
                }`}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {callType === "template" ? (
          <TemplateButton clickedContent={clickedContent} />
        ) : (
          <Continue />
        )}
      </div>
    </>
  );
};

export default ScheduleCard;
