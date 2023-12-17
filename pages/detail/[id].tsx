import { CommentWithReComments } from "@detail/CommentBox";
import Detail from "@detail/Detail";
import { hostInfo } from "@detail/HostInfo";
import { participateInfoType } from "@detail/ParticipationStatus";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

export interface DetailCard {
  id: number;
  hostInfo: hostInfo;
  img: string;
  theme: string;
  title: string;
  content: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  expense: number;
  tags: string[];
  like: number;
  likeStatus: boolean;
  comment: number;
  scrap: number;
  isParticipate: number; // 0: 미신청, 1: 신청완료 (대기중), 2: 참여
  scrapStatus: boolean;
  recruitStart: string;
  recruitEnd: string;
  applicantNum: number;
  participateNum: number;
  participateCapacity: number;
  participateInfos: participateInfoType[];
  createdAt: string;
  comments: CommentWithReComments[];
}

interface DetailProps {
  detailData: DetailCard;
}

const detail = ({ detailData }: DetailProps) => {
  return (
    <div className="flex justify-center mt-[78px]">
      <Detail detailData={detailData}></Detail>
    </div>
  );
};

export default detail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params || {};

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/getCardDetail`,
      { params: { id } },
    );

    const detailData = response.data;
    console.log("datas", detailData);

    return {
      props: { detailData },
    };
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      props: { data: "" },
    };
  }
};
