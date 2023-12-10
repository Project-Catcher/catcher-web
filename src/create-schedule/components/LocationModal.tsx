import { useState } from "react";
import { LOCATION } from "@shared/constants";
import { LocationType } from "@shared/types";

interface LocationModalProps {
  callType: "first" | "second";
  handleLocation: (value: string) => void;
  firstLocation?: string;
}

const LocationModal = ({
  callType,
  handleLocation,
  firstLocation,
}: LocationModalProps) => {
  const [clickedCity, setClickedCity] = useState("");

  const onClick = (index: number) => {
    if (callType === "first") {
      setClickedCity(Object.keys(LOCATION)[index]);
    } else if (firstLocation) {
      setClickedCity(LOCATION[firstLocation as keyof LocationType][index]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-[8px]">
        {callType === "first"
          ? Object.keys(LOCATION).map((location, index) => (
              <div key={`${location}-${index}`}>
                <div
                  className={`${
                    clickedCity === location
                      ? "text-[#F864A1] border-[#F864A1]"
                      : "text-[#333333] border-[#E0E0E0]"
                  } w-[120px] h-[40px] text-[14px]  text-center border  rounded-[9px] py-[6.5px] cursor-pointer`}
                  onClick={() => onClick(index)}
                >
                  {location}
                </div>
              </div>
            ))
          : firstLocation &&
            LOCATION[firstLocation as keyof LocationType].map(
              (location, index) => (
                <div key={`${location}-${index}`}>
                  <div
                    className={`${
                      clickedCity === location
                        ? "text-[#F864A1] border-[#F864A1]"
                        : "text-[#333333] border-[#E0E0E0]"
                    } w-[120px] h-[40px] text-[14px]  text-center border  rounded-[9px] py-[6.5px] cursor-pointer`}
                    onClick={() => onClick(index)}
                  >
                    {location}
                  </div>
                </div>
              ),
            )}
      </div>
      <div className="w-[376px] text-center mt-[24px]">
        <button
          disabled={clickedCity === ""}
          className={`${
            clickedCity
              ? "text-white bg-[#F864A1]"
              : "text-[#B1B1B1] bg-[#E9ECEF]"
          } w-[120px] h-[40px] text-center rounded-[9px] mx-auto`}
          onClick={() => handleLocation(clickedCity)}
        >
          완료
        </button>
      </div>
    </>
  );
};

export default LocationModal;
