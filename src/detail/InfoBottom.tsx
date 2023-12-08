import Image from "next/image";
import React, { useState } from "react";
import { useModal } from "@shared/hook";

interface InfoBottomProps {
  scheduleId: number;
  hostId: number;
  like: number;
  likeStatus: boolean;
  scrap: number;
  scrapStatus: boolean;
  isParticipate: number;
}

const InfoBottom = ({
  scheduleId,
  hostId,
  like,
  likeStatus,
  scrap,
  scrapStatus,
  isParticipate,
}: InfoBottomProps) => {
  // TODO: 임의의 사용자 정보
  const logginedInfo = { userId: 1 };

  const { openConfirm, openAlert } = useModal();
  const [likeHovered, setLikeHovered] = useState(false);
  const [scrapHovered, setScrapHovered] = useState(false);

  const handleParticipate = () => {
    openConfirm({
      text: "참여 신청을 하시겠습니까?\n 일정 호스트의 승인 후 내 일정에서 확인이 가능합니다.",
      isHeaderCloseBtn: true,
      okCallback: () => {
        // TODO: 서버에 요청
        // 일정 겹칠 시
        openAlert({
          text: "다른 일정과 겹칩니다.\n 진행을 원하신다면 내 일정에서 정리 후 다시 신청해주시기 바랍니다.",
          isHeaderCloseBtn: true,
        });
      },
      noCallback: () => {
        console.log("no");
      },
    });
  };

  const handleLike = () => {
    // TODO: 서버에 요청
  };

  const handleScrap = () => {
    // TODO: 서버에 요청
  };

  return (
    <div className="flex gap-2 mt-4">
      <button
        className={`w-[60px] h-[50px] flex flex-col items-center px-4 py-2  border rounded ${
          likeStatus
            ? likeHovered
              ? "border-pink-400 bg-white"
              : "border-pink-400 bg-red-100 bg-opacity-50"
            : likeHovered
            ? "border-pink-400"
            : "border-gray-300 bg-white"
        }`}
        onMouseEnter={() => setLikeHovered(true)}
        onMouseLeave={() => setLikeHovered(false)}
        onClick={handleLike}
      >
        {likeHovered || likeStatus ? (
          <Image
            src="/assets/detail/heart_pink.svg"
            width={22}
            height={22}
            alt="like"
          />
        ) : (
          <Image
            src="/assets/detail/heart.svg"
            width={22}
            height={22}
            alt="like"
          />
        )}
        <span
          className={`text-xs font-medium 
        ${likeHovered || likeStatus ? "text-pink-400" : "text-neutral-400"}
        `}
        >
          {like}
        </span>
      </button>
      <button
        className={`w-[60px] h-[50px] flex flex-col items-center px-4 py-2 bg-white border border-gray-300 rounded
        ${
          scrapStatus
            ? scrapHovered
              ? "border-pink-400 bg-white"
              : "border-pink-400 bg-red-100 bg-opacity-50"
            : scrapHovered
            ? "border-pink-400"
            : "border-gray-300 bg-white"
        }`}
        onMouseEnter={() => setScrapHovered(true)}
        onMouseLeave={() => setScrapHovered(false)}
        onClick={handleScrap}
      >
        {scrapHovered || scrapStatus ? (
          <Image
            src="/assets/detail/bookmark_pink.svg"
            width={22}
            height={22}
            alt="bookmark"
          />
        ) : (
          <Image
            src="/assets/detail/bookmark.svg"
            width={22}
            height={22}
            alt="bookmark"
          />
        )}
        <span
          className={`text-xs font-medium 
        ${scrapHovered || scrapStatus ? "text-pink-400" : "text-neutral-400"}
        `}
        >
          {scrap}
        </span>
      </button>

      {hostId === logginedInfo.userId ? (
        <div className="flex w-full gap-2">
          <button
            className="w-full h-full"
            onClick={() => {
              // TODO: 수정 라우팅 ?
            }}
          >
            <div className="p-auto text-white rounded-[10px] text-lg font-semibold py-2.5 text-center bg-amber-300 hover:bg-amber-400">
              수정
            </div>
          </button>
          <button
            className="w-full h-full"
            onClick={() => {
              // TODO: 삭제
            }}
          >
            <div className="p-auto text-white rounded-[10px] text-lg font-semibold py-2.5 text-center bg-red-500 hover:bg-red-600">
              삭제
            </div>
          </button>
        </div>
      ) : (
        <button className="w-full h-full" onClick={handleParticipate}>
          <div
            className={`p-auto text-white rounded-[10px] text-lg font-semibold py-2.5 text-center
          ${
            isParticipate === 0
              ? "bg-emerald-400 hover:bg-emerald-500 "
              : isParticipate === 1
              ? "bg-pink-400 hover:bg-pink-500"
              : "bg-neutral-800 hover:bg-stone-300"
          }`}
          >
            {isParticipate === 0
              ? "일정 참여하기"
              : isParticipate === 1
              ? "신청 완료"
              : "참여 취소"}
          </div>
        </button>
      )}
    </div>
  );
};

export default InfoBottom;
