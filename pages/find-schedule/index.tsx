import { CardType } from "@findSchedule/components/Card";
import Page from "findSchedule/components/Page";
import { GetServerSideProps } from "next";
import React from "react";
import { findSchedule } from "@pages/api/findSchedule";

interface FindPageProps {
  defaultCardList: CardType[];
}

const index = ({ defaultCardList }: FindPageProps) => {
  return (
    <div className="flex justify-center mt-[78px]">
      <Page defaultCardList={defaultCardList} />
    </div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await findSchedule();

    return {
      props: {
        defaultCardList: res,
      },
    };
  } catch (error) {
    console.error("Error fetching data1", error);
    return {
      props: {
        defaultCardList: [],
      },
    };
  }
};
