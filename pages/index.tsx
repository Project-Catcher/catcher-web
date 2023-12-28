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
          <div className="relative z-10 flex flex-col items-center justify-center text-white pt-40">
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
          <div className="scroll_bg_wrap">
            <div className="full_bg" width={2880} height={5494}></div>
          </div>
          <div className="menu-animation-dummy"></div>
          <div className="absolute overflow-hidden m-auto mask">
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
          <div className="txt_guide">
            <div className="view_more">View more</div>
            <div className="share">Share</div>
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
            <div className="tab_menu">
              <span className="tab_li">캠핑</span>
              <span className="tab_li">연극</span>
              <span className="tab_li">축제</span>
              <span className="tab_li">등산</span>
            </div>
          </div>
          <div className="sec2_con_area">
              <div className="con_li sec2_worldmap"></div>
              <div className="con_li sec2_img_wrap"></div>
              <div className="con_li sec2_deco_img"></div>
            </div>
        </div>
        <div className="section_3">
          <div className="sec3_header">
            <div className="top_area">
              <div className="left_txt">
                <div className="s_txt">
                  WEEKLY TOP
                </div>
                <div className="b_txt">
                  주간베스트 Catcher!
                </div>
              </div>
              <div className="right_btn">
                <span className="tab_li left"><i></i></span>
                <span className="tab_li right"><i></i></span>
              </div>
            </div>
            <div className="bottom_area">
              <div className="tab_menu">
                <span className="tab_li like"><i></i>좋아요</span>
                <span className="tab_li comment"><i></i>댓글</span>
                <span className="tab_li bookmark"><i></i>보관</span>
              </div>
            </div>
          </div>
          <div className="sec3_slide">
            <div className="s_con_box">
              <div className="thumbnail"></div>
              <div className="txt_area_wrap">
                <div className="txt_top_area">
                  <span className="tit">양양 서피비치<br></br>서핑 체험</span>
                  <span className="period">1일이내</span>
                </div>
                <div className="txt_bottom_area">
                  <div className="region">강원도, 양양</div>
                  <div className="grade">4.8<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z" fill="#FF5722"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="s_con_box">
              <div className="thumbnail"></div>
              <div className="txt_area_wrap">
                <div className="txt_top_area">
                  <span className="tit">롯데타워<br></br>아쿠아리움</span>
                  <span className="period">1일이내</span>
                </div>
                <div className="txt_bottom_area">
                  <div className="region">잠실, 롯데타워</div>
                  <div className="grade">4.5<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z" fill="#FF5722"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="s_con_box">
              <div className="thumbnail"></div>
              <div className="txt_area_wrap">
                <div className="txt_top_area">
                  <span className="tit">까치화방에서<br></br>그림그리기 체험</span>
                  <span className="period">제한없음</span>
                </div>
                <div className="txt_bottom_area">
                  <div className="region">까치화방 전지점</div>
                  <div className="grade">5.0<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z" fill="#FF5722"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="s_con_box">
              <div className="thumbnail"></div>
              <div className="txt_area_wrap">
                <div className="txt_top_area">
                  <span className="tit">산책하기<br></br>동물가능</span>
                  <span className="period">1일이내</span>
                </div>
                <div className="txt_bottom_area">
                  <div className="region">반포 한강공원</div>
                  <div className="grade">4.8<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z" fill="#FF5722"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="s_con_box">
              <div className="thumbnail"></div>
              <div className="txt_area_wrap">
                <div className="txt_top_area">
                  <span className="tit">에스프레소 바<br></br>빵지순례</span>
                  <span className="period">1일이내</span>
                </div>
                <div className="txt_bottom_area">
                  <div className="region">서울, 성수동</div>
                  <div className="grade">4.8<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.9184 14.32C17.6594 14.571 17.5404 14.934 17.5994 15.29L18.4884 20.21C18.5634 20.627 18.3874 21.049 18.0384 21.29C17.6964 21.54 17.2414 21.57 16.8684 21.37L12.4394 19.06C12.2854 18.978 12.1144 18.934 11.9394 18.929H11.6684C11.5744 18.943 11.4824 18.973 11.3984 19.019L6.96839 21.34C6.74939 21.45 6.50139 21.489 6.25839 21.45C5.66639 21.338 5.27139 20.774 5.36839 20.179L6.25839 15.259C6.31739 14.9 6.19839 14.535 5.93939 14.28L2.32839 10.78C2.02639 10.487 1.92139 10.047 2.05939 9.65C2.19339 9.254 2.53539 8.965 2.94839 8.9L7.91839 8.179C8.29639 8.14 8.62839 7.91 8.79839 7.57L10.9884 3.08C11.0404 2.98 11.1074 2.888 11.1884 2.81L11.2784 2.74C11.3254 2.688 11.3794 2.645 11.4394 2.61L11.5484 2.57L11.7184 2.5H12.1394C12.5154 2.539 12.8464 2.764 13.0194 3.1L15.2384 7.57C15.3984 7.897 15.7094 8.124 16.0684 8.179L21.0384 8.9C21.4584 8.96 21.8094 9.25 21.9484 9.65C22.0794 10.051 21.9664 10.491 21.6584 10.78L17.9184 14.32Z" fill="#FF5722"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_4">
          <div className="left_img_area">
            <div className="sec4_bg">
              <svg width="863" height="653" viewBox="0 0 863 653" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-3.99982 0.416504H536.967C716.91 0.416504 862.783 146.289 862.783 326.233C862.783 506.176 716.91 652.049 536.967 652.049H-3.99982V0.416504Z" fill="url(#paint0_linear_20_4909)"/>
                <defs>
                <linearGradient id="paint0_linear_20_4909" x1="-3.99983" y1="314.5" x2="863" y2="314.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFA6B7"/>
                <stop offset="1" stop-color="#FDB4C2" stop-opacity="0.51"/>
                </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="person_img"></div>
            <div className="deco_dot">
              <svg xmlns="http://www.w3.org/2000/svg" width="143" height="139" viewBox="0 0 143 139" fill="none">
                <g filter="url(#filter0_f_20_4911)">
                  <ellipse cx="71.0314" cy="69.1446" rx="59.015" ry="56.8697" fill="url(#paint0_linear_20_4911)"/>
                </g>
                <defs>
                  <filter id="filter0_f_20_4911" x="0.0163574" y="0.274902" width="142.03" height="137.74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_20_4911"/>
                  </filter>
                  <linearGradient id="paint0_linear_20_4911" x1="118.243" y1="135.113" x2="1.31835" y2="111.884" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5D50C6"/>
                    <stop offset="1" stop-color="#F85E9F"/>
                  </linearGradient>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="57" viewBox="0 0 59 57" fill="none">
                <g filter="url(#filter0_f_20_4912)">
                  <ellipse cx="29.4539" cy="28.6774" rx="24.5896" ry="23.6957" fill="url(#paint0_linear_20_4912)"/>
                </g>
                <defs>
                  <filter id="filter0_f_20_4912" x="0.864319" y="0.981689" width="57.1792" height="55.3914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_20_4912"/>
                  </filter>
                  <linearGradient id="paint0_linear_20_4912" x1="49.1256" y1="56.1644" x2="0.406815" y2="46.4854" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#5D50C6"/>
                    <stop offset="1" stop-color="#F85E9F"/>
                  </linearGradient>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="59" height="57" viewBox="0 0 59 57" fill="none">
                <g filter="url(#filter0_f_40_935)">
                <ellipse cx="29.5" cy="28.5" rx="25.5" ry="24.5" fill="#FFD954"/>
                </g>
                <defs>
                <filter id="filter0_f_40_935" x="0" y="0" width="59" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_40_935"/>
                </filter>
                </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="56" viewBox="0 0 58 56" fill="none">
                  <g filter="url(#filter0_f_20_4913)">
                    <ellipse cx="29.2573" cy="28.2318" rx="24.5896" ry="23.6957" fill="#FACD49"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_20_4913" x="0.667725" y="0.536133" width="57.1792" height="55.3914" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_20_4913"/>
                    </filter>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <g filter="url(#filter0_f_20_4914)">
                    <ellipse cx="14.0983" cy="14.3084" rx="9.83583" ry="9.47829" fill="#FFA654"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_20_4914" x="0.262451" y="0.830078" width="27.6716" height="26.9565" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_20_4914"/>
                    </filter>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                  <g filter="url(#filter0_f_20_4915)">
                    <ellipse cx="23.7029" cy="23.3523" rx="19.6717" ry="18.9566" fill="#FFA654"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_20_4915" x="0.03125" y="0.395752" width="47.3434" height="45.9131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_20_4915"/>
                    </filter>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="60" viewBox="0 0 62 60" fill="none">
                  <g filter="url(#filter0_f_40_934)">
                    <ellipse cx="31" cy="30" rx="27" ry="26" fill="url(#paint0_linear_40_934)"/>
                  </g>
                  <defs>
                    <filter id="filter0_f_40_934" x="0" y="0" width="62" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_40_934"/>
                    </filter>
                    <linearGradient id="paint0_linear_40_934" x1="52.6" y1="60.16" x2="-0.891562" y2="49.5252" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#5D50C6"/>
                      <stop offset="1" stop-color="#F85E9F"/>
                    </linearGradient>
                  </defs>
                </svg>
            </div>
          </div>
          <div className="right_con_area"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
