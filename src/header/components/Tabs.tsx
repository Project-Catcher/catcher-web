// 로그인 여부에 따라 보여지는 탭 변경
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MyInfo from "./MyInfo";
import Notification from "./Notification";

interface TabsProps {
  isLoggedIn: boolean;
  headerColor: string;
}
type ToggleType = "notification" | "myInfo";

const Tabs = ({ isLoggedIn, headerColor }: TabsProps) => {
  const router = useRouter();

  // const [onToggle, setOnToggle] = useState("");
  const [onToggle, setOnToggle] = useState<ToggleType>();

  const onClickToggle = (target: ToggleType) => {
    setOnToggle((prev) => (prev === target ? undefined : target));
  };

  return (
    <div className="gap-12 flex-center scd_nav">
      {isLoggedIn ? (
        // 유저가 로그인한 경우
        <>
          {loginedtabs.map((tab, i) => (
            <Link key={`tab-${i}`} href={tab.path}>
              {/* TODO: hover시, bg 색 변경 */}
              <div
                className={`text-lg font-medium ${
                  headerColor === "white" ? "text-gray-500" : "text-white"
                } cursor-pointer hover:underline underline-offset-4`}
              >
                {tab.title}
              </div>
            </Link>
          ))}
          <div className="relative flex items-center scd_nav">
            <Image
              className="cursor-pointer"
              src={
                headerColor === "white"
                  ? "/header/notification_black.svg"
                  : "/header/notification.svg"
              }
              alt="notification"
              width={25}
              height={28}
              onClick={() => onClickToggle("notification")}
            />
            {onToggle === "notification" && <Notification />}
          </div>
          <div
            className={`flex w-[198px] h-[62px] bg-white rounded-[34.50px] shadow p-1 items-center`}
          >
            <div
              className="flex items-center gap-3 px-4 cursor-pointer"
              onClick={() => onClickToggle("myInfo")}
            >
              <div className="w-[94px] text-center text-gray-500 text-xl font-bold font-['Roboto'] capitalize truncate ...">
                Nickname
              </div>
              <div className="relative flex-center">
                <Image
                  src="/header/photo_sample.svg"
                  alt="profile img"
                  width={54}
                  height={54}
                />
                {onToggle === "myInfo" && <MyInfo />}
              </div>
            </div>
          </div>
        </>
      ) : (
        // 유저가 로그인하지 않은 경우
        <>
          {defaultTabs.map((tab, i) => (
            <Link key={`tab-${i}`} href={tab.path}>
              <div
                className={`text-lg font-medium ${
                  headerColor === "white" ? "text-gray-500" : "text-white"
                } cursor-pointer hover:underline underline-offset-4`}
              >
                {tab.title}
              </div>
            </Link>
          ))}
          <div
            className={`flex w-[303px] h-[62px] bg-white rounded-[34.50px] shadow p-1 items-center`}
          >
            {loginTabs.map((loginTab, i) => (
              <Link key={`loginTab-${i}`} href={loginTab.path}>
                <div
                  className={`w-[145px] h-[49px] ${
                    router.asPath === loginTab.path
                      ? "bg-orange-100 hover:bg-orange-200"
                      : "bg-white hover:bg-gray-200"
                  } rounded-[34.50px] p-1 ml-2 cursor-pointer flex-center`}
                >
                  <span className="w-[70px] h-[25px] text-center text-gray-500 text-xl font-bold font-['Roboto'] capitalize">
                    {loginTab.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tabs;

const loginedtabs = [
  {
    title: "일정 찾기",
    path: "/schedule",
  },
  {
    title: "일정 만들기",
    path: "/create-schedule",
  },
  {
    title: "내 일정",
    path: "/my-schedule",
  },
];

const defaultTabs = [
  {
    title: "일정 찾기",
    path: "/schedule",
  },
  {
    title: "일정 만들기",
    path: "/create-schedule",
  },
];

const loginTabs = [
  {
    title: "Log in",
    path: "/login",
  },
  {
    title: "sign up",
    path: "/signup",
  },
];
