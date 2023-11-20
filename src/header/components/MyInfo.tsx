// TODO: 동적으로 데이터 받아와서 보여주기
import Image from "next/image";
import React from "react";
import MyInfoButton from "./MyInfoButton";

const MyInfo = () => {
  return (
    <>
      <div
        className="absolute top-8 w-0 h-0 border-[12px] border-solid"
        style={{
          borderColor: "transparent transparent white transparent",
        }}
      />
      <div className="absolute top-14 -right-10 w-[339px] bg-white rounded-[15px] shadow py-5 px-3 flex flex-wrap gap-2">
        <MyInfoButton title={"내 일정"} number={523} />
        <MyInfoButton title={"누적 좋아요 수"} number={523} />
        <MyInfoButton title={"예정 일정"} number={523} />
        <MyInfoButton title={"승인 대기 중"} number={523} />

        <div className="w-[309px] h-[46.17px] bg-purple-500 rounded-[10px] shadow flex-center text-white">
          새로운 일정만들기
          <Image
            src="/header/write-icon.svg"
            alt="write-icon"
            width={14}
            height={14}
          />
        </div>
        <div className="w-[309px] h-[46px] bg-white rounded-[10px] shadow border border-neutral-200 flex-center">
          마이페이지
        </div>
        <div className="w-[309px] h-[46px] bg-stone-300 rounded-[10px] shadow flex-center text-white">
          Log out
        </div>
      </div>
    </>
  );
};

export default MyInfo;
