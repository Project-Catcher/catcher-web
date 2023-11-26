import { getDay, handleDateFormat } from "@create-schedule/util";

interface CurrentDateProps {
  currentDate: Date | null;
}

const CurrentDate = ({ currentDate }: CurrentDateProps) => {
  return (
    <div className="w-full h-[32px] bg-[#ACBEFF] rounded-[5px] text-center leading-[32px] mb-[10px]">
      <p className="inline-block text-[18px] text-white font-semibold mr-[6px]">
        {currentDate && handleDateFormat(currentDate)}
      </p>
      <p className="inline-block text-[18px] text-[#333C57] font-semibold">
        {currentDate && getDay(currentDate)}
      </p>
    </div>
  );
};

export default CurrentDate;
