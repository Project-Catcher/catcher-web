import { PersonnelRanges } from "@findSchedule/const";
import React from "react";
import CategoryTitle from "./CategoryTitle";

interface PersonnelTabProps {
  personnel: string;
  handlePersonnelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonnelTab = ({
  personnel,
  handlePersonnelChange,
}: PersonnelTabProps) => {
  return (
    <div className="p-5 border-t">
      <CategoryTitle title="인원" />
      <div className="mt-3">
        <div className="inline-flex flex-col">
          {PersonnelRanges.map((range, i) => (
            <label
              key={`range-${i}`}
              className="flex items-center mt-3 text-sm font-light text-zinc-800"
            >
              <input
                type="radio"
                className="w-5 h-5 radio"
                name="personnelRange"
                value={range.value}
                checked={personnel === range.value}
                onChange={handlePersonnelChange}
              />
              <span className="ml-2">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonnelTab;
