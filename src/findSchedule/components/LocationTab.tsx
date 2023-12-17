import React from "react";
import CategoryTitle from "./CategoryTitle";

interface LocationTabProps {
  location: string;
  handleLocationChange: (callType: string, value: string) => void;
}

const LocationTab = ({ location, handleLocationChange }: LocationTabProps) => {
  return (
    <div className="p-5 border-t">
      <CategoryTitle title="지역" />
      {/* TODO: 디자인 받아서 추가 */}
      <div className="mt-3"></div>
    </div>
  );
};

export default LocationTab;
