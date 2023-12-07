import { PlanContent, PlanSideBar } from "@create-schedule/components";
import axios from "axios";
import { GetServerSideProps } from "next";
import { CREATE_SCHEDULE_PATH } from "@shared/constants";
import { TemplateSchedule, TemporarySchedule } from "@shared/types";

interface CreateScheduleProps {
  temporary: TemporarySchedule[];
  templates: TemplateSchedule[];
}

const CreateSchedule = ({ temporary, templates }: CreateScheduleProps) => {
  return (
    <div className="w-full h-without-header mt-[78px]">
      <PlanSideBar />
      <PlanContent temporary={temporary} templates={templates} />
    </div>
  );
};

export default CreateSchedule;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [temporary, templates] = await axios.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${CREATE_SCHEDULE_PATH.temporary}`,
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${CREATE_SCHEDULE_PATH.templates}`,
      ),
    ]);

    return {
      props: {
        temporary: temporary.data as TemporarySchedule[],
        templates: templates.data as TemplateSchedule[],
      },
    };
  } catch (error) {
    return {
      props: {
        temporary: [],
        templates: [],
      },
    };
  }
};
