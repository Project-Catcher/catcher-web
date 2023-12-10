import { LocationModal } from "@create-schedule/components";
import { useRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { scheduleAnswers } from "@shared/recoil";

interface CitySelectorProps {
  callType: "first" | "second";
}

const CitySelector = ({ callType }: CitySelectorProps) => {
  const { closeModal } = useModal();
  const [answer, setAnswer] = useRecoilState(scheduleAnswers);

  const handleLocation = (value: string) => {
    if (callType === "first") {
      setAnswer((prev) => ({ ...prev, location: value }));
      closeModal();
      return;
    }

    setAnswer((prev) => ({
      ...prev,
      location: `${prev.location.split(" ")[0]} ${value}`,
    }));
    closeModal();
    return;
  };

  return (
    <>
      {callType === "first" ? (
        <LocationModal callType={callType} handleLocation={handleLocation} />
      ) : (
        <LocationModal
          callType={callType}
          handleLocation={handleLocation}
          firstLocation={answer.location.split(" ")[0]}
        />
      )}
    </>
  );
};

export default CitySelector;
