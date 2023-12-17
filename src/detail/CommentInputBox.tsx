import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { CommentWithReComments } from "./CommentBox";
import CommentInput from "./CommentInput";

interface CommentInputBoxProps {
  type: "re" | "com";
  postId: number;
  commentId?: number;
  onFetchComments: (newComments: CommentWithReComments[]) => void;
}

const CommentInputBox = ({
  type,
  postId,
  commentId,
  onFetchComments,
}: CommentInputBoxProps) => {
  const defaultCommentState = {
    content: "",
    isHidden: false,
  };

  const [comment, setComment] = useState(defaultCommentState);

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
    // TODO: 서버에 요청 추가
    if (type === "com") {
      // 댓글
      try {
        const data = { postId, ...comment };
        console.log("submit data", data);

        const response = await axios.post("/api/comments", { text: comment });

        // 댓글 정보 다시 불러오기
        onFetchComments(response.data);

        // 입력 필드 초기화
        setComment(defaultCommentState);
      } catch (error) {
        console.error("Error submitting comment", error);
      }
    } else {
      // 대댓글
      try {
        const data = { postId, commentId, ...comment };
        console.log("submit data", data);

        // TODO: 대댓글일 시, commentId도 같이 요청
        const response = await axios.post("/api/comments", { text: comment });

        // 댓글 정보 다시 불러오기
        onFetchComments(response.data);

        // 입력 필드 초기화
        setComment(defaultCommentState);
      } catch (error) {
        console.error("Error submitting comment", error);
      }
    }
  };

  return (
    <div
      className={`relative ${
        type === "re" ? "pl-12 bg-neutral-50 border-b" : "pl-4 border-t"
      } py-6 pr-4`}
    >
      {type === "re" && (
        <div className="border-b-2 border-l-2 w-[10px] h-[10px] absolute left-6 top-8" />
      )}
      <div className="flex">
        <div className="border rounded-full bg-zinc-300 border-neutral-300 w-[34px] h-[34px] flex-center">
          <Image
            src="/assets/detail/default_profile.svg"
            width={30}
            height={25}
            alt="default profile"
          />
        </div>

        <CommentInput
          type={type}
          comment={comment}
          onChangeComment={onChangeComment}
          onChangeHidden={onChangeHidden}
          onClickSubmit={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default CommentInputBox;
