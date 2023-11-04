import { IdInput } from "@shared/components";

interface IdCheckProps {
  handleId: (id: string) => void;
}

const IdCheck = ({ handleId }: IdCheckProps) => {
  return (
    <div className="mt-[28px] mb-[24px]">
      <IdInput handleId={handleId} />
    </div>
  );
};

export default IdCheck;
