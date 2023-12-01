import axios from "axios";

export const getAllSchedule = async (
  tab?: string,
  title?: string,
  startDate?: Date,
  endDate?: Date,
) => {
  let tabParam;

  if (tab === "진행 예정") {
    tabParam = "proceed";
  } else if (tab === "진행중/완료 일정") {
    tabParam = "ongoing";
  }

  return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getAllSchedule`, {
    params: {
      tab: tabParam,
      title,
      startDate,
      endDate,
    },
  });
};

export const getRecruitSchedule = async (
  tab?: string,
  title?: string,
  startDate?: Date,
  endDate?: Date,
) => {
  let tabParam;

  if (tab === "모집 중/예정") {
    tabParam = "proceed";
  } else if (tab === "모집 완료") {
    tabParam = "ongoing";
  }

  return await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getRecruitSchedule`,
    {
      params: {
        tab: tabParam,
        title,
        startDate,
        endDate,
      },
    },
  );
};

export const getParticipateSchedule = async (
  tab?: string,
  title?: string,
  startDate?: Date,
  endDate?: Date,
) => {
  let tabParam = 0;

  if (tab === "승인 대기 중") {
    tabParam = 1;
  } else if (tab === "승인 완료") {
    tabParam = 2;
  } else if (tab === "승인 거절") {
    tabParam = 3;
  }

  return await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getParticipateSchedule`,
    {
      params: {
        tab: tabParam,
        title,
        startDate,
        endDate,
      },
    },
  );
};

export const getTemporarySchedule = async (
  title?: string,
  startDate?: Date,
  endDate?: Date,
) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getTemporarySchedule`,
    {
      params: {
        title,
        startDate,
        endDate,
      },
    },
  );
};

export const getMainSchedule = async () => {
  try {
    const response = await axios.all([
      getAllSchedule(),
      getRecruitSchedule(),
      getParticipateSchedule(),
      getTemporarySchedule(),
    ]);

    // axios.spread를 사용하여 각 요청의 결과를 개별적으로 처리
    const [
      allSchedule,
      recruitSchedule,
      participateSchedule,
      temporarySchedule,
    ] = response;

    // 각 요청의 데이터를 반환합니다.
    return {
      allSchedule: allSchedule.data,
      recruitSchedule: recruitSchedule.data,
      participateSchedule: participateSchedule.data,
      temporarySchedule: temporarySchedule.data,
    };
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error; // 오류를 호출자에게 전달
  }
};

export const getApplicantsList = async (id: number) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/getApplicantsList`,
    {
      params: {
        id,
      },
    },
  );
};

export const getItemList = async (title?: string) => {
  return await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/getItemList`, {
    params: {
      title,
    },
  });
};
