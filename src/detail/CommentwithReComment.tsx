import React, { useState } from "react";
import Comment from "./Comment";
import { CommentWithReComments } from "./CommentBox";
import ReCommentInput from "./ReCommentInput";

interface CommentwithReCommentProps {
  hostId: number;
  comment: CommentWithReComments;
}

const CommentwithReComment = ({
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
        hostId={hostId}
        {...comment}
      />
      {comment.reComments.map((reComment, i) => (
        <Comment
          key={`reComment-${i}`}
          callType="reComment"
          onClickRecomment={onClickRecomment}
          hostId={hostId}
          {...reComment}
        />
      ))}
      {openRecomment && <ReCommentInput />}
    </>
  );
};

export default CommentwithReComment;
