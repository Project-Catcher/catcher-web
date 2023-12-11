import axios from "axios";
import { LOCATION_OBJECT } from "create/WeatherBox/const";
import { getCorrectBaseTime } from "create/WeatherBox/helper";
import { WeatherItem, WeatherResponse } from "create/WeatherBox/interfaces";
import { isEmpty, isUndefined } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { date, locationCode } = req.query;
  if (isEmpty(date) || isEmpty(locationCode)) return res.status(400).end();
  const { x, y } = LOCATION_OBJECT[locationCode as string];

  const params = {
    serviceKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY ?? "",
    numOfRows: "846",
    pageNo: "1",
    nx: x,
    ny: y,
    dataType: "JSON",
    ...getCorrectBaseTime(),
  };

  const result = await axios.get(
    "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst",
    { params },
  );

  const items = result.data.response.body.items.item as WeatherItem[];
  const newWeatherObject = items.reduce((acc, cur) => {
    const date = cur.fcstDate;
    if (isUndefined(acc[date])) {
      acc[date] = {
        TMP: Array(24),
        SKY: Array(24),
        PTY: Array(24),
      };
    }

    switch (cur.category) {
      case "TMP":
      case "SKY":
      case "PTY":
        const time = Number(cur.fcstTime.slice(0, 2));
        acc[date][cur.category][time] = Number(cur.fcstValue);
        break;
      case "TMN":
      case "TMX":
        acc[date][cur.category] = Number(cur.fcstValue);
        break;
    }
    return acc;
  }, {} as WeatherResponse);

  res.json(newWeatherObject);
}

/**
 *
 *  하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
 *  강수형태(PTY) 코드 : 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
 *
 *  단기예보 제공 시간대는 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300
 *  API 제공 시간(~이후) : 02:10, 05:10, 08:10, 11:10, 14:10, 17:10, 20:10, 23:10
 *
 * POP	강수확률
 * PTY	강수형태
 * PCP	1시간 강수량
 * REH	습도
 * SNO	1시간 신적설
 * SKY	하늘상태
 * TMP	1시간 기온
 * TMN	일 최저기온
 * TMX	일 최고기온
 * UUU	풍속(동서성분)
 * VVV	풍속(남북성분)
 * WAV	파고
 * VEC	풍향
 * WSD	풍속
 */
