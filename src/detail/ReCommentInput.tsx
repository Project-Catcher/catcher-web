import Image from "next/image";
import React, { useState } from "react";
import CommentInput from "./CommentInput";

const ReCommentInput = () => {
  const [comment, setComment] = useState("");

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onClickSubmit = () => {
    // TODO: 답글
  };

  return (
    <div className="relative py-6 pl-12 pr-4 border-b bg-neutral-50">
      <div className="border-b-2 border-l-2 w-[10px] h-[10px] absolute left-6 top-8" />
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
          type={"re"}
          comment={comment}
          onChangeComment={onChangeComment}
          onClickSubmit={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default ReCommentInput;
