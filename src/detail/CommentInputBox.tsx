import Image from "next/image";
import React, { useState } from "react";
import CommentInput from "./CommentInput";

interface CommentInputBoxProps {
  type: "re" | "com";
  postId: number;
  commentId?: number;
}

const CommentInputBox = ({ type, postId, commentId }: CommentInputBoxProps) => {
  const [comment, setComment] = useState({
    content: "",
    isHidden: false,
  });

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment((prevComment) => ({
      ...prevComment,
      content: e.target.value,
    }));
  };

  const onChangeHidden = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ ...comment, isHidden: e.target.checked });
  };

  const onClickSubmit = () => {
    // TODO: 서버에 요청 추가
    if (type === "com") {
      // 댓글
      const data = { postId, ...comment };
      console.log("submit data", data);
    } else {
      // 대댓글
      const data = { postId, commentId, ...comment };
      console.log("submit data", data);
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
