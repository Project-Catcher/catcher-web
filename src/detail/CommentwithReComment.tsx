import React, { useState } from "react";
import Comment from "./Comment";
import { CommentWithReComments } from "./CommentBox";
import ReCommentInput from "./ReCommentInput";

interface CommentwithReCommentProps {
  postId: number;
  hostId: number;
  comment: CommentWithReComments;
}

const CommentwithReComment = ({
  postId,
  hostId,
  comment,
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
          {...reComment}
        />
      ))}
      {openRecomment && <ReCommentInput postId={postId} />}
    </>
  );
};

export default CommentwithReComment;
