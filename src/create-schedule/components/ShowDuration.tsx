import { handleDuration } from "@create-schedule/util";
import { useEffect, useState } from "react";
import { Start2EndTime } from "@shared/types";

interface ShowDurationProps {
  time: Start2EndTime;
}

const ShowDuration = ({ time }: ShowDurationProps) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    handleDuration({ time, setDuration });
  }, [time]);

  return (
    <div className="text-[8px] font-medium -tracking-[0.03em]">{`(${duration}시간)`}</div>
  );
};

export default ShowDuration;
