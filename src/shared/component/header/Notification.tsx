// 알림 버튼 클릭시 나오는 컴포넌트
// TODO: DB에서 polling? 후 수정하기
import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <>
      <div
        className="absolute top-4 w-0 h-0 border-[12px] border-solid"
        style={{
          borderColor: "transparent transparent white transparent",
        }}
      />
      <div className="absolute top-10 -right-10 min-w-[427px] bg-white rounded-[15px] shadow flex flex-col">
        <div className="p-3 text-lg font-medium text-black border-b-2 p">
          알림
        </div>
        <div className="flex flex-col bg-neutral-100">
          <div className="flex-center">
            <div className="p-2 mr-2 font-medium text-zinc-800">0분전</div>
            <div className="p-2 flex-center">
              <div className="w-[330px] rounded bg-white p-2 pr-5 relative text-zinc-800 leading-tight">
                <span>
                  @000님 외 11명이1233 회원님의 일정에 좋아요를 눌렀습니다.
                </span>
                <div className="absolute top-0 cursor-pointer right-1">
                  <Image
                    src="/header/icon_close.svg"
                    alt="close"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
