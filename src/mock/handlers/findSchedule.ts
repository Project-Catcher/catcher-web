import fs from "fs";
import { card } from "mock/data/findCard";
import { http } from "msw";

const baseUrl = "http://localhost:3000/api";

export const scheduleHandlers = [
  http.get(`${baseUrl}/getFindCard`, ({ request }) => {
    const url = new URL(request.url);
    const theme = url.searchParams.get("theme");
    const startDate = url.searchParams.get("dateStart");
    const endDate = url.searchParams.get("dateEnd");
    const expense = url.searchParams.get("expense");
    const personnel = url.searchParams.get("personnel");
    const keywordOption = url.searchParams.get("keywordOption");
    const keyword = url.searchParams.get("keyword");

    // 필터링 로직
    const filteredCards = card.filter((item) => {
      const themeMatch = theme !== "전체" ? item.theme === theme : true;

      // let dateMatch = true;
      const dateMatch = () => {
        if (startDate && endDate) {
          const start = new Date(startDate);
          const end = new Date(endDate);
          const itemStart = new Date(item.dateStart);
          const itemEnd = new Date(item.dateEnd);
          return start <= itemStart && end >= itemEnd;
        } else if (startDate) {
          const start = new Date(startDate);
          const itemStart = new Date(item.dateStart);

          return start <= itemStart;
        } else if (endDate) {
          const end = new Date(endDate);
          const itemEnd = new Date(item.dateEnd);
          return end >= itemEnd;
        } else {
          return true;
        }
      };

      const expenseMatch = () => {
        switch (expense) {
          case "1":
            return item.expense <= 10000;
          case "2":
            return item.expense > 10000 && item.expense <= 50000;
          case "3":
            return item.expense > 50000 && item.expense <= 100000;
          case "4":
            return item.expense > 100000;
          case "5":
            return true;
          default:
            return true;
        }
      };

      const personnelMatch = () => {
        switch (personnel) {
          case "1":
            return item.participateCapacity === 1;
          case "2":
            return (
              item.participateCapacity >= 2 && item.participateCapacity <= 4
            );
          case "3":
            return (
              item.participateCapacity >= 5 && item.participateCapacity <= 10
            );
          case "4":
            return item.participateCapacity <= 30;
          case "5":
            return true;
          default:
            return true;
        }
      };

      const keywordMatch = () => {
        if (keywordOption && keyword)
          switch (keywordOption) {
            case "2":
              return item.title.includes(keyword);
            case "4":
              return item.content.includes(keyword);
            default:
              return true;
          }
        return true;
      };

      return (
        themeMatch &&
        dateMatch() &&
        expenseMatch() &&
        personnelMatch() &&
        keywordMatch()
      );
    });

    return new Response(JSON.stringify(filteredCards));
  }),
];

// 추가 예시
// export const addSchedule = [
//   http.get(`${baseUrl}/addSchedule`, ({ params, request, cookies }) => {
//     if (cookies[accessToken] !== "asdfasdfzxcvzxcv") {
//       return new Response(
//         JSON.stringify({ message: "need login", code: 1231 }),
//       ).status(401);
//     }

//     return;
//   }),
// ];
