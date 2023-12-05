import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div
        className="w-screen h-screen bg-gradient-to-b  from-[#F85E9F] via-[#FFDED3] via-85% to-[#FFFFFF]
    "
      >
        <div className="flex flex-col items-center justify-center text-white pt-52">
          <h1 className="p-10 font-sans font-thin title">
            일상의 행복을 <span className="font-bold">확대</span>하다
          </h1>
          <span className="text-4xl sub_txt">
            <h3>왜, 나는 일정 만들기가 어려울까?</h3>
            <h3>일정을 바로 고르고 편집하는 캐쳐!</h3>
          </span>
        </div>

        <div className="top-[50%} absolute left-20 text-xl">
          <ul>index</ul>
          <li>
            <Link href={"/login"}>로그인</Link>
          </li>
          <li>
            <Link href={"/signup"}>회원가입</Link>
          </li>
          <li>
            <Link href={"/schedule"}>일정 찾기</Link>
          </li>
          <li>
            <Link href={"/create-schedule"}>일정 만들기</Link>
          </li>
          <li>
            <Link href={"/faq"}>자주하는 질문</Link>
          </li>
          <li>
            <Link href={"/notice"}>공지사항</Link>
          </li>
          <li>
            <Link href={"/mypage"}>마이페이지</Link>
          </li>
        </div>

        <div className="absolute overflow-hidden bg-white rounded-full m-auto bottom-[-29vw] right-[22.5vw] mask">
          {/* h-[50vw] w-[50vw] */}
          <video
            src="media/bg_video_low.mov"
            autoPlay={true}
            loop={true}
            muted={true}
            className="object-cover w-full h-full video"
          ></video> 
        </div>
      </div>
    </>
  );
};

export default Home;
