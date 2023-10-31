// 헤더 컴포넌트
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tabs from "./Tabs";

const Header = () => {
  // TODO: 로그인 상태 확인하는 로직으로 변경
  const isLoggedIn = false;

  // TODO: 헤더 스크롤 시 배경 색 변경 로직 (색상 확인 후 수정)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState("white");

  // Scroll 위치를 감지
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  // scroll 위치가 100이하라면 투명한 배경색을 지정, 아니면 흰색을 지정
  useEffect(() => {
    if (scrollPosition < 10) {
      setHeaderColor("transparent");
    } else {
      setHeaderColor("white");
    }
  }, [scrollPosition]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-20 py-2 bg-${headerColor} transition-background duration-500 ease-in-out`}
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
