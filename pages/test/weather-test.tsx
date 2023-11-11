import WeatherBox from "create/WeatherBox";
import {
  getLoc1Arrays,
  getLoc2Arrays,
  getLocationCode,
} from "create/WeatherBox/helper";
import { ChangeEvent, useEffect, useState } from "react";
import SelectBox from "@shared/components/SelectBox";

const WeatherTest = () => {
  const [loc1Arrays] = useState(getLoc1Arrays());
  const [loc2Arrays, setLoc2Arrays] = useState<string[]>([]);

  const [selectedLoc1, setSelectedLoc1] = useState("");
  const [selectedLoc2, setSelectedLoc2] = useState("");

  const [date, setDate] = useState("");

  useEffect(() => {
    setLoc2Arrays(getLoc2Arrays(selectedLoc1));
    setSelectedLoc2("");
  }, [selectedLoc1]);

  const handleChangeSelectBoxLoc1 = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLoc1(e.target.value);
  };

  const handleChangeSelectBoxLoc2 = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLoc2(e.target.value);
  };

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <input type="date" value={date} onChange={handleChangeDate} />
      <SelectBox
        options={loc1Arrays}
        onChange={handleChangeSelectBoxLoc1}
        defaultLabel="시 선택"
      />
      <SelectBox
        options={loc2Arrays}
        onChange={handleChangeSelectBoxLoc2}
        defaultLabel="군구 선택"
      />
      <WeatherBox
        date={date}
        locationCode={getLocationCode(selectedLoc1, selectedLoc2)}
      />
    </div>
  );
};

export default WeatherTest;
