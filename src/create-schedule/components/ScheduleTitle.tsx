interface ScheduleTitleProps {
  title: string;
  textSize?: string;
  subTitle?: string;
  hasSubTitle?: boolean;
}

const ScheduleTitle = ({
  title,
  textSize = "text-[18px]",
  subTitle,
  hasSubTitle,
}: ScheduleTitleProps) => {
  return (
    <>
      <div
        className={`${
          hasSubTitle ? "mb-[9px]" : "mb-[12px]"
        } ${textSize} w-full text-[#333333] font-medium -tracking-[0.5px]`}
      >
        {title}
      </div>
      {hasSubTitle && (
        <div className="text-[12px] text-[#8D8D8D] font-medium -tracking-[0.01em] mb-[12px]">
          {subTitle}
        </div>
      )}
    </>
  );
};

export default ScheduleTitle;
