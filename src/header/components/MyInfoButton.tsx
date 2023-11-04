interface MyInfoButtonProps {
  title: string;
  number: number;
}

const MyInfoButton = ({ title, number }: MyInfoButtonProps) => {
  return (
    <div className="w-[150px] h-[67px] bg-white border border-neutral-200 rounded-[10px] flex-center flex-col hover:bg-pink-200">
      <div className="text-base font-medium text-zinc-800">{title}</div>
      <div className="text-sm font-medium text-stone-500">{number}개</div>
    </div>
  );
};

export default MyInfoButton;
