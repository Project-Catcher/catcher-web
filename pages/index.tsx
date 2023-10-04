import React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const about = [
    { label: "이름", value: "최진욱" },
    { label: "생년월일", value: "1998.08.21" },
    { label: "주소지", value: "서울특별시 영등포구" },
    { label: "연락처", value: "010-1234-5678" },
    { label: "이메일", value: "jinwook.fe@gmail.com" },
    { label: "학력", value: "성균관대학교(소프트웨어학과 복수전공)" },
  ];

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full max-w-[80%] mx-auto my-0 py-28">
          <div className="text-center">
            <div className="break-keep">
              <div className="text-6xl font-BlackHanSans">최진욱</div>
              <br />
              <div className="text-5xl font-BlackHanSans">FE Developer</div>
              <hr className="w-12 mx-auto my-6 border-gray-400 border-t-2" />
            </div>
            <div className="text-2xl">
              <p className="mb-2">안녕하세요!</p>
              <p className="mb-2">
                늘 고민하고 성장하는 프론트엔드 개발자입니다.
              </p>
              <p>사용자의 경험을 0순위로 생각하며 개발합니다.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[80%] mx-auto my-0 px-12 py-20">
        <div className="w-fit border-gray-400 border-b-2 mx-auto mb-10">
          <div className="text-5xl font-BlackHanSans">ABOUT ME</div>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          {about.map(({ label, value }) => (
            <div key={label} className="w-1/3 mb-6">
              <div className="flex flex-col justify-start">
                <div className="text-xl font-bold mb-2">{label}</div>
                <div className="">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
