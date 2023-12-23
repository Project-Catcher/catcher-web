import { CardType } from "@findSchedule/components/Card";
import axios from "axios";
import Page from "findSchedule/components/Page";
import { GetServerSideProps } from "next";
import React from "react";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getFindCard`,
    );

    return {
      props: {
        defaultCardList: res.data as CardType[],
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
