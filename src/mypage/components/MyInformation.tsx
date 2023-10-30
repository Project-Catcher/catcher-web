import BasicInfo from "./BasicInfo";
import MyActivities from "./MyActivities";
import PersonalInfoUsage from "./PersonalInfoUsage";
import PromotionAgree from "./PromotionAgree";

const MyInformation = () => {
  return (
    <div className="w-full pt-[102px] pl-[62px] bg-[#FFF9FC]">
      <BasicInfo />
      <MyActivities />
      <PromotionAgree />
      <PersonalInfoUsage />
    </div>
  );
};

export default MyInformation;
