interface BoxLabelProps {
  value: string;
}

const BoxLabel = ({ value }: BoxLabelProps) => {
  return (
    <div className="text-[18px] text-[#333333] font-semibold mb-[7px]">
      {value}
    </div>
  );
};

export default BoxLabel;
