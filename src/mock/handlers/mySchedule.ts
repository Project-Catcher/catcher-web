import {
  allScheduleList,
  applicants,
  defaultItems,
  defaultParticipateList,
  temporaryCardList,
} from "mock/data/schedule";
import { http } from "msw";

const baseUrl = "http://localhost:3000/api";

export const myScheduleHandlers = [
  http.get(`${baseUrl}/getAllSchedule`, ({ request }) => {
    const currentDate = new Date();
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const title = url.searchParams.get("title") ?? "";
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    let start: Date, end: Date;
    startDate
      ? (start = new Date(startDate))
      : (start = new Date("2019/01/01"));
    endDate ? (end = new Date(endDate)) : (end = new Date("2025/01/01"));

    if (tab == "proceed") {
      return new Response(
        JSON.stringify(
          allScheduleList.filter((item) => {
            return (
              new Date(item.durationStart) > currentDate &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end &&
              item.title.includes(title)
            );
          }),
        ),
      );
    }

    if (tab === "ongoing") {
      return new Response(
        JSON.stringify(
          allScheduleList.filter((item) => {
            return (
              new Date(item.durationStart) <= currentDate &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end &&
              item.title.includes(title)
            );
          }),
        ),
      );
    }

    return new Response(
      JSON.stringify(
        allScheduleList.filter((item) => {
          return (
            new Date(item.durationStart) >= start &&
            new Date(item.durationEnd) <= end &&
            item.title.includes(title)
          );
        }),
      ),
    );
  }),

  http.get(`${baseUrl}/getRecruitSchedule`, ({ request }) => {
    const currentDate = new Date();
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const title = url.searchParams.get("title") ?? "";
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    let start: Date, end: Date;
    startDate
      ? (start = new Date(startDate))
      : (start = new Date("2019-01-01"));
    endDate ? (end = new Date(endDate)) : (end = new Date("2025/01/01"));

    // 모집 중/예정
    if (tab == "proceed") {
      return new Response(
        JSON.stringify(
          allScheduleList.filter((item) => {
            return (
              (new Date(item.recruitStart) > currentDate ||
                (new Date(item.recruitStart) <= currentDate &&
                  new Date(item.recruitEnd) >= currentDate &&
                  item.participateNum < item.participateCapacity)) &&
              item.title.includes(title) &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end
            );
          }),
        ),
      );
    }

    // 모집 완료
    if (tab === "ongoing") {
      return new Response(
        JSON.stringify(
          allScheduleList.filter((item) => {
            return (
              (new Date(item.recruitEnd) < currentDate ||
                item.participateNum === item.participateCapacity) &&
              item.title.includes(title) &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end
            );
          }),
        ),
      );
    }

    return new Response(
      JSON.stringify(
        allScheduleList.filter((item) => {
          return (
            new Date(item.durationStart) >= start &&
            new Date(item.durationEnd) <= end &&
            item.title.includes(title)
          );
        }),
      ),
    );
  }),

  http.get(`${baseUrl}/getParticipateSchedule`, ({ request }) => {
    const url = new URL(request.url);
    const tab = url.searchParams.get("tab");
    const title = url.searchParams.get("title") ?? "";
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    let start: Date, end: Date;
    startDate
      ? (start = new Date(startDate))
      : (start = new Date("2019-01-01"));
    endDate ? (end = new Date(endDate)) : (end = new Date("2025/01/01"));

    // 승인 대기 중
    if (Number(tab) === 1) {
      return new Response(
        JSON.stringify(
          defaultParticipateList.filter((item) => {
            return (
              item.approvalStatus === 0 &&
              item.title.includes(title) &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end
            );
          }),
        ),
      );
    }

    // 승인 완료
    if (Number(tab) === 2) {
      return new Response(
        JSON.stringify(
          defaultParticipateList.filter((item) => {
            return (
              item.approvalStatus === 1 &&
              item.title.includes(title) &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end
            );
          }),
        ),
      );
    }

    // 승인 거절
    if (Number(tab) === 3) {
      return new Response(
        JSON.stringify(
          defaultParticipateList.filter((item) => {
            return (
              item.approvalStatus === 2 &&
              item.title.includes(title) &&
              new Date(item.durationStart) >= start &&
              new Date(item.durationEnd) <= end
            );
          }),
        ),
      );
    }

    return new Response(
      JSON.stringify(
        defaultParticipateList.filter((item) => {
          return (
            item.title.includes(title) &&
            new Date(item.durationStart) >= start &&
            new Date(item.durationEnd) <= end
          );
        }),
      ),
    );
  }),

  http.get(`${baseUrl}/getScrapSchedule`, ({ request }) => {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") ?? "";
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    let start: Date, end: Date;
    startDate
      ? (start = new Date(startDate))
      : (start = new Date("2019/01/01"));
    endDate ? (end = new Date(endDate)) : (end = new Date("2025/01/01"));

    return new Response(
      JSON.stringify(
        allScheduleList.filter((item) => {
          return (
            new Date(item.durationStart ? item.durationStart : "2019/01/01") >=
              start &&
            new Date(item.durationEnd ? item.durationEnd : "2015/01/01") <=
              end &&
            item.title.includes(title)
          );
        }),
      ),
    );
  }),

  http.get(`${baseUrl}/getTemporarySchedule`, ({ request }) => {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") ?? "";
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    let start: Date, end: Date;
    startDate
      ? (start = new Date(startDate))
      : (start = new Date("2019/01/01"));
    endDate ? (end = new Date(endDate)) : (end = new Date("2025/01/01"));

    return new Response(
      JSON.stringify(
        temporaryCardList.filter((item) => {
          return (
            new Date(item.durationStart ? item.durationStart : "2019/01/01") >=
              start &&
            new Date(item.durationEnd ? item.durationEnd : "2015/01/01") <=
              end &&
            item.title.includes(title)
          );
        }),
      ),
    );
  }),

  http.get(`${baseUrl}/getApplicantsList`, ({ request }) => {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    const matchedApplicant = applicants.find(
      (applicant) => applicant.id.toString() === id,
    );

    return new Response(
      JSON.stringify(matchedApplicant ? matchedApplicant.list : []),
    );
  }),

  http.get(`${baseUrl}/getItemList`, ({ request }) => {
    const url = new URL(request.url);
    const title = url.searchParams.get("title") ?? "";

    return new Response(
      JSON.stringify(
        defaultItems.filter((item) => {
          return item.title.includes(title);
        }),
      ),
    );
  }),
];
