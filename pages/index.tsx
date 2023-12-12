import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div
        className="w-screen h-screen bg-gradient-to-b  from-[#F85E9F] via-[#FFDED3] via-85% to-[#FFFFFF]
"
>
        {/* <div className="top-[50%} absolute left-20 text-xl">
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
        </div> */}
        <div className="section_1">
          <div className="flex flex-col items-center justify-center text-white pt-52">
            <h1 className="p-10 font-sans font-thin title">
              일상의 행복을 <span className="font-bold">확대</span>하다
            </h1>
            <span className="text-4xl sub_txt">
              <h3>왜, 나는 일정 만들기가 어려울까?</h3>
              <h3>일정을 바로 고르고 편집하는 캐쳐!</h3>
            </span>
          </div>
          <div className="parents_ad">
            <div className="ad_img"></div>
            <div className="ad_img_2"></div>
            <div className="ad_play">
              <svg xmlns="http://www.w3.org/2000/svg" width="68" height="69" viewBox="0 0 68 69" fill="none">
                <ellipse cx="34" cy="34.5" rx="34" ry="34.5" fill="white"/>
                <path d="M27 43V26L43 34.1852L27 43Z" fill="#A564F8"/>
              </svg>
            </div>
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
          <div className="btns">
            <span className="btn_view">둘러보기
              <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                <path d="M14.2296 6.9938L13.0216 5.86605L8.23211 10.3291V0.595215H6.51853V10.3291L1.73764 5.85805L0.520996 6.9938L7.37532 13.3924L14.2296 6.9938Z" fill="white"/>
              </svg>
            </span>
            <span className="btn_make">일정 만들기</span>
          </div>
        </div>
        <div className="section_2">
          <div className="bg_deco">
            <div className="orange_r"></div>
            <div className="yellow_r"></div>
          </div>
          <div className="txt">
            <h1 className="big_txt">
              일정을 <span className="font-bold pink_txt">공유</span>하고 싶지 않으신가요?
            </h1>
            <span className="sub_txt">
              남들은 일상을 어떻게 알차게 보내는지, 궁금하지 않으셨나요?<br></br>
              2만개의 템플릿과 3만개의 리뷰, 캐쳐에서 함께 만들어가세요.
            </span>
          </div>
          <div className="sec2_con_wrap">
            <div className="tap_menu">
              <span className="tab_li">캠핑</span>
              <span className="tab_li">연극</span>
              <span className="tab_li">축제</span>
              <span className="tab_li">등산</span>
            </div>
            <div className="con_area">
              <div className="con_li">
              <Image
                className="cursor-pointer"
                src="/assets/signup/naver .png"
                alt="kakao"
                width={20}
                height={20}
              />
              </div>
              <div className="con_li"></div>
              <div className="con_li"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
