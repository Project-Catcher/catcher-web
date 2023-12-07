import { DetailCard } from "@pages/detail/[id]";
import Content from "./Content";
import HostInfo from "./HostInfo";

interface DetailProps {
  detailData: DetailCard;
}

const Detail = ({ detailData }: DetailProps) => {
  return (
    <div className="w-4/5 min-h-[90vh] flex gap-5">
      <Content detailData={detailData} />
      <HostInfo
        scheduleId={detailData.id}
        hostInfo={detailData.hostInfo}
        like={detailData.like}
        scrap={detailData.scrap}
      />
    </div>
  );
};

export default Detail;