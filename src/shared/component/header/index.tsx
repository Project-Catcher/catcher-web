// 헤더 컴포넌트
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../../../public/header/lovo.svg";

// TODO: 로그인 회원일 시, 보이는 탭 다르게 수정하기
const Header = () => {
  const router = useRouter();

  return (
    // TODO: bg 색상 변경하기 (현재는 흰 배경에 보이지 않아서 임의로 파란색 배경)
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-20 py-4 bg-blue-500">
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <Image src={logo} alt="Catcher Logo" width={140} height={40} />
        </Link>
      </div>
      <div className="flex items-center gap-12">
        {tabs.map((tab, i) => (
          <Link key={`tab-${i}`} href={tab.path}>
            <div className="text-lg font-medium text-white cursor-pointer hover:underline">
              {/* TODO: 글자색이 페이지마다 다름 확인 후 수정하기 */}
              {tab.title}
            </div>
          </Link>
        ))}

        <div className="flex w-[303px] h-[62px] bg-white rounded-[34.50px] shadow p-1 items-center">
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
      </div>
    </header>
  );
};

export default Header;

const tabs = [
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
