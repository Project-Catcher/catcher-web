export interface WeatherBoxProps {
  date: string;
  locationCode: string;
}
export interface WeatherItem {
  baseDate: string;
  baseTime: string;
  category: WCategory;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
export interface LocationProps {
  loc1: string;
  loc2: string;
  x: number;
  y: number;
}
export type WCategory =
  | "POP"
  | "PTY"
  | "PCP"
  | "REH"
  | "SNO"
  | "SKY"
  | "TMP"
  | "TMN"
  | "TMX"
  | "UUU"
  | "VVV"
  | "WAV"
  | "VEC"
  | "WSD";

export interface WeatherObject {
  TMP: number[];
  SKY: number[];
  PTY: number[];
  TMN?: number;
  TMX?: number;
}
export interface WeatherResponse {
  [key: string]: WeatherObject;
}
