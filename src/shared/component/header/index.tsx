// 헤더 컴포넌트
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const router = useRouter();

  // TODO: 로그인 상태 확인하는 로직으로 변경
  const isLoggedIn = true;

  // TODO: 헤더 스크롤 시 배경 색 변경 로직 (색상 확인 후 수정)
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [headerColor, setHeaderColor] = useState("white");

  // // Scroll 위치를 감지
  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", updateScroll);
  //   return () => {
  //     window.removeEventListener("scroll", updateScroll);
  //   };
  // }, []);

  // // scroll 위치가 100이하라면 투명한 배경색을 지정하고, 아니면 흰색을 지정한다.
  // useEffect(() => {
  //   if (scrollPosition < 10) {
  //     setHeaderColor("transparent");
  //   } else {
  //     setHeaderColor("white");
  //   }
  // }, [scrollPosition]);

  return (
    // TODO: bg 색상 변경하기
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-20 py-4 `}
      // bg-${headerColor}
    >
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <Image
            src="/header/logo.svg"
            alt="Catcher Logo"
            width={140}
            height={40}
          />
        </Link>
      </div>
      <div className="gap-12 flex-center">
        {isLoggedIn ? (
          // 유저가 로그인한 경우
          <>
            {loginedtabs.map((tab, i) => (
              <Link key={`tab-${i}`} href={tab.path}>
                <div className="text-lg font-medium text-white cursor-pointer hover:underline">
                  {tab.title}
                </div>
              </Link>
            ))}
            <div className="flex items-center">
              <Image
                className="cursor-pointer"
                src="/header/notification.svg"
                alt="notification"
                width={25}
                height={28}
              />
            </div>
          </>
        ) : (
          // 유저가 로그인하지 않은 경우
          defaultTabs.map((tab, i) => (
            <Link key={`tab-${i}`} href={tab.path}>
              <div className="text-lg font-medium text-white cursor-pointer hover:underline">
                {tab.title}
              </div>
            </Link>
          ))
        )}

        <div
          className={`flex ${
            isLoggedIn ? "w-[198px]" : "w-[303px]"
          }  h-[62px] bg-white rounded-[34.50px] shadow p-1 items-center`}
        >
          {isLoggedIn ? (
            // 유저가 로그인한 경우
            <div className="flex items-center gap-3 px-4">
              <div className="w-[94px] text-center text-gray-500 text-xl font-bold font-['Roboto'] capitalize truncate ...">
                Nickname
              </div>
              <div className="flex-center">
                <Image
                  src="/header/photo_sample.svg"
                  alt="profile img"
                  width={54}
                  height={54}
                />
              </div>
            </div>
          ) : (
            // 유저가 로그인하지 않은 경우
            loginTabs.map((loginTab, i) => (
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
            ))
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

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
