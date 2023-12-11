import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LOCATION_OBJECT } from "./const";
import { WeatherBoxProps, WeatherObject, WeatherResponse } from "./interfaces";
import Sunny from "/public/assets/weather/sunny.png";

const WeatherBox = (props: WeatherBoxProps) => {
  const locObj = LOCATION_OBJECT[props.locationCode];
  const [weatherObject, setWeatherObject] = useState<WeatherObject>();

  useEffect(() => {
    axios
      .get<WeatherResponse>("/api/weather", { params: props })
      .then((res) => {
        const rawDate = props.date.replace(/-/g, "");
        if (res.data[rawDate]) {
          console.log(res.data[rawDate]);
          setWeatherObject(res.data[rawDate]);
        }
        return;
      })
      .catch((err) => {});
  }, [props.locationCode]);

  const getWeatherText = () => {
    return "";
  };

  return (
    <div className="bg-gradient-to-b from-c-pink to-[#FFCED1] rounded-[10px] w-[338px] h-[110px]">
      <div className="flex items-center justify-around h-full">
        <div>
          <div className="text-base text-white font-extralight">
            {locObj?.loc1}
          </div>
          <div className="text-[28px] text-white font-medium">
            {locObj?.loc2}
          </div>
          <div className="text-sm text-white font-extralight">
            {getWeatherText()}
            {/* TODO: 하늘상태, 강수상태에 따른 텍스트 변경 기능 추가 */}
          </div>
        </div>
        <div className="flex items-center ">
          {weatherObject?.TMX && weatherObject?.TMN ? (
            <>
              <div>
                <span className="text-4xl text-white font-extralight ">
                  {weatherObject?.TMN} / {weatherObject?.TMX}
                </span>
                <span className="text-xl text-white font-extralight">°C</span>
              </div>
              <div>
                <Image src={Sunny} height={100} width={100} />
                {/* TODO: 하늘상태, 강수상태에 따른 아이콘 변경 기능 추가 */}
              </div>
            </>
          ) : (
            <div className="text-sm text-white">예상 날씨를 알 수 없어요</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
