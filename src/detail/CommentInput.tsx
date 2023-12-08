import React from "react";

interface CommentState {
  id?: number;
  content: string;
  isHidden: boolean;
}

interface CommentInputProps {
  type: "re" | "com";
  comment: CommentState;
  onChangeComment: React.ChangeEventHandler<HTMLTextAreaElement>;
  onChangeHidden: React.ChangeEventHandler<HTMLInputElement>;
  onClickSubmit: VoidFunction;
}

const CommentInput = ({
  type,
  comment,
  onChangeComment,
  onChangeHidden,
  onClickSubmit,
}: CommentInputProps) => {
  return (
    <>
      <textarea
        className="h-[100px] resize-none p-3 flex-1 mx-3 border rounded-md"
        placeholder={
          type === "com" ? "~님 댓글을 남겨보세요" : "~님 답글을 작성해주세요."
        }
        value={comment.content}
        onChange={onChangeComment}
      />
      <div className="flex flex-col items-center gap-2">
        <button
          className="w-[60px] h-[38px] rounded-[5px] border border-green-300 text-center text-sm font-medium hover:bg-emerald-500 hover:text-white text-green-300 bg-white"
          onClick={onClickSubmit}
        >
          {type === "com" ? "입력" : "수정"}
        </button>
        <label className="flex items-center gap-1">
          <input
            className="check"
            type="checkbox"
            checked={comment.isHidden}
            onChange={onChangeHidden}
          />
          <span
            className={`text-sm font-normal  ${
              comment.isHidden ? "text-pink-400" : "text-neutral-400"
            }  `}
          >
            비밀댓글
          </span>
        </label>
      </div>
    </>
  );
};

export default CommentInput;
