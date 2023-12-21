// 헤더 컴포넌트
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";

const Header = () => {
  // TODO: 로그인 상태 확인하는 로직으로 변경
  const isLoggedIn = true;

  // TODO: 헤더 스크롤 시 배경 색 변경 로직 (색상 확인 후 수정)
  const [headerColor, setHeaderColor] = useState("white");

  // Scroll 위치를 감지
  const updateScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition < 10) {
      // 투명한 배경색으로 처리
      setHeaderColor("transparent");
    } else {
      // 흰색 배경색으로 처리
      setHeaderColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-20 py-5 bg-${headerColor} transition-background duration-500 ease-in-out main_header`}
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
        <Tabs isLoggedIn={isLoggedIn} headerColor={headerColor} />
      </div>
    </header>
  );
};

export default Header;
