import Image from "next/image";
import React from "react";
import { calculateNightsAndDays } from "@shared/utils";

interface DateWithLocationProps {
  dateStart: string;
  dateEnd: string;
  location: string;
}

const DateWithLocation = ({
  dateStart,
  dateEnd,
  location,
}: DateWithLocationProps) => {
  return (
    <div className="w-[260px] bg-white rounded-lg border border-zinc-300 text-sm font-medium p-4">
      <div className="text-stone-500">
        {dateStart} ~ {dateEnd} {calculateNightsAndDays(dateStart, dateEnd)}
      </div>
      <div className="flex items-center mt-2 text-neutral-400">
        <Image
          src="/assets/detail/location.svg"
          alt="location"
          width={17}
          height={17}
        />
        <span className="ml-2">{location}</span>
      </div>
    </div>
  );
};

export default DateWithLocation;
