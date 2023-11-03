import { useState } from "react";
import BasicInfo from "./BasicInfo";
import MyActivities from "./MyActivities";
import PersonalInfoUsage from "./PersonalInfoUsage";
import PromotionAgree from "./PromotionAgree";

const MyInformation = () => {
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = (value: boolean) => {
    setIsUpdate(value);
  };

  return (
    <div className="h-full w-full py-[102px] pl-[62px] bg-[#FFF9FC]">
      <div
        className={`${isUpdate ? "w-[98%] max-h-full overflow-FAQ" : "w-full"}`}
      >
        <BasicInfo isUpdate={isUpdate} handleUpdate={handleUpdate} />
      </div>
      {!isUpdate && (
        <>
          <MyActivities />
          <PromotionAgree />
          <PersonalInfoUsage />
        </>
      )}
    </div>
  );
};

export default MyInformation;
