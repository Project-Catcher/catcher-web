import { PlanContent, PlanSideBar } from "@create-schedule/components";
import axios from "axios";
import { GetServerSideProps } from "next";
import { ScheduleCardSection } from "@shared/types";

interface CreateScheduleProps {
  remains: ScheduleCardSection[];
  templates: ScheduleCardSection[];
}

const CreateSchedule = ({ remains, templates }: CreateScheduleProps) => {
  return (
    <div className="w-full h-without-header mt-[78px]">
      <PlanSideBar />
      <PlanContent remains={remains} templates={templates} />
    </div>
  );
};

export default CreateSchedule;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [remainResponse, templateResponse] = await axios.all([
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/remains`),
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/templates`),
    ]);

    return {
      props: {
        remains: remainResponse.data as ScheduleCardSection[],
        templates: templateResponse.data as ScheduleCardSection[],
      },
    };
  } catch (error) {
    return {
      props: {
        remains: [],
        templates: [],
      },
    };
  }
};
