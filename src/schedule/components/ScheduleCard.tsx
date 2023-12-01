// 일정 카드 컴포넌트
import { RecruitManageProps } from "modalContent/RecruitManage";
import Image from "next/image";
import { useState } from "react";
import { getApplicantsList } from "@pages/api/mySchedule";
import { useModal } from "@shared/hook";
import CardStatus from "./CardStatus";
import { scheduleType } from "./ScheduleContent";
import TemporaryCard from "./TemporaryCard";

export type cardType = "complete" | "temporary";

export interface Applicant {
  id: number;
  nickname: string;
  gender?: string;
  applicationDate: string;
  status: boolean;
  info: string;
}

interface ScheduleCardProps {
  cardType: cardType;
  scheduleType: scheduleType;
  id: number;
  theme: string;
  img: string;
  title: string;
  content: string;
  writer: string;
  status: boolean;
  location: string;
  durationStart: string;
  durationEnd: string;
  createdAt: string;
  participateNum?: number;
  participateCapacity?: number;
  recruitStart?: string;
  recruitEnd?: string;
  like?: number;
  comment?: number;
  marked?: number;
  approvalStatus?: number;
  onClickDelete: (i: number) => void;
}

const ScheduleCard = ({
  id,
  cardType,
  scheduleType,
  theme,
  img,
  title,
  content,
  writer,
  status,
  location,
  durationStart,
  durationEnd,
  createdAt,
  participateNum,
  participateCapacity,
  recruitStart,
  recruitEnd,
  like,
  comment,
  marked,
  approvalStatus,
  onClickDelete,
}: ScheduleCardProps) => {
  const { openModal, closeModal } = useModal();
  const [isDeleteToggle, setIsDeleteToggle] = useState(false);
  const handleDeleteToggle = () => {
    setIsDeleteToggle((prev) => !prev);
  };

  const handleModal = async (id: number) => {
    const res = await getApplicantsList(id);

    openModal<RecruitManageProps>({
      contentId: "RecruitManage",
      scheduleTitle: title,
      applicants: res.data,
      participateCapacity: participateCapacity ?? 0,
      noCallback: () => {
        closeModal();
      },
    });
  };

  return cardType === "complete" ? (
    <div
      className={`w-[260px] relative border-gray-300 border box-content transition-transform hover:-translate-y-1 m-auto ${
        isDeleteToggle ? "" : "cursor-pointer"
      }`}
    >
      <div
        className={`w-[260px] h-[225px] bg-stone-300 border-b border-zinc-400 relatvie`}
      >
        {img.length !== 0 ? (
          <Image src={img} alt="sample img" width={270} height={235} />
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            대표 이미지가 없어요
          </div>
        )}
        <div className="absolute w-[260px] top-0 flex justify-between">
          <CardStatus
            scheduleType={scheduleType}
            durationStart={durationStart}
            participateNum={participateNum}
            participateCapacity={participateCapacity}
            recruitStart={recruitStart}
            recruitEnd={recruitEnd}
            approvalStatus={approvalStatus}
          />
          <div
            className="px-2 py-1 cursor-pointer"
            onClick={handleDeleteToggle}
          >
            <Image
              src="/assets/schedule/delete_icon.svg"
              alt="delete icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col border-b-[1px] border-zinc-200 px-6 py-4 bg-white">
        <div className="text-base font-medium truncate-text">{title}</div>
        <div className="mt-1 text-sm font-medium text-pink-400">
          {durationStart}~{durationEnd}
        </div>
        <div className="flex items-start mt-1.5">
          <Image
            src="/assets/schedule/location.svg"
            alt="location"
            width={17}
            height={17}
          />
          <span className="ml-1 text-sm text-neutral-400">
            {location.length !== 0 ? location : "위치를 입력해주세요."}
          </span>
        </div>

        <div className="flex justify-between h-6">
          <span className="mt-1 text-xs text-neutral-400">
            작성일: {createdAt}
          </span>

          {scheduleType !== "all" && (
            <div className="flex mr-2 gap-x-1">
              <Image
                src="/assets/schedule/partying_face.svg"
                alt="emoji"
                width={21}
                height={21}
              />
              <div>
                <span className="text-pink-400">{participateNum}</span>
                <span className="text-gray-400">/{participateCapacity}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex mt-6">
          <Image
            src="/assets/schedule/like.png"
            alt="like"
            width={18}
            height={18}
          />
          <span className="ml-1 mr-2 text-sm text-neutral-400">{like}</span>
          <Image
            src="/assets/schedule/comment.svg"
            alt="like"
            width={16}
            height={14}
          />
          <span className="ml-1 mr-2 text-sm text-neutral-400">{comment}</span>
          <Image
            src="/assets/schedule/marked.svg"
            alt="like"
            width={10}
            height={14}
          />
          <span className="ml-1 text-sm text-neutral-400">{marked}</span>
        </div>
      </div>
      {/* TODO: 유저 정보 확인 후 내 일정인 경우 일정 수정하기 보이기 */}
      {scheduleType === "all" ? (
        <div className="py-4 text-sm font-medium text-center bg-white text-zinc-500">
          일정 수정하기
        </div>
      ) : scheduleType === "recruit" ? (
        <div className="flex">
          <div
            className="flex-1 py-4 text-sm font-medium text-center bg-white border-r text-zinc-500"
            onClick={() => handleModal(id)}
          >
            신청자 관리
          </div>
          {/* TODO: 일정 수정하기로 라우팅 */}
          <div className="flex-1 py-4 text-sm font-medium text-center bg-white text-zinc-500">
            수정
          </div>
        </div>
      ) : null}
      {isDeleteToggle && (
        <div className="w-[260px] top-0 bottom-0 bg-black bg-opacity-60 absolute">
          <div className="flex">
            <div
              className="relative left-2 mt-4 w-[67px] h-[25px] bg-white rounded-[3px] cursor-pointer"
              onClick={handleDeleteToggle}
            >
              <div className="p-1 text-[12px] font-semibold text-center text-zinc-800">
                취소
              </div>
            </div>
            <div
              className="relative -right-28 mt-4 w-[67px] h-[25px] bg-white rounded-[3px] cursor-pointer"
              onClick={() => {
                handleDeleteToggle();
                onClickDelete(id);
              }}
            >
              <div className="p-1 text-[12px] font-semibold text-center text-zinc-800">
                삭제하기
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    // 임시저장 일정
    <TemporaryCard
      id={id}
      theme={theme}
      img={img}
      title={title}
      location={location}
      content={content}
      durationStart={durationStart}
      durationEnd={durationEnd}
      isDeleteToggle={isDeleteToggle}
      handleDeleteToggle={handleDeleteToggle}
      onClickDelete={onClickDelete}
    />
  );
};

export default ScheduleCard;
