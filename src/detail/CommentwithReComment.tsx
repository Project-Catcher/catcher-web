import React, { useState } from "react";
import Comment from "./Comment";
import { CommentWithReComments } from "./CommentBox";
import CommentInputBox from "./CommentInputBox";

interface CommentwithReCommentProps {
  postId: number;
  hostId: number;
  comment: CommentWithReComments;
  onFetchComments: (newComments: CommentWithReComments[]) => void;
}

const CommentwithReComment = ({
  postId,
  hostId,
  comment,
  onFetchComments,
}: CommentwithReCommentProps) => {
  const [openRecomment, setOpenRecomment] = useState(false);

  const onClickRecomment = () => {
    setOpenRecomment((prev) => !prev);
  };

  return (
    <>
      <Comment
        onClickRecomment={onClickRecomment}
        postId={postId}
        hostId={hostId}
        onFetchComments={onFetchComments}
        {...comment}
      />
      {comment.reComments.map((reComment, i) => (
        <Comment
          key={`reComment-${i}`}
          callType="reComment"
          onClickRecomment={onClickRecomment}
          postId={postId}
          hostId={hostId}
          commentId={comment.id}
          onFetchComments={onFetchComments}
          {...reComment}
        />
      ))}
      {openRecomment && (
        <CommentInputBox
          type="re"
          postId={postId}
          commentId={comment.id}
          onFetchComments={onFetchComments}
        />
      )}
    </>
  );
};

export default CommentwithReComment;
