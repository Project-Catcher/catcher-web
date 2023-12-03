import React from "react";
import { ScheduleCard } from "@shared/components";

const RemainContent = () => {
  const content = [
    {
      id: 1,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      createdAt: "23.10.23",
    },
    {
      id: 2,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      createdAt: "23.10.24",
    },
    {
      id: 3,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      createdAt: "23.10.25",
    },
  ];

  return <ScheduleCard content={content} callType="remain" />;
};

export default RemainContent;
