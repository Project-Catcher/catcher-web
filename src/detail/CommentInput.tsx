import React from "react";

interface CommentInputProps {
  type?: "re" | "com";
  comment: string;
  onChangeComment: React.ChangeEventHandler<HTMLTextAreaElement>;
  onClickSubmit: VoidFunction;
}

const CommentInput = ({
  type = "com",
  comment,
  onChangeComment,
  onClickSubmit,
}: CommentInputProps) => {
  return (
    <>
      <textarea
        className="h-[100px] resize-none p-3 flex-1 mx-3 border rounded-md"
        placeholder="~님 답글을 작성해주세요."
        value={comment}
        onChange={onChangeComment}
      />
      <div className="flex flex-col items-center gap-2">
        <button
          className="w-[60px] h-[38px] rounded-[5px] border border-green-300 text-center text-sm font-medium hover:bg-emerald-500 hover:text-white text-green-300 bg-white"
          onClick={onClickSubmit}
        >
          {type === "re" ? "입력" : "수정"}
        </button>
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <span className="text-sm font-normal text-neutral-400">비밀댓글</span>
        </div>
      </div>
    </>
  );
};

export default CommentInput;
