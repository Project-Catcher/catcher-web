import { priceRanges } from "@findSchedule/const";
import Image from "next/image";
import React from "react";
import CategoryTitle from "./CategoryTitle";

interface ExpenseTabProps {
  expense: string;
  handleExpenseChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExpenseTab = ({ expense, handleExpenseChange }: ExpenseTabProps) => {
  return (
    <div className="p-5 border-t">
      <CategoryTitle title="예상 경비" />
      <div className="mt-3">
        <div className="inline-flex flex-col">
          {priceRanges.map((range, i) => (
            <label
              key={`range-${i}`}
              className="flex items-center mt-3 text-sm font-light text-zinc-800"
            >
              <input
                type="radio"
                className="w-5 h-5 radio"
                name="priceRange"
                value={range.value}
                checked={expense === range.value}
                onChange={handleExpenseChange}
              />
              <span className="ml-2">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTab;
