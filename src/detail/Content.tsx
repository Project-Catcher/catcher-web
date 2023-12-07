import { DetailCard } from "@pages/detail/[id]";
import CommentBox from "./CommentBox";
import DetailIntroduce from "./DetailIntroduce";

interface ContentProps {
  detailData: DetailCard;
}

const Content = ({ detailData }: ContentProps) => {
  return (
    <div className="w-2/3">
      <DetailIntroduce {...detailData} />
      <div className="py-5 border-y min-h-[200px]">
        <div className="mb-3 text-lg font-bold text-zinc-800">일정설명</div>
        <div className="text-base font-normal text-stone-500">
          <pre>{detailData.content}</pre>
        </div>
      </div>
      <div className="h-[300px]">일정표</div>
      <CommentBox
        postId={detailData.id}
        hostId={detailData.userId}
        comments={detailData.comments}
      />
      <div className="h-[100px]" />
    </div>
  );
};

export default Content;
