import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { countCommentsAndReComments } from "@shared/utils";
import { CommentType } from "./Comment";
import CommentInputBox from "./CommentInputBox";
import CommentwithReComment from "./CommentwithReComment";

export interface CommentWithReComments extends CommentType {
  reComments: CommentType[];
}

interface CommentBoxProps {
  postId: number;
  hostId: number;
  defaultComments: CommentWithReComments[];
}

const CommentBox = ({ postId, hostId, defaultComments }: CommentBoxProps) => {
  const [comments, setComments] = useState(defaultComments);
  const [onCommentToggle, setOnCommentToggle] = useState(true);

  const onFetchComments = (newComments: CommentWithReComments[]) => {
    setComments(newComments);
  };

  return (
    <>
      {!onCommentToggle ? (
        <button
          className="block py-1 pl-4 pr-3 bg-white border border-zinc-500"
          onClick={() => setOnCommentToggle(true)}
        >
          <div className="flex items-center gap-2 text-base font-semibold text-neutral-400">
            <Image
              src="/assets/detail/comment.svg"
              alt="comment"
              width={18}
              height={18}
            />

            <span className="pr-3 border-r-[1.5px]">
              댓글 {countCommentsAndReComments(comments)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path d="M13 1L7 7L1 1" stroke="#888888" />
            </svg>
          </div>
        </button>
      ) : (
        <button
          className="block py-1 pl-4 pr-3 bg-white border border-emerald-500"
          onClick={() => setOnCommentToggle(false)}
        >
          <div className="flex items-center gap-2 text-base font-semibold text-emerald-500">
            <Image
              src="/assets/detail/comment_green.svg"
              alt="comment"
              width={18}
              height={18}
            />
            <span className="pr-3 border-r-[1.5px]">
              댓글 {countCommentsAndReComments(comments)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path d="M1 7L7 1L13 7" stroke="#00D179" />
            </svg>
          </div>
        </button>
      )}

      {onCommentToggle && (
        <>
          <div className="inline-block mt-5 mb-2">
            <span className="text-lg font-semibold text-black">댓글</span>
            <span className="ml-1 text-lg font-semibold text-pink-400">
              {countCommentsAndReComments(comments)}
            </span>
          </div>

          <CommentInputBox
            type="com"
            postId={postId}
            onFetchComments={onFetchComments}
          />

          <div className="flex flex-col border-t">
            {comments?.map((comment: any, i: number) => (
              <CommentwithReComment
                key={`comment-${i}`}
                postId={postId}
                hostId={hostId}
                comment={comment}
                onFetchComments={onFetchComments}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CommentBox;
