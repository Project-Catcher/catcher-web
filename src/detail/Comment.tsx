import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { CommentWithReComments } from "./CommentBox";
import CommentInput from "./CommentInput";

export interface CommentType {
  id: number;
  userId: number;
  isHidden: boolean;
  nickName: string;
  img: string;
  createdAt: Date;
  content: string;
  like: number;
  likeList: [];
}

interface CommentProps extends CommentType {
  callType?: "comment" | "reComment";
  postId: number;
  hostId: number;
  commentId?: number;
  onClickRecomment: VoidFunction;
  onFetchComments: (newComments: CommentWithReComments[]) => void;
}

const Comment = ({
  callType = "comment",
  postId, // 게시글 id
  hostId, // host_id
  commentId, // 대댓글인 경우 본 댓글의 id
  id, // comment_id
  userId, // comment 작성한 user_id
  isHidden,
  nickName,
  img,
  createdAt,
  content,
  like,
  likeList,
  onClickRecomment,
  onFetchComments,
  ...props
}: CommentProps) => {
  // TODO: 임의의 사용자 정보
  const logginedInfo = { userId: 2 };

  const [onCommentToggle, setOnCommentToggle] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);
  const [comment, setComment] = useState({
    id,
    content,
    isHidden,
  });

  const handleUpdate = () => {
    setUpdateComment((prev) => !prev);
  };

  const handleDelete = () => {
    // TODO: 삭제
  };

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment((prevComment) => ({
      ...prevComment,
      content: e.target.value,
    }));
  };

  const onChangeHidden = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ ...comment, isHidden: e.target.checked });
  };

  const onClickSubmit = async () => {
    if (commentId) {
      // 대댓글 수정
      try {
        const updateData = { postId, commentId, ...comment };
        console.log("submit data", updateData);

        // TODO: 요청 경로 수정
        const response = await axios.patch("/api/comments", { text: comment });

        // 댓글 정보 다시 불러오기
        onFetchComments(response.data);
        handleUpdate();
      } catch (error) {
        console.error("Error submitting comment", error);
      }
    } else {
      try {
        const updateData = { postId, ...comment };
        console.log("submit data", updateData);

        const response = await axios.patch("/api/comments", { text: comment });

        // 댓글 정보 다시 불러오기
        onFetchComments(response.data);
        handleUpdate();
      } catch (error) {
        console.error("Error submitting comment", error);
      }
    }
  };

  const handleToogleLike = () => {
    console.log(postId, commentId, logginedInfo.userId);
  };

  const commentToggleItems =
    userId === logginedInfo.userId
      ? [
          { title: "수정하기", onClick: handleUpdate },
          { title: "삭제하기", onClick: handleDelete },
        ]
      : [{ title: "공유하기", onClick: handleDelete }];

  return (
    <div
      className={`border-b ${
        callType === "comment"
          ? "p-4"
          : "relative py-6 pl-12 pr-4 border-b bg-neutral-50"
      }`}
    >
      {callType === "reComment" && (
        <div className="border-b-2 border-l-2 w-[10px] h-[10px] absolute left-6 top-8" />
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div className="border rounded-full bg-zinc-300 border-neutral-300 w-[34px] h-[34px] flex-center">
            <Image
              src="/assets/detail/default_profile.svg"
              width={30}
              height={25}
              alt="default profile"
            />
          </div>
          <span className="text-sm font-medium text-black">{nickName}</span>
          {hostId === userId && (
            <div className="px-2 py-0.5 rounded-xl border border-pink-400 bg-neutral-50 text-pink-400 text-[10px] font-medium">
              일정주인
            </div>
          )}
        </div>
        <span
          className="relative cursor-pointer"
          onClick={() => setOnCommentToggle((prev) => !prev)}
        >
          <Image
            src="/assets/detail/comment_toggle.svg"
            width={4}
            height={16}
            alt="comment toggle"
          />
          {onCommentToggle && (
            <div className="absolute top-0 z-20 border rounded -right-20">
              {commentToggleItems.map((item, i) => (
                <div
                  key={`toggleItem-${i}`}
                  className="w-[67px] h-[24px] bg-white cursor-pointer flex justify-center hover:bg-gray-100"
                  onClick={item.onClick}
                >
                  <div
                    className={`w-[55px] p-1 text-[12px] font-semibold text-center text-zinc-800 ${
                      i !== commentToggleItems.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    } `}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </span>
      </div>

      {updateComment ? (
        <div className="flex mt-2">
          <CommentInput
            type="update"
            comment={comment}
            onChangeComment={onChangeComment}
            onChangeHidden={onChangeHidden}
            onClickSubmit={onClickSubmit}
          />
        </div>
      ) : !isHidden ? (
        <div className="mt-1">{content}</div>
      ) : logginedInfo.userId === userId || logginedInfo.userId === hostId ? (
        <div className="mt-1">{content}</div>
      ) : (
        <div className="mt-1">비밀 댓글입니다.</div>
      )}

      <div className="mt-1 text-xs font-medium text-neutral-400">
        <span className="pr-2 border-r-[1.5px]">{formatDate(createdAt)}</span>
        <span className="ml-2 cursor-pointer hover:text-gray-500">신고</span>
      </div>
      <div className="flex justify-between mt-3.5">
        <button
          className="px-2 py-1 text-xs font-medium border border-zinc-300 text-stone-500 hover:bg-neutral-200 hover:border-stone-300"
          onClick={onClickRecomment}
        >
          답글
        </button>
        {likeList?.some((item: any) => item.id === logginedInfo.userId) ? (
          <button
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-pink-400 border border-pink-400 hover:bg-neutral-200 hover:border-stone-300"
            onClick={handleToogleLike}
          >
            <Image
              src="/assets/detail/heart_pink.svg"
              alt="heart"
              width={16}
              height={16}
            />
            {like}
          </button>
        ) : (
          <button
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium border border-neutral-400 text-neutral-400 hover:bg-neutral-200 hover:border-stone-300"
            onClick={handleToogleLike}
          >
            <Image
              src="/assets/detail/heart.svg"
              alt="heart"
              width={16}
              height={16}
            />
            {like}
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;

function formatDate(date: Date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const day = ("0" + d.getDate()).slice(-2);
  const hour = ("0" + d.getHours()).slice(-2);
  const minute = ("0" + d.getMinutes()).slice(-2);

  return `${year}/${month}/${day} ${hour}:${minute}`;
}
