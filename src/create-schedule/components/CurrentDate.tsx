import { handleDateFormat } from "@create-schedule/util";

interface CurrentDateProps {
  currentDate: Date | null;
}

const CurrentDate = ({ currentDate }: CurrentDateProps) => {
  return (
    <div className="w-full h-[32px] bg-[#ACBEFF] rounded-[5px] text-center leading-[32px] mb-[10px]">
      <p className="text-[18px] text-white font-semibold">
        {currentDate && handleDateFormat(currentDate)}
      </p>
    </div>
  );
};

export default CurrentDate;
